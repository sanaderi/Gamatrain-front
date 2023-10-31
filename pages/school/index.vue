<template>
  <div id="school-list">
    <div id="map-wrap">
      <client-only>
        <l-map ref="schoolMap" :zoom="map.zoom" :center="map.center" @moveend="onMoveEnd">
          <l-tile-layer :url="map.url"></l-tile-layer>
          <l-marker
            v-for="marker in map.markers"
            @click="$router.push(`/school/1`)"
            :lat-lng="marker.latLng"
            :icon="map.schoolIcon"
          ></l-marker>
        </l-map>
      </client-only>
    </div>

    <v-container>
      <v-btn
        id="list-view-btn"
        x-large
        rounded
        color="scoundary"
        @click="isExpanded = true"
      >
        <v-icon>mdi-menu</v-icon>
        List view
      </v-btn>
    </v-container>

    <div id="data-list-holder" :class="{ expanded: isExpanded }">
      <div id="data-list" >
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-btn
              v-if="isExpanded"
              id="list-view-btn"
              x-large
              rounded
              color="scoundary"
              @click="isExpanded = false"
            >
              <v-icon>mdi-menu</v-icon>
              Map view
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-for="item in schoolList" :key="item.id">
          <v-col cols="9">
            <h2 class="gama-text-h4">
              {{ item.name }}
            </h2>

            <!-- <v-chip class="primary">
              
             </v-chip> -->

            <v-chip class="primary">
              {{ item.school_type_title }}
            </v-chip>

            <!-- <v-chip class="primary">
              
             </v-chip>

             <v-chip class="primary">
              
             </v-chip> -->

            <v-col cols="12">
              <v-divder />
            </v-col>
            <v-col cols="12">
              <v-btn disabled icon>
                <v-icon> mdi-map-marker </v-icon>
              </v-btn>
              <v-btn  icon>
                <v-icon> mdi-phone </v-icon>
              </v-btn>
              <v-btn  icon>
                <v-icon> mdi-email </v-icon>
              </v-btn>
              </v-btn>
              <v-btn  icon>
                <v-icon> mdi-web </v-icon>
              </v-btn>
            </v-col>
          </v-col>

          <v-col cols="3">
            <img :src="require('assets/images/default-school.png')"/>
           </v-col>
        </v-row>
      </v-container>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  name: "school-list",
  head() {
    return {
      title: "School finder",
    };
  },
  data() {
    return {
      isExpanded: true,
      map: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        zoom: 14,
        center: [0, 0], // Initial map center coordinates
        markers: [
          //Marker list
          { latLng: [51.505, -0.09] },
          { latLng: [51.51, -0.1] },
          { latLng: [51.49, -0.1] },
        ],
        object: null,
        boundingBox: {},
        schoolIcon: null,
      },
      schoolLoading: true,
      schoolList: [],
    };
  },
  mounted() {
    document.body.classList.add('disable-scroll');

    this.map.schoolIcon = L.icon({
      iconUrl: "/images/school-marker.png", // Replace with school marker icon
      iconSize: [64, 64], // Adjust the size as needed
      iconAnchor: [16, 32], // Adjust the anchor point as needed
    });
    this.$nextTick(() => {
      setTimeout(() => {
        this.map.center = [51.505, -0.09];
        this.getUserLocation();
      }, 1000);
    });

    this.getSchoolList();
  },
  beforeDestroy() {
    document.body.classList.remove('disable-scroll');

  },

  methods: {
    onMoveEnd(event) {
      const bounds = event.target.getBounds();
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest(); // // Perform a new search based on the current map center

      this.map.boundingBox = {
        northEast: { lat: ne.lat, lng: ne.lng },
        southWest: { lat: sw.lat, lng: sw.lng },
      };

      this.performGeoSearch();
    },
    performGeoSearch() {
      //Code for perform geo search
    },
    getUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Get the user's coordinates
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Update the map's center with the user's location
            this.map.center = [userLat, userLng];
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported in this browser.");
      }
    },

    getSchoolList() {
      this.$axios
        .$get("/api/v1/schools/search")
        .then((response) => {
          this.schoolList = response.data.list;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.schoolLoading = false;
        });
    },
  },
};
</script>

<style scoped>

#school-list {
  position: relative;
  height:100vh;
  overflow:hidden;
  #map-wrap {
    height: 100vh;
  }

  .container {
    padding-bottom: 0;
    #list-view-btn {
      position: absolute;
      z-index: 400;
      top: 5rem;
      margin-left: 1.2rem;
    }
  }
  
  #data-list-holder{
    position: fixed;
    z-index: 1000;
    top: 6rem;
    right: 0;
    width: 20vw;
    background: var(--primary-grey-100, #f2f4f7);
    box-shadow: 5px 9px 24px 0px rgba(16, 24, 40, 0.05);
    height: 100vh;
    transition: width 0.5s;

    height:100vh;
    overflow:auto;

  }

  #data-list {
    
  }

  #data-list-holder.expanded {
    width: 100vw !important;
    transition: width 0.5s;
  }
}


.v-footer {
  display: none;
}

#footer-copy-right {
  display: none;
}
</style>

<style>
.disable-scroll{
  overflow:hidden!important;
  height:100vh;
}
</style>
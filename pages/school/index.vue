<template>
  <div id="school-list">
    <div id="map-wrap">
      <client-only>
        <l-map ref="schoolMap" :zoom="map.zoom" :center="map.center" @moveend="onMoveEnd" >
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
      <v-btn id="list-view-btn" x-large rounded color="scoundary">
        <v-icon>mdi-menu</v-icon>
        List view
      </v-btn>
    </v-container>

    <div id="map-data-list">
    
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  name: "school-list",
  data() {
    return {
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
    };
  },
  mounted() {
    this.map.schoolIcon = L.icon({
      iconUrl: "/images/school-marker.png", // Replace with the actual path to your custom marker icon
      iconSize: [64, 64], // Adjust the size as needed
      iconAnchor: [16, 32], // Adjust the anchor point as needed
    });
    this.$nextTick(() => {
      setTimeout(() => {
        this.map.center = [51.505, -0.09];
        this.getUserLocation();

      }, 1000);
    });
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
      // Add your code here to perform a search based on the current map view.
      // You may use this.center and this.zoom to construct your search query.
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
  },
};
</script>

<style>
#school-list {
  position: relative;
  overflow-y:hidden;
  max-height:100vh;
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

  #map-data-list{
    position:fixed;
    z-index:400;
    top:0;
    right:0;
    width:20vw;
    background: var(--primary-grey-100, #F2F4F7);
    box-shadow: 5px 9px 24px 0px rgba(16, 24, 40, 0.05);
    height:100vh;
  }
}
</style>
<style scope>
.v-footer {
  display: none;
}

#footer-copy-right {
  display: none;
}
</style>

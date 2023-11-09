<template>
  <div id="school-list">
    <schoolListFilter />
    <div id="map-wrap">
      <client-only>
        <l-map
          ref="schoolMap"
          :zoom="map.zoom"
          :center="map.center"
          @moveend="onMoveEnd"
        >
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

    <div
      id="data-list-holder"
      :class="{ expanded: isExpanded }"
      ref="schoolListSection"
      @scroll="checkSchoolScroll"
    >
      <v-container id="action-section">
        <v-row>
          <v-col cols="9">
            <v-chip small close outlined> Elamentry </v-chip>
            <v-chip small close outlined> Traditional </v-chip>
          </v-col>
          <v-col cols="3" class="text-right">
            <v-btn
              v-if="isExpanded"
              x-large
              rounded
              color="#12B76A"
              dark
              @click="isExpanded = false"
            >
              <v-icon>mdi-menu</v-icon>
              Map view
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <div id="data-list">
        <v-container id="school-list-container">
          <div v-if="schoolList.length">
            <v-card
              rounded
              v-for="item in schoolList"
              :key="item.id"
              class="list-item"
            >
              <v-card-text>
                <div class="item-info">
                  <div class="main-data">
                    <h2 class="text-h4 mb-4">
                      {{ item.name }}
                    </h2>

                    <!-- <v-chip class="primary">
              
             </v-chip> -->

                    <v-chip class="primary" small>
                      {{ item.school_type_title }}
                    </v-chip>

                    <!-- <v-chip class="primary">
              
             </v-chip>

             <v-chip class="primary">
              
             </v-chip> -->
                  </div>
                  <v-divider class="mb-3" />
                  <div>
                    <v-btn disabled icon>
                      <v-icon> mdi-map-marker </v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon> mdi-phone </v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon> mdi-email </v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon> mdi-web </v-icon>
                    </v-btn>
                  </div>
                </div>

                <div class="item-img">
                  <img :src="require('assets/images/default-school.png')" />
                </div>
              </v-card-text>
            </v-card>
          </div>
          <div v-else>
            <v-card class="list-item" v-for="i in 5" :key="i">
              <div class="item-info">
                <div class="main-data">
                  <v-skeleton-loader
                    type="card-heading, list-item-two-line"
                  ></v-skeleton-loader>
                </div>
                <div></div>
              </div>
            </v-card>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import schoolListFilter from "@/components/school-list/filter";
export default {
  auth: false,
  name: "school-list",
  head() {
    return {
      title: "School finder",
    };
  },
  components: {
    schoolListFilter,
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
      pageNum: 1,
      allDataLoaded: [],
      timer: 0,
      gradeLevelList: [
        {
          title: "test",
        },
        {
          title: "test2",
        },
      ],

    
    };
  },
  mounted() {
    document.body.classList.add("disable-scroll");

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
    document.body.classList.remove("disable-scroll");
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
      this.schoolLoading = true;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        if (this.allDataLoaded == false)
          this.$axios
            .$get("/api/v1/schools/search", {
              params: {
                page: this.pageNum,
              },
            })
            .then((response) => {
              this.schoolList.push(...response.data.list);

              if (response.data.list.length === 0) this.allDataLoaded = true;
            })
            .catch((err) => {
              console.error(err);
            })
            .finally(() => {
              this.schoolLoading = false;
            });
      }, 800);
    },
    checkSchoolScroll() {
      const scrollableDiv = this.$refs.schoolListSection;
      if (this.isScrollAtBottom(scrollableDiv) && this.allDataLoaded == false) {
        this.pageNum++;
        this.getSchoolList();
      }
    },
    isScrollAtBottom(element) {
      return element.scrollHeight - element.scrollTop == element.clientHeight;
    },

    
  },
};
</script>

<style scoped>
#school-list {
  position: relative;
  height: 100vh;
  overflow: hidden;

  

  #map-wrap {
    height: 100vh;
  }

  .container {
    padding-bottom: 0;
    #list-view-btn {
      position: absolute;
      z-index: 400;
      top: 12rem;
      margin-left: 1.2rem;
    }
  }

  #data-list-holder {
    position: fixed;
    z-index: 1000;
    top: 13.88rem;
    right: 0;
    width: 20vw;
    background: var(--primary-grey-100, #f2f4f7);
    box-shadow: 5px 9px 24px 0px rgba(16, 24, 40, 0.05);
    height: 100vh;
    transition: width 0.5s;

    height: 100vh;
    overflow: auto;

    #action-section {
      max-width: 100% !important;
      position: sticky;
      top: 0;
      z-index: 402;
      margin-bottom: 2.4rem;
      background: var(--primary-grey-100, #f2f4f7);
    }

    #data-list {
      #school-list-container {
        padding-bottom: 14rem;
        max-width: 100% !important;
        .list-item {
          display: flex;
          margin-bottom: 0.8rem;
          height: 14.9rem;

          .item-info {
            float: left;
            width: 65.5%;
            max-width: 65.5%;
            overflow: hidden;

            .main-data {
              min-height: 8rem;
            }
            .main-data h2 {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }

          .item-img {
            float: right;
            width: 34.5%;
          }

          .item-img img {
            width: 10.7rem;
            height: 8.1rem;
            transition: width 0.5s, height 0.5s;
          }
        }
      }
    }
  }

  #data-list-holder.expanded {
    width: 100vw !important;
    transition: width 0.5s;

    #action-section {
      max-width: 80% !important;
    }

    #data-list {
      #school-list-container {
        max-width: 80% !important;
        .list-item {
          display: flex;
          margin-bottom: 0.8rem;
          height: 15rem;

          .item-info {
            float: left;
            width: 85.5%;
            min-width: 85.5%;

            .main-data {
              min-height: 8rem;
            }
          }

          .item-img {
            float: right;
            width: 14.5%;
          }

          .item-img img {
            width: 15.619rem;
            height: 11.961rem;
            transition: width 0.5s, height 0.5s;
          }
        }
      }
    }
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
.disable-scroll {
  overflow: hidden !important;
  height: 100vh;
}



.menuable__content__active {
  z-index: 1100 !important;
}
</style>

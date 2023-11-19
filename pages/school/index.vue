<template>
  <div id="school-list">
    <schoolListFilter ref="schoolFilter" />
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
      <v-container>
        <v-btn
          id="list-view-btn"
          x-large
          class="text-transform-none gtext-t4 font-weight-medium"
          rounded
          color="scoundary"
          @click="isExpanded = true"
        >
          <v-icon>mdi-menu</v-icon>
          &nbsp; List view
        </v-btn>
      </v-container>
    </div>

    <div
      id="data-list-holder"
      :class="{ expanded: isExpanded }"
      ref="schoolListSection"
      @scroll="checkSchoolScroll"
    >
      <!-- Action section -->
      <v-container id="action-section">
        <v-row>
          <v-col cols="9" class="pt-9">
            <v-chip
              small
              close
              outlined
              v-if="$route.query.keyword"
              @click:close="closeFilter('keyword')"
            >
              {{ $route.query.keyword }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.curriculum && filterLoadedStatus.curriculum"
              @click:close="closeFilter('curriculum')"
            >
              {{ findTitle("curriculum", $route.query.curriculum) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.tuition_fee"
              @click:close="closeFilter('tuition_fee')"
            >
              Tuition fee above: ${{ $route.query.tuition_fee }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.country && filterLoadedStatus.country"
              @click:close="closeFilter('country')"
            >
              {{ findTitle("country", $route.query.country) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.state && filterLoadedStatus.state"
              @click:close="closeFilter('state')"
            >
              {{ findTitle("state", $route.query.state) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.city && filterLoadedStatus.city"
              @click:close="closeFilter('city')"
            >
              {{ findTitle("city", $route.query.city) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.school_type && filterLoadedStatus.school_type"
              v-for="(item, index) in $route.query.school_type"
              @click:close="closeFilter('school_type', item)"
            >
              {{ findTitle("school_type", item) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.religion && filterLoadedStatus.religion"
              v-for="(item, index) in $route.query.religion"
              @click:close="closeFilter('religion', item)"
            >
              {{ findTitle("religion", item) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="
                $route.query.boarding_type && filterLoadedStatus.boarding_type
              "
              v-for="(item, index) in boardingTypeArray"
              @click:close="closeFilter('boarding_type', item)"
            >
              {{ findTitle("boarding_type", item) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.coed_status && filterLoadedStatus.coed_status"
              v-for="(item, index) in coedStatusArray"
              @click:close="closeFilter('coed_status', item)"
            >
              {{ findTitle("coed_status", item) }}
            </v-chip>
            <v-chip
              small
              close
              outlined
              v-if="$route.query.sort && filterLoadedStatus.sort"
              @click:close="closeFilter('sort')"
            >
              {{ findTitle("sort", $route.query.sort) }}
            </v-chip>
          </v-col>
          <v-col cols="3" class="text-right">
            <v-btn
              v-if="isExpanded"
              x-large
              rounded
              color="#12B76A"
              class="text-transform-none gtext-h4 font-weight-medium"
              dark
              @click="isExpanded = false"
            >
              <v-icon size="16">mdi-map-marker</v-icon>&nbsp; Map view
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- Action section -->

      <!-- Data list -->
      <div id="data-list">
        <v-container id="school-list-container">
          <div v-if="resultCount>0">
            <v-card
              rounded
              v-for="item in schoolList"
              :key="item.id"
              class="list-item"
            >
              <v-card-text>
                <div class="item-info">
                  <div class="main-data d-flex">
                    <div>
                      <h2 class="gtext-t4 font-weight-semibold mb-4">
                        {{ item.name }}
                      </h2>

                      <!-- <v-chip class="primary">
              
             </v-chip> -->

                      <v-chip
                        v-if="item.school_type_title"
                        class="list-chip gtext-t5 font-weight-medium"
                        small
                      >
                        {{ item.school_type_title }}
                      </v-chip>

                      <!-- <v-chip class="primary">
              
             </v-chip>

             <v-chip class="primary">
              
             </v-chip> -->
                    </div>
                    <div class="item-img" v-if="!isExpanded">
                      <img :src="require('assets/images/default-school.png')" />
                    </div>
                  </div>
                  <v-divider class="mb-3" />
                  <div class="item-footer">
                    <div class="float-left">
                      <v-btn :disabled="!item.location" icon>
                        <v-icon> mdi-map-marker </v-icon>
                      </v-btn>
                      <v-btn :disabled="!item.phone1" icon>
                        <v-icon> mdi-phone </v-icon>
                      </v-btn>
                      <v-btn :disabled="!item.address" icon>
                        <v-icon> mdi-email </v-icon>
                      </v-btn>
                      <v-btn :disabled="!item.site" icon>
                        <v-icon> mdi-web </v-icon>
                      </v-btn>
                    </div>

                    <div class="float-right d-flex mt-1">
                      <div
                        class="rate-section gtext-t6 font-weight-semibold mr-1"
                      >
                        4.2
                        <v-icon color="primary"> mdi-star </v-icon>
                      </div>
                      <div class="gtext-t6 primary-gray-300">
                        Update:
                        <span class="primary-gray-600">{{
                          $moment(item.up_date).format("YYYY-MM-DD")
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item-img" v-if="isExpanded">
                  <img
                    class="float-right"
                    :src="require('assets/images/default-school.png')"
                  />
                </div>
              </v-card-text>
            </v-card>

            <v-card class="list-item" v-if="!allDataLoaded" >
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
          <div v-else-if="resultCount == 0 && schoolLoading == false">
            <span class="gtext-t4">
                        Opps! no data found
                    </span>
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
      <!-- End data list -->
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
      resultCount:'--',
      timer: 0,
      gradeLevelList: [
        {
          title: "test",
        },
        {
          title: "test2",
        },
      ],
      filter: {
        keyword: "",
        curriculum: "",
        tuition_fee: "",
        country: "",
        state: "",
        city: "",
        school_type: "",
        religion: "",
        boarding_type: "",
        coed_status: "",
      },
      filterLoadedStatus: {
        curriculum: false,
        country: false,
        state: false,
        city: false,
        school_type: false,
        religion: false,
        boarding_type: false,
        coed_status: false,
        sort: false,
      },
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
  watch: {
    "$route.query.keyword"(val) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        this.filter.keyword = val;
        this.$refs.schoolFilter.searchLoading = true;
        this.pageNum = 1;
        this.schoolList = [];
        this.allDataLoaded = false;
        this.getSchoolList();
      }, 800);
    },
    "$route.query.curriculum"(val) {
      this.filter.curriculum = val;
      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },

    "$route.query.tuition_fee"(val) {
      this.filter.tuition_fee = val;
      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.country"(val) {
      this.filter.country = val;
      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.state"(val) {
      this.filter.state = val;
      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.city"(val) {
      this.filter.city = val;
      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.school_type"(val) {
      if (val) this.filter.school_type = val.toString();
      else this.filter.school_type = "";

      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.religion"(val) {
      if (val) this.filter.religion = val.toString();
      else this.filter.religion = "";

      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.boarding_type"(val) {
      if (val) this.filter.boarding_type = val.toString();
      else this.filter.boarding_type = "";

      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.coed_status"(val) {
      if (val) this.filter.coed_status = val.toString();
      else this.filter.coed_status = "";

      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
    "$route.query.sort"(val) {
      this.filter.sort = val;
      this.pageNum = 1;
      this.schoolList = [];
      this.allDataLoaded = false;
      this.getSchoolList();
    },
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

      if (this.allDataLoaded == false)
        this.$axios
          .$get("/api/v1/schools/search", {
            params: {
              page: this.pageNum,
              name: this.$route.query.keyword,
              section: this.$route.query.curriculum,
              tuition_fee: this.$route.query.tuition_fee,
              country: this.$route.query.country,
              state: this.$route.query.state,
              city: this.$route.query.city,
              school_type: this.$route.query.school_type,
              religion: this.$route.query.religion,
              boarding_type: this.$route.query.boarding_type,
              coed_status: this.$route.query.coed_status,
              sort: this.$route.query.sort,
            },
          })
          .then((response) => {
            this.resultCount=response.data.num;
            this.$refs.schoolFilter.resultCount = this.resultCount;
            this.schoolList.push(...response.data.list);

            if (response.data.list.length === 0) this.allDataLoaded = true;
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            this.schoolLoading = false;
            this.$refs.schoolFilter.searchLoading = false;
          });
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
    closeFilter(filter_name, other_data = null) {
      if (filter_name == "keyword")
        this.$refs.schoolFilter.filterForm.keyword = "";
      else if (filter_name == "curriculum")
        this.$refs.schoolFilter.updateFilter("curriculum", "");
      else if (filter_name == "sort")
        this.$refs.schoolFilter.updateFilter("sort", "");
      else if (filter_name == "tuition_fee")
        this.$refs.schoolFilter.filterForm.tuition_fee = 0;
      else if (filter_name == "country") {
        this.$refs.schoolFilter.filterForm.country = 0;
        this.$refs.schoolFilter.filterForm.state = 0;
        this.$refs.schoolFilter.filterForm.city = 0;
        this.$refs.schoolFilter.filter.stateList = [];
        this.$refs.schoolFilter.filter.cityList = [];
        this.$refs.schoolFilter.updateQueryParams();
      } else if (filter_name == "state") {
        this.$refs.schoolFilter.filterForm.state = 0;
        this.$refs.schoolFilter.filterForm.city = 0;
        this.$refs.schoolFilter.filter.cityList = [];
        this.$refs.schoolFilter.updateQueryParams();
      } else if (filter_name == "city") {
        this.$refs.schoolFilter.filterForm.city = 0;
        this.$refs.schoolFilter.updateQueryParams();
      } else if (filter_name == "school_type") {
        var index = this.$refs.schoolFilter.filterForm.school_type.findIndex(
          (x) => x == other_data
        );
        this.$refs.schoolFilter.filterForm.school_type.splice(index, 1);
      } else if (filter_name == "religion") {
        var index = this.$refs.schoolFilter.filterForm.religion.findIndex(
          (x) => x == other_data
        );
        this.$refs.schoolFilter.filterForm.religion.splice(index, 1);
      } else if (filter_name == "boarding_type") {
        var index = this.$refs.schoolFilter.filterForm.boarding_type.findIndex(
          (x) => x == other_data
        );
        this.$refs.schoolFilter.filterForm.boarding_type.splice(index, 1);
      } else if (filter_name == "coed_status") {
        var index = this.$refs.schoolFilter.filterForm.coed_status.findIndex(
          (x) => x == other_data
        );
        this.$refs.schoolFilter.filterForm.coed_status.splice(index, 1);
      }
    },
    findTitle(type, id) {
      var title = "";
      if (type == "curriculum")
        title = this.$refs.schoolFilter.filter.curriculumList.find(
          (x) => x.id == id
        ).title;
      if (type == "sort") {
        title = this.$refs.schoolFilter.sortList.find((x) => x.id == id).title;
      } else if (type == "country")
        title = this.$refs.schoolFilter.filter.countryList.find(
          (x) => x.id == id
        ).name;
      else if (type == "state")
        title = this.$refs.schoolFilter.filter.stateList.find(
          (x) => x.id == id
        ).title;
      else if (type == "city")
        title = this.$refs.schoolFilter.filter.cityList.find(
          (x) => x.id == id
        ).title;
      else if (type == "school_type")
        title = this.$refs.schoolFilter.filter.schoolTypeList.find(
          (x) => x.id == id
        ).title;
      else if (type == "religion")
        title = this.$refs.schoolFilter.filter.religionList.find(
          (x) => x.id == id
        ).title;
      else if (type == "boarding_type")
        title = this.$refs.schoolFilter.filter.boardingTypeList.find(
          (x) => x.id == id
        ).title;
      else if (type == "coed_status")
        title = this.$refs.schoolFilter.filter.coedStatusList.find(
          (x) => x.id == id
        ).title;

      return title;
    },
  },
  computed: {
    boardingTypeArray() {
      const boardingType = this.$route.query.boarding_type;

      if (Array.isArray(boardingType)) {
        return boardingType; // If it's already an array, return it as is
      } else if (typeof boardingType === "string") {
        return [boardingType]; // If it's a string, convert it to an array
      } else {
        return []; // If it's neither a string nor an array, return an empty array
      }
    },
    coedStatusArray() {
      const coedStatus = this.$route.query.coed_status;

      if (Array.isArray(coedStatus)) {
        return coedStatus; // If it's already an array, return it as is
      } else if (typeof coedStatus === "string") {
        return [coedStatus]; // If it's a string, convert it to an array
      } else {
        return []; // If it's neither a string nor an array, return an empty array
      }
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
    height: 85vh;
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
    min-width: 40rem;
    width: 40rem;
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
            width: 100%;
            max-width: 100%;
            overflow: hidden;

            .main-data {
              min-height: 8rem;
              justify-content: space-between;

              .list-chip {
                background: var(--primary-warning-50, #fffaeb) !important;
                color: var(--primary-yellow-gama-500, #ffb600) !important;
              }
            }
            .main-data h2 {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            .item-footer .v-icon {
              font-size: 2rem !important;
            }
          }

          .item-img {
            float: right;
            justify-content: flex-end;
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

            .item-footer .v-icon {
              font-size: 2.4rem !important;
            }
          }

          .item-img {
            float: right;
            width: 14.5%;
            justify-content: flex-end;
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

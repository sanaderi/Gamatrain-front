<template>
  <div>
    <!-- Desktop section -->
    <div class="d-none d-lg-block">
      <v-toolbar flat id="desktop-school-filter" class="d-none d-lg-block">
        <v-container class="py-0">
          <v-row>
            <v-col cols="5" md="4" lg="4" xl="4" class="pt-md-0">
              <div class="d-flex">
                <div>
                  <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    id="search-field"
                    hide-details
                    label="Search anything..."
                    filled
                    v-model="filterForm.keyword"
                    rounded
                    autocomplete="off"
                  >
                    <template v-slot:append>
                      <v-btn
                        large
                        class="primary"
                        :loading="searchLoading"
                        id="search-btn"
                        rounded
                      >
                        Search
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>
              </div>
            </v-col>

            <v-col cols="7" md="8" class="pb-0" id="menu-section">
              <div class="d-flex">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :class="{ 'menu-opened': menuOpened }"
                      class="text-capitalize gtext-t4 font-weight-medium menu-btn"
                      @click="desktopFilter = false"
                      v-bind="attrs"
                      v-on="on"
                      >Stage
                      <v-icon right dark color="primary" large> mdi-chevron-down </v-icon>
                    </v-btn>
                  </template>
                  <v-list class="school-filter-list">
                    <v-list-item
                      v-for="(item, index) in filter.stageList"
                      :key="index"
                      @click="updateFilter('stage', item.id)"
                    >
                      <v-list-item-title class="text-h5">{{
                        item.title
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <div :class="{ 'menu-opened': menuOpened }" class="vertical-line"></div>

                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="text-transform-none gtext-t4 font-weight-medium"
                      @click="desktopFilter = false"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Tuition fee
                      <!-- &nbsp;<span style="color: #667085; text-transform: none"
                        >to</span
                      >&nbsp;${{ filterForm.tuition_fee | numberFormat }} -->

                      <v-icon right dark color="primary" large> mdi-chevron-down </v-icon>
                    </v-btn>
                  </template>
                  <v-card class="school-filter-list" width="400">
                    <v-card-text class="pt-5 pb-0">
                      <v-slider
                        dense
                        v-model="filterForm.tuition_fee"
                        max="50000"
                        min="0"
                      ></v-slider>
                    </v-card-text>
                  </v-card>
                </v-menu>
                <div class="vertical-line"></div>

                <v-btn
                  class="text-capitalize gtext-t4 font-weight-medium"
                  @click="openDesktopFilter"
                >
                  <v-icon right dark size="24"> mdi-filter </v-icon>
                  &nbsp;&nbsp;&nbsp; Filter
                  <v-icon right dark color="primary" large> mdi-chevron-down </v-icon>
                </v-btn>
                <div class="vertical-line"></div>

                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="text-capitalize gtext-t4 font-weight-medium"
                      @click="desktopFilter = false"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon right dark size="24"> mdi-filter-variant </v-icon>
                      &nbsp;&nbsp;&nbsp; Sort
                      <v-icon size="24" right dark color="primary">
                        mdi-chevron-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list class="school-filter-list">
                    <v-list-item
                      v-for="(item, index) in sortList"
                      :key="index"
                      @click="updateFilter('sort', item.value)"
                    >
                      <v-list-item-title class="text-h5">{{
                        item.title
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <div class="vertical-line"></div>

                <v-btn class="gtext-t4 font-weight-regular text-capitalize">
                  <span class="gray--text">Search result</span> &nbsp;
                  <span class="white--text">
                    {{ resultCount }}
                  </span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>

      <v-container
        ref="desktopFilter"
        fluid
        id="desktop-school-more-filter"
        v-if="desktopFilter"
      >
        <v-card width="100vw" class="pt-4">
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-autocomplete
                  v-model="filterForm.country"
                  :items="filter.countryList"
                  item-text="name"
                  item-value="id"
                  label="Country"
                  outlined
                  clearable
                  rounded
                  @change="countryChange()"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  v-model="filterForm.state"
                  :items="filter.stateList"
                  item-text="title"
                  item-value="id"
                  label="State"
                  outlined
                  rounded
                  clearable
                  @change="stateChange()"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  v-model="filterForm.city"
                  :items="filter.cityList"
                  item-text="title"
                  item-value="id"
                  label="City"
                  outlined
                  rounded
                  clearable
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <p class="gtext-t4 font-weight-medium">School type</p>
                <div class="pl-8">
                  <v-checkbox
                    v-for="(item, index) in filter.schoolTypeList"
                    v-model="filterForm.school_type"
                    :label="item.title"
                    :value="item.id"
                  ></v-checkbox>
                </div>
              </v-col>
              <v-col cols="3">
                <p class="gtext-t4 font-weight-medium">Religion</p>
                <div class="pl-8">
                  <v-checkbox
                    v-for="(item, index) in filter.religionList"
                    v-model="filterForm.religion"
                    :label="item.title"
                    :value="item.id"
                  ></v-checkbox>
                </div>
              </v-col>
              <v-col cols="3">
                <p class="gtext-t4 font-weight-medium">Boarding types</p>
                <div class="pl-8">
                  <v-checkbox
                    v-for="(item, index) in filter.boardingTypeList"
                    v-model="filterForm.boarding_type"
                    :label="item.title"
                    :value="item.id"
                  ></v-checkbox>
                </div>
              </v-col>
              <v-col cols="3">
                <p class="gtext-t4 font-weight-medium">Coed status</p>
                <div class="pl-8">
                  <v-checkbox
                    v-for="(item, index) in filter.coedStatusList"
                    v-model="filterForm.coed_status"
                    :label="item.title"
                    :value="item.id"
                  ></v-checkbox>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </div>
    <!-- End desktop section -->

    <!-- Mobile section -->
    <div class="d-block d-lg-none">
      <v-row>
        <v-col cols="12" class="px-4">
          <div id="mobile-school-filter">
            <div class="float-left w-70 mb-6">
              <v-text-field
                prepend-inner-icon="mdi-magnify"
                id="search-field"
                hide-details
                label="Search anything..."
                outlined
                v-model="filterForm.keyword"
                dense
                rounded
                autocomplete="off"
              >
                <template v-slot:append>
                  <v-btn class="primary" :loading="searchLoading" id="search-btn" rounded>
                    Search
                  </v-btn>
                </template>
              </v-text-field>
            </div>
            <div class="float-right" id="filterSection">
              <!-- Filter section -->
              <v-dialog
                v-model="filterDialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    small
                    fab
                    color="#F2F4F7"
                    v-bind="attrs"
                    v-on="on"
                    elevation="0"
                    class="mr-2"
                  >
                    <v-icon> mdi-filter </v-icon>
                  </v-btn>
                </template>
                <v-card id="filter-card">
                  <v-toolbar color="#fff">
                    <v-toolbar-title class="gtext-h5">Filter</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn icon @click="filterDialog = false">
                        <v-icon color="#D0D5DD ">mdi-close-circle</v-icon>
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="my-8">
                      <v-col cols="12" sm="4">
                        <gomboBox
                          label="Country"
                          @change="countryChange()"
                          :items="filter.countryList"
                          itemTitle="name"
                          v-model="filterForm.country"
                        />
                      </v-col>
                      <v-col cols="12" sm="4">
                        <gomboBox
                          label="State"
                          @change="stateChange()"
                          :items="filter.stateList"
                          v-model="filterForm.state"
                        />
                      </v-col>
                      <v-col cols="12" sm="4">
                        <gomboBox
                          label="City"
                          :items="filter.cityList"
                          v-model="filterForm.city"
                        />
                      </v-col>

                      <v-col cols="12" sm="4">
                        <p class="gtext-t4 font-weight-medium">School type</p>
                        <div class="pl-8">
                          <v-checkbox
                            v-for="(item, index) in filter.schoolTypeList"
                            v-model="filterForm.school_type"
                            :label="item.title"
                            :value="item.id"
                          ></v-checkbox>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <p class="gtext-t4 font-weight-medium">Religion</p>
                        <div class="pl-8">
                          <v-checkbox
                            v-for="(item, index) in filter.religionList"
                            v-model="filterForm.religion"
                            :label="item.title"
                            :value="item.id"
                          ></v-checkbox>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <p class="gtext-t4 font-weight-medium">Boarding types</p>
                        <div class="pl-8">
                          <v-checkbox
                            v-for="(item, index) in filter.boardingTypeList"
                            v-model="filterForm.boarding_type"
                            :label="item.title"
                            :value="item.id"
                          ></v-checkbox>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <p class="gtext-t4 font-weight-medium">Coed status</p>
                        <div class="pl-8">
                          <v-checkbox
                            v-for="(item, index) in filter.coedStatusList"
                            v-model="filterForm.coed_status"
                            :label="item.title"
                            :value="item.id"
                          ></v-checkbox>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      class="text-transform-none cancel-btn"
                      text
                      @click="filterDialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      class="primary text-transform-none apply-btn"
                      rounded
                      @click="filterDialog = false"
                    >
                      Apply filter
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <!-- Sort section -->
              <v-bottom-sheet
                v-model="sortSheet"
                style="border-radius: 0rem 3.2rem 3.2rem 0rem"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn small fab color="#F2F4F7" elevation="0" v-bind="attrs" v-on="on">
                    <v-icon> mdi-filter-variant </v-icon>
                  </v-btn>
                </template>
                <v-list id="sortSheetList">
                  <v-list-item
                    v-for="item in sortList"
                    :key="item.value"
                    @click="updateFilter('sort', item.value)"
                  >
                    <v-list-item-title class="gtext-t4">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-bottom-sheet>
              <!-- End sort section -->
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- End mobile section -->

    <!-- Location picker dialog -->
    <v-row justify="center">
      <v-card v-if="locationPickerDialog" id="locationPickerDialog" class="text-center">
        <img :src="require('@/assets/images/earth.png')" />

        <p class="gtext-t4">Select Your Location First</p>
        <p class="gtext-t6">A lot of schools from all over the world are here</p>

        <v-row class="w-sm-50 w-100 mx-auto mt-10">
          <v-col cols="12">
            <gomboBox
              label="Country"
              @change="countryChange()"
              :items="filter.countryList"
              itemTitle="name"
              v-model="filterForm.country"
            />
          </v-col>
          <v-col cols="12">
            <gomboBox
              label="State"
              @change="stateChange()"
              :items="filter.stateList"
              v-model="filterForm.state"
            />
          </v-col>
          <v-col cols="12">
            <gomboBox label="City" :items="filter.cityList" v-model="filterForm.city" />
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <!-- End location picker dialog -->
  </div>
</template>

<script>
import gomboBox from "../common/gombo-box.vue";
export default {
  props: {
    sortList: [],
  },
  name: "schoolListFilter",
  data() {
    return {
      locationPickerDialog: false,
      desktopFilter: false,
      resultCount: "--",
      filter: {
        stageList: [],
        countryList: [],
        stateList: [],
        cityList: [],
        schoolTypeList: [],
        boardingTypeList: [],
        coedStatusList: [],
        religionList: [],
        center: [],
        distance: 10,
      },

      filterForm: {
        keyword: "",
        stage: "",
        tuition_fee: 0,
        country: "",
        state: "",
        city: 0,
        school_type: [],
        religion: [],
        boarding_type: [],
        coed_status: [],
      },
      menuOpened: false,
      searchLoading: false,

      // Mobile section
      sortSheet: false,
      filterDialog: false,
      filterLoadedStatus: {
        stage: false,
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
  created() {
    var params = {
      type: "section",
    };
    this.getFilterList({ type: "countries" }, "countries");
    this.getFilterList(params, "section");
    this.getFilterList({ type: "school_type" }, "school_type");
    this.getFilterList({ type: "boarding_type" }, "boarding_type");
    this.getFilterList({ type: "coed_status" }, "coed_status");
    this.getFilterList({ type: "religion" }, "religion");

    //Init filter value
    if (this.$route.query.keyword) this.filterForm.keyword = this.$route.query.keyword;
    if (this.$route.query.stage) this.filterForm.stage = this.$route.query.stage;
    if (this.$route.query.tuition_fee)
      this.filterForm.tuition_fee = this.$route.query.tuition_fee;
    if (this.$route.query.country) {
      this.filterForm.country = this.$route.query.country;
      this.getFilterList(
        { type: "states", country_id: this.filterForm.country },
        "states"
      );
    }
    if (this.$route.query.state) {
      this.filterForm.state = this.$route.query.state;
      this.getFilterList(
        {
          type: "cities",
          country_id: this.filterForm.country,
          state_id: this.filterForm.state,
        },
        "cities"
      );
    }
    if (this.$route.query.city) this.filterForm.city = this.$route.query.city;

    if (this.$route.query.school_type)
      this.filterForm.school_type = Array.isArray(this.$route.query.school_type)
        ? this.$route.query.school_type
        : [this.$route.query.school_type];

    this.filterForm.city = this.$route.query.city;

    if (this.$route.query.religion)
      this.filterForm.religion = Array.isArray(this.$route.query.religion)
        ? this.$route.query.religion
        : [this.$route.query.religion];

    if (this.$route.query.boarding_type)
      this.filterForm.boarding_type = Array.isArray(this.$route.query.boarding_type)
        ? this.$route.query.boarding_type
        : [this.$route.query.boarding_type];
    if (this.$route.query.coed_status)
      this.filterForm.coed_status = Array.isArray(this.$route.query.coed_status)
        ? this.$route.query.coed_status
        : [this.$route.query.coed_status];

    if (this.$route.query.sort) this.filterForm.sort = this.$route.query.sort;
    //End init filter value
  },
  watch: {
    "filterForm.keyword"(val) {
      this.updateQueryParams();
    },
    "filterForm.tuition_fee"(val) {
      this.updateQueryParams();
    },
    "filterForm.city"(val) {
      document.removeEventListener("click", this.handleClickOutside);
      this.updateQueryParams();

      setTimeout(() => {
        if (this.desktopFilter) {
          // Add click event listener to close the div when clicking outside
          document.addEventListener("click", this.handleClickOutside);
        } else {
          // Remove click event listener when the div is closed
          document.removeEventListener("click", this.handleClickOutside);
        }
      }, 100);
    },
    "filterForm.school_type"(val) {
      this.updateQueryParams();
    },
    "filterForm.religion"(val) {
      this.updateQueryParams();
    },
    "filterForm.boarding_type"(val) {
      this.updateQueryParams();
    },
    "filterForm.coed_status"(val) {
      this.updateQueryParams();
    },
  },
  components: {
    gomboBox,
  },
  methods: {
    getFilterList(params, type) {
      this.$axios
        .$get("/api/v1/types/list", {
          params,
        })
        .then((res) => {
          var data = {};
          if (type == "countries") {
            this.filter.countryList = res.data;
            this.filterLoadedStatus.country = true;
          } else if (type == "states") {
            this.filter.stateList = res.data;
            this.filterLoadedStatus.state = true;
          } else if (type == "cities") {
            this.filter.cityList = res.data;
            this.filterLoadedStatus.city = true;
          } else if (type == "school_type") {
            this.filter.schoolTypeList = res.data;
            this.filterLoadedStatus.school_type = true;
          } else if (type == "boarding_type") {
            this.filter.boardingTypeList = res.data;
            this.filterLoadedStatus.boarding_type = true;
          } else if (type == "coed_status") {
            this.filter.coedStatusList = res.data;
            this.filterLoadedStatus.coed_status = true;
          } else if (type == "religion") {
            this.filter.religionList = res.data;
            this.filterLoadedStatus.religion = true;
          } else if (type == "section") {
            this.filter.stageList = res.data;
            this.filterLoadedStatus.stage = true;
          }
          this.$emit("loadedStatus", this.filterLoadedStatus);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    updateFilter(type, value) {
      if (type == "stage") this.filterForm.stage = value;
      if (type == "sort") {
        this.sortSheet = false;
        this.filterForm.sort = value;
      }

      this.updateQueryParams();
    },

    //Update router query params
    updateQueryParams() {
      const query = {};
      if (this.filterForm.keyword != "") query.keyword = this.filterForm.keyword;

      if (this.filterForm.stage != "") {
        query.stage = this.filterForm.stage;
      }

      if (this.filterForm.sort != "") {
        query.sort = this.filterForm.sort;
      }

      if (this.filterForm.tuition_fee > 0) {
        query.tuition_fee = this.filterForm.tuition_fee;
      }

      if (this.filterForm.country > 0) {
        query.country = this.filterForm.country;
      }

      if (this.filterForm.state > 0) {
        query.state = this.filterForm.state;
      }

      if (this.filterForm.city > 0) {
        query.city = this.filterForm.city;
      }

      if (this.filterForm.school_type && this.filterForm.school_type.length > 0) {
        query.school_type = this.filterForm.school_type;
      }

      if (this.filterForm.religion && this.filterForm.religion.length > 0) {
        query.religion = this.filterForm.religion;
      }

      if (this.filterForm.boarding_type && this.filterForm.boarding_type.length > 0) {
        query.boarding_type = this.filterForm.boarding_type;
      }

      if (this.filterForm.coed_status && this.filterForm.coed_status.length > 0) {
        query.coed_status = this.filterForm.coed_status;
      }

      if (this.filterForm.distance != "") {
        query.distance = this.filterForm.distance;
      }

      if (this.filterForm.center != undefined && this.filterForm.center.length) {
        query.center = this.filterForm.center.join(",");
      }

      // Handle more query parameters here ...
      this.$router.replace({ query: query }).catch((err) => {
        console.log(err);
      });
    },

    toggleActiveClass() {
      this.menuOpened = !this.menuOpened;
    },

    countryChange() {
      document.removeEventListener("click", this.handleClickOutside);

      this.filter.stateList = [];
      this.filter.cityList = [];
      this.filterForm.state = "";
      this.filterForm.city = "";
      this.updateQueryParams();
      if (this.filterForm.country) {
        this.getFilterList(
          { type: "states", country_id: this.filterForm.country },
          "states"
        );
      }

      setTimeout(() => {
        if (this.desktopFilter) {
          // Add click event listener to close the div when clicking outside
          document.addEventListener("click", this.handleClickOutside);
        } else {
          // Remove click event listener when the div is closed
          document.removeEventListener("click", this.handleClickOutside);
        }
      }, 100);
    },
    stateChange() {
      document.removeEventListener("click", this.handleClickOutside);

      this.filter.cityList = [];
      this.filterForm.city = "";
      this.updateQueryParams();
      if (this.filterForm.state) {
        this.getFilterList(
          {
            type: "cities",
            country_id: this.filterForm.country,
            state_id: this.filterForm.state,
          },
          "cities"
        );
      }

      setTimeout(() => {
        if (this.desktopFilter) {
          // Add click event listener to close the div when clicking outside
          document.addEventListener("click", this.handleClickOutside);
        } else {
          // Remove click event listener when the div is closed
          document.removeEventListener("click", this.handleClickOutside);
        }
      }, 100);
    },

    openDesktopFilter() {
      this.desktopFilter = !this.desktopFilter;

      setTimeout(() => {
        if (this.desktopFilter) {
          // Add click event listener to close the div when clicking outside
          document.addEventListener("click", this.handleClickOutside);
        } else {
          // Remove click event listener when the div is closed
          document.removeEventListener("click", this.handleClickOutside);
        }
      }, 100);
    },
    handleClickOutside(event) {
      // Close the div if the click is outside of the div
      const div = this.$refs.desktopFilter;
      if (div && !div.contains(event.target)) {
        this.desktopFilter = false;
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
  },
  beforeDestroy() {
    // Remove the click event listener when the component is destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
#mobile-school-filter {
  width: 100%;
  justify-content: space-between;
  background: red;

  .v-text-field--rounded {
    .v-input__control {
      .v-input__slot {
        padding: 0 10px 0 24px;
        background: var(--White, #fff) !important;

        .v-input__append-inner {
          margin-top: 0.4rem !important;

          #search-btn {
            height: 3rem !important;

            .v-btn__content {
              color: black;
              text-transform: none;
              font-family: Inter;
              font-size: 1.4rem;
              font-style: normal;
              font-weight: 500;
              line-height: 2.2rem;
            }
          }
        }
      }
    }
  }
}
#sortSheetList {
  border-radius: 3.2rem 3.2rem 0 0rem;
}
.v-dialog__content {
  z-index: 1200 !important;
}

#locationPickerDialog {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1200;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

#filter-card {
  .v-card__actions {
    position: absolute;
    bottom: 0;
    text-align: center;

    .cancel-btn {
      width: 20vw;
    }
    .apply-btn {
      width: 60vw;
    }
  }
}

@media (min-width: 1264px) {
  .v-list-item__title {
    font-size: 1.6rem;
  }
  #desktop-school-filter {
    margin-top: 0.58rem;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;
    height: 9.4rem !important;
    background: var(--primary-grey-800, #1d2939);
    box-shadow: 5px 9px 24px 0px rgba(16, 24, 40, 0.05);
    .v-text-field--rounded {
      .v-input__control {
        .v-input__slot {
          padding: 0 10px 0 24px;
          background: var(--White, #fff) !important;

          .v-input__append-inner {
            margin-top: 0.4rem;

            #search-btn {
              height: 4.7rem;
              .v-btn__content {
                color: black;
                text-transform: none;
                font-family: Inter;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: 2.2rem;
              }
            }
          }
        }
      }
    }

    #menu-section {
      .v-btn--is-elevated {
        box-shadow: none !important;
      }
      .v-btn {
        background: transparent;

        .v-btn__content {
          color: #fff;
        }
      }

      .v-btn::before {
        background: none;
      }
    }
  }

  #desktop-school-more-filter {
    position: absolute;
    top: 7.4rem;
    z-index: 1100;
    padding: 0;
    background: var(--primary-grey-50, #f9fafb);
  }

  .school-filter-list {
    margin-top: 1.6rem;
  }

  .menu-btn {
    /* height: 5rem !important; */
    .v-btn__content {
      padding-right: 1.6rem;
    }
  }

  /* .menu-opened {
  border-radius: 10px 10px 0 0;
  background-color: #fff !important; /* Change color when opened */
  /* .v-btn__content { */
  /* color: #000; */
  /* } */
  /* } */

  /* .menu-opened.vertical-line {
  display: none;
} */

  .vertical-line {
    background: var(--primary-grey-400, #98a2b3);
    width: 0.05rem;
    height: 3.6rem;
    /* margin-left: 1.6rem; */
  }
}
</style>

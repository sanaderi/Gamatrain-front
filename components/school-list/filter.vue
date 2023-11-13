<template>
  <div>
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

          <v-col cols="7" md="8" class="pb-0">
            <div class="d-flex">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    :class="{ 'menu-opened': menuOpened }"
                    color="surface"
                    class="text-capitalize text-h4 menu-btn"
                    @click="desktopFilter = false"
                    plain
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >Curriculum
                    <v-icon right dark color="primary" large>
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-list class="school-filter-list">
                  <v-list-item
                    v-for="(item, index) in filter.curriculumList"
                    :key="index"
                    @click="updateFilter('curriculum', item.id)"
                  >
                    <v-list-item-title class="text-h5">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div
                :class="{ 'menu-opened': menuOpened }"
                class="vertical-line"
              ></div>

              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="surface"
                    class="text-capitalize text-h4"
                    plain
                    @click="desktopFilter = false"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Tuition fee&nbsp;<span
                      style="color: #667085; text-transform: none"
                      >to</span
                    >&nbsp;${{ filterForm.tuition_fee | numberFormat }}

                    <v-icon right dark color="primary" large>
                      mdi-chevron-down
                    </v-icon>
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
                color="surface"
                class="text-capitalize text-h4"
                plain
                dark
                @click="desktopFilter = !desktopFilter"
              >
                <v-icon right dark size="24"> mdi-filter </v-icon>
                &nbsp; Filter
                <v-icon right dark color="primary" large>
                  mdi-chevron-down
                </v-icon>
              </v-btn>
              <div class="vertical-line"></div>

              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="surface"
                    class="text-capitalize text-h4"
                    plain
                    @click="desktopFilter = false"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon right dark size="24"> mdi-filter-variant </v-icon>
                    &nbsp; Sort
                    <v-icon right dark color="primary" large>
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-list class="school-filter-list">
                  <v-list-item
                    v-for="(item, index) in sortList"
                    :key="index"
                    @click="updateFilter('curriculum', item.id)"
                  >
                    <v-list-item-title class="text-h5">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div class="vertical-line"></div>

              <v-btn class="text-h6 text-capitalize" plain dark>
                Search result &nbsp;
                <span class="white--text">
                  {{ resultCount }}
                </span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>

    <v-container fluid id="desktop-school-more-filter" v-if="desktopFilter">
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
              <p class="text-h4">School type</p>
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
              <p class="text-h4">Religion</p>
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
              <p class="text-h4">Boarding types</p>
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
              <p class="text-h4">Coed status</p>
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
</template>

<script>
export default {
  name: "schoolListFilter",
  data() {
    return {
      desktopFilter: false,
      resultCount: "--",
      filter: {
        curriculumList: [],
        countryList: [],
        stateList: [],
        cityList: [],
        schoolTypeList: [],
        boardingTypeList: [],
        coedStatusList: [],
        religionList: [],
      },
      sortList: [
        {
          value: "mostScore",
          title: "Most score",
        },
        {
          value: "mostActive",
          title: "Most active",
        },
        {
          value: "updateDate",
          title: "Update date",
        },
        {
          value: "tuitionFee",
          title: "Tuition fee",
        },
      ],
      filterForm: {
        keyword: "",
        curriculum: "",
        tuition_fee: 0,
        country: 0,
        state: 0,
        city: 0,
        school_type: [],
        religion: [],
        boarding_type: [],
        coed_status: [],
      },
      menuOpened: false,
      searchLoading: false,
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
    if (this.$route.query.keyword)
      this.filterForm.keyword = this.$route.query.keyword;
    if (this.$route.query.curriculum)
      this.filterForm.curriculum = this.$route.query.curriculum;
    if (this.$route.query.country){
      this.filterForm.country = this.$route.query.country;
      this.getFilterList(
        { type: "states", country_id: this.filterForm.country },
        "states"
      );
    }
    if (this.$route.query.state){
      this.filterForm.state = this.$route.query.state;
      this.getFilterList(
        { type: "cities", state_id: this.filterForm.state },
        "cities"
      );
    }
    if (this.$route.query.city) this.filterForm.city = this.$route.query.city;
    if (this.$route.query.school_type)
      this.filterForm.school_type = this.$route.query.school_type;
    this.filterForm.city = this.$route.query.city;
    if (this.$route.query.religion)
      this.filterForm.religion = this.$route.query.religion;
    if (this.$route.query.boarding_type)
      this.filterForm.boarding_type = this.$route.query.boarding_type;
    if (this.$route.query.coed_status)
      this.filterForm.coed_status = this.$route.query.coed_status;
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
      this.updateQueryParams();
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
            this.$parent.filterLoadedStatus.country = true;
          } else if (type == "states") {
            this.filter.stateList = res.data;
            this.$parent.filterLoadedStatus.state = true;
          } else if (type == "cities") {
            this.filter.cityList = res.data;
            this.$parent.filterLoadedStatus.city = true;
          } else if (type == "school_type") {
            this.filter.schoolTypeList = res.data;
            this.$parent.filterLoadedStatus.school_type = true;
          } else if (type == "boarding_type") {
            this.filter.boardingTypeList = res.data;
            this.$parent.filterLoadedStatus.boarding_type = true;
          } else if (type == "coed_status") {
            this.filter.coedStatusList = res.data;
            this.$parent.filterLoadedStatus.coed_status = true;
          } else if (type == "religion") {
            this.filter.religionList = res.data;
            this.$parent.filterLoadedStatus.religion = true;
          } else if (type == "section") {
            this.filter.curriculumList = res.data;
            this.$parent.filterLoadedStatus.curriculum = true;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    updateFilter(type, value) {
      if (type == "curriculum") this.filterForm.curriculum = value;

      this.updateQueryParams();
    },

    //Update router query params
    updateQueryParams() {
      const query = {};
      if (this.filterForm.keyword != "")
        query.keyword = this.filterForm.keyword;

      if (this.filterForm.curriculum != "") {
        query.curriculum = this.filterForm.curriculum;
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

      if (
        this.filterForm.school_type &&
        this.filterForm.school_type.length > 0
      ) {
        query.school_type = this.filterForm.school_type;
      }

      if (this.filterForm.religion && this.filterForm.religion.length > 0) {
        query.religion = this.filterForm.religion;
      }

      if (
        this.filterForm.boarding_type &&
        this.filterForm.boarding_type.length > 0
      ) {
        query.boarding_type = this.filterForm.boarding_type;
      }

      if (
        this.filterForm.coed_status &&
        this.filterForm.coed_status.length > 0
      ) {
        query.coed_status = this.filterForm.coed_status;
      }


      // Handle more query parameters here ...
      this.$router.replace({ query: query }).catch((err) => {
        console.log(err);
      });
    },

    toggleActiveClass() {
      this.menuOpened = !this.menuOpened;
    },

    countryChange(){
      this.filter.stateList = [];
      this.filter.cityList = [];
      this.filterForm.state = "";
      this.filterForm.city = "";
      this.updateQueryParams();
      this.getFilterList(
        { type: "states", country_id: this.filterForm.country },
        "states"
      );
    },
    stateChange(){
      this.filter.cityList = [];
      this.filterForm.city = "";
      this.updateQueryParams();
      this.getFilterList(
        { type: "cities", state_id: this.filterForm.state },
        "cities"
      );
    }
  },
};
</script>

<style>
#desktop-school-filter {
  margin-top: 0.58rem;
  padding-top: 0.8rem;
  padding-bottom: 0.4rem;
  height: 7rem !important;
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
</style>

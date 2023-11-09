<template>
  <v-toolbar flat id="desktop-school-filter" class="d-none d-lg-block">
    <v-container>
      <v-row>
        <v-col cols="6" md="4" lg="4" xl="4" class="pt-md-0">
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
              >
                <template v-slot:append>
                  <v-btn large class="primary" id="search-btn" rounded> Search </v-btn>
                </template>
              </v-text-field>
            </div>
          </div>
        </v-col>

        <v-col cols="6">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="surface"
                class="text-capitalize text-h4"
                plain
                dark
                v-bind="attrs"
                v-on="on"
                >Curriculum
                <v-icon right dark color="primary" large> mdi-chevron-down </v-icon>
                </v-btn
              >
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in filter.curriculumList"
                :key="index"
                @click="updateFilter('curriculum', item.id)"
              >
                <v-list-item-title class="text-h5">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="surface"
                class="text-capitalize text-h4"
                plain
                dark
                v-bind="attrs"
                v-on="on"
              >
                Tuition fee&nbsp;<span style="color: #667085; text-transform: none"
                  >to</span
                >&nbsp;${{ filterForm.tuition_fee | numberFormat }}

                <v-icon right dark color="primary" large> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-card width="400">
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
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  name: "schoolListFilter",
  data() {
    return {
      filter: {
        curriculumList: [],
      },
      filterForm: {
        keyword: "",
        curriculum: "",
        tuition_fee: 0,
      },
    };
  },
  created() {
    var params = {
      type: "section",
    };
    this.getFilterList(params, "section");
  },
  watch: {
    "filterForm.keyword"(val) {
      this.updateQueryParams();
    },
    "filterForm.tuition_fee"(val) {
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
          if (type == "section") {
            this.filter.curriculumList = res.data;

            //Initiate loading filter
            if (this.$route.query.section > 0) {
              data = {
                type: "base",
                section_id: this.$route.query.section,
              };
              this.getFilterList(data, "base");
              this.base_val = this.$route.query.base;

              this.applied_filter.select_section_title = this.filter.section_list.find(
                (x) => x.id === this.section_val
              ).title;

              //Set breadcrumbs info
              this.setBreadcrumbInfo();
            }
            //
          } else if (type === "base") {
            this.filter.base_list = res.data;

            //Get lesson data
            if (this.$route.query.base > 0) {
              data = {
                type: "lesson",
                base_id: this.$route.query.base,
              };
              this.getFilterList(data, "lesson");

              //Set lesson val
              this.lesson_val = this.$route.query.lesson;

              //Enable tag
              this.applied_filter.select_base_title = this.filter.base_list.find(
                (x) => x.id === this.base_val
              ).title;

              //Set breadcrumbs info
              this.setBreadcrumbInfo();
            }
          } else if (type === "lesson") {
            this.filter.lesson_list = res.data;

            //Get lesson data
            if (this.$route.query.lesson > 0) {
              data = {
                type: "topic",
                lesson_id: this.$route.query.lesson,
              };
              this.getFilterList(data, "topic");

              //Set topic val
              this.topic_val = this.$route.query.topic;

              //Enable tag
              this.applied_filter.select_lesson_title = this.filter.lesson_list.find(
                (x) => x.id === this.$route.query.lesson
              ).title;

              //Set breadcrumbs info
              this.setBreadcrumbInfo();
            }
          } else if (type === "topic") {
            this.filter.topic_list = res.data;

            //Enable tag
            if (this.$route.query.topic > 0)
              this.applied_filter.select_topic_title = this.filter.topic_list.find(
                (x) => x.id === this.topic_val
              ).title;
          } else if (type === "state") {
            this.filter.state_list = res.data;

            //Enable tag
            if (this.$route.query.state > 0) {
              this.state_val = this.$route.query.state;
              this.applied_filter.select_state_title = this.filter.state_list.find(
                (x) => x.id === this.state_val
              ).title;
            }
            if (this.$route.query.city > 0) this.city_val = this.$route.query.city;
          } else if (type === "city") {
            this.filter.city_list = res.data;

            //Enable tag
            if (this.city_val > 0 && this.filter.city_list.length)
              this.applied_filter.select_city_title = this.filter.city_list.find(
                (x) => x.id === this.city_val
              ).title;
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
      if (this.filterForm.keyword != "") query.keyword = this.filterForm.keyword;

      if (this.filterForm.curriculum != "") {
        query.curriculum = this.filterForm.curriculum;
      }

      if (this.filterForm.tuition_fee>0) {
        query.tuition_fee = this.filterForm.tuition_fee;
      }

      // Handle more query parameters here ...
      this.$router.replace({ query: query }).catch((err) => {
        //Do noting
      });
    },
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
</style>

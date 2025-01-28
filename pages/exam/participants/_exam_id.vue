<template>
  <v-container>
    <div>
      <v-col cols="12" class="px-0 px-sm-2">
        <v-row>
          <v-col cols="12" class="pl-5">
            <span class="icon icong-qa text-h3 teal--text"></span>
            <span class="text-h4 teal--text"> Participated tests </span>
          </v-col>
        </v-row>
        <v-card class="mt-3">
          <v-card-text class="px-sm-8 px-md-4">
            <!--Filter section-->
            <v-row class="d-none d-md-flex">
              <v-col cols="12" md="3">
                <v-autocomplete
                  dense
                  v-model="filter.level"
                  clearable
                  :items="level_list"
                  item-text="title"
                  item-value="id"
                  label="Level"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-autocomplete
                  dense
                  :items="state_list"
                  v-model="filter.state"
                  item-text="title"
                  item-value="id"
                  label="State"
                  outlined
                  clearable
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-autocomplete
                  dense
                  :items="area_list"
                  v-model="filter.area"
                  item-text="title"
                  item-value="id"
                  label="Area"
                  outlined
                  clearable
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-autocomplete
                  dense
                  :items="school_list"
                  v-model="filter.school"
                  item-text="title"
                  item-value="id"
                  label="School"
                  outlined
                  clearable
                />
              </v-col>
            </v-row>
            <!--End filter section-->

            <v-row>
              <v-col cols="12" class="px-0 px-sm-4 px-md-4">
                <v-simple-table class="exams_table">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center text-h5">Participant</th>
                        <th class="text-center text-h5">Date</th>
                        <th class="text-center text-h5">Percent</th>
                        <th class="text-center text-h5">Report card</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-show="participants_list.length > 0"
                        v-for="item in participants_list"
                        :key="item.id"
                      >
                        <td class="text-center">
                          {{ item.first_name }} {{ item.last_name }}
                        </td>
                        <td class="text-center">
                          {{ item.subdate }}
                        </td>
                        <td class="text-center">
                          {{ item.result_score }}
                        </td>
                        <td class="text-center">
                          <nuxt-link
                            :to="`/exam/result/${item.id}`"
                            class="teal--text"
                          >
                            Show report card
                          </nuxt-link>
                        </td>
                      </tr>
                      <tr
                        v-show="
                          page_loading === false &&
                          participants_list.length === 0
                        "
                      >
                        <td colspan="4">
                          <p>Oops! no data found</p>
                        </td>
                      </tr>
                      <tr v-show="page_loading">
                        <td colspan="4" class="text-center">
                          <v-progress-circular
                            :size="40"
                            :width="4"
                            class="mt-12 mb-12"
                            color="orange"
                            indeterminate
                          />
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "test-maker-layout",
  name: "exams-participant",
  head() {
    return {
      title: "Participated tests",
    };
  },
  data() {
    return {
      filter: {
        level: "",
        state: "",
        area: "",
        school: "",
      },

      level_list: [],

      state_list: [],
      area_list: [],
      school_list: [],

      participants_list: [],

      page_loading: false,
      page: 1,
      all_files_loaded: false,
    };
  },
  mounted() {
    this.getTypeList("section");
    this.getTypeList("state");

    this.getParticipants();
    this.scroll();
  },
  watch: {
    "filter.level"(val) {
      this.school_list = [];
      this.filter.school = "";
      if (val && this.filter.area) this.getTypeList("school");

      //Reload result
      this.page = 1;
      this.all_files_loaded = false;
      this.participants_list = [];
      this.getParticipants();
      //End reload result
    },
    "filter.state"(val) {
      this.area_list = [];
      this.filter.area = "";

      this.school_list = [];
      this.filter.school = "";

      if (val) this.getTypeList("area", val);

      //Reload result
      this.page = 1;
      this.all_files_loaded = false;
      this.participants_list = [];
      this.getParticipants();
      //End reload result
    },
    "filter.area"(val) {
      this.school_list = [];
      this.filter.school = "";

      if (val && this.filter.level) this.getTypeList("school");

      //Reload result
      this.page = 1;
      this.all_files_loaded = false;
      this.participants_list = [];
      this.getParticipants();
      //End reload result
    },
    "filter.school"(val) {
      //Reload result
      this.page = 1;
      this.all_files_loaded = false;
      this.participants_list = [];
      this.getParticipants();
      //End reload result
    },
  },
  methods: {
    getTypeList(type, parent = "") {
      var params = {
        type: type,
      };
      if (type === "base") params.section_id = parent;

      if (type === "area") {
        params.state_id = parent;
      }

      if (type === "school") {
        params.section_id = this.filter.level;
        params.area_id = this.filter.area;
      }

      this.$fetch
        .$get("/api/v1/types/list", {
          params,
        })
        .then((res) => {
          var data = {};
          if (type === "section") {
            this.level_list = res.data;
          } else if (type === "state") {
            this.state_list = res.data;
          } else if (type === "area") {
            this.area_list = res.data;
          } else if (type === "school") {
            this.school_list = res.data;
          }
        })
        .catch((err) => {
          this.$toast.error(err);
        });
    },
    getParticipants() {
      if (this.all_files_loaded == false) {
        this.page_loading = true;
        this.$fetch
          .$get(`/api/v1/exams/participants/${this.$route.params.exam_id}`, {
            params: {
              perpage: 20,
              page: this.page,
              section: this.filter.level,
              state: this.filter.state,
              area: this.filter.area,
              school: this.filter.school,
            },
          })
          .then((response) => {
            this.participants_list.push(...response.data.list);

            if (response.data.list.length === 0) {
              //For terminate auto load request
              this.all_files_loaded = true;
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.page_loading = false;
          });
      }
    },
    showStatus(id) {
      if (id === "6") return "Under construction";
      else if (id === "7") return "Published";
    },
    scroll() {
      //For infinite loading
      window.onscroll = () => {
        //Scroll position
        var scrollPosition =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
          window.innerHeight +
          50;
        let bottomOfWindow =
          scrollPosition >= document.documentElement.offsetHeight;

        //Avoid the number of requests
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }

        //Load next page
        if (bottomOfWindow && this.all_files_loaded === false) {
          this.page_loading = true;
          this.timer = setTimeout(() => {
            this.page++;
            this.getParticipants();
          }, 800);
        }
      };
    },
  },
};
</script>

<style scoped>
p {
  font-size: 1.4rem;
}
</style>

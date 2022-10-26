<template>
  <v-container>
    <div>
      <v-col cols="12" class="px-0 px-sm-2">
        <v-row>
          <v-col cols="12" class="pl-5">
            <span class="text-h4 teal--text">
              <v-icon color="teal" large>
                mdi-clipboard-list-outline
              </v-icon>
              My tests
          </span>
          </v-col>
        </v-row>

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
              v-model="filter.grade"
              clearable
              :items="grade_list"
              item-value="id"
              item-text="title"
              label="Grade"
              outlined
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete
              dense
              :items="lesson_list"
              item-value="id"
              item-text="title"
              v-model="filter.lesson"
              clearable
              label="Lesson"
              outlined
            />
          </v-col>
        </v-row>
        <!--End filter section-->

        <v-card class="mt-3">
          <v-card-text class="px-sm-8 px-md-4">
            <v-row>
              <v-col cols="12" class="px-0 px-sm-4 px-md-4">
                <v-simple-table class="exams_table">
                  <template v-slot:default>
                    <tbody>
                    <tr
                      v-show="exam_list.length>0"
                      v-for="item in exam_list"
                      :key="item.id"
                    >
                      <td class="py-3">
                        <p class="font-weight-bold">{{ item.title }}</p>
                        <p class="mt-2">
                          <span class="icong-student"></span>
                          Participants: {{ item.participants.total }}
                        </p>
                      </td>
                      <td class="text-right">
                        <p>
                          {{ item.subdate }}
                        </p>
                        <div>
                          {{ showStatus(item.status) }}
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn icon color="error" small v-bind="attrs" v-on="on">
                                <v-icon small>
                                  mdi-delete
                                </v-icon>
                              </v-btn>
                            </template>
                            <span>Delete</span>
                          </v-tooltip>

                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn icon small v-bind="attrs" v-on="on">
                                <v-icon small>
                                  mdi-note-edit-outline
                                </v-icon>
                              </v-btn>
                            </template>
                            <span>Edit</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{on,attrs}">
                              <v-btn icon small color="primary" v-bind="attrs" v-on="on">
                                <v-icon small>
                                  mdi-share-variant-outline
                                </v-icon>
                              </v-btn>
                            </template>
                            <span>Share</span>
                          </v-tooltip>

                        </div>
                      </td>
                    </tr>
                    <tr v-show="page_loading===false && exam_list.length===0">
                      <td colspan="8">
                        <p>Oops! no data found</p>
                      </td>
                    </tr>
                    <tr v-show="page_loading">
                      <td cols="2" class="text-center">
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
  name: "exams-manage",
  // async asyncData({params,$axios}) {
  //   const examData=await $axios.$get('/api/v1/exams');
  //   return {examData};
  // },
  head() {
    return {
      title: 'Q & A manage'
    }
  },
  data() {
    return {
      filter: {
        level: '',
        grade: '',
        lesson: '',
      },

      level_list: [],
      grade_list: [],
      field_list: [],
      lesson_list: [],
      exam_list: [],

      page_loading: false,
      page: 1,
      all_files_loaded: false,

    }
  },
  mounted() {
    this.getTypeList('section');
    this.getExams();
    this.scroll();

  },
  watch: {
    "filter.level"(val) {
      this.filter.grade = '';
      this.filter.lesson = '';
      if (val)
        this.getTypeList('base', val);

      this.page = 1;
      this.all_files_loaded = false;
      this.exam_list = [];
      this.getExams();
    },
    "filter.grade"(val) {
      this.filter.lesson = '';
      if (val)
        this.getTypeList('lesson', val);

      this.page = 1;
      this.all_files_loaded = false;
      this.exam_list = [];
      this.getExams();
    },
    "filter.lesson"(val) {
      this.page = 1;
      this.all_files_loaded = false;
      this.exam_list = [];
      this.getExams();
    }
  },
  methods: {
    getTypeList(type, parent = '') {
      var params = {
        type: type
      }
      if (type === 'base')
        params.section_id = parent;
      if (type === 'lesson') {
        params.base_id = parent;
      }


      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        var data = {};
        if (type === 'section') {
          this.level_list = res.data;
        } else if (type === 'base') {
          this.grade_list = res.data;

        } else if (type === 'lesson') {
          this.lesson_list = res.data;
        }
      }).catch(err => {
        this.$toast.error(err);
      })
    },
    getExams() {
      if (!this.all_files_loaded) {
        this.page_loading = true;
        this.$axios.$get('/api/v1/exams', {
          params: {
            perpage: 20,
            section: this.filter.level,
            base: this.filter.grade,
            lesson: this.filter.lesson
          }
        }).then(response => {
          this.exam_list.push(...response.data.list);

          if (response.data.list.length === 0)//For terminate auto load request
            this.all_files_loaded = true;
        }).catch(err => {
          console.log(err);
        }).finally(() => {
            this.page_loading = false;
          }
        )
      }
    },
    showStatus(id) {
      if (id === "6")
        return "Under construction";
      else if (id === "7")
        return "Published";
    },
    scroll() {//For infinite loading
      window.onscroll = () => {
        //Scroll position
        var scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight + 50;
        let bottomOfWindow = scrollPosition >= document.documentElement.offsetHeight

        //Avoid the number of requests
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }

        //Load next page
        if (bottomOfWindow && this.all_files_loaded === false) {
          this.page_loading = true;
          this.timer = setTimeout(() => {
            this.page++
            this.getExams();
          }, 800)
        }
      }
    },

  }

}
</script>

<style scoped>
p {
  font-size: 1.4rem;
}
</style>

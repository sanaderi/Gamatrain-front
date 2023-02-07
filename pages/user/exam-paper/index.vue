<template>
  <div>
    <v-col cols="12" class="px-0 px-sm-2">
      <v-row>
        <v-col cols="12" class="pl-5">
          <span class="icon icong-test text-h3 teal--text"></span>
          <span class="text-h4 teal--text">
            Exam Paper
          </span>
        </v-col>
      </v-row>
      <v-card class="mt-3">
        <v-card-title class="text-h4">
          <v-row>
            <v-col cols="12" class="text-left">
              <v-btn to="/user/exam-paper/create" color="teal" class="white--text">
                New Exam Paper
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="px-sm-8 px-md-4">
          <v-row>
            <v-col cols="12" class="px-0 px-sm-4 px-md-4">
              <v-simple-table class="exams_table">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left text-h5">
                      #
                    </th>
                    <th class="text-center text-h5">
                      Title
                    </th>
                    <th class="text-center text-h5">
                      Score
                    </th>
                    <th class="text-center text-h5">
                      Download
                    </th>
                    <th class="text-center text-h5">
                      Date
                    </th>
                    <th class="text-center text-h5">
                      Status
                    </th>
                    <th class="text-center text-h5">
                      Actions
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    v-show="paper_list.length>0"
                    v-for="item in paper_list"
                    :key="item.id"
                  >
                    <td>{{ item.id }}</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr v-show="page_loading===false && paper_list.length===0">
                    <td colspan="7" class="text-center">
                      <p>Oops! no data found</p>
                    </td>
                  </tr>
                  <tr v-show="page_loading">
                    <td colspan="7" class="text-center">
                      <v-progress-circular
                        :size="30"
                        :width="3"
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
</template>

<script>
export default {
  layout: "dashboard_layout",
  name: "paper-manage",
  // async asyncData({params,$axios}) {
  //   const examData=await $axios.$get('/api/v1/exams');
  //   return {examData};
  // },
  data() {
    return {
      paper_list: [],

      //Paginate section
      page_loading: false,
      page: 1,
      all_files_loaded: false,
      //End paginate section
    }
  },
  head() {
    return {
      title: 'Exam Paper manage'
    }
  },
  mounted() {
    this.getPaperList();
  },
  methods: {
    getPaperList() {
      if (!this.all_files_loaded) {
        this.page_loading = true;
        this.$axios.$get('/api/v1/tests',
          {
            params: {
              perpage: 20,
              page: this.page,
              // section: this.filter.level,
              // base: this.filter.grade,
              // lesson: this.filter.lesson
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
  }

}
</script>

<style scoped>
p {
  font-size: 1.4rem;
}
</style>

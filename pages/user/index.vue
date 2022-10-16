<template>
  <div>
    <!--Profile section-->
    <v-row>
      <v-col cols="12" class="px-0 px-md-2">
        <v-card :flat="$vuetify.breakpoint.xs">
          <v-card-text class="pa-0 px-sm-8 pa-md-3">
            <v-row>

              <!--General info-->
              <v-col cols="12">
                <general-info-dashboard ref="general_info"/>
              </v-col>
              <!--End general info-->


              <!--Statistics section-->
              <v-col cols="12" class="px-0 px-md-4">
                <v-card color="#F8FAFB" class="mt-3 dashboard-statistic" flat>
                  <v-card-text class="px-0 px-sm-6 px-md-2">
                    <v-row class="text-center">
                      <v-col md="2" class="d-none d-md-block"></v-col>
                      <v-col cols="12" md="8">
                        <v-row>
                          <v-col :cols="user_type==='5' ? 3 : 4" :class="user_type==='5' ? 'd-md-flex' : 'd-none'">
                            <v-btn color="#DFF4EE" fab x-large>
                              <i class="fa-solid fa-dollar" style="color: teal"></i>
                            </v-btn>
                            <div class="pa-3">
                              <p class="text-h6">
                                Income
                              </p>
                              <p class="text-h6 text-md-h5 ">
                                <strong>
                                  ${{
                                    (this.user_info.user && this.user_info.user.cash ? Math.ceil(this.user_info.user.cash) : 0) | numberFormat
                                  }}
                                </strong>

                              </p>

                            </div>
                          </v-col>
                          <v-col :cols="user_type==='5' ? 3 : 4" class="d-md-flex">
                            <v-btn color="#D4F4EE" fab x-large>
                              <i class="fa-solid fa-wallet" style="color: #00D2AE;"></i>
                            </v-btn>
                            <div class="pa-3">
                              <p class="text-h6">
                                Wallet
                              </p>
                              <p class="text-h5 ">
                                <strong>
                                  ${{ $auth.user.credit | numberFormat }}
                                </strong>

                              </p>

                            </div>
                          </v-col>
                          <v-col :cols="user_type==='5' ? 3 : 4" class="d-md-flex">
                            <v-btn color="rgba(142, 11, 228, 0.1)" fab x-large>
                              <i class="fa-regular fa-envelope" style="color: #8E0BE4;"></i>
                            </v-btn>
                            <div class="pa-3">
                              <p class="text-h6">
                                Msg
                              </p>
                              <p class="text-h5 ">
                                <strong>
                                  {{
                                    user_info.unreadMessages && user_info.unreadMessages.total ? user_info.unreadMessages.total : 0
                                  }}
                                </strong>

                              </p>

                            </div>
                          </v-col>
                          <v-col :cols="user_type==='5' ? 3 : 4" class="d-md-flex">
                            <v-btn color="rgba(218, 222, 255, 1)" fab x-large>
                              <i class="fa-regular fa-star" style="color: #0B62E4;"></i>
                            </v-btn>
                            <div class="pa-3">
                              <p class="text-h6">
                                Score
                              </p>
                              <p class="text-h5 ">
                                <strong>
                                  {{ this.user_info.user && this.user_info.user.score ? this.user_info.user.score : 0 }}
                                </strong>

                              </p>

                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col md="2" class="d-none d-md-block"></v-col>

                      <!--                      <v-col cols="12" md="4" class="question-statistics-holder ">-->
<!--                        <question-statistics ref="question-statistics"/>-->
<!--                      </v-col>-->


                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <!--End Statistics section-->

              <!--Teaching request-->
              <!--Note: this section in English version is disabled-->
              <!--<teaching-request/>-->
              <!--End teaching request-->


            </v-row>

            <!--Content type-->
            <create-content-button ref="create-content-section" />
            <!--End content type-->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--End profile section-->

    <!--Exams section-->
    <v-row v-if="user_type==='6'">
      <v-col cols="12" class="px-0 px-sm-2">
        <v-card>
          <v-card-title class="text-h4">
            <v-row>
              <v-col cols="6">
                <i class="fa-solid fa-laptop mr-2"></i>
                Exams
              </v-col>
              <v-col cols="6" class="text-right">
                <v-btn class="warning">
                  See result
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="px-sm-8 px-md-4">
            <v-alert type="warning">
              You have not participated in 10 out of 20 tests
            </v-alert>

            <v-row class="mt-5 d-flex d-md-none">
              <v-col cols="6">
                <p class="text-h5">
                  <i class="fa-regular fa-circle-check green--text "></i>
                  Participated
                </p>
              </v-col>
              <v-col cols="6">
                <p class="text-h5">
                  <i class="fa-regular fa-times-circle red--text "></i>
                  Not Participated
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="px-0 px-sm-4 px-md-4">
                <v-simple-table class="exams_table">
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left text-h5">
                        Course name
                      </th>
                      <th class="text-center teal--text text-h5">
                        <i class="fa-regular fa-circle-check fa-xl green--text d-block d-md-none"></i>
                        <span class="d-none d-md-block">
                                Participated
                                </span>
                      </th>
                      <th class="text-center orange--text text-h5">
                        <i class="fa-regular fa-times-circle fa-xl red--text d-block d-md-none"></i>
                        <span class="d-none d-md-block">
                                  Not Participated
                                </span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                      v-for="item in exams"
                      :key="item.id"
                    >
                      <td>{{ item.title }}</td>
                      <td class="text-center">{{ item.participated }}</td>
                      <td class="text-center">{{ item.total - item.participated }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr bgcolor="#E5FBF7">
                      <td>Total</td>
                      <td class="text-center">
                        {{
                          user_info.examSuggestions && user_info.examSuggestions.participated ? user_info.examSuggestions.participated : ''
                        }}
                      </td>
                      <td class="text-center">
                        {{
                          user_info.examSuggestions && user_info.examSuggestions.total ? user_info.examSuggestions.total : ''
                        }}
                      </td>
                    </tr>
                    </tfoot>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--End exams section-->
  </div>
</template>

<script>
import Category from "@/components/common/category";
import Navigation from "@/components/dashboard/navigation";
import QuestionStatistics from "@/components/dashboard/question-statistics";
import CreateContentButton from "@/components/dashboard/create-content-button";
import GeneralInfoDashboard from "@/components/dashboard/general-info-dashboard";
import TeachingRequest from "@/components/dashboard/teaching-request";


export default {
  layout: "dashboard_layout",
  name: "dashboard",
  middleware: ['user_type', 'basic_info'],
  components: {
    TeachingRequest,
    GeneralInfoDashboard, CreateContentButton, QuestionStatistics, Navigation, Category
  },
  head() {
    return {
      title: 'Dashboard'
    }
  },
  created() {
    this.getUserInfo();

  },
  data() {
    return {
      user_type: this.$auth.user.group_id,
      exams: [],
      user_info: '',
      pendingReserves: ''
    }
  },
  methods: {
    getUserInfo() {
      var apiUrl = '/api/v1/students/dashboard';
      if (this.user_type === '5')
        apiUrl = '/api/v1/teachers/dashboard';

      this.$axios.$get(apiUrl)
        .then(response => {
          this.user_info = response.data;
          this.$refs.general_info.userData = this.user_info.user;
          this.$refs.general_info.progressData = this.user_info.profileCompletion;

          this.$refs["create-content-section"].$refs["question-statistics"].statistics = this.user_info.stats;

          // For teacher user

          if (this.user_type === '5') {
            var stats = this.user_info.stats;
            this.initContentStats(stats);
          }


          //Fill table
          this.exams = this.user_info.examSuggestions.lessons;


        }).catch(err => {
        this.$toast.error(err.response.data.message);
      });

    },
    initContentStats(stats) {//Init create content box statistics
      var objIndex = this.$refs["create-content-section"].button_list.findIndex(x => x.class === 'sample_exam');
      this.$refs["create-content-section"].button_list[objIndex].count = stats.test.total;

      var objIndex = this.$refs["create-content-section"].button_list.findIndex(x => x.class === 'training_content');
      this.$refs["create-content-section"].button_list[objIndex].count = stats.file.total;

      var objIndex = this.$refs["create-content-section"].button_list.findIndex(x => x.class === 'question_answer');
      this.$refs["create-content-section"].button_list[objIndex].count = stats.question.total;

      var objIndex = this.$refs["create-content-section"].button_list.findIndex(x => x.class === 'online_exam');
      this.$refs["create-content-section"].button_list[objIndex].count = stats.test.total;
    },
  }
}
</script>

<style scoped>
.dashboard-statistic i {
  font-size: 30px
}

.teaching-request-details i {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.teaching-request-details span {
  font-size: 1.5rem;
}

.exams_table tbody tr td {
  font-size: 1.2rem !important;
}

.exams_table tfoot tr td {
  font-size: 1.2rem !important;
  font-weight: bolder;
}

/*.question-statistics-holder {*/
/*  background: #bf360c;*/
/*  border-radius: 5px;*/
/*}*/

</style>

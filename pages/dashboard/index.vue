<template>
  <div>
    <!--Profile section-->
    <v-row>
      <v-col cols="12" class="px-0 px-md-2">
        <v-card :flat="$vuetify.breakpoint.xs">
          <v-card-text class="pa-0 px-sm-8 pa-md-3">
            <v-row>
              <v-col cols="12">
                <general-info-dashboard/>
              </v-col>


              <!--Statistics section-->
              <v-col cols="12" class="px-0 px-md-4">
                <v-card color="#F8FAFB" class="mt-3 dashboard-statistic" flat>
                  <v-card-text class="px-0 px-sm-6 px-md-2">
                    <v-row class="text-center">
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
                                  $80,000
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
                                  $251,000
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
                                  15
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
                                  6/10
                                </strong>

                              </p>

                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="4" class="question-statistics-holder ">
                        <question-statistics/>
                      </v-col>


                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <!--End Statistics section-->

              <!--Teaching request-->
              <v-col cols="12" class="px-0 px-md-4">
                <v-card>
                  <v-card-text class="px-0 px-sm-6 px-md-4">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-row>
                          <v-col cols="12" class="d-flex">
                            <v-btn class="d-flex" outlined fab small>
                              <v-icon>
                                mdi-account-outline
                              </v-icon>
                            </v-btn>
                            <div class="ml-2">
                              <p class="text-h5 ">
                                <strong>
                                  Nasrin javadi
                                </strong>

                              </p>
                              <p class="text-h6">
                                Teaching request from nasrin javadi
                              </p>
                            </div>
                          </v-col>

                          <v-col cols="6" class="teaching-request-details">
                            <i class="fa-regular fa-clock teal--text"></i>
                            <span>
                                    Tuesday, 18:00
                                  </span>
                          </v-col>
                          <v-col cols="6" class="teaching-request-details">
                            <i class="fa-solid fa-book-open teal--text"></i>
                            <span>
                                    Lesson: math
                                  </span>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-btn color="#E2CA31" block>Ok</v-btn>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-btn color="#00D2AE" block>Send message</v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="6" class="text-right px-6 px-sm-3 pt-0 pt-md-4">
                        <v-btn :width="$vuetify.breakpoint.smAndDown ? '' : '200'"
                               :block="$vuetify.breakpoint.smAndDown"
                               outlined
                        >
                          <i class="fa-solid  fa-exclamation-circle red--text mr-3"></i>
                          Cancel
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <!--End teaching request-->


            </v-row>

            <!--Content type-->
            <create-content-button v-if="$auth.user.group_id==='5'"/>
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
                      :key="item.name"
                    >
                      <td>{{ item.course_name }}</td>
                      <td class="text-center">{{ item.participated }}</td>
                      <td class="text-center">{{ item.not_participated }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr bgcolor="#E5FBF7">
                      <td>Total</td>
                      <td class="text-center">5</td>
                      <td class="text-center">32</td>
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


export default {
  layout: "dashboard_layout",
  name: "dashboard",
  middleware: ['user_type','basic_info'],
  components: {
    GeneralInfoDashboard, CreateContentButton, QuestionStatistics, Navigation, Category
  },
  mounted() {
    this.getUserInfo();
  },
  data() {
    return {
      user_type: this.$auth.user.group_id,
      exams: [
        {course_name: 'Mathmatics', participated: 0, not_participated: 15},
        {course_name: 'Phyisics', participated: 0, not_participated: 15},
        {course_name: 'History', participated: 0, not_participated: 15}
      ]
    }
  },
  methods:{
    getUserInfo(){
      var apiUrl='/api/v1/students/dashboard';
      if (this.user_type==='5')
        apiUrl='/api/v1/teachers/dashboard';

      this.$axios.$get(apiUrl)
        .then(response=>{
        console.log(response);
      }).catch(err=>{
        this.$toast.error(err.response.data.message);
      });

    }
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

.question-statistics-holder {
  background: #bf360c;
  border-radius: 5px;
}

</style>

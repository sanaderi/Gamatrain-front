<template>
  <v-container class="dashboard">
    <!-- Start : Category -->
    <category/>
    <!-- End:Category -->

    <v-divider class="d-block d-md-none"/>

    <!--Mobile menu-->
    <dashboard-mobile-menu/>
    <!--End Mobile menu-->


    <v-card flat class="mt-0">
      <v-card-text class="px-0 pt-0">
        <v-row>
          <!--Desktop dashboard menu-->
          <v-col class="d-none d-md-block" md="2">
            <v-navigation-drawer
              v-model="drawer"
              :mini-variant.sync="mini"
              permanent
            >
              <v-list-item class="px-2 d-none d-md-flex">
                <v-list-item-avatar>
                  <v-img class="mr-2" :src="require('@/assets/images/dashboard-icon.png')"></v-img>
                </v-list-item-avatar>

                <v-list-item-title class="text-h5">Dashboard</v-list-item-title>

                <v-btn
                  v-if="$vuetify.breakpoint.xs"
                  icon
                  @click.stop="mini = !mini"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-list-item>

              <v-divider></v-divider>
              <navigation/>
            </v-navigation-drawer>
          </v-col>
          <!--End desktop dashboard menu-->


          <v-col cols="12" md="10" class="px-0 px-md-2 pt-0 mt-0">
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
                                  <v-col cols="3" class="d-md-flex">
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
                                  <v-col cols="3" class="d-md-flex">
                                    <v-btn color="#D4F4EE" fab x-large>
                                      <i class="fa-solid fa-wallet" style="color: #00D2AE;"></i>
                                    </v-btn>
                                    <div class="pa-3">
                                      <p class="text-h6">
                                        Wallet
                                      </p>
                                      <p class="text-h6 text-md-h5 ">
                                        <strong>
                                          $80,000
                                        </strong>

                                      </p>

                                    </div>
                                  </v-col>
                                  <v-col cols="3" class="d-md-flex">
                                    <v-btn color="rgba(142, 11, 228, 0.1)" fab x-large>
                                      <i class="fa-regular fa-envelope" style="color: #8E0BE4;"></i>
                                    </v-btn>
                                    <div class="pa-3">
                                      <p class="text-h6">
                                        Msg
                                      </p>
                                      <p class="text-h6 text-md-h5 ">
                                        <strong>
                                          15
                                        </strong>

                                      </p>

                                    </div>
                                  </v-col>
                                  <v-col cols="3" class="d-md-flex">
                                    <v-btn color="rgba(218, 222, 255, 1)" fab x-large>
                                      <i class="fa-regular fa-star" style="color: #0B62E4;"></i>
                                    </v-btn>
                                    <div class="pa-3">
                                      <p class="text-h6">
                                        Score
                                      </p>
                                      <p class="text-h6 text-md-h5 ">
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
                    <create-content-button/>
                    <!--End content type-->

                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!--End profile section-->

          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Category from "@/components/common/category";
import Navigation from "@/components/dashboard/navigation";
import QuestionStatistics from "@/components/dashboard/question-statistics";
import CreateContentButton from "@/components/dashboard/create-content-button";
import GeneralInfoDashboard from "@/components/dashboard/general-info-dashboard";

export default {
  name: "dashboard",
  middleware:['user_type'],
  components: {GeneralInfoDashboard, CreateContentButton, QuestionStatistics, Navigation, Category},
  data() {
    return {


      exams: [
        {course_name: 'Mathmatics', participated: 0, not_participated: 15},
        {course_name: 'Phyisics', participated: 0, not_participated: 15},
        {course_name: 'History', participated: 0, not_participated: 15}
      ]
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

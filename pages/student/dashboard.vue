<template>
  <v-container>
    <!-- Start : Category -->
    <category/>
    <!-- End:Category -->

    <v-row class="d-block d-md-none  ">
      <v-col cols="12" sm="12" class="pb-0 pb-sm-3 px-0 px-sm-0">
        <v-menu offset-y>
          <template v-slot:activator="{on,attrs}">
            <v-btn
              outlined
              block
              color="teal"
              v-bind="attrs"
              v-on="on"
              x-large>
              <img class="mr-2" width="20" :src="require('@/assets/images/dashboard-icon.png')">
              <p class="text-h5">Dashboard Menu</p>
              <i class="fa-solid fa-caret-down mx-2"></i>
              <v-spacer/>
            </v-btn>
          </template>
          <v-divider></v-divider>

          <navigation/>
        </v-menu>
        <!--Nav for mobile-->
      </v-col>
    </v-row>

    <v-card flat class="mt-0">
      <v-card-text class="px-0">
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


          <v-col cols="12" md="10" class="px-0 px-md-2">
            <!--Choose username-->
            <v-alert
              class="py-0 pl-5"
              color="#00D2AE"
              prominent
            >
              <v-row>
                <v-col cols="12" md="8" class="pb-0">
                  <v-text-field
                    v-model="message"
                    filled
                    dense
                    class="mt-4 mb-0"
                    :style="$vuetify.breakpoint.mdAndUp ? 'width: 500px' : ''"
                    label="Choose username"
                    type="text"
                  >
                    <templete slot="append">
                      <v-btn class="default" absolute style="right: 0;height:100%;top: 0;bottom: 0">choose</v-btn>
                    </templete>
                  </v-text-field>
                </v-col>
                <v-col md="4" class=" d-none d-md-block pb-0">
                  <v-img width="200" :src="require('@/assets/images/username_pick_1.png')">
                    <v-img width="100" class="mt-4" :src="require('@/assets/images/username_pic_2.png')"/>
                  </v-img>
                </v-col>
              </v-row>
            </v-alert>
            <!--End choose username-->

            <!--Profile section-->
            <v-row>
              <v-col cols="12" class="px-0 px-md-2">
                <v-card :flat="$vuetify.breakpoint.xs">
                  <v-card-text class="pa-0 px-sm-8 pa-md-3">
                    <v-row>
                      <v-col cols="12" md="3" class="d-flex">
                        <v-btn class="d-flex" outlined fab x-large>
                          <v-icon>
                            mdi-account-outline
                          </v-icon>
                        </v-btn>
                        <div class="pa-3">
                          <p class="text-h4 ">
                            <strong v-if="$auth.user.first_name || $auth.user.last_name">
                              {{ $auth.user.first_name }} {{ $auth.user.last_name }}
                            </strong>
                            <strong v-else>
                              No name
                            </strong>

                          </p>
                          <p class="text-h5">
                            High school student
                          </p>
                        </div>
                      </v-col>
                      <v-col md="9" class="d-none d-md-block text-right ">
                        <question-statistics/>
                      </v-col>
                      <!--Profile complete progress-->
                      <v-col cols="12">
                        <p class="text-h5 font-weight-bold mt-3 mb-3">
                          Profile complete: 20%
                        </p>
                        <v-progress-linear
                          color="teal"
                          height="8"
                          buffer-value="0"
                          value="20"
                          stream
                        ></v-progress-linear>
                      </v-col>
                      <!--End profile complete progress-->

                      <!--Desktop question statistics-->
                      <v-col md="12" class="d-block d-md-none text-center ">
                        <question-statistics/>
                      </v-col>
                      <!--Desktop question statistics-->


                      <!--Statistics section-->
                      <v-col cols="12" class="px-0 px-md-4">
                        <v-card color="#F8FAFB" class="mt-3 dashboard-statistic" flat>
                          <v-card-text class="px-0 px-sm-6 px-md-2">
                            <v-row class="text-center">
                              <v-col cols="4" class="d-md-flex">
                                <v-btn color="#D4F4EE" fab x-large>
                                  <i class="fa-solid fa-wallet" style="color: #00D2AE;"></i>
                                </v-btn>
                                <div class="pa-3">
                                  <p class="text-h6">
                                    Wallet balance
                                  </p>
                                  <p class="text-h5 ">
                                    <strong>
                                      $251,000
                                    </strong>

                                  </p>

                                </div>
                              </v-col>
                              <v-col cols="4" class="d-md-flex">
                                <v-btn color="rgba(142, 11, 228, 0.1)" fab x-large>
                                  <i class="fa-regular fa-envelope" style="color: #8E0BE4;"></i>
                                </v-btn>
                                <div class="pa-3">
                                  <p class="text-h6">
                                    Unread mesages
                                  </p>
                                  <p class="text-h5 ">
                                    <strong>
                                      15
                                    </strong>

                                  </p>

                                </div>
                              </v-col>
                              <v-col cols="4" class="d-md-flex">
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
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!--End profile section-->

            <!--Exams section-->
            <v-row>
              <v-col cols="12" class="px-0 px-sm-2">
                <v-card>
                  <v-card-title class="text-h4">
                    <i class="fa-solid fa-laptop mr-2"></i>
                    Exams
                  </v-card-title>
                  <v-card-text class="px-sm-8 px-md-4">
                    <v-alert type="warning">
                      You have not participated in 10 out of 20 tests
                    </v-alert>
                    <v-row class="mt-8">
                      <v-col cols="6">
                        <p class="text-h4">Exams</p>
                      </v-col>
                      <v-col cols="6" class="text-right">
                        <v-btn class="warning">
                          See result
                        </v-btn>
                      </v-col>
                    </v-row>
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

export default {
  name: "dashboard",
  components: {QuestionStatistics, Navigation, Category},
  data() {
    return {
      items: [
        {title: 'Add', icon: 'mdi-plus-circle-outline'},
        {title: 'Online exam', icon: 'mdi-laptop'},
        {title: 'Financial', icon: 'mdi-credit-card-outline'},
        {title: 'Messages', icon: 'mdi-email-outline'},
        {title: 'Profile', icon: 'mdi-account-outline'},
        {title: 'Notification', icon: 'mdi-bell-outline'},
      ],

      drawer: true,
      mini: false,

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
</style>

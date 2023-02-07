<template>
  <div class="test-details-content">
    <!-- Start : Category -->
    <category/>
    <!-- End:Category -->

    <!--  Start: breadcrumb  -->
    <section>
      <v-container class="py-0">
        <div class=" mt-0 py-0 header-path">
          <breadcrumb :breads="breads"/>
        </div>
      </v-container>
    </section>
    <!--  End: breadcrumb  -->

    <!--  Start: detail  -->
    <section>
      <v-container class="py-0">
        <div class="detail mt-8">
          <v-row>
            <v-col cols="12" md="3">
              <!--Show gallery of preview and book first page-->
              <preview-gallery/>
              <!--Show gallery of preview and book first page-->
            </v-col>
            <v-col cols="12" md="6">
              <!--  Description   -->
              <div class="d-flex mb-4">
                <div class="w-100">
                  <div class="d-flex align-center justify-space-between header">
                    <h1 class="detail-title">{{ detail.title }}</h1>
                  </div>
                  <div class="description-holder">
                    <p>Suitable for fields:</p>
                    <p class="mb-7">-Literature and Humanities</p>
                    <p> Topics: </p>
                    <p>Lesson 6: World War I and Iran</p>
                    <p>Lesson 7: Iran during the reign of Reza Shah</p>
                    <p>Lesson 8: World War II and the world after it</p>
                    <p>Lesson 9: Nationalization movement of Iran's oil industry</p>
                    <p>The designed questions contain 130 standard test questions from sixth to ninth courses with key
                      answers and based on the new book printed in 1400</p>
                  </div>

                  <div class="label-holder">
                    <v-chip v-for="(label, index) in detail.labels"
                            :key="index" class="ma-1"
                            to="/"
                    >
                      {{ label }}
                    </v-chip>
                  </div>
                </div>
              </div>
              <!--   Download Btn and Description  -->
              <div class="text-center download-sec">
                <div class="d-none d-md-block mb-4">
                  <p>
                    <span class="mdi mdi-bell icon"></span>
                    <span class="login">Login</span>
                    <span class="register">
                    (register)
                    </span>
                    to download and charge your wallet.
                  </p>
                </div>
                <div class="font-weight-bold answer">
                  <span class="mdi mdi-checkbox-marked icon"></span>
                  <span> The key answer sheet is at the end of the exam file.</span>
                </div>
              </div>
              <!--   fileCopyRight  -->
              <div class="d-none d-md-block text-center file-copy-right">
                <p class="">It is forbidden to republish the contents in cyber space.</p>
              </div>
            </v-col>
            <v-col md="3">
              <v-card flat class="content_main_info">
                <v-row class=" align-center">
                  <v-col cols="3">
                    <v-img
                      :src="require('assets/images/dexter-morse1.png')"
                      alt=""
                      class="d-inline-block"
                      cover
                      height="48"
                      width="48"
                    />
                  </v-col>
                  <v-col cols="9" class="pl-0">
                    <p class="creator_title">Arian Etemadi</p>
                  </v-col>
                </v-row>
                <v-divider class="my-2"/>
                <v-row>
                  <v-col cols="12" class="pb-0">
                    File type: continuous evaluation
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    Number of file pages: 4
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    Viewed: 153583
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    last update:9 Jul 2021
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    Crash report
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    Share
                  </v-col>
                </v-row>

                <div class="text-center mt-2">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                  />
                </div>
                <v-divider/>
                <v-row class="mt-1">
                  <v-col cols="12" class="pb-0">
                    <v-btn block color="primary">
                      Download WORD file | 0.5$
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn block color="error">
                      Download PDF file | 0.1$
                    </v-btn>
                  </v-col>
                </v-row>

              </v-card>
            </v-col>
          </v-row>

        </div>
      </v-container>
    </section>
    <!--  End: detail  -->


    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <!--  Start: Course Card  -->
          <section>
            <div class="d-flex  align-center course-card box">
              <div class="right">
                <v-row>
                  <v-col cols="2">
                    <nuxt-link to="">
                      <img height="98" width="98" :src="require(`~/assets/images/teacher1.png`)" alt=""/>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="10">
                    <div class="description ml-4">
                      <div>
                        <nuxt-link to="">
                          <h2 class="course-title">PowerPoint of the complete educational course, date (3) of the 12th
                            grade of the second secondary-theoretical period</h2>
                        </nuxt-link>
                      </div>
                      <v-row>
                        <v-col cols="10">
                          <div>
                            <nuxt-link to="" class="teacher">
                              <i class="fa-solid fa-user icon"></i>
                              <span>Lecturer: Shamsi Shabani</span>
                            </nuxt-link>
                          </div>
                          <div>
                            <p class="duration">
                              <i class="fa-solid fa-clock icon"></i>
                              <span>Course duration: 942 slides (13 files)</span>
                            </p>
                          </div>
                        </v-col>
                        <v-col cols="2">
                          <nuxt-link to="" class="teal--text">
                            <strong>
                              View
                            </strong>
                          </nuxt-link>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>

            </div>
          </section>
          <!--  End: Course Card  -->
        </v-col>


        <v-col cols="12" md="6">
          <!--  Start:  Azmoon test album card   -->
          <section>
            <div class="d-flex align-center album-card box">
              <div class="right">
                <v-row>
                  <v-col cols="2">
                    <nuxt-link to="">
                      <img :src="require(`~/assets/images/poster1.jpg`)" alt="" class="poster-img"/>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="10">
                    <div class="description ml-2">
                      <nuxt-link to="">
                        <h2 class="course-title">Exam test bank album, date (3) twelfth of the second term of
                          high school-theoretical</h2>
                      </nuxt-link>

                      <v-row>
                        <v-col cols="10">
                          <div class="num">
                            <i class="fa-solid fa-list-ol icon"></i>
                            <span>Number of tests: 1399</span>
                          </div>
                          <div class="level">
                            <i class="fa-solid fa-superscript icon"></i>
                            <span>Difficulty: Easy</span>
                          </div>
                        </v-col>
                        <v-col cols="2">
                          <nuxt-link to="" class="teal--text">
                            <strong>
                              View
                            </strong>
                          </nuxt-link>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </div>

            </div>
          </section>
          <!--  End:  Azmoon test album card   -->
        </v-col>
      </v-row>
    </v-container>


    <!-- Start : Sample Test -->
    <related-content/>
    <!-- End : Sample test -->
    <!-- Start: Feed -->
    <section class="feed">
      <v-container class="pa-4 pa-md-12 pt-10">
        <v-row>
          <v-col cols="12" md="6">
            <latest-training-content/>
          </v-col>

          <v-col cols="12" md="6" class="related-ask-test py-0 d-flex flex-column justify-space-between">
            <related-qa/>

            <related-online-exam/>
          </v-col>

        </v-row>
      </v-container>
    </section>
    <!-- End: Feed -->


  </div>
</template>
<script>
import Breadcrumb from "../../../components/widgets/breadcrumb";
import LastViews from "@/components/common/last-views";
import RelatedCardBox from "./components/related-card-box"
import Category from "@/components/common/category";
import PreviewGallery from "@/components/details/preview-gallery";
import RelatedContent from "@/components/details/related-content";
import LatestTrainingContent from "@/components/details/latest-training-content";
import RelatedQa from "@/components/details/related-qa";
import RelatedOnlineExam from "@/components/details/related-online-exam";

export default {
  name:"test-details",
  auth:false,
  components: {
    RelatedOnlineExam,
    RelatedQa,
    LatestTrainingContent,
    RelatedContent,
    PreviewGallery,
    Category,
    Breadcrumb,
    LastViews,
    RelatedCardBox
  },
  // async asyncData({params, $axios}) {
  //   // This could also be an action dispatch
  //   const contentData =await $axios.$get(`/api/v1/exams/${params.id}`);
  //   return {contentData};
  // },

  data: () => ({
    rating: 4.5,
    contentData:[],
    breads: [
      {
        text: 'Paper',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Second year of high school',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Twelfth',
        disabled: false,
        href: 'breadcrumbs_link_2',
      },
      {
        text: 'Literature and Humanities',
        disabled: false,
        href: 'breadcrumbs_link_3',
      },
      {
        text: 'Date(3)',
        disabled: true,
        href: 'breadcrumbs_link_4',
      },
    ],
    detail: {
      poster: 'poster1.jpg',
      linkPoster: '',
      title: 'A collection of 120 test questions for lessons 6 to 9 on (3) 12th',
      rate: 5,
      previewImage: 'test1.png',
      labels: ['History (3)', 'Twelfth', 'Second Secondary', 'Literature', 'Kermanshah', 'District 2', 'Shohadai Parvin', 'Farvardin', '2019',
      ]
    },
    model: null,
    sampleTestList: [
      {
        type: 'azmoon',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: 'azmoon',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: 'azmoon',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Mehran Zangeneh',
        ownerImg: 'teacher2.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'The series of tests of the twelfth history book Lessons 1 to 12',
        pages: '222',
        owner: 'Gama management team',
        ownerImg: 'gamaadmin.png',
      },
    ],
    relatedList: [
      {
        class: 'learning',
        header: 'Related educational content',
        icon: 'learnfiles',
        description: ' File های پاورپوینت، ویدئو، صوتی، متنی و ...',
        contentItemList: [
          {
            title: 'Online teaching, page 53 to 58 of Arabic (3) twelfth human | Lesson 4: The order of nature',
            link: ''
          },
          {
            title: 'Pamphlet and Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
            link: ''
          },
          {
            title: 'Online teaching Arabic page 1 to 8 (3) 12th human | Lesson 1: Translation',
            link: ''
          },
        ],
      },
      {
        class: 'question',
        header: 'Related Q&As',
        icon: 'qa',
        description: "Ask questions or answer other people's questions...",
        contentItemList: [
          {
            title: 'Online teaching, page 53 to 58 of Arabic (3) twelfth human | Lesson 4: The order of nature',
            link: ''
          },
          {
            title: 'Pamphlet and Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
            link: ''
          },
          {
            title: 'Online teaching Arabic page 1 to 8 (3) 12th human | Lesson 1: Translation',
            link: ''
          },
        ],
      },
      {
        class: 'blog',
        header: 'Related textbooks',
        icon: 'blog',
        contentItemList: [
          {
            title: 'Online teaching, page 53 to 58 of Arabic (3) twelfth human | Lesson 4: The order of nature',
            link: ''
          },
          {
            title: 'Pamphlet and Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
            link: ''
          },
          {
            title: 'Online teaching Arabic page 1 to 8 (3) 12th human | Lesson 1: Translation',
            link: ''
          },
        ],
      },
      {
        class: 'azmoon',
        header: 'Related online tests',
        icon: 'azmoon',
        contentItemList: [
          {
            title: 'Online teaching, page 53 to 58 of Arabic (3) twelfth human | Lesson 4: The order of nature',
            link: ''
          },
          {
            title: 'Pamphlet and Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
            link: ''
          },
          {
            title: 'Online teaching Arabic page 1 to 8 (3) 12th human | Lesson 1: Translation',
            link: ''
          },
        ],
      },
    ],
  }),
}
</script>

<style>
.content_main_info {
  padding: 27px;
  background: #F5F5F5 !important;
  border-radius: 6px;
}

.content_main_info .creator_title {
  font-size: 18px;
}
</style>

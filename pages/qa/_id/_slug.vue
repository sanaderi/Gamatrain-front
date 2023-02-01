<template>
  <div class="test-details-content">
    <!-- Start : Category -->
    <category/>
    <!-- End:Category -->

    <!--  Start: breadcrumb  -->
    <section>
      <v-container class="py-0 mb-4">
        <div class=" mt-0 py-0 header-path">
          <breadcrumb :breads="breads"/>
        </div>
      </v-container>
    </section>
    <!--  End: breadcrumb  -->

    <!--  Start: detail  -->
    <section>
      <v-container class="py-0">
        <div class="detail mt-md-8">
          <v-row>
            <v-col cols="12" md="9">
             <!--Question section-->
              <v-row>
                <v-col cols="12">
                  <v-row class="fill-height">
                    <!--Score action-->
                    <v-col cols="1" class="pr-0 d-none d-md-block">
                      <v-card flat color="#F5F5F5" class="d-flex fill-height text-center" min-height="200">
                        <v-row>
                          <v-col cols="12">
                            <v-btn icon x-large>
                              <v-icon size="88">
                                mdi-menu-up
                              </v-icon>
                            </v-btn>
                            <p class="text-h4">
                              5
                            </p>
                            <v-btn icon x-large>
                              <v-icon size="88">
                                mdi-menu-down
                              </v-icon>
                            </v-btn>
                            <v-btn icon width="100%">
                              <v-icon>
                                mdi-bookmark
                              </v-icon>
                            </v-btn>
                            <v-btn icon width="100%">
                              <v-icon>
                                mdi-alert-octagon-outline
                              </v-icon>
                            </v-btn>
                            <v-btn icon width="100%">
                              <v-icon>
                                mdi-share-variant-outline
                              </v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="12"  align-self="end">
                            <v-btn icon class="mb-4"   width="100%">
                              <v-icon>
                                mdi-reply
                              </v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                    <!--End score action-->

                    <v-col cols="12" md="11">
                      <v-card color="#F5F5F5" flat>
                        <v-card-text>
                          <h1 class="text-h4 font-weight-bold mb-2">
                            {{ contentData.title }}
                          </h1>

                          <v-row>
                            <v-col cols="9" >
                              <div class="d-flex pb-0">
                                <nuxt-link to="/user/edit-profile">
                                  <img width="47" height="47"
                                       v-if="contentData.avatar" :src="contentData.avatar"/>
                                  <v-btn v-else width="47" height="47" class="d-flex" outlined fab x-large>
                                    <v-icon>
                                      mdi-account-outline
                                    </v-icon>
                                  </v-btn>
                                </nuxt-link>
                                <div class="pa-3">
                                  <p class="text-h6 ">
                                    <strong v-if="contentData.first_name || contentData.last_name">
                                      {{ contentData.first_name }} {{ contentData.last_name }}
                                    </strong>
                                    <strong v-else>
                                      No name
                                    </strong>
                                  </p>
                                  <p class="text-h6">
                               <span class="orange--text">
                                 Unknown question('s)
                               </span>
                                    |
                                    <span class="green--text">
                                 {{ contentData.replies.num }} Answer('s)
                               </span>
                                    |
                                    <span class="blue--text">
                                 {{ contentData.score }} Score
                               </span>
                                  </p>
                                </div>
                              </div>
                            </v-col>

                            <v-col cols="3" class="text-right">
                              <v-btn outlined color="success">
                                <v-icon class="mr-1">
                                  mdi-message-reply-text
                                </v-icon>
                                Chat
                              </v-btn>
                            </v-col>
                          </v-row>

                          <p class="mt-2 text-h5" v-html="contentData.question.replace(/\n/g, '<br />')"/>


                          <div class="label-holder mt-10 mb-0">
                            <v-chip link class="mr-1">
                              <nuxt-link :to="`/search?type=learnfiles&section=${contentData.section}`">
                                {{ contentData.section_title }}
                              </nuxt-link>
                            </v-chip>
                            <v-chip link class="mr-1">
                              <nuxt-link
                                :to="`/search?type=learnfiles&section=${contentData.section}&base=${contentData.base}`">
                                {{ contentData.base_title }}
                              </nuxt-link>
                            </v-chip>
                            <v-chip link class="ma-1">
                              <nuxt-link
                                :to="`/search?type=learnfiles&section=${contentData.section}&base=${contentData.base}&lesson=${contentData.lesson}`">
                                {{ contentData.lesson_title }}
                              </nuxt-link>
                            </v-chip>


                          </div>

                        </v-card-text>
                        <v-card-actions>
                          <v-row>
                            <v-col cols="4" md="6">
                              <v-btn text plain class="simple-btn">
                                <v-icon class="mr-1">
                                  mdi-comment-plus
                                </v-icon>
                                Add comment
                              </v-btn>
                            </v-col>
                            <v-col cols="8" md="6" class="text-right d-flex">
                              <v-spacer/>
                              <v-btn text class="simple-btn">
                                <v-icon class="mr-1">
                                  mdi-calendar-month
                                </v-icon>
                                {{$moment(contentData.up_date).fromNow()}}
                              </v-btn>
                              <v-btn text class="simple-btn">
                                <v-icon class="mr-1">
                                  mdi-clock-time-five-outline
                                </v-icon>
                                {{$moment(contentData.up_date).format('HH:mm')}}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>

                  <!--Answers section-->
                  <!--              <v-row>-->
                  <!--                <v-col cols="3">-->
                  <!--                  Two answers-->
                  <!--                </v-col>-->
                  <!--                <v-col cols="9">-->
                  <!--                  <v-divider/>-->
                  <!--                </v-col>-->
                  <!--              </v-row>-->

                  <!--End answers section-->
                </v-col>
              </v-row>
              <!--End question section-->

              <v-row>
                <v-col cols="2">
                  <h2>
                    {{contentData.replies.num}}
                    <span v-if="contentData.replies.num>1">Answers</span>
                    <span else>Answer</span>
                  </h2>
                </v-col>
                <v-col cols="10">
                  <v-divider class="my-4"/>
                </v-col>
              </v-row>

              <!--Answer section-->
              <v-row>
                <v-col cols="12" >
                  <v-row class="fill-height"
                  v-for="answer in contentData.replies.list"
                  >
                    <!--Score action-->
                    <v-col cols="1" class="pr-0 d-none d-md-block">
                      <v-card flat color="#F5F5F5" class="d-flex fill-height text-center" min-height="200">
                        <v-row>
                          <v-col cols="12">
                            <v-btn icon x-large>
                              <v-icon size="88">
                                mdi-menu-up
                              </v-icon>
                            </v-btn>
                            <p class="text-h4">
                              1
                            </p>
                            <v-btn icon x-large>
                              <v-icon size="88">
                                mdi-menu-down
                              </v-icon>
                            </v-btn>
                            <v-btn icon width="100%">
                              <v-icon>
                                mdi-bookmark
                              </v-icon>
                            </v-btn>
                            <v-btn icon width="100%">
                              <v-icon>
                                mdi-alert-octagon-outline
                              </v-icon>
                            </v-btn>
                            <v-btn icon width="100%">
                              <v-icon>
                                mdi-share-variant-outline
                              </v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                    <!--End score action-->

                    <v-col cols="12" md="11" >
                      <v-card color="#F5F5F5"  flat >
                        <v-card-text  >
                          <v-row >
                            <v-col cols="9" >
                              <div class="d-flex pb-0">
                                <nuxt-link to="/user/edit-profile">
                                  <img width="47" height="47"
                                       v-if="answer.avatar" :src="answer.avatar"/>
                                  <v-btn v-else width="47" height="47" class="d-flex" outlined fab x-large>
                                    <v-icon>
                                      mdi-account-outline
                                    </v-icon>
                                  </v-btn>
                                </nuxt-link>
                                <div class="pa-3">
                                  <p class="text-h6 ">
                                    <strong v-if="answer.first_name || answer.last_name">
                                      {{ answer.first_name }} {{ answer.last_name }}
                                    </strong>
                                    <strong v-else>
                                      No name
                                    </strong>
                                  </p>
                                  <p class="text-h6">
                               <span class="orange--text">
                                 Unknown question('s)
                               </span>
                                    |
                                    <span class="green--text">
                                 {{ contentData.replies.num }} Answer('s)
                               </span>
                                    |
                                    <span class="blue--text">
                                 {{ contentData.score }} Score
                               </span>
                                  </p>
                                </div>
                              </div>
                            </v-col>

                            <v-col cols="3" class="text-right">
                              <v-btn outlined color="success">
                                <v-icon class="mr-1">
                                  mdi-message-reply-text
                                </v-icon>
                                Chat
                              </v-btn>
                            </v-col>
                          </v-row>

                          <div style="min-height: 16rem">
                            <p class="mt-2 text-h5" v-html="answer.answer.replace(/\n/g, '<br />')"/>
                          </div>
                        </v-card-text>
                        <v-card-actions >
                          <v-row>
                            <v-col cols="4" md="6">
                              <v-btn text plain class="simple-btn">
                                <v-icon class="mr-1">
                                  mdi-comment-plus
                                </v-icon>
                                Add comment
                              </v-btn>
                            </v-col>
                            <v-col cols="8" md="6" class="text-right d-flex">
                              <v-spacer/>
                              <v-btn text class="simple-btn">
                                <v-icon class="mr-1">
                                  mdi-calendar-month
                                </v-icon>
                                {{$moment(answer.subdate).fromNow()}}
                              </v-btn>
                              <v-btn text class="simple-btn">
                                <v-icon class="mr-1">
                                  mdi-clock-time-five-outline
                                </v-icon>
                                {{$moment(answer.subdate).format('HH:mm')}}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>

                  <!--Answers section-->
                  <!--              <v-row>-->
                  <!--                <v-col cols="3">-->
                  <!--                  Two answers-->
                  <!--                </v-col>-->
                  <!--                <v-col cols="9">-->
                  <!--                  <v-divider/>-->
                  <!--                </v-col>-->
                  <!--              </v-row>-->

                  <!--End answers section-->
                </v-col>
              </v-row>
              <!--End answer section-->
            </v-col>








            <!--Similar questions-->
            <v-col cols="3" class="d-none d-md-block">
               <v-card color="#F5F5F5" class="fill-height" flat>
                  <v-card-text>
                    <h2 class="text-h4 text-center">
                      Similar questions
                    </h2>
                    <v-divider style="width: 80%" class="my-3 mx-auto"/>
                    <p class="text-center">
                      Opps! not found
                    </p>
                  </v-card-text>
               </v-card>
            </v-col>
            <!--End similar questions-->
          </v-row>
        </div>
      </v-container>
    </section>
    <!--  End: detail  -->
  </div>
</template>
<script>
import Breadcrumb from "../../../components/widgets/breadcrumb";
import LastViews from "@/components/common/last-views";
import Category from "@/components/common/category";
import PreviewGallery from "@/components/details/preview-gallery";
import RelatedContent from "@/components/details/related-content";
import LatestTrainingContent from "@/components/details/latest-training-content";
import RelatedQa from "@/components/details/related-qa";
import RelatedOnlineExam from "@/components/details/related-online-exam";

export default {
  name: "qa-details",
  auth: false,
  components: {
    RelatedOnlineExam,
    RelatedQa,
    LatestTrainingContent,
    RelatedContent,
    PreviewGallery,
    Category,
    Breadcrumb,
    LastViews,
  },
  head() {
    return {
      title: this.contentData.title
    }
  },
  async asyncData({params, $axios}) {
    // This could also be an action dispatch
    const content = await $axios.$get(`/api/v1/questions/${params.id}`);
    var contentData = [];

    //Check data exist
    if (content.status === 1) {
      contentData = content.data;
    }

    return {contentData};
  },
  mounted() {
    this.initBreadCrumb();
  },

  data: () => ({
    sell_btn: true,
    rating: 4.5,
    contentData: [],
    breads: [
      {
        text: 'Q & A',
        disabled: false,
        href: '/search?type=question',
      }
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
            title: 'Pamphlet and Exam Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
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
            title: 'Pamphlet and Exam Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
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
            title: 'Pamphlet and Exam Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
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
            title: 'Pamphlet and Exam Papers descriptive and test lesson 7 philosophy twelfth Reason in philosophy (1)',
            link: ''
          },
          {
            title: 'Online teaching Arabic page 1 to 8 (3) 12th human | Lesson 1: Translation',
            link: ''
          },
        ],
      },
    ],

    copy_btn: 'Copy',
    download_loading: false,
  }),
  methods: {
    initBreadCrumb() {
      this.breads.push(
        {
          text: this.contentData.section_title,
          disabled: false,
          href: `/search?type=question&section=${this.contentData.section}`,
        },
        {
          text: this.contentData.base_title,
          disabled: false,
          href: `/search?type=question&section=${this.contentData.section}&base=${this.contentData.base}`,
        },
        {
          text: this.contentData.lesson_title,
          disabled: false,
          href: `/search?type=question&section=${this.contentData.section}&base=${this.contentData.base}&lesson=${this.contentData.lesson}`,
        },
      );
    },
    openAuthDialog(val) {
      this.$router.push({query: {auth_form: val}});
    },


    //Social section
    copyUrl() {
      navigator.clipboard.writeText(window.location.href);
      this.copy_btn = 'Copied';

    },
    shareSocial(social_name) {
      if (social_name == 'whatsapp')
        window.open(`https://api.whatsapp.com/send?text=${window.location.href}`);
      else if (social_name == 'telegram')
        window.open(`https://telegram.me/share/url?url=${window.location.href}&text=${this.contentData.title}`);

    },

  }
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


.order-btn-holder {
  /*position: -webkit-sticky!important;*/
  position: fixed !important;
  bottom: 0 !important;
  z-index: 2 !important;
  border-top: 0.1rem solid #e1e2e3;
}

.order-btn-holder .v-btn {
  width: 40% !important;
}

.order-btn-holder span {
  font-size: 1.3rem;
}

p {
  font-size: 1.3rem !important;
}
</style>

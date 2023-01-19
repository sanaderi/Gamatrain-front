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
        <div class="detail mt-md-8">
          <v-row>
            <v-col cols="8">
              <v-row class="fill-height" >
                <v-col cols="1" >
                  <v-card   flat color="#F5F5F5"  min-height="200">

                  </v-card>
                </v-col>
                <v-col cols="11">
                  <v-card color="#F5F5F5" flat>
                     <v-card-text>
                       <h1 class="text-h5 font-weight-bold">
                         {{contentData.title}}
                       </h1>

                       <p class="mt-2" v-html="contentData.question"/>

                     </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">

            </v-col>
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
  head(){
    return{
      title:this.contentData.title
    }
  },
  async asyncData({params, $axios}) {
    // This could also be an action dispatch
    const content = await $axios.$get(`/api/v1/questions/${params.id}`);
    var contentData = [];

    //Check data exist
    if (content.status === 1){
      contentData = content.data;
    }

    return {contentData};
  },
  mounted() {
    this.initBreadCrumb();
  },

  data: () => ({
    sell_btn:true,
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
    download_loading:false,
  }),
  methods:{
    initBreadCrumb(){
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
    openAuthDialog(val){
      this.$router.push({query:{auth_form:val}});
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
  position: fixed!important;
  bottom: 0!important;
  z-index: 2!important;
  border-top:0.1rem solid #e1e2e3;
}

.order-btn-holder .v-btn{
  width: 40% !important;
}

.order-btn-holder span{
  font-size: 1.3rem;
}

 p{
  font-size: 1.3rem!important;
}
</style>

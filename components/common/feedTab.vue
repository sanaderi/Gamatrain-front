<template v-slot:extension>
  <div>
    <!--  Start: feed box  -->
    <section class="feed-box d-none d-md-flex">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="4"
          >
            <footer-feed-box :feed="latestList.multimedia"></footer-feed-box>
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="4"
          >
            <footer-feed-box :feed="latestList.question"></footer-feed-box>
          </v-col>
          <v-col cols="12" md="4" sm="4" class="third-feed-box mt-3 pa-0">
            <latest-news/>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--  End: Feed box  -->


    <div class="d-md-none d-flex flex-column feed-tab">
      <v-tabs v-model="tabs" centered>
        <v-tabs-slider color="green"></v-tabs-slider>

        <v-tab v-for="(item, index) in items" :key="index" class="feed-tab-title">
          <img :src="require('@/assets/images/' + item.icon)" alt="" class="mx-1" width="20" height="20">
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs" class="feed-card ma-4">
        <v-tab-item>
          <footer-feed-box :feed="latestList.multimedia"></footer-feed-box>
        </v-tab-item>
        <v-tab-item>
          <footer-feed-box :feed="latestList.question"></footer-feed-box>
        </v-tab-item>
        <v-tab-item>
          <latest-news/>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>
<script>
import FooterFeedBox from "@/components/common/footer-feed-box";
import LatestNews from "@/components/common/latest-news";
import question from "~/pages/user/question/index.vue";

export default {
  name: 'feedTab',
  components: {
    LatestNews,
    FooterFeedBox
  },
  data() {
    return {
      tabs: null,
      items: [
        {
          icon: "file.png",
          title: "Latest Multimedia"
        },
        {
          icon: "ask.png",
          title: "Latest Q&A"
        },
        {
          icon: "News.png",
          title: "Latest News"
        },
      ],

      latestList: {
        multimedia: {
          class: "learning",
          header: "Latest Multimedia",
          icon: "learnfiles",
          contentItemList: [],
        },
        question: {
          class: "question",
          header: "Latest Q&A",
          icon: "qa",
          contentItemList: [],
        },

      }


    };
  },
  mounted() {
    this.loadLatestList('multimedia');
    this.loadLatestList('question');
  },
  methods: {
    loadLatestList(type) {
      var api = '/api/v1/home/files';
      if (type == 'question')
        var api = '/api/v1/home/questions';

      this.$axios.$get(api)
        .then(response => {
          if (type == 'multimedia')
            this.latestList.multimedia.contentItemList = response.data;
          else if (type == 'question')
            this.latestList.question.contentItemList = response.data;
        }).catch(err=>{
          console.log(err);
      })
    }
  }
};
</script>

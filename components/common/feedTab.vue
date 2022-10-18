<template v-slot:extension>
  <div>
    <!--  Start: feed box  -->
    <section class="feed-box d-none d-md-flex">
      <v-container>
        <v-row>
          <v-col
            v-for="(feed, feedBox) in footerFeedList"
            :key="feedBox.value"
            cols="12"
            md="4"
            sm="4"
          >
            <footer-feed-box :feed="feed"></footer-feed-box>
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
        <v-tab-item  v-for="(feed, feedBox) in footerFeedList"
                     :key="feedBox.value">
          <footer-feed-box :feed="feed"></footer-feed-box>
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

export default {
  name:'feedTab',
  components:{
    LatestNews,
    FooterFeedBox
  },
  data() {
    return {
      tabs: null,
      items:[
        {
          icon:"file.png",
          title:"Latest Presentation"
        },
         {
           icon:"ask.png",
          title:"Latest Q&A"
        },
         {
           icon:"News.png",
          title:"Latest News"
        },
      ],
      // items: ["File های آموزشی", "پرسش ها", "اخبار"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatar: "dexter-morse2.png",

      footerFeedList: [
        {
          class: "learning",
          header: "Latest Presentation",
          icon: "learnfiles",
          contentItemList: [
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers.",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers.",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
          ],
        },
        {
          class: "question",
          header: "Latest Q&A",
          icon: "qa",
          contentItemList: [
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers.",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
            {
              avatar: "dexter-morse2.png",
              title:
                "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers.",
              name: "Arian Etemadi",
              date: "Jun 21",
            },
          ],
        },
        // {
        //   class: "news",
        //   header: " Latest News",
        //   icon: "news",
        //   contentItemList: [
        //     {
        //       avatar: "dexter-morse2.png",
        //       title:
        //         "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
        //       name: "Arian Etemadi",
        //       date: "Jun 21",
        //     },
        //     {
        //       avatar: "dexter-morse2.png",
        //       title:
        //         "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers.",
        //       name: "Arian Etemadi",
        //       date: "Jun 21",
        //     },
        //     {
        //       avatar: "dexter-morse2.png",
        //       title:
        //         "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
        //       name: "Arian Etemadi",
        //       date: "Jun 21",
        //     },
        //     {
        //       avatar: "dexter-morse2.png",
        //       title:
        //         "Lorem Epsom is a mock text produced with incomprehensible simplicity from the printing industry and used by graphic designers. ",
        //       name: "Arian Etemadi",
        //       date: "Jun 21",
        //     },
        //   ],
        // },
      ],




    };
  },
};
</script>

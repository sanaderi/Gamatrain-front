<template>
  <div class="home-page-content">
    <v-divider></v-divider>
    <!--     Start:mobile header-->
    <search-box class="d-block d-md-none mx-3 my-2"/>
    <!--     End: mobile header-->
    <section>
      <v-carousel hide-delimiters
                  :show-arrows="false"
                  class="index-banner d-none d-md-block">
        <v-carousel-item
          v-for="(item, index) in items"
          cover
          :key="'banner' + index"
          :src="require('@/assets/images/' + item.src)"
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="banner"
        ></v-carousel-item>
      </v-carousel>
    </section>

    <Category/>

    <!--  Start: search grade  -->
    <section class="d-none d-sm-block search-sec mb-4">
      <v-card flat color="rgba(0,0,0,0.2)" rounded>
        <v-card-text class="mt-0">
          <search/>
        </v-card-text>
      </v-card>
    </section>
    <!--  End: search  -->

    <!-- Start:grade list desktop -->
    <section class="grades-list d-sm-flex d-none">
      <v-container>
        <v-row class="justify-space-between mx-0 grade-list">
          <v-col
            v-for="(stat, index) in stats"
            :key="'DgradeList' + index"
            cols="12"
            md="3"
            sm="4"
            class="grade-card-body"
          >
            <desktop-stats-card-component
              @lessonExpand="lessonExpandCard"
              :stat="stat" :itm_index="index"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--  Start: Grades list mobile -->

    <!-- Start:grade list mobile -->
    <section class="grades-list d-sm-none d-flex">
      <v-container>
        <v-row class="justify-space-between mx-0 grade-list" v-if="showLess">
          <v-col
            cols="12"
            md="3"
            sm="6"
            v-for="(stat, index) in stats.slice(0, 3)"
            :key="index.value"
            class="grade-card-body"
          >
            <mobile-stats-card-component
              @lessonExpand="lessonExpandCard"
              :stat="stat" :itm_index="index"/>
          </v-col>
        </v-row>
        <v-row v-else class="justify-space-between mx-0 grade-list">
          <v-col
            v-for="(stat, index) in stats"
            :key="index.value"
            cols="12"
            md="3"
            sm="6"
            class="grade-card-body"
          >
            <mobile-stats-card-component
              @lessonExpand="lessonExpandCard"
              :stat="stat" :itm_index="index"/>
          </v-col>
        </v-row>
        <button
          class="showmore d-flex justify-center mt-4 mb-12"
          @click="showLess = !showLess"
        >
          <span v-if="showLess" class="showmore-span">
            View more
            <i class="fa-solid fa-chevron-down mx-2"></i>
          </span>
          <span v-else class="showless-span">
            View less<i class="fa-solid fa-chevron-up mx-2"></i>
          </span>
        </button>
      </v-container>
    </section>
    <!--  End: Grade list mobile  -->


    <!-- Start: Feedtabs respons -->
    <FeedTab/>
    <!-- End: Feedtabs respons -->


    <!--  Start: Main stats  -->
    <Slider/>
    <!--  End: Main stats  -->

    <!--  Start: Last views  -->
    <!-- <section class="last-view-sec">
      <v-container>
        <last-views></last-views>
      </v-container>
    </section> -->
    <!--  End: Last views   -->
    <Scroll/>
  </div>
</template>

<script>
import GardeCard from "./index/garde-card";
import Search from "./index/search";
import LastViews from "../components/common/last-views";
import Category from "~/components/common/category.vue";
import FeedTab from "../components/common/feedTab.vue";
import Slider from "../components/common/slider.vue";
import Scroll from "~/components/common/scroll.vue";
import SearchBox from "@/components/common/search-box";
import DesktopStatsCardComponent from "~/components/home/DesktopStatsCardComponent.vue";
import MobileStatsCardComponent from "~/components/home/MobileStatsCardComponent.vue";

export default {
  auth: false,
  name: 'home_page',
  head() {
    return {
      titleTemplate: "Gamatrain | %s",
      title: 'Learning together, earning together, building a brighter future',
    }
  },

  components: {
    MobileStatsCardComponent,
    DesktopStatsCardComponent,
    SearchBox,
    LastViews,
    Search,
    GardeCard,
    Category,
    FeedTab,
    Slider,
    Scroll,
  },
  data: () => ({
    test_schools: '',
    less: true,
    showLess: true,


    items: [
      {
        src: "banner_home_2.jpg",
      },
      {
        src: "banner_home_2.jpg"
      }
    ],
    value1: null,
    value2: null,
    value3: null,
    stats: [],
  }),

  //Load data
  async asyncData({params, $axios}) {
    // This could also be an action dispatch
    const response = await $axios.$get('/api/v1/home/stats');
    var stats = [];

    //Check data
    if (response.status === 1) {
      stats = response.data;
      for (var i in stats) {
        stats[i].showMore = false;
      }
    }

    return {stats};
  },

  mounted() {
  },
  watch: {},
  methods: {
    lessonExpandCard: function (index) {
      if (this.stats[index].showMore == true)
        this.stats[index].showMore = false;
      else
        this.stats[index].showMore = true;

    }
  }
};
</script>

<style>
/*Home page banner control background*/
.index-banner .v-window__prev, .v-window__next {
  background: none !important;
}
</style>

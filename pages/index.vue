<template>
  <div class="home-page-content">
    <v-divider></v-divider>
    <!--     Start:mobile header-->
    <search-box class="d-block d-md-none mx-3 my-2"/>
    <!--     End: mobile header-->
    <section>
      <v-carousel hide-delimiters
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
    <section class="d-none d-sm-block search-sec mb-8">
      <v-container>
        <div class="box search-container">
          <search
            :items1="items1"
            :items2="items2"
            :items3="items3"
            :values1="values1"
            :value1="value1"
            :values2="values2"
            :value2="value2"
            :values3="values3"
            :value3="value2"
          ></search>
        </div>
      </v-container>
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
            <v-card   :class="'grade-card grade-card' + (index + 1)">
              <p v-show="stat.showMore" class="total-content">
                <nuxt-link
                  v-for="item in stat.lessons"
                  :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
                  class="content grade-list-lessons"
                >
                  {{ item.title }}
                </nuxt-link>
                <v-btn
                  @click="lessonExpand(index)"
                  plain
                  :class="'mt-5  text-lowercase showmore-btn' + (index + 1)"
                >
                  Return
                </v-btn>
              </p>
              <div v-show="!stat.showMore">
                <v-card-title class="d-block pa-0 pb-2">
                  <div class="d-flex justify-space-between align-item">
                    <nuxt-link
                      to=""
                      :class="'grade-title grade-title' + (index + 1)"
                      class="mb-2"
                    >
                      <span :class="'label-tag label-tag' + (index + 1)">{{
                          index + 1
                        }}</span>
                      {{ stat.base_title }}
                    </nuxt-link>
                    <div class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>{{$moment(stat.last_update).format("MMM DD")}}</p>
                    </div>
                  </div>
                  <v-card flat min-height="40" class="d-inline-block">
                    <nuxt-link
                      v-for="(item,index) in stat.lessons.slice(0,3)"
                      :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
                      class="content grade-list-lessons"
                    >
                      {{ item.title }}
                      <span v-show="index<2">
                        ,
                      </span>
                    </nuxt-link>
                    <span
                      v-show="stat.lessons.length>3"
                      class="btn-transparent more-content pointer"
                      @click="lessonExpand(index)"
                    >... more</span>
                  </v-card>
                </v-card-title>
                <v-divider class="mb-2"></v-divider>

                <v-card-text class="pa-0 grade-items mb-3">
                  <nuxt-link
                    :to="`/search?type=test&section=${stat.section}&base=${stat.base}&sortby=best`"
                    class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="mr-4 icon icong-test"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="'Paper'"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="stat.tests"></div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=learnfiles&section=${stat.section}&base=${stat.base}&sortby=best`"
                    class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="mr-4 icon icong-learnfiles"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="'Multimedia'"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="stat.files"></div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=azmoon&section=${stat.section}&base=${stat.base}&sortby=best`"
                    class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="mr-4 icon icong-azmoon"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="'Exam'"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="stat.exams"></div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=question&section=${stat.section}&base=${stat.base}&sortby=best`"
                    class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="mr-4 icon icong-qa"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="'Q & A'"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="stat.questions"></div>
                    </div>
                  </nuxt-link>
                </v-card-text>
                <v-divider class="grade-divider"></v-divider>
                <v-card-text
                  class="
                    pt-3
                    pb-2
                    px-0
                    grade-card__update
                    d-sm-flex d-none
                    justify-end
                  "
                >
                  <div
                    class="
                      d-flex
                      align-center
                      footer-card
                      card-footer
                      justify-end
                      mt-2
                      x
                    "
                  >
                    <span
                      class="
                        fa-solid fa-calendar-days
                        footer-card-calendar
                        ml-2
                      "
                    ></span>
                    <span class="ml-1 last-update">Last update:&nbsp;</span>
                    <span class="last-update">{{ $moment(stat.last_update).format("MMM DD") }}</span>
                  </div>
                </v-card-text>
              </div>
            </v-card>
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
            <v-card  :class="' grade-card grade-card' + (index + 1)">
              <p v-show="stat.showMore" class="total-content ">
                <nuxt-link
                  v-for="(item, gradeCard) in stat.totalContent"
                  :key="gradeCard.value"
                  :to="item.to"
                  class="content ml-1"
                >
                  {{ item.content }},
                </nuxt-link>
                <v-btn
                  @click="lessonExpand(index)"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                >Return
                </v-btn>
              </p>
              <div v-show="!stat.showMore">
                <v-card-title class="d-block pa-0 pb-2">
                  <div class="d-flex justify-space-between align-item">
                    <h2
                      :class="'grade-title grade-title' + (index + 1)"
                      class="mb-2"
                    >
                      <span :class="'label-tag label-tag' + (index + 1)">{{
                          index + 1
                        }}</span>
                      {{ stat.base_title }}
                    </h2>
                    <div class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>{{$moment(stat.last_update).format("MMM DD")}}</p>
                    </div>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item,index) in stat.lessons"
                      :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
                      class="content grade-list-lessons"
                    >
                      {{ item.title }}
                      <span v-show="index<2">
                        ,
                      </span>
                    </nuxt-link>
                    <span
                      v-show="stat.lessons.length>3"
                      class="btn-transparent more-content pointer"
                      @click="lessonExpand(index)"
                    >... more</span>
                  </p>
                  <p v-if="stat.showMore" class="total-content">
                    <nuxt-link
                      v-for="item in stat.lessons"
                      :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
                      class="content"
                    >
                      {{ item.title }}
                      <span v-show="index<2">
                        ,
                      </span>
                    </nuxt-link>
                  </p>
                </v-card-title>
                <v-divider class="my-5"></v-divider>

                <v-card-text class="pa-0 grade-items mb-3">
                  <nuxt-link
                    :to="`/search?type=test&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item1'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-test"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Paper
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.tests }}
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=learnfiles&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item2'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-learnfiles"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Multimedia
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.files }}
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=azmoon&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item4'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-azmoon"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Exam
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.exams }}
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=question&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item3'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-qa"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Q & A
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.questions }}
                      </div>
                    </div>
                  </nuxt-link>
                </v-card-text>
                <v-divider class="grade-divider"></v-divider>
                <v-card-text
                  class="
                    pt-3
                    pb-2
                    px-0
                    grade-card__update
                    d-sm-flex d-none
                    justify-end
                  "
                >
                  <div
                    class="
                      d-flex
                      align-center
                      footer-card
                      card-footer
                      justify-end
                      mt-2
                      x
                    "
                  >
                    <span class="fa-solid fa-calendar-days ml-2"></span>
                    <span class="ml-1">Last update:&nbsp;</span>
                    <span>{{ $moment(stat.last_update).format("MMM DD") }}</span>
                  </div>
                </v-card-text>

                <!--</v-card>-->
              </div>
            </v-card>
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
            <v-card  :class="' grade-card grade-card' + (index + 1)">
              <p v-if="stat.showMore" class="total-content">
                <nuxt-link
                  v-for="(item,index) in stat.lessons"
                  :key="mTotalContent.value"
                  :to="item.to"
                  class="content"
                >
                  {{ item.title }}
                  <span v-show="index<2">
                        ,
                      </span>
                </nuxt-link>
                <v-btn
                  @click="lessonExpand(index)"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                >
                  Return
                </v-btn
                >
              </p>
              <div v-if="!stat.showMore">
                <v-card-title class="d-block pa-0 pb-2">
                  <div class="d-flex justify-space-between align-item">
                    <h2
                      :class="'grade-title grade-title' + (index + 1)"
                      class="mb-2"
                    >
                      <span :class="'label-tag label-tag' + (index + 1)">{{
                          index + 1
                        }}</span>
                      {{ stat.base_title }}
                    </h2>
                    <div class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>{{$moment(stat.last_update).format("MMM DD")}}</p>
                    </div>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item,index) in stat.lessons.slice(0,3)"
                      :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
                      class="content grade-list-lessons"
                    >
                      {{ item.title }}
                      <span v-show="index<2">
                        ,
                      </span>
                    </nuxt-link>
                    <span
                      v-show="stat.lessons.length>3"
                      class="btn-transparent more-content pointer"
                      @click="lessonExpand(index)"
                    >... more</span>
                  </p>
                  <p v-if="stat.showMore" class="total-content">
                    <nuxt-link
                      v-for="(item, tContent) in stat.totalContent"
                      :key="tContent.value"
                      :to="item.to"
                      class="content"
                    >
                      {{ item.content }}،
                    </nuxt-link>
                  </p>
                </v-card-title>
                <v-divider class="my-5"></v-divider>

                <v-card-text class="pa-0 grade-items mb-3">
                  <nuxt-link
                    :to="`/search?type=test&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item1'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-test"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Paper
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.tests }}
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=learnfiles&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item2'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-learnfiles"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Multimedia
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.files }}
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=azmoon&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item4'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-azmoon"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Exam
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.exams }}
                      </div>
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    :to="`/search?type=question&section=${stat.section}&base=${stat.base}&sortby=best`"
                    :class="'d-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item3'"
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        class="ml-1 icon icong-qa"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                      >
                        Q & A
                      </span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat">
                        {{stat.questions }}
                      </div>
                    </div>
                  </nuxt-link>
                </v-card-text>
                <v-divider class="grade-divider"></v-divider>
                <v-card-text
                  class="
                    pt-3
                    pb-2
                    px-0
                    grade-card__update
                    d-sm-flex d-none
                    justify-end
                  "
                >
                  <div
                    class="
                      d-flex
                      align-center
                      footer-card
                      card-footer
                      justify-end
                      mt-2
                      x
                    "
                  >
                    <span class="fa-solid fa-calendar-days ml-2"></span>
                    <span class="ml-1">Last update:&nbsp;</span>
                    <span>{{ $moment(stat.last_update).format("MMM DD") }}</span>
                  </div>
                </v-card-text>

                <!--            </v-card>-->
              </div>
            </v-card>
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

export default {
  auth: false,
  name: 'home_page',

  components: {
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
    items1: ["All", "دبستان", "متوسطه"],
    items2: ["All", "دبستان", "متوسطه"],
    items3: ["All", "دبستان", "متوسطه"],
    values1: ["All"],
    values2: ["All"],
    values3: ["All"],
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
    if (response.status === 1){
      stats=response.data;
      for (var i in stats) {
        stats[i].showMore = false;
      }
    }

    return {stats};
  },

  mounted() {
  },
  methods: {
    lessonExpand(index) {
      if (this.stats[index].showMore == true)
        this.stats[index].showMore = false;
      else
        this.stats[index].showMore = true;

    },
  }
};
</script>

<style>
/*Home page banner control background*/
.index-banner .v-window__prev, .v-window__next{
  background: none!important;
}
</style>

<template>
  <div class="home-page-content">
    <v-divider></v-divider>
<!--     Start:mobile header-->
      <search-box class="d-block d-md-none mx-3 my-2"/>
<!--     End: mobile header-->
    <section class="banner-sec">
      <v-carousel class="index-banner">
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
            v-for="(grade, index) in gradeList"
            :key="'DgradeList' + index"
            cols="12"
            md="3"
            sm="6"
            class="grade-card-body"
          >
            <v-card :class="'grade-card grade-card' + (index + 1)">
              <p v-if="grade.showMore" class="total-content position-relative">
                <nuxt-link
                  v-for="(item, more) in grade.totalContent"
                  :key="more.value"
                  :to="item.to"
                  class="content"
                >
                  {{ item.content }}،
                </nuxt-link>
                <v-btn
                  @click="grade.showMore = !grade.showMore"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                >Return
                </v-btn
                >
              </p>
              <div v-if="!grade.showMore">
                <!--            <v-card-->
                <!--              class="mx-auto"-->
                <!--            >-->
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
                      {{ grade.title }}
                    </nuxt-link>
                    <div class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>27فروردین</p>
                    </div>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item, summery) in grade.summeryContent"
                      :key="summery.value"
                      :to="item.to"
                      class="content grade-list-lessons"
                    >
                      {{ item.content }}،
                    </nuxt-link>
                    ...
                  </p>
                  <span
                    class="btn-transparent more-content pointer"
                    @click="grade.showMore = !grade.showMore"
                  >more</span
                  >
                </v-card-title>
                <v-divider class="my-5"></v-divider>

                <v-card-text class="pa-0 grade-items mb-3">
                  <nuxt-link
                    to="grade.link"
                    v-for="(item,idxkey) in grade.cat"
                    :key="idxkey.title"
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
                        v-if="item.title === 'Paper'"
                        class="mr-4 icon icong-test"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Multimedia'"
                        class="mr-4 icon icong-learnfiles"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Q & A'"
                        class="mr-4 icon icong-qa"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Exam'"
                        class="mr-4 icon icong-azmoon"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="item.title"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="item.stat"></div>
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
                    <span class="ml-1 last-update">Last update: </span>
                    <span class="last-update">{{ grade.update }}</span>
                  </div>
                </v-card-text>
              </div>
              <!--            </v-card>-->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--  Start: Grades list mobile -->
    <section class="grades-list d-sm-none d-flex">
      <v-container>
        <v-row class="justify-space-between mx-0 grade-list" v-if="showLess">
          <v-col
            cols="12"
            md="3"
            sm="6"
            v-for="(grade, index) in gradeList.slice(0, 3)"
            :key="index.value"
            class="grade-card-body"
          >
            <v-card :class="' grade-card grade-card' + (index + 1)">
              <p v-if="grade.showMore" class="total-content position-relative">
                <nuxt-link
                  v-for="(item, gradeCard) in grade.totalContent"
                  :key="gradeCard.value"
                  :to="item.to"
                  class="content ml-1"
                >
                  {{ item.content }}،
                </nuxt-link>
                <v-btn
                  @click="grade.showMore = !grade.showMore"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                >Return
                </v-btn
                >
              </p>
              <div v-if="!grade.showMore">
                <v-card-title class="d-block pa-0 pb-2">
                  <div class="d-flex justify-space-between align-item">
                    <h2
                      :class="'grade-title grade-title' + (index + 1)"
                      class="mb-2"
                    >
                      <span :class="'label-tag label-tag' + (index + 1)">{{
                          index + 1
                        }}</span>
                      {{ grade.title }}
                    </h2>
                    <div class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>27 Jun</p>
                    </div>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item, summeryContent) in grade.summeryContent"
                      :key="summeryContent.value"
                      :to="item.to"
                      class="content grade-list-lessons"
                    >
                      {{ item.content }}،
                    </nuxt-link>
                    ...
                  </p>
                  <span
                    class="btn-transparent more-content pointer"
                    @click="grade.showMore = !grade.showMore"
                  >more</span
                  >
                  <p v-if="grade.showMore" class="total-content">
                    <nuxt-link
                      v-for="(item, totalContent) in grade.totalContent"
                      :key="totalContent.value"
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
                    to="grade.link"
                    v-for="item in grade.cat"
                    :key="item.title"
                    :class="
                      'd-flex align-center justify-space-between pa-0 pb-0 grade__item grade__item' +
                      (index + 1)
                    "
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        v-if="item.title === 'Paper'"
                        class="ml-1 icon icong-test"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Multimedia'"
                        class="ml-1 icon icong-learnfiles"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Q & A'"
                        class="ml-1 icon icong-qa"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Exam'"
                        class="ml-1 icon icong-azmoon"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="item.title"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="item.stat"></div>
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
                    <span class="ml-1">Last update: </span>
                    <span>{{ grade.update }}</span>
                  </div>
                </v-card-text>

                <!--</v-card>-->
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else class="justify-space-between mx-0 grade-list">
          <v-col
            v-for="(grade, index) in gradeList"
            :key="index.value"
            cols="12"
            md="3"
            sm="6"
            class="grade-card-body"
          >
            <v-card :class="' grade-card grade-card' + (index + 1)">
              <p v-if="grade.showMore" class="total-content position-relative">
                <nuxt-link
                  v-for="(item, mTotalContent) in grade.totalContent"
                  :key="mTotalContent.value"
                  :to="item.to"
                  class="content"
                >
                  {{ item.content }}،
                </nuxt-link>
                <v-btn
                  @click="grade.showMore = !grade.showMore"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                >Return
                </v-btn
                >
              </p>
              <div v-if="!grade.showMore">
                <v-card-title class="d-block pa-0 pb-2">
                  <div class="d-flex justify-space-between align-item">
                    <h2
                      :class="'grade-title grade-title' + (index + 1)"
                      class="mb-2"
                    >
                      <span :class="'label-tag label-tag' + (index + 1)">{{
                          index + 1
                        }}</span>
                      {{ grade.title }}
                    </h2>
                    <div class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>27 Jun</p>
                    </div>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item, mSummeryContent) in grade.summeryContent"
                      :key="mSummeryContent.value"
                      :to="item.to"
                      class="content grade-list-lessons"
                    >
                      {{ item.content }}،
                    </nuxt-link>
                    ...
                  </p>
                  <span
                    class="btn-transparent more-content pointer"
                    @click="grade.showMore = !grade.showMore"
                  >more</span
                  >
                  <p v-if="grade.showMore" class="total-content">
                    <nuxt-link
                      v-for="(item, tContent) in grade.totalContent"
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
                    to="grade.link"
                    v-for="item in grade.cat"
                    :key="item.title"
                    :class="
                      'd-flex align-center justify-space-between  pa-0 pb-0 grade__item grade__item' +
                      (index + 1)
                    "
                  >
                    <div
                      class="py-0 d-flex align-center right grade__item-title"
                    >
                      <v-icon
                        v-if="item.title === 'Paper'"
                        class="ml-1 icon icong-test"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Multimedia'"
                        class="ml-1 icon icong-learnfiles"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Q & A'"
                        class="ml-1 icon icong-qa"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'Exam'"
                        class="ml-1 icon icong-azmoon"
                      ></v-icon>
                      <span
                        class="text-center type my-2 grade-item__text"
                        v-text="item.title"
                      ></span>
                    </div>
                    <div class="py-1 left">
                      <div class="text-left stat" v-text="item.stat"></div>
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
                    <span class="ml-1">Last update: </span>
                    <span>{{ grade.update }}</span>
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
    <!--  End: Grade list  -->




    <!-- Start: Feedtabs respons -->
    <FeedTab/>
    <!-- End: Feedtabs respons -->


    <!--  Start: Main stats  -->
    <!-- <section class="stat-sec my-8">
      <v-container>
        <div
          class="
            d-flex
            justify-space-between
            align-center
            flex-wrap
            stat-holder
            mt-5
          "
         >
          <div
            v-for="(item, index) in statList"
            :key="index"
            class="
              d-flex
              flex-column
              justify-center
              align-center
              mx-5
              px-3
              stat-item
            "
          >
            <span class="stat-icon d-flex align-center justify-center">
              <i :class="'fa solid ' + item.icon"> </i>
            </span>
            <span class="stat-label">{{ item.label }}</span>
            <span class="stat-value">{{ item.value }} +</span>
          </div>
        </div>
      </v-container>
    </section> -->
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
        src: "slider.png",
      },
      {
        src: "slider.png",
      },
      {
        src: "slider.png",
      },
      {
        src: "slider.png",
      },
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
    gradeList: [
      {
        title: "1st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        link: "",
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "2st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "3st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "4st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "5st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        link: "",
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "6st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "7st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "8st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "9st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        link: "",
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "10st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "11st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
      {
        title: "12st Level",
        summeryContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
        ],
        showMore: false,
        totalContent: [
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
          {content: "Writing", to: ""},
          {content: "Math", to: ""},
          {content: "Experimental", to: ""},
          {content: "Farsi", to: ""},
        ],
        cat: [
          {
            title: "Paper",
            stat: "1355",
          },
          {
            title: "Multimedia",
            stat: "1211",
          },
          {
            title: "Q & A",
            stat: "68",
          },
          {
            title: "Exam",
            stat: "22",
          },
        ],
        update: "2 Jul",
      },
    ],
    siteFeatureList: [
      {
        title: "School",
        icon: "school",
        details: [
          "لیست مدارس کشور با قابلیت فیلتر و جستجو",
          "دسترسی به اطلاعات ارتباطی، امکانات و سطح آموزشی مدارس",
          "ویرایش اطلاعات School ها و سیستم نظر سنجی",
          "مشاهده نشانی School روی نقشه",
        ],
      },
      {
        title: "Tutor",
        icon: "teacher",
        details: [
          "جستجوی بهترین Tutor در نزدیکی شما",
          "گفتگوی Student و معلم",
          "پرداخت آنلاین یا اعتباری مبلغ حق التدریس",
          "برگزاری حضوری کلاس در خانه Student",
        ],
      },
      {
        title: "اخبار آموزشی",
        icon: "news",
        details: [
          "پوشش کامل اخبار آموزشی استان های کشور",
          "امکان فیلتر اخبار بر اساس استان مورد نظر",
          "نمایش تقویم زمانی رویداد های مهم کشور",
          "امکان عضویت در خبرنامه و ارسال گزینشی اخبار در تلگرام",
        ],
      },
      {
        title: "درسنامه Training",
        icon: "blog",
        details: [
          "متن کامل کتاب های درسی از دبستان تا teacherستان",
          "راهنمای کامل تمرین ها، خود آزمایی ها، کار برگه ها و فعالیت های کتاب",
          "ثبت درسنامه، نکات آموزشی، جزوه های آموزشی توسط teacherان",
        ],
      },
    ],

    statList: [
      {label: "School", value: "130,000", icon: "fa-graduation-cap"},
      {label: "Tutor", value: "300,000", icon: "fa-graduation-cap"},
      {label: "Student", value: "1,500,000", icon: "fa-graduation-cap"},
      {label: "Paper", value: "50,000", icon: "fa-graduation-cap"},
      {label: "پاورپوینت", value: "30,000", icon: "fa-graduation-cap"},
      {label: "Exam", value: "5,000", icon: "fa-graduation-cap"},
    ],
  }),

  mounted() {
    this.$OneSignal.push(() => {
      this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
        if (isEnabled) {
          console.log('Push notifications are enabled!')
        } else {
          console.log('Push notifications are not enabled yet.')
        }
      })
    })
  },
  methods: {}
};
</script>


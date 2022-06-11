<template>
  <div class="home-page-content">
    <v-divider></v-divider>
    <!-- Start:mobile header -->
    <div
      class="
        d-flex
        align-center
        justify-space-between
        logo-search-content
        mx-5
        d-flex d-sm-none
      "
    >
      <div class="pl-2 header-search mobile-res-search my-4">
        <v-btn class="px-0 btn-transparent search-btn-icon">
          <v-icon class="search-icon">mdi-magnify</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-text-field
          class="py-1 my-0 search-field main-search-icon mr-2 mt-4"
          placeholder="جستجو..."
        >
        </v-text-field>
      </div>
    </div>
    <!-- End: mobile header -->
    <section class="banner-sec">
      <v-carousel class="index-banner">
        <v-carousel-item
          v-for="(item, i) in items"
          cover
          :key="i"
          :src="require('@/assets/images/' + item.src)"
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="banner"
        ></v-carousel-item>
      </v-carousel>
    </section>
    <Category />
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
            :key="index"
            cols="12"
            md="3"
            sm="6"
            class="grade-card-body"
          >
            <v-card :class="'grade-card grade-card' + (index + 1)">
              <p v-if="grade.showMore" class="total-content position-relative">
                <nuxt-link
                  v-for="(item, index) in grade.totalContent"
                  :key="index"
                  :to="item.to"
                  class="content "
                >
                  {{ item.content }}،
                </nuxt-link>
                <v-btn
                  @click="grade.showMore = !grade.showMore"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                  >بازگشت</v-btn
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
                    <v-text class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>27فروردین</p>
                    </v-text>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item, index) in grade.summeryContent"
                      :key="index"
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
                    >بیشتر</span
                  >
                </v-card-title>
                <v-divider class="my-5"></v-divider>

                <v-card-text class="pa-0 grade-items mb-3">
                  <nuxt-link
                    to="grade.link"
                    v-for="item in grade.cat"
                    :key="item.title"
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
                        v-if="item.title === 'نمونه سوال'"
                        class="ml-4 icon icong-test"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'فایل آموزشی'"
                        class="ml-4 icon icong-learnfiles"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'پرسش و پاسخ'"
                        class="ml-4 icon icong-qa"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'آزمون آنلاین'"
                        class="ml-4 icon icong-azmoon"
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
                    <span class="fa-solid fa-calendar-days footer-card-calendar ml-2"></span>
                    <span class="ml-1 last-update">آخرین بروزرسانی: </span>
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
            :key="index"
            class="grade-card-body"
          >
            <v-card :class="' grade-card grade-card' + (index + 1)">
              <p v-if="grade.showMore" class="total-content position-relative">
                <nuxt-link
                  v-for="(item, index) in grade.totalContent"
                  :key="index"
                  :to="item.to"
                  class="content ml-1"
                >
                  {{ item.content }}،
                </nuxt-link>
                <v-btn
                  @click="grade.showMore = !grade.showMore"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                  >بازگشت</v-btn
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
                    <v-text class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>27 فروردین</p>
                    </v-text>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item, index) in grade.summeryContent"
                      :key="index"
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
                    >بیشتر</span
                  >
                  <p v-if="grade.showMore" class="total-content">
                    <nuxt-link
                      v-for="(item, index) in grade.totalContent"
                      :key="index"
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
                        v-if="item.title === 'نمونه سوال'"
                        class="ml-1 icon icong-test"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'فایل آموزشی'"
                        class="ml-1 icon icong-learnfiles"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'پرسش و پاسخ'"
                        class="ml-1 icon icong-qa"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'آزمون آنلاین'"
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
                    <span class="ml-1">آخرین بروزرسانی: </span>
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
            :key="index"
            cols="12"
            md="3"
            sm="6"
            class="grade-card-body"
          >
            <v-card :class="' grade-card grade-card' + (index + 1)">
              <p v-if="grade.showMore" class="total-content position-relative">
                <nuxt-link
                  v-for="(item, index) in grade.totalContent"
                  :key="index"
                  :to="item.to"
                  class="content"
                >
                  {{ item.content }}،
                </nuxt-link>
                <v-btn
                  @click="grade.showMore = !grade.showMore"
                  :class="'mt-5 showmore-btn showmore-btn' + (index + 1)"
                  >بازگشت</v-btn
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
                    <v-text class="d-flex align-center res-update d-sm-none">
                      <i class="fa-solid fa-calendar-days mx-3"></i>
                      <p>27فروردین</p>
                    </v-text>
                  </div>
                  <p class="d-inline-block">
                    <nuxt-link
                      v-for="(item, index) in grade.summeryContent"
                      :key="index"
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
                    >بیشتر</span
                  >
                  <p v-if="grade.showMore" class="total-content">
                    <nuxt-link
                      v-for="(item, index) in grade.totalContent"
                      :key="index"
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
                        v-if="item.title === 'نمونه سوال'"
                        class="ml-1 icon icong-test"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'فایل آموزشی'"
                        class="ml-1 icon icong-learnfiles"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'پرسش و پاسخ'"
                        class="ml-1 icon icong-qa"
                      ></v-icon>
                      <v-icon
                        v-else-if="item.title === 'آزمون آنلاین'"
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
                    <span class="ml-1">آخرین بروزرسانی: </span>
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
            مشاهده بیشتر
            <i class="fa-solid fa-chevron-down mx-2"></i>
          </span>
          <span v-else class="showless-span">
            مشاهده کمتر<i class="fa-solid fa-chevron-up mx-2"></i>
          </span>
        </button>
      </v-container>
    </section>
    <!--  End: Grade list  -->

    <!--  Start: Site feature  -->
    <!-- <section class="site-feature">
      <v-container>
        <div class="box">
          <v-row>
            <v-col
              v-for="(feature, index) in siteFeatureList"
              :key="index"
              cols="12"
              md="3"
              sm="3"
              class="feature-item"
            >
              <nuxt-link to="">
                <v-card class="'mx-auto feature-card">
                  <v-card-title
                    class="d-block text-center feature-title-holder"
                  >
                    <span :class="'d-block icon icong-' + feature.icon"> </span>
                    <span class="feature-title">{{ feature.title }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-list>
                      <v-list-item
                        v-for="(detail,index) in feature.details"
                        :key="index"
                        class="mb-2 feature-detail"
                      >
                        - {{ detail }}
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </nuxt-link>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section> -->
    <!--  End: Site feature  -->

    <!--  Start: feed box  -->
    <section class="feed-box d-none d-md-flex">
      <v-container>
        <v-row>
          <v-col
            v-for="(feed, index) in footerFeedList"
            :key="index"
            cols="12"
            md="4"
            sm="4"
          >
            <footer-feed-box :feed="feed"></footer-feed-box>
          </v-col>
          <v-col cols="12" md="4" sm="4" class="third-feed-box mt-3 pa-0">
            <div class="feed-header">
              <img
                :src="require('@/assets/images/' + thirdFeedBoxIcon)"
                alt=""
                class="mx-2"
                width="28"
              />
              آخرین اخبار
            </div>

            <div class="d-flex flex-column pa-3">
              <div
                class="feed-box-item d-flex"
                v-for="feed in thirdFeedBox"
                :key="feed"
              >
                <div class="feedBoxImg">
                  <img :src="require('@/assets/images/' + feed.img)" alt="" />
                </div>
                <div
                  class="
                    feed-content
                    pa-3
                    d-flex
                    flex-column
                    justify-space-between
                  "
                >
                  <p>
                    {{ feed.para }}
                  </p>
                  <div class="d-flex justify-space-between">
                    <div class="feed-title">
                      <i class="fa-solid fa-grip-vertical ml-2"></i>
                      {{ feed.title }}
                    </div>
                    <div class="feed-date">
                      <i class="fa-solid fa-calendar-days ml-2"></i>
                      {{ feed.date }}
                    </div>
                  </div>
                </div>
              </div>
              <v-divider></v-divider>
            </div>
            <div class="feed-footer d-flex align-center pa-3">
              <nuxt-link to="" class="pb-0 feed-more mr-4"
                >موارد بیشتر</nuxt-link
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--  End: Feed box  -->
    <!-- Start: Feedtabs respons -->
    <FeedTab />

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
    <Slider />
    <!--  End: Main stats  -->

    <!--  Start: Last views  -->
    <!-- <section class="last-view-sec">
      <v-container>
        <last-views></last-views>
      </v-container>
    </section> -->
    <!--  End: Last views   -->
  </div>
</template>

<script>
import GardeCard from "./index/garde-card";
import Search from "./index/search";
import FooterFeedBox from "../components/common/footer-feed-box";
import LastViews from "../components/common/last-views";
import Category from "~/components/common/category.vue";
import FeedTab from "../components/common/feedTab.vue";
import Slider from "../components/common/slider.vue";

export default {
  components: {
    LastViews,
    FooterFeedBox,
    Search,
    GardeCard,
    Category,
    FeedTab,
    Slider,
  },
  data: () => ({
    less: true,
    showLess: true,
    thirdFeedBoxIcon: "News.png",
    thirdFeedBox: [
      {
        img: "laptop.png",
        para: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ......",
        title: "اموزشی",
        date: "27 فروردین",
      },
      {
        img: "laptop.png",
        para: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ......",
        title: "اموزشی",
        date: "27 فروردین",
      },
      {
        img: "laptop.png",
        para: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ......",
        title: "اموزشی",
        date: "27 فروردین",
      },
      {
        img: "laptop.png",
        para: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ......",
        title: "اموزشی",
        date: "27 فروردین",
      },
      {
        img: "laptop.png",
        para: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ......",
        title: "اموزشی",
        date: "27 فروردین",
      },
    ],

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
    items1: ["همه", "دبستان", "متوسطه"],
    items2: ["همه", "دبستان", "متوسطه"],
    items3: ["همه", "دبستان", "متوسطه"],
    values1: ["همه"],
    values2: ["همه"],
    values3: ["همه"],
    value1: null,
    value2: null,
    value3: null,
    gradeList: [
      {
        title: "کلاس اول",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        link: "",
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس دوم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس سوم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
           { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس چهارم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
        { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس پنجم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
           { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        link: "",
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس ششم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس هفتم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس هشتم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس نهم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
           { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        link: "",
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس دهم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
           { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس یازدهم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
      {
        title: "کلاس دوازدهم",
        summeryContent: [
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
        ],
        showMore: false,
        totalContent: [
           { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" },
          { content: "نگارش", to: "" },
          { content: "ریاضی", to: "" },
          { content: "علوم تجربی", to: "" },
          { content: "فارسی", to: "" }, 
        ],
        cat: [
          {
            title: "نمونه سوال",
            stat: "1355",
          },
          {
            title: "فایل آموزشی",
            stat: "1211",
          },
          {
            title: "پرسش و پاسخ",
            stat: "68",
          },
          {
            title: "آزمون آنلاین",
            stat: "22",
          },
        ],
        update: "14 فروردین",
      },
    ],
    siteFeatureList: [
      {
        title: "مدرسه یاب",
        icon: "school",
        details: [
          "لیست مدارس کشور با قابلیت فیلتر و جستجو",
          "دسترسی به اطلاعات ارتباطی، امکانات و سطح آموزشی مدارس",
          "ویرایش اطلاعات مدرسه ها و سیستم نظر سنجی",
          "مشاهده نشانی مدرسه روی نقشه",
        ],
      },
      {
        title: "معلم خصوصی",
        icon: "teacher",
        details: [
          "جستجوی بهترین معلم خصوصی در نزدیکی شما",
          "گفتگوی دانش آموز و معلم",
          "پرداخت آنلاین یا اعتباری مبلغ حق التدریس",
          "برگزاری حضوری کلاس در خانه دانش آموز",
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
        title: "درسنامه اموزشی",
        icon: "blog",
        details: [
          "متن کامل کتاب های درسی از دبستان تا دبیرستان",
          "راهنمای کامل تمرین ها، خود آزمایی ها، کار برگه ها و فعالیت های کتاب",
          "ثبت درسنامه، نکات آموزشی، جزوه های آموزشی توسط دبیران",
        ],
      },
    ],
    footerFeedList: [
      {
        class: "learning",
        header: "آخرین فایل های آموزشی",
        icon: "learnfiles",
        contentItemList: [
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
        ],
      },
      {
        class: "question",
        header: "آخرین پرسش ها",
        icon: "qa",
        contentItemList: [
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
          {
            avatar: "dexter-morse2.png",
            title:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            name: "علیرضا داوودی",
            date: "16 فروردین",
          },
        ],
      },
      // {
      //   class: "news",
      //   header: " آخرین اخبار",
      //   icon: "news",
      //   contentItemList: [
      //     {
      //       avatar: "dexter-morse2.png",
      //       title:
      //         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
      //       name: "علیرضا داوودی",
      //       date: "16 فروردین",
      //     },
      //     {
      //       avatar: "dexter-morse2.png",
      //       title:
      //         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      //       name: "علیرضا داوودی",
      //       date: "16 فروردین",
      //     },
      //     {
      //       avatar: "dexter-morse2.png",
      //       title:
      //         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
      //       name: "علیرضا داوودی",
      //       date: "16 فروردین",
      //     },
      //     {
      //       avatar: "dexter-morse2.png",
      //       title:
      //         "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
      //       name: "علیرضا داوودی",
      //       date: "16 فروردین",
      //     },
      //   ],
      // },
    ],

    statList: [
      { label: "مدرسه", value: "130,000", icon: "fa-graduation-cap" },
      { label: "دبیر", value: "300,000", icon: "fa-graduation-cap" },
      { label: "دانش آموز", value: "1,500,000", icon: "fa-graduation-cap" },
      { label: "نمونه سوال", value: "50,000", icon: "fa-graduation-cap" },
      { label: "پاورپوینت", value: "30,000", icon: "fa-graduation-cap" },
      { label: "آزمون آنلاین", value: "5,000", icon: "fa-graduation-cap" },
    ],
  }),
};
</script>

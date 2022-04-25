<template>
  <div class="home-page-content">
    <!--  Start: search grade  -->
    <section class="d-none d-sm-block search-sec ">
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

    <!--  Start: Grades list  -->
    <section class="grades-list">
      <v-container>
        <v-row class="justify-space-between mx-0 grade-list">
          <v-card
            v-for="(grade, index) in gradeList"
            :key="index"
            :class="
              'col-md-3 col-sm-6 col-12 grade-card grade-card' + (index + 1)
            "
          >
            <!--            <v-card-->
            <!--              class="mx-auto"-->
            <!--            >-->
            <v-card-title class="d-block pa-0 pb-2">
              <h2 :class="'grade-title grade-title' + (index + 1)" class="mb-2">
                <span :class="'label-tag label-tag' + (index + 1)">{{
                  index + 1
                }}</span>
                {{ grade.title }}
              </h2>
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
                class="
                  d-flex
                  align-center
                  justify-space-between
                  pa-0
                  pb-0
                  grade__item
                "
              >
                <div class="py-0 d-flex align-center right grade__item-title">
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
            <v-card-text class="pt-3 pb-2 px-0 grade-card__update">
              <div class="d-flex align-center footer-card card-footer">
                <span class="fa-solid fa-calendar-days ml-2"></span>
                <span class="ml-1">بروزرسانی: </span>
                <span>{{ grade.update }}</span>
              </div>
            </v-card-text>
            <!--            </v-card>-->
          </v-card>
        </v-row>
      </v-container>
    </section>
    <!--  End: Grade list  -->

    <!--  Start: Site feature  -->
    <section class="site-feature">
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
                        v-for="detail in feature.details"
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
    </section>
    <!--  End: Site feature  -->

    <!--  Start: feed box  -->
    <section class="feed-box">
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
        </v-row>
      </v-container>
    </section>
    <!--  Start: Site feature  -->

    <!--  Start: Main stats  -->
    <section class="stat-sec my-8">
      <v-container>
        <div class="d-flex justify-center align-center flex-wrap stat-holder">
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
            <span class="stat-value">{{ item.value }} +</span>
            <span class="stat-label">{{ item.label }}</span>
          </div>
        </div>
      </v-container>
    </section>
    <!--  End: Main stats  -->

    <!--  Start: Last views  -->
    <section class="last-view-sec">
      <v-container>
        <last-views></last-views>
      </v-container>
    </section>
    <!--  End: Last views   -->
  </div>
</template>

<script>
import GardeCard from "./index/garde-card";
import Search from "./index/search";
import FooterFeedBox from "../components/common/footer-feed-box";
import LastViews from "../components/common/last-views";

export default {
  components: {
    LastViews,
    FooterFeedBox,
    Search,
    GardeCard,
    // Slider
  },
  data: () => ({
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
          { content: "پیام های آسمانی", to: "" },
          { content: "قرآن", to: "" },
          { content: "عربی", to: "" },
          { content: "هنر", to: "" },
          { content: "مشاوره", to: "" },
          { content: "زبان", to: "" },
          { content: "فناوری", to: "" },
          { content: "فرهنگ", to: "" },
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
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای",
            name: "توسط علی رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ",
            name: "توسط رضا رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ",
            name: "توسط مهدی رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ",
            name: "توسط اکبر رجبی",
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
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ",
            name: "توسط علی رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ",
            name: "توسط رضا رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ",
            name: "توسط مهدی رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ",
            name: "توسط اکبر رجبی",
            date: "16 فروردین",
          },
        ],
      },
      {
        class: "news",
        header: " آخرین اخبار",
        icon: "news",
        contentItemList: [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ",
            name: "توسط علی رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ",
            name: "توسط رضا رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ",
            name: "توسط مهدی رجبی",
            date: "16 فروردین",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ",
            name: "توسط اکبر رجبی",
            date: "16 فروردین",
          },
        ],
      },
    ],
    statList: [
      { label: "مدرسه", value: "130,000" },
      { label: "دبیر", value: "300,000" },
      { label: "دانش آموز", value: "1,500,000" },
      { label: "نمونه سوال", value: "50,000" },
      { label: "پاورپوینت", value: "30,000" },
      { label: "آزمون آنلاین", value: "5,000" },
    ],
  }),
};
</script>

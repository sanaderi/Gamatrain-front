<template>
  <div class="home-page-content">
    <!--  Start: search  -->
    <v-container>
      <section class="search-sec box">
        <search :items="items" :value="value" :values1="values1" :values2="values2" :values3="values3"></search>
      </section>
    </v-container>
    <!--  End: search  -->

    <!--  Start: Grades list  -->
    <v-container>
      <section class="grades-list">
        <v-row>
          <v-col
            v-for="(grade, index) in gradeList" :key="index"
            cols="12" md="3"
          >
            <v-card
              :class="'mx-auto grade-card grade-card'+ (index+1) "
            >
              <v-card-title class="d-block">
                <h2 :class="'grade-title'+ index" class="mb-2">
<!--                  <span :class="'label-tag label-tag'+ index">{{index}}</span>-->

                  {{ grade.title }}
                </h2>
                <p class="">{{ grade.description }}</p>
              </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="item in grade.cat"
                    :key="item.title"
                    class="pa-0"
                  >
                  <span v-if="(item.title) === 'نمونه سوال'">
                    <i class="icon-test"></i>
                  </span>
                    <span v-else-if="(item.title) === 'فایل آموزشی'">
                    <i class="icon-azmoon"></i>
                    </span>
                    <v-icon v-else-if="(item.title) === 'پرسش و پاسخ'">
                      mdi-clipboard-edit-outline
                    </v-icon>
                    <v-icon v-else-if="(item.title) === 'آزمون آنلاین'">
                      mdi-clipboard-edit-outline
                    </v-icon>
                    <v-list-item-content class="py-1 right">
                      <v-list-item-title class="text-right type" v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content class="py-1 left">
                      <v-list-item-title class="text-left stat" v-text="item.stat"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <div class="footer-card card-footer">
                  <span>بروزرسانی: </span>
                  <span>{{ grade.update }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!--  End: Grade list  -->

    <!--  Start: Site feature  -->
    <v-container>
      <section class="site-feature box">
        <v-row>
          <v-col
            v-for="(feature, index) in siteFeatureList" :key="index"
            cols="12" md="3"
          >
            <nuxt-link to="">
              <v-card
                class="'mx-auto feature-card"
              >
                <v-card-title class="d-block text-center feature-title-holder">
                <span :class="'d-block icon icong-' + feature.icon">
                </span>
                  <span class="feature-title">{{ feature.title }}</span>
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item v-for="details in feature.details" :key="index"
                                 class="mb-2 feature-detail"
                    >
                      - {{ details }}
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!--  End: Site feature  -->

    <!--  Start: feed box  -->
    <v-container>
      <section class="feed-box">
        <v-row>
          <v-col v-for="(feed, index) in footerFeedList" :key="index"
                 cols="12" md="4">
            <footer-feed-box :feed="feed"></footer-feed-box>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!--  Start: Site feature  -->

    <!--  Start: Main stats  -->
    <section class="stat-sec my-8 pa-8">
      <v-container>
        <div class="d-flex justify-center align-center flex-wrap stat-holder">
          <div v-for="(item, index) in statList" :key="index"
               class="d-flex flex-column justify-center align-center mx-5 px-3 stat-item">
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

    <!--  Start: Main stats  -->
    <!--  End: Main stats  -->
  </div>
</template>

<script>
import GardeCard from "./index/garde-card";
import Search from "./index/search";
import FooterFeedBox from "../components/common/footer-feed-box";
import LastViews from "../components/common/last-views";
// import Slider from "../components/common/slider";

export default {
  components: {
    LastViews,
    FooterFeedBox,
    Search,
    GardeCard,
    // Slider
  },
  data: () => ({
    items: ['همه', 'دبستان', 'متوسطه'],
    values1: ['همه'],
    values2: ['همه'],
    values3: ['همه'],
    value: null,
    gradeList: [
      {
        title: 'کلاس اول',
        description: 'فارسی، نگارش، ریاضی، علوم تجربی',
        cat: [
          {
            title: 'نمونه سوال',
            stat: '1355'
          },
          {
            title: 'فایل آموزشی',
            stat: '1211'
          },
          {
            title: 'پرسش و پاسخ',
            stat: '68'
          },
          {
            title: 'آزمون آنلاین',
            stat: '22'
          },
        ],
        update: '14 فروردین'
      },
      {
        title: 'کلاس دوم',
        description: 'فارسی، نگارش، ریاضی، علوم تجربی',
        cat: [
          {
            title: 'نمونه سوال',
            stat: '1355'
          },
          {
            title: 'فایل آموزشی',
            stat: '1211'
          },
          {
            title: 'پرسش و پاسخ',
            stat: '68'
          },
          {
            title: 'آزمون آنلاین',
            stat: '22'
          },
        ],
        update: '14 فروردین'
      },
      {
        title: 'کلاس سوم',
        description: 'فارسی، نگارش، ریاضی، علوم تجربی',
        cat: [
          {
            title: 'نمونه سوال',
            stat: '1355'
          },
          {
            title: 'فایل آموزشی',
            stat: '1211'
          },
          {
            title: 'پرسش و پاسخ',
            stat: '68'
          },
          {
            title: 'آزمون آنلاین',
            stat: '22'
          },
        ],
        update: '14 فروردین'
      },
      {
        title: 'کلاس چهارم',
        description: 'فارسی، نگارش، ریاضی، علوم تجربی',
        cat: [
          {
            title: 'نمونه سوال',
            stat: '1355'
          },
          {
            title: 'فایل آموزشی',
            stat: '1211'
          },
          {
            title: 'پرسش و پاسخ',
            stat: '68'
          },
          {
            title: 'آزمون آنلاین',
            stat: '22'
          },
        ],
        update: '14 فروردین'
      },
    ],
    siteFeatureList: [
      {
        title: 'مدرسه یاب',
        icon: 'school',
        details: [
          'لیست مدارس کشور با قابلیت فیلتر و جستجو',
          'دسترسی به اطلاعات ارتباطی، امکانات و سطح آموزشی مدارس',
          'ویرایش اطلاعات مدرسه ها و سیستم نظر سنجی',
          'مشاهده نشانی مدرسه روی نقشه'
        ]
      },
      {
        title: 'معلم خصوصی',
        icon: 'teacher',
        details: [
          'جستجوی بهترین معلم خصوصی در نزدیکی شما',
          'گفتگوی دانش آموز و معلم',
          'پرداخت آنلاین یا اعتباری مبلغ حق التدریس',
          'برگزاری حضوری کلاس در خانه دانش آموز'
        ]
      },
      {
        title: 'اخبار آموزشی',
        icon: 'news',
        details: [
          'پوشش کامل اخبار آموزشی استان های کشور',
          'امکان فیلتر اخبار بر اساس استان مورد نظر',
          'نمایش تقویم زمانی رویداد های مهم کشور',
          'امکان عضویت در خبرنامه و ارسال گزینشی اخبار در تلگرام'
        ]
      },
      {
        title: 'درسنامه اموزشی',
        icon: 'blog',
        details: [
          'متن کامل کتاب های درسی از دبستان تا دبیرستان',
          'راهنمای کامل تمرین ها، خود آزمایی ها، کار برگه ها و فعالیت های کتاب',
          'ثبت درسنامه، نکات آموزشی، جزوه های آموزشی توسط دبیران',
        ]
      },
    ],
    footerFeedList: [
      {
        class: 'learning',
        header: 'آخرین فایل های آموزشی',
        contentItemList: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای',
            name: 'توسط علی رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ',
            name: 'توسط رضا رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ',
            name: 'توسط مهدی رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ',
            name: 'توسط اکبر رجبی',
            date: '16 فروردین'
          },
        ],
      },
      {
        class: 'question',
        header: 'آخرین پرسش ها',
        contentItemList: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ',
            name: 'توسط علی رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ',
            name: 'توسط رضا رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ',
            name: 'توسط مهدی رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ',
            name: 'توسط اکبر رجبی',
            date: '16 فروردین'
          },
        ],
      },
      {
        header: ' آخرین اخبار',
        contentItemList: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ',
            name: 'توسط علی رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ',
            name: 'توسط رضا رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'پاورپوینت تدریس ریاضی اول دبستان | تم 20: آموزش عددهای ',
            name: 'توسط مهدی رجبی',
            date: '16 فروردین'
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'لقمه آموزشی فیزیک دوازدهم | انواع واپاشی هسته‌ای و ',
            name: 'توسط اکبر رجبی',
            date: '16 فروردین'
          },
        ],
      },
    ],
    statList: [
      {label: 'مدرسه', value: '130,000'},
      {label: 'دبیر', value: '300,000'},
      {label: 'دانش آموز', value: '1,500,000'},
      {label: 'نمونه سوال', value: '50,000'},
      {label: 'پاورپوینت', value: '30,000'},
      {label: 'آزمون آنلاین', value: '5,000'},
    ],
  }),


}
</script>

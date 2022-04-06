<template>
  <div class="home-page-content">
    <section class="banner-sec">
      <div class="banner"></div>
    </section>
    <section class="search-sec box">
      <search :items="items" :values1="values1" :values2="values2" :values3="values3" :value="value"></search>
    </section>
    <section class="gradesList">
      <v-row>
        <v-col
          v-for="(grade, index) in gradeList" :key="index"
           md="3"  cols="12"
        >
          <garde-card :grade="grade" :index="index+1"></garde-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import GardeCard from "./index/garde-card";
import Search from "./index/search";

export default {
  components: {
    Search,
    GardeCard
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
          { title: 'نمونه سوال',
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
          { title: 'نمونه سوال',
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
          { title: 'نمونه سوال',
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
          { title: 'نمونه سوال',
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
  }),

}
</script>

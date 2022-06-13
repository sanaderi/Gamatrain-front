<template>
  <div>
    <!--  Start: search grade  -->
    <section class="d-block d-md-none search-sec mb-8">
      <v-container>
        <div class="box search-container">
          <search :items1="items1" :items2="items2" :items3="items3" :values1="values1" :value1="value1"
            :values2="values2" :value2="value2" :values3="values3" :value3="value2"></search>
        </div>
      </v-container>
    </section>
    <!--  End: search  -->
    <!-- Start : Category -->
    <category />
    <!-- End:Category -->

    <!-- Start:Lesson title -->
    <!-- Desktop -->
    <section class="lesson d-none d-md-block">
      <v-container class="lesson-section">
        <v-row>
          <v-col md="3" cols="12" class="lesson-details">
            <div class="d-flex flex-column details-content">
              <div class="last-update mb-3">
                <i class="fa-solid fa-calendar-days ml-2"></i>اخرین بروزرسانی :
                {{ lastUpdate }}
              </div>
              <div class="visit mb-3">
                <i class="fa-solid fa-eye ml-2"></i>بازدید:{{ visit }}
              </div>
              <div class="error-report">
                <i class="fa-solid fa-circle-exclamation ml-2"></i>گزارش خرابی
              </div>
            </div>
          </v-col>
          <v-col md="9" cols="12" class="lessons-title">
            <div class="d-flex flex-column text-center lesson-content">
              <p class="lesson-title mb-4">{{ lesson.lessonTitle }}</p>
              <p class="lesson-subtitle">{{ lesson.lessonSub }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Mobile -->
    <section class="lesson d-block d-md-none">
      <v-container class="lesson-section">
        <v-row>
          <v-col md="3" cols="12" class="lesson-details">
            <div class="d-flex align-center details-content">
              <div class="last-update ml-8">
                <i class="fa-solid fa-calendar-days ml-2"></i>
                {{ lastUpdate }}
              </div>
              <div class="visit ml-8">
                <i class="fa-solid fa-eye ml-2"></i>{{ visit }}
              </div>
              <div class="error-report">
                <i class="fa-solid fa-circle-exclamation ml-2"></i>گزارش خرابی
              </div>
            </div>
          </v-col>
          <v-col md="9" cols="12" class="lessons-title">
            <div class="d-flex flex-column text-center lesson-content">
              <p class="lesson-title mb-4">{{ lesson.lessonTitle }}</p>
              <p class="lesson-subtitle">{{ lesson.lessonSub }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- End: Lesson title -->
    <!-- Start : Card -->
    <section class="cards">
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="2" outlined class="pa-3 card-body">
              <v-row class="card">
                <v-col cols="4" md="3">
                  <div class="card-image">
                    <img :src="require('@/assets/images/' + card.img)" alt="" />
                  </div>
                </v-col>
                <v-col cols="8" md="9" class="d-flex align-center">
                  <div class="d-flex flex-column card-details">
                    <p class="card-title">{{ card.videoTitle }}</p>
                    <p class="video-teacher">
                      <i class="fa-solid fa-user ml-2"></i>{{ card.videoTeacher }}
                    </p>
                    <div class="d-flex justify-space-between">
                      <p class="durition">
                        <i class="fa-regular fa-clock ml-2"></i>مدت زمان :
                        {{ card.durition }}
                      </p>
                      <nuxt-link to="" class="more-link d-none d-md-block">بیشتر</nuxt-link>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="2" outlined class="pa-3 card-body">
              <v-row class="card">
                <v-col cols="4" md="3">
                  <div class="card-image">
                    <img :src="require('@/assets/images/' + card.img2)" alt="" />
                  </div>
                </v-col>
                <v-col cols="8" md="9" class="d-flex align-center">
                  <div class="d-flex flex-column card-details">
                    <p class="card-title">{{ card.bookTitle }}</p>
                    <p class="test-number">
                      <i class="fa-solid fa-grip-lines ml-2"></i>تعداد تست :{{
                          card.testNumber
                      }}
                    </p>
                    <div class="d-flex justify-space-between">
                      <p class="levels">
                        <i class="fa-solid fa-arrow-trend-up ml-2"></i>سطح سختی
                        :{{ card.easy }} {{ card.medium }} {{ card.hard }}
                      </p>
                      <nuxt-link to="" class="more-link d-none d-md-block">بیشتر</nuxt-link>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- End: Cart -->
    <!-- Start : Book -->
    <section class="book">
      <v-container class="pa-0 mb-16">
        <v-row>
          <v-col md="4">
            <div class="cataloge pa-6 d-none d-md-block">
              <p class="cataloge-title">
                {{ book.catalogeTitle }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="pa-0 pa-md-3">
            <div class="book-contents pa-3 pa-md-6">
              <div class="book-content" v-for="item in bookContent" :key="item">
                <p class="book-title mb-3">{{ item.bookTitle }}</p>
                <p class="bookText">{{ item.bookText }}</p>
                <div class="book-pictures d-flex flex-column align-center my-10 my-md-6">
                  <img :src="require('@/assets/images/' + item.bookPic)" alt="">
                  <span class="book-subtitle pa-2">
                    <p>{{ item.picSub }}</p>
                  </span>
                </div>
              </div>
              <div class="learn-more pa-6">
                <p class="learnmore-title mb-6"> بیشتر بدانید</p>
                <p class="learnmore-text">{{ book.learnmoreText }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- End: Book -->
    <!-- Start : Sample Test -->
    <section class="sample">
      <v-container>
        <div class="d-flex flex-column align-center my-6">
          <div class="sample-titles d-flex align-center ">
            <i class="icon icong-test title-icon d-flex algn-center"></i>
            <div class="sample-title mx-3">
              <p class="s-title">نمونه سوالات مرتبط</p>
              <p class="s-subtitle">از نمونه سوالات دیگردیدن فرمایید ...</p>
            </div>
          </div>
          <div class="sample-slider mt-10">
            <v-sheet class="mx-auto" max-width="1450">
              <v-slide-group multiple show-arrows>
                <v-slide-item v-for="n in 20" :key="n">
                  <div class="book-sample pa-4 mx-2">
                    <div class="sample-img">
                      <img :src="require('@/assets/images/' + bookSample.sampleImg)" alt="" class="sample-image">
                    </div>
                    <div class="sample-text">
                      <p>{{ bookSample.sampleText }}</p>
                    </div>
                    <div class="sbook-footer d-flex justify-space-between align-center mt-4">
                      <div class="d-flex align-center">
                        <img :src="require('@/assets/images/' + bookSample.samplefooterImg)" alt="">
                        <p class="sfooter-name mx-2">{{bookSample.sfooterName}}</p>
                      </div>
                      <nuxt-link to="" class="mb-0 sfooter-link">بیشتر</nuxt-link>
                    </div>
                  </div>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </div>
      </v-container>
    </section>
    <!-- End : Sample test -->
  </div>
</template>
<script>
import category from "~/components/common/category.vue";
export default {
  components: { category },
  data() {
    return {
      lastUpdate: "27 فروردین",
      visit: "15383",
      lesson: {
        lessonTitle: "درسنامه آموزشی زیست شناسی (2) کلاس یازدهم رشته تجربی",
        lessonSub: "فصل اول- گفتار 2: ساختار دستگاه عصبی با پاسخ",
      },
      card: {
        img: "dexter-morse1.png",
        img2: "book.png",
        videoTitle: "ویدیو دوره کامل آموزشی، ریاضی هفتم دوره اول متوسطه",
        bookTitle:
          "آلبوم بانک تست های آزمون آنلاین، ریاضی هفتم دوره اول متوسطه",
        testNumber: "2717",
        videoTeacher: "علیرضا داودی",
        durition: " 8 ساعت (26 فایل)",
        easy: "آسان",
        medium: "متوسط",
        hard: "دشوار",
      },
      book: {
        catalogeTitle: "زیست شناسی (2)",
        learnmoreText: "التهاب پرده‌های مننژ، مننژیت نام دارد و از علامت‌های آن سر درد، تب و خشکی گردن است. مننژیت در اثر عفونت‌های ویروسی یا باکتریایی ایجاد می‌شود."

      },
      bookContent: [
        {
          bookText: "در گذشته آموختید که دستگاه عصبی دو بخش مرکزی و محیطی دارد (شکل 11). به‌نظر شما چرا دو بخش این دستگاه را مرکزی و محیطی نامیده‌‌اند؟",
          bookPic: "9_1.png",
          picSub: "شکل 11- دستگاه عصبی مرکزی (رنگ زرد) و محیطی (رنگ آبی)",
        },
        {
          bookTitle: "دستگاه عصبی مرکزی",
          bookText: "دستگاه عصبی مرکزی شامل مغز و نخاع است که مراکز نظارت بر فعالیت‌های بدن‌اند. این دستگاه، اطلاعات دریافتی از محیط و درون بدن را تفسیر می‌کند و به آنها پاسخ می‌دهد. مغز و نخاع از دو بخش ",
          bookPic: "9_2.png",
          picSub: "شکل 12- برش عرضی مغز و نخاع",
        },
      ],
      model: null,
      bookSample: {
        sampleImg: "booksample.png",
        sampleText: "آزمون تستی فصل 2تا 8 ریاضی هفتم دبیرستان اسوه اصفهن",
        samplefooterImg:"dexter-morse3.png",
        sfooterName:"علیرضا داودی"
      }
    };
  },
};
</script>
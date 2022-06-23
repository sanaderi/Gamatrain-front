<template>
  <div>
    <!--  Start: search grade  -->
    <!-- <section class="d-block d-md-none search-sec mb-8">
      <v-container>
        <div class="box search-container">
          <search :items1="items1" :items2="items2" :items3="items3" :values1="values1" :value1="value1"
            :values2="values2" :value2="value2" :values3="values3" :value3="value2"></search>
        </div>
      </v-container>
    </section> -->
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
          <v-col cols="12" md="6" class="pb-0">
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
          <v-col md="3">
            <div class="cataloge pa-6 d-none d-md-block">
              <p class="cataloge-title d-flex align-center">
                <img :src="require('@/assets/images/' + bookmark)" alt="" class="ml-2">

                {{ book.catalogeTitle }}
              </p>
              <div class="cataloge-content">
                <timeLine />
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="9" class="pa-0 pa-md-3">
            <div class="book-contents pa-3 pa-md-6">
              <!-- <v-navigation-drawer left app v-model="side" class="d-block d-md-none">
                ffefef
              </v-navigation-drawer> -->
              <div class="responsive-buttons d-flex align-center d-block d-md-none">
                <v-btn x-large class="d-flex justify-center responsive-button ml-4" @click.stop="drawer = !drawer">
                  <i class="fa-solid fa-receipt "></i>
                </v-btn>
                <v-btn x-large class="responsive-button" @click.stop="drawer = !drawer">
                  <i class="fa-solid fa-receipt ml-6"></i>
                  فهرست
                </v-btn>
              </div>
              <v-navigation-drawer v-model="drawer" class="sidebar-nav pa-5" width="320">
                <div class="sidebar-timeline-title d-flex align-center ma-2">
                  <img :src="require('@/assets/images/' + bookmark)" alt="" class="ml-2">
                  <p>{{ sidebartimelinetitle }}</p>
                </div>
                <div class="timeline">
                  <v-timeline dense clipped>
                    <v-timeline-item class="mb-4" :color="item.color" icon-color="grey lighten-3" medium fill-dot
                      v-for="item in timeLines" :key="item.value">
                      <span class="headline font-weight-bold timeline-number" v-text="item.number"></span>
                      <v-row class="timeline-content-body">
                        <v-col cols="12 pa-2">
                          <p class="category-book-titles active" id="lessonTitle"> {{ item.title }}</p>
                        </v-col>
                        <v-col cols="12 pa-2" v-for="item in lessons" :key="item.value">
                          <nuxt-link to="" id="lessonName" class="lesson-name-timeline">
                            <i class="fa-regular fa-window-minimize ml-1 lesson-name-dash"></i>
                            {{ item.lesson }}
                          </nuxt-link>
                        </v-col>
                      </v-row>
                    </v-timeline-item>
                  </v-timeline>
                </div>
              </v-navigation-drawer>
              <div class="book-content" v-for="(item, bookContent) in bookContent" :key="bookContent">
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
      <v-container class="pb-md-16 pb-5">
        <div class="d-flex flex-column align-center my-6">
          <div class="sample-titles d-flex align-center ">
            <i class="icon icong-test title-icon d-flex algn-center"></i>
            <div class="sample-title mx-3">
              <p class="s-title">Sample Examات مرتبط</p>
              <p class="s-subtitle">از Sample Examات دیگردیدن فرمایید ...</p>
            </div>
          </div>
          <div class="sample-slider mt-10">
            <v-sheet class="mx-auto sample-width">
              <v-slide-group multiple show-arrows>
                <v-slide-item v-for="n in 7" :key="n">
                  <div class="book-sample pa-4 mx-2">
                    <div class="sample-img">
                      <img :src="require('@/assets/images/' + bookSample.sampleImg)" alt="" class="sample-image">
                      <span class="sample-test-number">
                        <p>{{ testNumber }}</p>
                      </span>
                    </div>
                    <div class="sample-text">
                      <p>{{ bookSample.sampleText }}</p>
                    </div>
                    <div class="sbook-footer d-flex justify-space-between align-center mt-4">
                      <div class="d-flex align-center">
                        <img :src="require('@/assets/images/' + bookSample.samplefooterImg)" alt="">
                        <p class="sfooter-name mx-2">{{ bookSample.sfooterName }}</p>
                      </div>
                      <nuxt-link to="" class="mb-0 sfooter-link">آزمون انلاین</nuxt-link>
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
    <!-- Start: Feed -->
    <section class="feed">
      <v-container class="pa-4 pa-md-12 pt-10">
        <v-row>
          <!-- Start : Descktop LastFile-->
          <v-col md="6" class="last-files pa-4 d-none d-md-block">
            <div class="lastfile-content d-flex flex-column">
              <div class="lastfile-titles d-flex align-center pb-4 mb-5">
                <span class="icon icong-learnfiles lastfile-icon-title"></span>
                <p class="mb-0 mx-2 lastfile-title">Latest Training Content</p>
              </div>
              <div class="video-slider">
                <div class="owl-carousel owl-theme">
                  <div class="item-video" v-for="item in videos" :key="item.value">
                    <video :src="require('@/assets/video/' + item.vid)" controls width="575" class="video-carousel">
                    </video>
                  </div>
                </div>
                <!-- <v-slide-group multiple center-active>
                  <v-slide-item v-for="item in videos" :key="item.value">
                    <div class="item-video">
                      <video :src="require('@/assets/video/' + item.vid)" controls  class="video-carousel-desktop">
                      </video>
                    </div>
                  </v-slide-item>
                </v-slide-group> -->
                <!-- <div class="filter"></div> -->
              </div>
              <div class="date-name d-flex align-center justify-space-between my-5">
                <div class="d-flex align-center">
                  <img :src="require('@/assets/images/' + lastFile.img)" alt="">
                  <p class="mr-2">{{ lastFile.name }}</p>
                </div>
                <div class="d-flex align-center">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p class="mr-2">{{ lastFile.date }}</p>
                </div>
                <p> اعداد اسلاید ها : {{ lastFile.number }}</p>
              </div>
              <p class="lastFile-text">
                {{ lastFile.lastFileText }}
              </p>
              <div class="date-name d-flex align-center justify-space-between my-5">
                <p>محتوا : {{ lastFile.content }}</p>
                <p> بودجه بندی : {{ lastFile.budget }}</p>
              </div>
            </div>
          </v-col>
          <!-- End : Descktop LastFile-->

          <!-- Start : Mobile lastFIle -->
          <v-col cols="12" md="6" class="last-files pa-4 d-block d-md-none mb-6 mb-md-0">
            <div class="lastfile-content d-flex flex-column">
              <div class="lastfile-titles d-flex align-center pb-4 mb-5">
                <span class="icon icong-learnfiles lastfile-icon-title"></span>
                <p class="mb-0 mx-2 lastfile-title">Latest Training Content</p>
              </div>
              <div class="video-slider">
                <div class="owl-carousel owl-theme">
                  <div class="item-video" v-for="item in videos" :key="item.value">
                    <video :src="require('@/assets/video/' + item.vid)" controls width="350" class="video-carousel">
                    </video>
                  </div>
                </div>
                <!-- <v-slide-group multiple center-active>
                  <v-slide-item v-for="item in videos" :key="item.value">
                    <div class="item-video">
                      <video :src="require('@/assets/video/' + item.vid)" controls  class="video-carousel-mobile">
                      </video>
                    </div>
                  </v-slide-item>
                </v-slide-group> -->
                <!-- <div class="filter"></div> -->
              </div>
              <p class="lastFile-text my-5">
                {{ lastFile.responsiveText }}
              </p>
              <div class="date-name d-flex align-center justify-space-between ">
                <div class="d-flex align-center">
                  <img :src="require('@/assets/images/' + lastFile.img)" alt="">
                  <p class="mr-2">{{ lastFile.name }}</p>
                </div>
                <div class="d-flex align-center">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p class="mr-2">{{ lastFile.date }}</p>
                </div>
              </div>
            </div>
          </v-col>
          <!-- End : Mobile lastFIle -->


          <v-col cols="12" md="6" class="related-ask-test py-0 d-flex flex-column">
            <!-- Start : Desktop askCard -->
            <div class="ask-card mb-6 pa-4 d-none d-md-block">
              <div class="ask-title d-flex align-center mb-5">
                <span :class="'icon icong-' + askCard.icon" class="ask-icon d-flex align-center"></span>
                <div class="ask-title-texts d-flex flex-column mr-3">
                  <div class="asktitle">Q & A های مرتبط</div>
                  <div class="asksubtitle">سوال کنید یا به سوالات دیگران پاسخ دهید ...</div>

                </div>
              </div>
              <div class="ask-texts d-flex" v-for="(item, ask) in askTexts " :key="ask.value">
                <p class="my-5 ask-text">
                  <i class="fa-solid fa-link ask-text-icon ml-2"></i>
                  {{ item.askText }}
                </p>
              </div>
              <v-divider class="mt-4"></v-divider>
              <div class="ask-footer my-4 ">
                <v-btn class="askcard-footer-btn"><i class="fa-solid fa-plus ml-2"></i>ارسال فایل</v-btn>
                <nuxt-link to="" class="askcard-footer-link mr-6">
                  More
                </nuxt-link>
              </div>
            </div>
            <!-- End:Desktop askCard -->
            <!-- Start : Mobile askCard -->
            <div class="ask-card mb-6 pa-4  d-block d-md-none">
              <div class="ask-title d-flex align-center mb-4">
                <span :class="'icon icong-' + askCard.icon" class="ask-icon d-flex align-center"></span>
                <div class="ask-title-texts d-flex flex-column mr-3">
                  <div class="asktitle">Q & A های مرتبط</div>
                  <div class="asksubtitle">سوال کنید یا به سوالات دیگران پاسخ دهید ...</div>

                </div>
              </div>
              <div class="ask-texts d-flex" v-for="(item, ask) in askTexts " :key="ask.value">
                <p class="my-4 ask-text">
                  <i class="fa-solid fa-link ask-text-icon ml-2"></i>
                  {{ item.responsiveText }}
                </p>
              </div>
              <v-divider class="mt-4"></v-divider>
              <div class="ask-footer mt-4">
                <v-btn class="askcard-footer-btn"><i class="fa-solid fa-plus ml-2"></i>ارسال فایل</v-btn>
                <nuxt-link to="" class="askcard-footer-link mr-6">
                  More
                </nuxt-link>
              </div>
            </div>
            <!-- End:Mobile askCard -->
            <!-- Start : Desktop testCard -->
            <div class="test-card  pa-4 d-none d-md-block">
              <div class="test-title d-flex align-center mb-5">
                <span :class="'icon icong-' + testCard.icon" class="test-icon d-flex align-center"></span>
                <div class="test-title-texts d-flex flex-column mr-3">
                  <div class="testtitle">Q & A های مرتبط</div>
                  <div class="testsubtitle">سوال کنید یا به سوالات دیگران پاسخ دهید ...</div>
                </div>
              </div>
              <div class="test-texts d-flex" v-for="(item, test) in testTexts " :key="test.value">
                <p class="my-5 test-text">
                  <i class="fa-solid fa-link test-text-icon ml-2"></i>
                  {{ item.testText }}
                </p>
              </div>
              <v-divider class="mt-4"></v-divider>
              <div class="test-footer my-4">
                <nuxt-link to="" class="testcard-footer-link">
                  More
                </nuxt-link>
              </div>
            </div>
            <!-- end: Desktop Testcard -->

            <!-- Start : Mobile testCard -->
            <div class="test-card  pa-4 d-block d-md-none">
              <div class="test-title d-flex align-center mb-4">
                <span :class="'icon icong-' + testCard.icon" class="test-icon d-flex align-center"></span>
                <div class="test-title-texts d-flex flex-column mr-3">
                  <div class="testtitle">Q & A های مرتبط</div>
                  <div class="testsubtitle">سوال کنید یا به سوالات دیگران پاسخ دهید ...</div>
                </div>
              </div>
              <div class="test-texts d-flex" v-for="(item, test) in testTexts " :key="test.value">
                <p class="my-4 test-text">
                  <i class="fa-solid fa-link test-text-icon ml-2"></i>
                  {{ item.responsiveText }}
                </p>
              </div>
              <v-divider class="mt-4"></v-divider>
              <div class="test-footer mt-4">
                <nuxt-link to="" class="testcard-footer-link">
                  More
                </nuxt-link>
              </div>
            </div>
            <!-- end: Mobile testcard -->
          </v-col>

        </v-row>
      </v-container>
    </section>
    <!-- End: Feed -->

    <!-- Sidebar -->

  </div>
</template>
<script>
import category from "~/components/common/category.vue";
import timeLine from "~/components/common/timeline.vue";
export default {
  components: { category, timeLine, },
  data() {
    return {
      bookmark: "bookmark.png",
      drawer: false,
      // model: null,
      sidebartimelinetitle: "  زیست شناسی (2)",
      testNumber: "20 تست",
      lessons: [
        {
          lesson: "گفتار 1 :یاخته های بافت عصبی"
        },
        {
          lesson: "گفتار 2 : ساختار دستگاه عصبی"
        }
      ],
      timeLines: [
        {
          number: '1',
          color: "teal",
          title: "تنظیم عصبی",

        },
        {
          number: '2',
          color: "grey lighten-3",
          title: "پاسخ گیاهان به محرک ها",


        },
        {
          number: '3',
          color: "grey lighten-3",
          title: "حواس",


        },

      ],

      videos: [
        {

          vid: "video.mp4"
        },
        {
          vid: "video1.mp4"
        },
        {
          vid: "video2.mp4"
        },
        {
          vid: "video3.mp4"
        },
        {
          vid: "video2.mp4"
        },
      ],
      lastFile: {
        img: "dexter-morse2.png",
        name: "علیرضا داودی",
        date: "27 فروردین",
        number: "27",
        responsiveText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ......",
        lastFileText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت ......",
        content: "آموزش سطح تیزهوشان (pptx)",
        budget: "صفحه ۱ تا صفحه ۱۶۸"
      },
      askCard: {
        icon: "qa",
      },
      askTexts: [
        {
          responsiveText: "فیلم حل تمرین (3 و 4) درس 10 و ترجمه متن ...",
          askText: "فیلم حل تمرین (3 و 4) درس 10 و ترجمه متن + حل تمرین (1 و 2) درس 11"
        },
        {
          responsiveText: "فیلم ریاضی هفتم | فصل 2: عددهای صحیح ...",
          askText: " فیلم ریاضی هفتم | فصل 2: عددهای صحیح (جلسه چهارم: حل نمونه)"
        },
        {
          responsiveText: "پاورپوینت مطالعات اجتماعی هفتم | درس12: ...",
          askText: " پاورپوینت مطالعات اجتماعی هفتم | درس 12: حفاظت از زیستگاه‌های ایران"
        },
      ],
      testCard: {
        icon: "azmoon"
      },
      testTexts: [
        {
          responsiveText: "فیلم حل تمرین (3 و 4) درس 10 و ترجمه متن ...",
          testText: "فیلم حل تمرین (3 و 4) درس 10 و ترجمه متن + حل تمرین (1 و 2) درس 11"
        },
        {
          responsiveText: "فیلم ریاضی هفتم | فصل 2: عددهای صحیح ...",
          testText: " فیلم ریاضی هفتم | فصل 2: عددهای صحیح (جلسه چهارم: حل نمونه)"
        },
        {
          responsiveText: "پاورپوینت مطالعات اجتماعی هفتم | درس12: ...",
          testText: " پاورپوینت مطالعات اجتماعی هفتم | درس 12: حفاظت از زیستگاه‌های ایران"
        },
      ],
      rating: 4,
      items1: ["All", "دبستان", "متوسطه"],
      items2: ["All", "دبستان", "متوسطه"],
      items3: ["All", "دبستان", "متوسطه"],
      values1: ["All"],
      values2: ["All"],
      values3: ["All"],
      value1: null,
      value2: null,
      value3: null,
      lastUpdate: "27 فروردین",
      visit: "15383",
      lesson: {
        lessonTitle: "Tutorial زیست شناسی (2) کلاس یازدهم رشته تجربی",
        lessonSub: "فصل اول- گفتار 2: ساختار دستگاه عصبی با پاسخ",
      },
      card: {
        img: "dexter-morse1.png",
        img2: "book.png",
        videoTitle: "ویدیو دوره کامل آموزشی، ریاضی هفتم دوره اول متوسطه",
        bookTitle:
          "آلبوم بانک تست های Online Exam، ریاضی هفتم دوره اول متوسطه",
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
        sampleText: "آزمون تستی فصل 2تا 8 ریاضی هفتم teacherستان اسوه اصفهن",
        samplefooterImg: "dexter-morse3.png",
        sfooterName: "علیرضا داودی"
      },
      events: [],
      input: null,
      nonce: 0,
    };

  },
  computed: {
    timeline() {
      return this.events.slice().reverse()
    },
  },
  mounted() {
    generateSlider(),
      this.color()
  },
  methods: {
    comment() {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        }),
      })

      this.input = null
    },
    color() {

    }
  },

};
</script>

<template>
  <div>
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
                <i class="fa-solid fa-calendar-days mr-2"></i>Last update :
                {{ lastUpdate }}
              </div>
              <div class="visit mb-3">
                <i class="fa-solid fa-eye mr-2"></i>Viewed:{{ visit }}
              </div>
              <div class="error-report">
                <i class="fa-solid fa-circle-exclamation mr-2"></i>Crash report
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
                <i class="fa-solid fa-calendar-days mr-2"></i>
                {{ lastUpdate }}
              </div>
              <div class="visit ml-8">
                <i class="fa-solid fa-eye mr-2"></i>{{ visit }}
              </div>
              <div class="error-report">
                <i class="fa-solid fa-circle-exclamation mr-2"></i>Crash report
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
                      <i class="fa-solid fa-user mr-2"></i>{{ card.videoTeacher }}
                    </p>
                    <div class="d-flex justify-space-between">
                      <p class="durition">
                        <i class="fa-regular fa-clock mr-2"></i>Time:
                        {{ card.durition }}
                      </p>
                      <nuxt-link to="" class="more-link d-none d-md-block">More</nuxt-link>
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
                      <i class="fa-solid fa-grip-lines mr-2"></i>Number of tests: {{
                          card.testNumber
                      }}
                    </p>
                    <div class="d-flex justify-space-between">
                      <p class="levels">
                        <i class="fa-solid fa-arrow-trend-up mr-2"></i>Difficulty
                        :{{ card.easy }} {{ card.medium }} {{ card.hard }}
                      </p>
                      <nuxt-link to="" class="more-link d-none d-md-block">More</nuxt-link>
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
                <img :src="require('@/assets/images/' + bookmark)" alt="" class="mr-2">

                {{ book.catalogeTitle }}
              </p>
              <div class="cataloge-content">
                <timeLine />
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="9" class="pa-0 pa-md-3">
            <div class="book-contents pa-3 pa-md-6">
              <div class="responsive-buttons d-flex align-center d-block d-md-none">
                <v-btn x-large class="responsive-button" @click.stop="drawer = !drawer">
                  <!-- <i class="fa-solid fa-receipt"></i> -->
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0V14H0V17C0 18.66 1.34 20 3 20H15C16.66 20 18 18.66 18 17V0L16.5 1.5ZM16 17C16 17.55 15.55 18 15 18C14.45 18 14 17.55 14 17V14H5V3H16V17Z"
                      fill="white" />
                    <path d="M12 5H6V7H12V5Z" fill="white" />
                    <path d="M15 5H13V7H15V5Z" fill="white" />
                    <path d="M12 8H6V10H12V8Z" fill="white" />
                    <path d="M15 8H13V10H15V8Z" fill="white" />
                  </svg>

                  <p class="ml-3" id="sticky-button" v-show="isVisible">
                    List
                  </p>

                </v-btn>
              </div>
              <v-navigation-drawer v-model="drawer" class="sidebar-nav pa-5" width="320">
                <div class="sidebar-timeline-title d-flex align-center ma-2">
                  <img :src="require('@/assets/images/' + bookmark)" alt="" class="mr-2">
                  <p>{{ sidebartimelinetitle }}</p>
                </div>
                <v-stepper v-model="e6" vertical class="stepper">
                  <v-stepper-step :complete="e6 > 1" step="1" @click="e6 = 1" color="#008B8B" class="stepper-1">
                    Select an app
                  </v-stepper-step>
                  <v-stepper-content step="1">
                    <v-row>
                      <v-col cols="12" v-for="item in timelines" :key="item.value">
                        <nuxt-link id="lesson-name" to="" class="stepper-item">
                          <!-- <i class="fa-regular fa-window-minimize mr-2"></i> -->
                          {{ item.lessonName }}
                        </nuxt-link>
                      </v-col>
                    </v-row>
                  </v-stepper-content>

                  <v-stepper-step :complete="e6 > 2" step="2" @click="e6 = 2" color="#008B8B" class="stepper-2">
                    Configure analytics for this app
                  </v-stepper-step>

                  <v-stepper-content step="2">
                    <v-row>
                      <v-col cols="12" v-for="item in timelines" :key="item.value">
                        <nuxt-link id="lesson-name" to="" class="stepper-item">
                          <!-- <i class="fa-regular fa-window-minimize mr-2"></i> -->
                          {{ item.lessonName }}
                        </nuxt-link>
                      </v-col>
                    </v-row>
                  </v-stepper-content>

                  <v-stepper-step :complete="e6 > 3" step="3" @click="e6 = 3" color="#008B8B" class="stepper-3">
                    Select an ad format and name ad unitaaa
                  </v-stepper-step>

                  <v-stepper-content step="3">
                    <v-row>
                      <v-col cols="12" v-for="item in timelines" :key="item.value">
                        <nuxt-link id="lesson-name" to="" class="stepper-item">
                          <!-- <i class="fa-regular fa-window-minimize mr-2"></i> -->
                          {{ item.lessonName }}
                        </nuxt-link>
                      </v-col>
                    </v-row>
                  </v-stepper-content>

                  <v-stepper-step step="4" @click="e6 = 4" color="#008B8B" class="stepper-4">
                    View setup instructions
                  </v-stepper-step>
                  <v-stepper-content step="4">
                    <v-row>
                      <v-col cols="12" v-for="item in timelines" :key="item.value">
                        <nuxt-link id="lesson-name" to="" class="stepper-item">
                          <!-- <i class="fa-regular fa-window-minimize mr-2"></i> -->
                          {{ item.lessonName }}
                        </nuxt-link>
                      </v-col>
                    </v-row>
                  </v-stepper-content>
                </v-stepper>
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
                <p class="learnmore-title mb-6"> Know more</p>
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
              <p class="s-title">Related Sample Exams</p>
              <p class="s-subtitle">Check out the other sample exams...</p>
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
                      <p>{{ bookSample.sampleText.length > 50 ? `${bookSample.sampleText.substring(0, 50)}...` :
                          bookSample.sampleText
                      }}</p>
                    </div>
                    <div class="sbook-footer d-flex justify-space-between align-center mt-4">
                      <div class="d-flex align-center">
                        <img :src="require('@/assets/images/' + bookSample.samplefooterImg)" alt="">
                        <p class="sfooter-name mx-2">{{ bookSample.sfooterName }}</p>
                      </div>
                      <nuxt-link to="" class="mb-0 sfooter-link">Online exam</nuxt-link>
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
      <v-container class="pa-2 pa-md-12 pt-10">
        <v-row>
          <!-- Start : Descktop LastFile-->
          <v-col md="6" class="last-files pa-4 d-none d-md-block">
            <div class="lastfile-content d-flex flex-column">
              <div class="lastfile-titles d-flex align-center pb-4 mb-5">
                <span class="icon icong-learnfiles lastfile-icon-title"></span>
                <p class="mb-0 mx-2 lastfile-title">Latest Training Content</p>
              </div>
              <div class="video-slider">
                <Video :videos="videos" unique="desktop"></Video>
                <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1"
                  empty-icon="$ratingFull" half-increments hover size="20" class="slider-rating"></v-rating>
              </div>
              <div class="date-name d-flex align-center justify-space-between my-5">
                <div class="d-flex align-center">
                  <img :src="require('@/assets/images/' + lastFile.img)" alt="">
                  <p class="ml-2">{{ lastFile.name }}</p>
                </div>
                <div class="d-flex align-center">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p class="ml-2">{{ lastFile.date }}</p>
                </div>
                <p> Slide numbers: {{ lastFile.number }}</p>
              </div>
              <p class="lastFile-text">
                {{ lastFile.lastFileText.length > 350 ? `${lastFile.lastFileText.substring(0, 350)}...` :
                    lastFile.lastFileText
                }}
              </p>
              <div class="date-name d-flex align-center justify-space-between my-5">
                <p>Content:{{ lastFile.content }}</p>
                <p> Budgeting: {{ lastFile.budget }}</p>
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
                <Video :videos="videos" unique="mobile"></Video>
                <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1"
                  empty-icon="$ratingFull" half-increments hover size="20" class="slider-rating"></v-rating>
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


          <v-col cols="12" md="6" class="related-ask-test py-0 d-flex flex-column justify-space-between">
            <!-- Start : Desktop askCard -->
            <div class="ask-card mb-6 pa-4 d-none d-md-block">
              <div class="ask-title d-flex align-center mb-5">
                <span :class="'icon icong-' + askCard.icon" class="ask-icon d-flex align-center"></span>
                <div class="ask-title-texts d-flex flex-column ml-3">
                  <div class="asktitle">Related Q&As</div>
                  <div class="asksubtitle">Ask questions or answer other people's questions...</div>

                </div>
              </div>
              <div class="ask-texts d-flex" v-for="(item, ask) in askTexts " :key="ask.value">
                <p class="my-3 ask-text">
                  <i class="fa-solid fa-link ask-text-icon mr-2"></i>
                  {{ item.askText.length > 80 ? `${item.askText.substring(0, 80)}...` : item.askText.substring(0, 80) }}
                </p>
              </div>
              <v-divider class="mt-4"></v-divider>
              <div class="ask-footer my-4 ">
                <v-btn class="askcard-footer-btn"><i class="fa-solid fa-plus ml-2"></i>Send file</v-btn>
                <nuxt-link to="" class="askcard-footer-link ml-6">
                  More
                </nuxt-link>
              </div>
            </div>
            <!-- End:Desktop askCard -->
            <!-- Start : Mobile askCard -->
            <div class="ask-card mb-6 pa-4  d-block d-md-none">
              <div class="ask-title d-flex align-center mb-4">
                <span :class="'icon icong-' + askCard.icon" class="ask-icon d-flex align-center"></span>
                <div class="ask-title-texts d-flex flex-column ml-3">
                  <div class="asktitle">Related Q&As</div>
                  <div class="asksubtitle">Ask questions or answer other people's questions...</div>

                </div>
              </div>
              <div class="ask-texts d-flex" v-for="(item, ask) in askTexts " :key="ask.value">
                <p class="my-4 ask-text">
                  <i class="fa-solid fa-link ask-text-icon mr-2"></i>
                  {{ item.responsiveText }}
                </p>
              </div>
              <v-divider class="mt-4"></v-divider>
              <div class="ask-footer mt-4">
                <v-btn class="askcard-footer-btn"><i class="fa-solid fa-plus mr-2"></i>Send file</v-btn>
                <nuxt-link to="" class="askcard-footer-link mx-6">
                  More
                </nuxt-link>
              </div>
            </div>
            <!-- End:Mobile askCard -->
            <!-- Start : Desktop testCard -->
            <div class="test-card  pa-4 d-none d-md-block">
              <div class="test-title d-flex align-center mb-5">
                <span :class="'icon icong-' + testCard.icon" class="test-icon d-flex align-center"></span>
                <div class="test-title-texts d-flex flex-column ml-3">
                  <div class="testtitle">Related Q&As</div>
                  <div class="testsubtitle">Ask questions or answer other people's questions...</div>
                </div>
              </div>
              <div class="test-texts d-flex" v-for="(item, test) in testTexts " :key="test.value">
                <p class="my-3 test-text">
                  <i class="fa-solid fa-link test-text-icon mr-2"></i>
                  {{ item.testText.length > 80 ? `${item.testText.substring(0, 80)}...` : item.testText }}
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
                <div class="test-title-texts d-flex flex-column ml-3">
                  <div class="testtitle">Related Q&As</div>
                  <div class="testsubtitle">Ask questions or answer other people's questions...</div>
                </div>
              </div>
              <div class="test-texts d-flex" v-for="(item, test) in testTexts " :key="test.value">
                <p class="my-4 test-text">
                  <i class="fa-solid fa-link test-text-icon mr-2"></i>
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
import Video from "~/components/common/video.vue";

export default {
  components: { category, timeLine, Video },
  data() {
    return {
      isVisible: true,
      a : 0,
      e6: 1,
      timelines: [
        {
          lessonName: " Speech 1 :Nerve tissue cells",
        },
        {
          lessonName: "Speech 2 : Nervous system structure",
        }
      ],
      bookmark: "bookmark.png",
      drawer: false,
      // model: null,
      sidebartimelinetitle: "Biology",
      testNumber: "20 Test",
      videos: [
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },

      ],
      lastFile: {
        img: "dexter-morse2.png",
        name: "Arian Etemdi",
        date: "27 Jun",
        number: "27",
        responsiveText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ......",
        lastFileText: "Lorem Epsom is a fictitious text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary and for the current conditions of technology and diverse applications with the aim of improving practical tools. A lot in sixty...",
        content: "Gifted level education (pptx)",
        budget: "Page 1 to page 168"
      },
      askCard: {
        icon: "qa",
      },
      askTexts: [
        {
          responsiveText: "Exercise solution video (3 and 4) lesson 10 and text...",
          askText: "Exercise solution video (3 and 4) lesson 10 and text translation + exercise solution (1 and 2) lesson 11"
        },
        {
          responsiveText: "Math 7th movie Chapter 2: Integers...",
          askText: "Math 7th movie Chapter 2: Integers (fourth session: sample solution)"
        },
        {
          responsiveText: "7th social studies PowerPoint Lesson 12: ...",
          askText: "7th social studies PowerPoint Lesson 12: Protection of Iran's habitats"
        },
      ],
      testCard: {
        icon: "azmoon"
      },
      testTexts: [
        {
          responsiveText: "Exercise solution video (3 and 4) lesson 10 and ...",
          testText: "Exercise solution video (3 and 4) lesson 10 and text translation + exercise solution (1 and 2) lesson 11"
        },
        {
          responsiveText: "Math 7th movie Chapter 2: Integers...",
          testText: "Math 7th movie Chapter 2: Integers (fourth session: sample solution)"
        },
        {
          responsiveText: "7th social studies PowerPoint Lesson 12: ...",
          testText: "7th social studies PowerPoint Lesson 12: Protection of Iran's habitats"
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
      lastUpdate: "27 Jun",
      visit: "15383",
      lesson: {
        lessonTitle: "Tutorial Biology (2) Eleventh grade of experimental discipline",
        lessonSub: "First Chapter- Speech 2: Nervous system structure With the answer",
      },
      card: {
        img: "dexter-morse1.png",
        img2: "book.png",
        videoTitle: "Video of the complete educational course, the seventh mathematics of the first year of high school",
        bookTitle:
          "Online Exam test bank album, Math 7th first period of high school",
        testNumber: "2717",
        videoTeacher: "Arian Etemdi",
        durition: " 8 Hour (26 File)",
        easy: "Easy",
        medium: "Medium",
        hard: "Difficult",
      },
      book: {
        catalogeTitle: "Biology (2)",
        learnmoreText: "Inflammation of the meninges is called meningitis and its symptoms are headache, fever and dry neck. Meningitis is caused by viral or bacterial infections."

      },
      bookContent: [
        {
          bookText: "In the past, you learned that the nervous system has two central and peripheral parts (Figure 11). Why do you think this device is called central and peripheral?",
          bookPic: "9_1.png",
          picSub: "Figure 11- Central nervous system (yellow color) and peripheral (blue color)",
        },
        {
          bookTitle: "Central nervous system",
          bookText: "The central nervous system includes the brain and the spinal cord, which are the centers for monitoring the body's activities. This device interprets the information received from the environment and inside the body and responds to them. Brain and spinal cord from two parts ",
          bookPic: "9_2.png",
          picSub: "Figure 12- Transverse section of the brain and spinal cord",
        },
      ],
      model: null,
      bookSample: {
        sampleImg: "booksample.png",
        sampleText: "Test exam of 2nd to 8th chapter of Math 7th teacher of Esveh Isfahan University",
        samplefooterImg: "dexter-morse3.png",
        sfooterName: "Arian Etemdi"
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
  beforeMount() {
    window.addEventListener('scroll', this.testScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.testScroll);
  },
  mounted() {

    this.color()
  },
  methods: {
    // handleScroll(e) {
    //   this.isVisible =e.target.scrollTop > 100 ? false : true
    //   console.log(window.scrollY)
    // },
    testScroll() {
      let scroll = window.pageYOffset
      if (this.a < scroll) {
        this.isVisible = false
       
      } else {
        this.isVisible = true
      }
      this.a = scroll
    },
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

<style>
.video-wrapper {
  width: 100%;
  margin: auto;
  max-width: 700px;
}

</style>
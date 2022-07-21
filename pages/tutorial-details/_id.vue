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
                <v-btn x-large class="d-flex justify-center responsive-button ml-4" @click.stop="drawer = !drawer">
                  <i class="fa-solid fa-receipt "></i>
                </v-btn>
                <v-btn x-large class="responsive-button" @click.stop="drawer = !drawer">
                  <i class="fa-solid fa-receipt ml-6"></i>
                 List
                </v-btn>
              </div>
              <v-navigation-drawer v-model="drawer" class="sidebar-nav pa-5" width="320">
                <div class="sidebar-timeline-title d-flex align-center ma-2">
                  <img :src="require('@/assets/images/' + bookmark)" alt="" class="mr-2">
                  <p>{{ sidebartimelinetitle }}</p>
                </div>
                <v-stepper v-model="e6" vertical class="stepper">
                  <v-stepper-step :complete="e6 > 1" step="1" @click="e6 = 1" color="#008B8B">
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

                  <v-stepper-step :complete="e6 > 2" step="2" @click="e6 = 2" color="#008B8B">
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

                  <v-stepper-step :complete="e6 > 3" step="3" @click="e6 = 3" color="#008B8B">
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

                  <v-stepper-step step="4" @click="e6 = 4" color="#008B8B">
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
    <related-content/>
    <!-- End : Sample test -->
    <!-- Start: Feed -->
    <section class="feed">
      <v-container class="pa-4 pa-md-12 pt-10">
        <v-row>
         <v-col cols="12" md="6">
           <latest-training-content/>
         </v-col>

          <v-col cols="12" md="6" class="related-ask-test py-0 d-flex flex-column justify-space-between">
              <related-qa/>

              <related-online-exam/>
          </v-col>

        </v-row>
      </v-container>
    </section>
    <!-- End: Feed -->

    <!-- Sidebar -->

  </div>
</template>
<script>
import category from "@/components/common/category.vue";
import timeLine from "@/components/common/timeline.vue";
import RelatedContent from "@/components/details/related-content";
import LatestTrainingContent from "@/components/details/latest-training-content";
import RelatedQa from "@/components/details/related-qa";
import RelatedOnlineExam from "@/components/details/related-online-exam";

export default {
  components: {RelatedOnlineExam, RelatedQa, LatestTrainingContent, RelatedContent, category, timeLine },
  data() {
    return {
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
      askCard: {
        icon: "qa",
      },

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

<style>
.video-wrapper {
  width: 100%;
  margin: auto;
  max-width: 700px;
}
</style>

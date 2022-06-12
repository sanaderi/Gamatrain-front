<template>
  <div>
    <!-- Start : Category -->
    <category />
    <!-- End:Category -->

    <!-- Start:Lesson title -->
    <section class="lesson">
      <v-container class="lesson-section">
        <v-row>
          <v-col md="2" class="lesson-details">
            <div class="d-flex flex-column">
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
          <v-col md="9">
            <div class="d-flex flex-column text-center">
              <p class="lesson-title mb-4">{{ lesson.lessonTitle }}</p>
              <p class="lesson-subtitle">{{ lesson.lessonSub }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- End: Lesson title -->
    <!-- Start : Cart -->
    <section class="cards">
      <v-container>
        <v-row>
          <v-col md="6" >
            <v-card elevation="2" outlined class="pa-3 ">
              <v-row class="card">
                <v-col md="3">
                  <div class="card-image">
                    <img :src="require('@/assets/images/' + card.img)" alt="" />
                  </div>
                </v-col>
                <v-col md="9" class="d-flex align-center">
                  <div class="d-flex flex-column card-details">
                    <p class="video-card-title">{{ card.videoTitle }}</p>
                    <p class="video-teacher"><i class="fa-solid fa-user ml-2"></i>{{ card.videoTeacher }}</p>
                    <div class="d-flex justify-space-between">
                      <p class="durition"><i class="fa-regular fa-clock ml-2"></i>مدت زمان : {{ card.durition }}</p>
                      <nuxt-link to="" class="more-link">بیشتر</nuxt-link>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col md="6">
            <v-card elevation="2" outlined class="pa-3 ">
                <v-row class="card">
                <v-col md="3">
                  <div class="card-image">
                    <img :src="require('@/assets/images/' + card.img)" alt="" />
                  </div>
                </v-col>
                <v-col md="9" class="d-flex align-center">
                  <div class="d-flex flex-column card-details">
                    <p class="video-card-title">{{ card.videoTitle }}</p>
                    <p class="video-teacher"><i class="fa-solid fa-user ml-2"></i>{{ card.videoTeacher }}</p>
                    <div class="d-flex justify-space-between">
                      <p class="durition"><i class="fa-regular fa-clock ml-2"></i>مدت زمان : {{ card.durition }}</p>
                      <nuxt-link to="" class="more-link">بیشتر</nuxt-link>
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
        videoTitle: "ویدیو دوره کامل آموزشی، ریاضی هفتم دوره اول متوسطه",
        videoTeacher: "علیرضا داودی",
        durition: " 8 ساعت (26 فایل)",
      },
    };
  },
};
</script>
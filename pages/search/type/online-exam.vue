<template>
  <v-row class="online-exam">
    <v-col cols="12" class="online-exam-contents px-0">
      <!-- Book Carousel -->
      <!--      <online-exam-carousel/>-->
      <!-- training-items-desktop -->
      <div class="online-exam-items online-exam-items-desktop d-block">
        <div class="online-exam-item pa-sm-6 pa-1 my-5" v-for="(item, index) in items"
             :key="index">
          <v-row>
            <v-col lg="2" cols="3" class="pa-0">
              <div class="item-img">
                <v-img v-if="item.lesson_pic" :src="item.lesson_pic"
                       class="item-image"></v-img>
                <v-card v-else class="book-no-img ">
                  <p class="font-weight-bold mb-3 mt-3">{{ item.lesson_title }}</p>
                  <a href="https://gamatrain.com">Gamatrain.com</a>
                </v-card>
              </div>
            </v-col>
            <v-col lg="10" cols="9">
              <v-row class="online-exam-item-content
                          d-flex
                          flex-column
                          justify-space-between
                        ">
                <div class="item-content-title
                            d-flex
                            justify-space-between">
                  <nuxt-link :to="`/exams/${item.id}/${item.title_url}`" class="text-h5 text-md-h4">
                    {{ item.title.length > 54 ? item.title.substr(0, 51) + '...' : item.title }}
                  </nuxt-link>

                </div>
                <v-col cols="12" class="item-content-features">
                  <v-row>
                    <v-col lg="3" cols="7" class="d-flex align-center py-2 px-0">
                      <i class="fa-solid fa-list"></i>
                      <p class="mx-2 ">Questions: {{ item.tests_num }}
                      </p>
                    </v-col>
                    <v-col lg="3" cols="5" class="d-flex align-center py-2 px-0">
                      <i class="fa-solid fa-circle-play"></i>
                      <p class="mx-2 ">Start: {{ item.start_date ? item.start_date : '-' }} </p>
                    </v-col>
                    <v-col lg="3" cols="7" class="d-flex align-center py-2 px-0">
                      <i class="fa-solid fa-temperature-three-quarters"></i>
                      <p class="mx-2 ">Level: {{ $testLevel.show(item.level) }} </p>
                    </v-col>

                    <v-col lg="3" cols="5" class="d-flex align-center py-2 px-0">
                      <i class="fa-solid fa-circle-stop"></i>
                      <p class="mx-2 ">End: {{ item.end_date ? item.end_date : '-' }} </p>
                    </v-col>
                  </v-row>
                </v-col>


              </v-row>

            </v-col>
            <v-col cols="12">
              <div class="d-none d-md-block">
                <v-chip link class="mr-1" small>
                  <nuxt-link
                    :to="`/search?type=${$route.query.type}&section=${item.section}&base=${item.base}&lesson=${item.lesson}`">
                    {{ item.lesson_title }}
                  </nuxt-link>
                </v-chip>
                <v-chip link class="mr-1" small>
                  <nuxt-link :to="`/search?type=${$route.query.type}&section=${item.section}&base=${item.base}`">
                    {{ item.base_title }}
                  </nuxt-link>
                </v-chip>
                <v-chip link class="mr-1" small>
                  <nuxt-link :to="`/search?type=${$route.query.type}&section=${item.section}`">
                    {{ item.section_title }}
                  </nuxt-link>
                </v-chip>
              </div>

              <div class="item-content-footer">

                <div class="d-flex mt-3">
                  <div class="item-content-user d-flex align-center mr-2">
                    <v-avatar size="2em">
                      <img :src="require('assets/images/defaultAvatar1.jpg')"
                           alt="Avatar">
                    </v-avatar>
                    <p class="mx-2">{{ item.first_name }} {{ item.last_name }}</p>
                  </div>

                  <div
                    class="item-content-last-update d-flex align-center mx-auto">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p class="mx-2">last update : {{ $timeAgo.calc(item.up_date) }}</p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import OnlineExamCarousel from "@/components/search/online-exam-carousel";

export default {
  components: {OnlineExamCarousel},
  props: ["items"],
  name: "online-exam",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>

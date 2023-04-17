<template>
   <div class="content-items">
      <v-card  rounded class="mb-1 content-item" v-for="(item,key) in items" >
        <v-card-text class="pb-0">
          <v-row class="justify-center">
            <v-col md="2" sm="2" cols="3" class="py-0 pr-0">
              <div class="item-img">
                <v-img v-if="item.lesson_pic"
                       @error="imgErrorHandler(item,key)"
                       :src="item.lesson_pic" :alt="item.lesson_title"
                       class="item-image">
                </v-img>
                <v-card v-else  class="book-no-img mx-auto  fill-height align-center justify-center"
                >
                  <v-card-text class="px-0">
                    <p class="font-weight-bold mb-3 mt-5">{{ item.lesson_title }}</p>
                    <a href="https://gamatrain.com">Gamatrain.com</a>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
            <v-col md="10" sm="10" cols="9" class="px-0 pb-0 py-md-4">
              <v-card  flat class="tutorial-content d-flex flex-column pl-3 pl-md-0 justify-space-between">
                <v-card-text class="pa-0" >
                  <div class="tutorial-title d-flex justify-space-between">
                    <nuxt-link :to="`/exams/${item.id}/${item.title_url}`"
                               class="text-h6 text-md-h5 font-weight-bold">
                      {{ item.title }}
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

                  <div class="mt-3" >
                    <v-chip class="mr-1 mb-1"
                            :x-small="$vuetify.breakpoint.xs"
                            :small="!$vuetify.breakpoint.xs"
                            :to="`/search?type=${$route.query.type}&section=${item.section}&base=${item.base}&lesson=${item.lesson}`"
                    >
                      {{ item.lesson_title }}
                    </v-chip>
                    <v-chip
                      :to="`/search?type=${$route.query.type}&section=${item.section}&base=${item.base}`"
                      class="mr-1 mb-1"
                      :x-small="$vuetify.breakpoint.xs"
                      :small="!$vuetify.breakpoint.xs"
                    >
                      {{ item.base_title }}
                    </v-chip>
                    <v-chip
                      :x-small="$vuetify.breakpoint.xs"
                      :small="!$vuetify.breakpoint.xs"
                      class="mr-1 mb-1" :to="`/search?type=${$route.query.type}&section=${item.section}`">
                      {{ item.section_title }}
                    </v-chip>
                  </div>
                </v-card-text>
                <!--Item card footer-->
                <v-card-actions class="item-content-footer pb-2  d-none d-sm-block">
                  <v-row>
                    <v-col cols="8" class="px-0">
                      <div class="d-flex pt-3 pt-md-0">
                        <div class="item-content-user d-flex align-center">
                          <v-avatar size="2em">
                            <img :src="require('~/assets/images/defaultAvatar1.jpg')"
                                 alt="Avatar">
                          </v-avatar>
                          <p class="mx-2">{{ item.first_name }} {{ item.last_name }}</p>
                        </div>

                        <div
                          class="item-content-last-update d-flex align-center mx-auto">
                          <i class="fa-solid fa-calendar-days"></i>
                          <p class="mx-2">
                    <span class="d-none d-sm-inline">
                      Last update:
                    </span>
                            <span class="date_string d-inline-block">
                      {{ $moment(item.up_date).fromNow() }}
                    </span>
                          </p>
                        </div>

                      </div>

                    </v-col>
                    <v-col cols="4" >
                      <div class="text-right align-right float-right d-flex align-content-center  " >
                        <nuxt-link icon :to="`/exams/${item.id}/${item.title_url}`">
                          <span v-show="item.q_file_word"  class="fa-solid fa-file-word fa-2xl blue--text "></span>
                        </nuxt-link>
                        <nuxt-link icon :to="`/exams/${item.id}/${item.title_url}`">
                          <span v-show="item.q_file" class="fa-solid fa-file-pdf fa-2xl red--text pl-1"></span>
                        </nuxt-link>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-actions>
                <!--End item card footer-->
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="item-content-footer pt-0 d-block d-sm-none">
          <v-row>
            <v-col cols="12" class="py-0">
              <div class="d-flex pt-2">
                <div class="item-content-user d-flex align-center">
                  <v-avatar size="1.28em">
                    <img :src="require('~/assets/images/defaultAvatar1.jpg')"
                         alt="Avatar">
                  </v-avatar>
                  <p class="mx-2">{{ item.first_name }} {{ item.last_name }}</p>
                </div>

                <div
                  class="item-content-last-update d-flex align-center mx-auto">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p class="mx-2">
                    <span class="d-none d-sm-inline">
                      Last update:
                    </span>
                    <span class="date_string d-inline-block">
                      {{ $moment(item.up_date).fromNow() }}
                    </span>
                  </p>
                </div>

              </div>

            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
import OnlineExamCarousel from "~/components/search/online-exam-carousel.vue";
import OnlineExamCardFooter from "~/components/search/type/online-exam-card-footer.vue";

export default {
  components: {OnlineExamCardFooter, OnlineExamCarousel},
  props: ["items"],
  name: "exam-list",
  data() {
    return {}
  },
  methods:{
    imgErrorHandler(item,key){
      this.items[key].lesson_pic='';
    }
  }
}
</script>

<style scoped>

</style>

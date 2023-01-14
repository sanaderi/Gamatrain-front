<template>
  <div class="multimedia-content">
    <div class="multimedia-items">
      <v-card rounded class="mb-1 multimedia-item" v-for="item in items" :key="item.value">
        <v-card-text class="pb-0">
          <v-row>
            <v-col md="2" cols="3">
              <div class="item-img">
                <v-img v-if="item.lesson_pic"
                       :src="item.lesson_pic" :alt="item.lesson_title"
                       class="item-image"/>
                <v-card v-else class="book-no-img ">
                  <p class="font-weight-bold mb-3 mt-5">{{ item.lesson_title }}</p>
                  <a href="https://gamatrain.com">Gamatrain.com</a>
                </v-card>
              </div>
            </v-col>
            <v-col md="10" cols="9" class="px-0">
              <v-card flat class="tutorial-content d-flex flex-column justify-space-between">
                <v-card-text class="px-0 pt-0">
                  <div class="tutorial-title d-flex justify-space-between">
                    <nuxt-link :to="`/multimedia/${item.id}/${item.title_url}`" class="text-h5 text-md-h4">
                      {{ item.title.length > 64 ? item.title.substr(0, 61) + '...' : item.title }}
                    </nuxt-link>
                  </div>
                  <p class="item-content-subtitle my-2 d-none d-sm-block">
                    <nuxt-link :to="`/multimedia/${item.id}/${item.title_url}`">
                      {{ item.description.substr(0, 150) }}...
                    </nuxt-link>
                  </p>
                  <div >
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
                <v-card-actions class="item-content-footer pb-2  d-none d-md-block">
                  <v-row>
                    <v-col cols="8" class="px-0">
                      <div class="d-flex pt-3">
                        <div class="item-content-user d-flex align-center">
                          <v-avatar size="2em">
                            <img :src="require('assets/images/defaultAvatar1.jpg')"
                                 alt="Avatar">
                          </v-avatar>
                          <p class="mx-2">{{ item.first_name }} {{ item.last_name }}</p>
                        </div>

                        <div
                          class="item-content-last-update d-flex align-center mx-auto">
                          <i class="fa-solid fa-sticky-note"></i>
                          <p class="mx-2">
                    <span class="d-none d-md-inline">
                      Test type:
                    </span>
                            <span class="date_string d-inline-block">
                      {{ item.test_type_title }}
                    </span>
                          </p>
                        </div>
                        <div
                          class="item-content-last-update d-flex align-center mx-auto">
                          <i class="fa-solid fa-eye"></i>
                          <p class="mx-2">
                    <span class="d-none d-md-inline">
                      Views:
                    </span>
                            <span class="date_string d-inline-block">
                      {{ item.views }}
                    </span>
                          </p>
                        </div>
                        <div
                          class="item-content-last-update d-flex align-center mx-auto">
                          <i class="fa-solid fa-calendar-days"></i>
                          <p class="mx-2">
                    <span class="d-none d-md-inline">
                      Last update:
                    </span>
                            <span class="date_string d-inline-block">
                      {{ $moment(item.up_date).fromNow() }}
                    </span>
                          </p>
                        </div>

                      </div>

                    </v-col>
                    <v-col cols="4" class="px-0">
                      <div class="text-right align-center">
                        <v-btn icon :to="`/multimedia/${item.id}/${item.title_url}`">
                          <v-icon color="blue" v-show="item.q_file_word">
                            mdi-file-word
                          </v-icon>
                          <v-icon color="red" v-show="item.q_file">
                            mdi-file-pdf-box
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-actions>
                <!--End item card footer-->
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="item-content-footer py-0 d-block d-md-none">
          <v-row>
            <v-col cols="10" class="py-0">
              <div class="d-flex pt-2">
                <div class="item-content-user d-flex align-center">
                  <v-avatar size="1.28em">
                    <img :src="require('assets/images/defaultAvatar1.jpg')"
                         alt="Avatar">
                  </v-avatar>
                  <p class="mx-2">{{ item.first_name }} {{ item.last_name }}</p>
                </div>

                <div
                  class="item-content-last-update d-flex align-center mx-auto">
                  <i class="fa-solid fa-sticky-note"></i>
                  <p class="mx-2">
                    <span class="d-none d-md-inline">
                      Test type:
                    </span>
                    <span class="date_string d-inline-block">
                      {{ item.test_type_title }}
                    </span>
                  </p>
                </div>
                <div
                  class="item-content-last-update d-flex align-center mx-auto">
                  <i class="fa-solid fa-eye"></i>
                  <p class="mx-2">
                    <span class="d-none d-md-inline">
                      Views:
                    </span>
                    <span class="date_string d-inline-block">
                      {{ item.views }}
                    </span>
                  </p>
                </div>
                <div
                  class="item-content-last-update d-flex align-center mx-auto">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p class="mx-2">
                    <span class="d-none d-md-inline">
                      Last update:
                    </span>
                    <span class="date_string d-inline-block">
                      {{ $moment(item.up_date).fromNow() }}
                    </span>
                  </p>
                </div>

              </div>

            </v-col>
            <v-col cols="2" class="py-0">
              <div class="text-right align-center">
                <v-btn icon :to="`/multimedia/${item.id}/${item.title_url}`">
                  <v-icon color="blue" v-show="item.q_file_word">
                    mdi-file-word
                  </v-icon>
                  <v-icon color="red" v-show="item.q_file">
                    mdi-file-pdf-box
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>

import TrainingContentCarousel from "@/components/search/training-content-carousel";
export default {
  name: "multimedia",
  components: {TrainingContentCarousel},
  props:["items"],
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

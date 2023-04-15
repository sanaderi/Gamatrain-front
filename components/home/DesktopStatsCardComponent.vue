<template>
  <v-card
    outlined
    :class="'grade-card grade-card' + (itm_index + 1)">
    <p v-show="stat.showMore" class="total-content">
      <nuxt-link
        v-for="item in stat.lessons"
        :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
        class="content grade-list-lessons"
      >
        <span class="font-size-14">
          {{ item.title }}
        </span>
      </nuxt-link>
      <v-btn
        @click="lessonExpand(itm_index)"
        plain
        :class="'mt-5 font-size-14  text-lowercase showmore-btn' + (itm_index + 1)"
      >
        Return
      </v-btn>
    </p>
    <div v-show="!stat.showMore">
      <v-card-title class="d-block pa-0 pb-2">
        <div class="d-flex justify-space-between align-item">
          <h2
            :class="'grade-title grade-title' + (itm_index + 1)"
            class="mb-2"
          >
              <span :class="'label-tag label-tag' + (itm_index + 1)">
                  {{itm_index + 1}}
              </span>
                {{ stat.base_title }}
          </h2>
          <div class="d-flex align-center res-update d-sm-none">
            <i class="fa-solid fa-calendar-days mx-3"></i>
            <p>{{ $moment(stat.last_update).format("MMM DD") }}</p>
          </div>
        </div>
        <v-card flat min-height="40" class="d-inline-block">
          <nuxt-link
            v-for="(item,itm_index) in stat.lessons.slice(0,3)"
            :to="`/search?type=test&section=${stat.section}&base=${stat.base}&lesson=${stat.lesson}&sortby=best`"
            class="content grade-list-lessons"
          >
            <span class="font-size-14">
              {{ item.title }}
            </span>
            <span class="font-size-14" v-show="itm_index<2">
                        ,
                      </span>
          </nuxt-link>
          <span
            v-show="stat.lessons.length>3"
            class="btn-transparent more-content pointer font-size-14"
            @click="lessonExpand(itm_index)"
          >... more</span>
        </v-card>
      </v-card-title>
      <v-divider class="mb-2"></v-divider>

      <v-card-text class="pa-0 grade-items mb-3">
        <nuxt-link
          :to="`/search?type=test&section=${stat.section}&base=${stat.base}&sortby=best`"
          class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
        >
          <div
            class="py-0 d-flex align-center right grade__item-title"
          >
            <v-icon
              class="mr-4 icon icong-test"
            ></v-icon>
            <p
              class="text-center type my-2 grade-item__text"
              v-text="'Paper'"
            ></p>
          </div>
          <div class="py-1 left">
            <p class="text-left stat" v-text="stat.tests"></p>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="`/search?type=learnfiles&section=${stat.section}&base=${stat.base}&sortby=best`"
          class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
        >
          <div
            class="py-0 d-flex align-center right grade__item-title"
          >
            <v-icon
              class="mr-4 icon icong-learnfiles"
            ></v-icon>
            <p
              class="text-center type my-2 grade-item__text"
              v-text="'Multimedia'"
            ></p>
          </div>
          <div class="py-1 left">
            <p class="text-left stat" v-text="stat.files"></p>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="`/search?type=azmoon&section=${stat.section}&base=${stat.base}&sortby=best`"
          class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
        >
          <div
            class="py-0 d-flex align-center right grade__item-title"
          >
            <v-icon
              class="mr-4 icon icong-azmoon"
            ></v-icon>
            <p
              class="text-center type my-2 grade-item__text"
              v-text="'Exam'"
            ></p>
          </div>
          <div class="py-1 left">
            <p class="text-left stat" v-text="stat.exams"></p>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="`/search?type=question&section=${stat.section}&base=${stat.base}&sortby=best`"
          class="
                      d-flex
                      align-center
                      justify-space-between
                      pa-0
                      pb-0
                      grade__item
                    "
        >
          <div
            class="py-0 d-flex align-center right grade__item-title"
          >
            <v-icon
              class="mr-4 icon icong-qa"
            ></v-icon>
            <p
              class="text-center type my-2 grade-item__text"
              v-text="'Q & A'"
            ></p>
          </div>
          <div class="py-1 left">
            <p class="text-left stat" v-text="stat.questions"></p>
          </div>
        </nuxt-link>
      </v-card-text>
      <v-divider class="grade-divider"></v-divider>
      <v-card-text
        class="
                    pt-3
                    px-0
                    grade-card__update
                    d-sm-flex d-none
                    justify-end
                  "
      >
        <div
          class="
                      d-flex
                      align-center
                      footer-card
                      card-footer
                      justify-end
                      mt-2
                      x
                    "
        >
                    <span
                      class="
                        fa-solid fa-calendar-days
                        footer-card-calendar
                        ml-2
                      "
                    ></span>
          <span class="ml-1 last-update font-size-14">Last update:&nbsp;</span>
          <span class="last-update font-size-14">{{ $moment(stat.last_update).format("MMM DD") }}</span>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    stat: {
      type: Object
    },
    itm_index:{
      type:Number
    },
  },
  name: "DesktopStatsCardComponent",
  data(){
    return{
    }
  },
  methods:{
    lessonExpand(index) {
      this.$emit('lessonExpand',index);
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div >
    <!--   Start: category  main-container Desktop -->
    <v-container class="d-sm-flex d-none py-0 ">
      <v-row class="justify-center align-center category box my-0 pb-0">
        <v-col
          v-for="(item, category) in items"
          :key="category"
          :class="item.class"
          class="card text-center pb-0"

        >
          <nuxt-link :to="item.link">
            <v-list-item class="d-flex flex-column  pa-0">
              <v-list-item-icon
                class="my-0 mx-auto  align-center justify-center p-icon"
              >
                <span :class="'icon icong-' + item.icon"></span>
              </v-list-item-icon>
              <v-list-item-content class="mx-auto">
                <v-list-item-title
                  class="mx-auto cat-title"
                                   v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
    <!--   End: category    -->
    <!--   Start: category  main-container Mobile -->
    <v-container class="py-0 d-sm-none d-flex">
      <v-row class="justify-center align-center category box">
        <v-col
          v-for="(item, category) in items.slice(0, 5)"
          :key="category"
          :class="item.class"
          class="card"
          xs="3"
          v-show="!showMore"
        >
          <nuxt-link :to="item.link">
            <v-list-item class="d-flex flex-column mx-7">
              <v-list-item-icon
                class="ma-0 d-flex align-center justify-center p-icon"
              >
                <span :class="'icon icong-' + item.icon"></span>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="cat-title" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </nuxt-link>
        </v-col>
        <v-col xs="3" class="d-flex justify-center pa-0 ml-2">
<!--          <button-->
<!--            class="category-showmore"-->
<!--            @click="showMore = !showMore"-->
<!--            v-show="!showMore"-->
<!--          >-->
<!--            <nuxt-link to="">-->
<!--              <div class="category-more d-flex justify-center align-center ">-->
<!--                <i class="fa-solid fa-ellipsis cat-more-icon"></i>-->
<!--              </div>-->
<!--              <p class="mb-0 mr-1 cat-more-p">more</p>-->
<!--            </nuxt-link>-->
<!--          </button>-->
        </v-col>
        <div v-if="showMore" class="d-flex flex-wrap">
          <v-col
            v-for="(item, category) in items.slice(0, 7)"
            :key="category"
            :class="item.class"
            class="card"
            xs="3"
          >
            <nuxt-link :to="item.link" >
              <v-list-item class="d-flex flex-column mx-7">
                <v-list-item-icon
                  class="ma-0 d-flex align-center justify-center p-icon"
                >
                  <span :class="'icon icong-' + item.icon"></span>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </nuxt-link>
          </v-col>
          <v-col xs="3" class="d-flex justify-start pa-0 ml-2">
            <button
              class="category-showmore"
              @click="showMore = !showMore"
              v-show="showMore"
            >
              <nuxt-link to="">
                <div class="category-more d-flex justify-center align-center mr-8">
                  <i class="fa-solid fa-ellipsis cat-more-icon"></i>
                </div>
                <p class="mb-0 mr-8 cat-more-p">less</p>
              </nuxt-link>
            </button>
          </v-col>
        </div>
      </v-row>
    </v-container>
    <!--   End: category    -->
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    showMore: false,
    items: [
      { class: "exam", text: "Exam", icon: "azmoon",link:"/search?type=azmoon" },
      { class: "test", text: "Paper", icon: "test",link:"/search?type=test" },
      { class: "content", text: "Multimedia", icon: "learnfiles" ,link:"/search?type=learnfiles" },
      { class: "faq", text: "Q & A", icon: "qa",link:"/search?type=question" },
      { class: "textbook ", text: "Tutorial", icon: "blog" ,link:"/search?type=dars" },
      // { class: "school", text: "School", icon: "school" ,link:"/search?type=school",status:'disabled' },
      // { class: "tutor", text: "Tutor", icon: "teacher" ,link:"/search?type=tutor",status:'disabled' },
    ],
  }),
};
</script>

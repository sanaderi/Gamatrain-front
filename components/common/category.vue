<template>
  <div>
    <!--   Start: category  main-container Desktop -->
    <v-container class="d-sm-flex d-none py-0">
      <v-row class="justify-center align-center category box">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          :class="item.class"
          class="card"
          xs="3"
        >
          <nuxt-link to="">
            <v-list-item class="d-flex flex-column mx-7 pa-0">
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
      </v-row>
    </v-container>
    <!--   End: category    -->
    <!--   Start: category  main-container Mobile -->
    <v-container class="py-0 d-sm-none d-flex">
      <v-row class="justify-center align-center category box">
        <v-col
          v-for="(item, i) in items.slice(0, 5)"
          :key="i"
          :class="item.class"
          class="card"
          xs="3"
        >
          <nuxt-link to="">
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
        <v-col xs="3" class="d-flex justify-center pa-0 ml-2">
          <nuxt-link to="">
            <div class="category-more d-flex justify-center align-center">
              <i class="fa-solid fa-ellipsis cat-more-icon"></i>
            </div>
            <p class="mb-0 mr-5 cat-more-p">بیشتر</p>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
    <!--   End: category    -->
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { class: "exam", text: "آزمون آنلاین", icon: "azmoon" },
      { class: "test", text: "نمونه سوال", icon: "test" },
      { class: "content", text: "محتوای آموزشی", icon: "learnfiles" },
      { class: "faq", text: "پرسش و پاسخ", icon: "qa" },
      { class: "textbook ", text: "درسنامه آموزشی", icon: "blog" },
      { class: "school", text: "مدرسه یاب", icon: "school" },
      { class: "tutor", text: "معلم خصوصی", icon: "teacher" },
    ],
  }),
};
</script>

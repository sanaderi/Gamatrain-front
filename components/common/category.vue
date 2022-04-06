<template>
  <!--   Start: category  main-container  -->
  <v-container class="d-md-block d-none ">
    <div class="d-flex justify-space-between align-center category box">
      <nuxt-link v-for="(item, i) in items"
                 :key="i"
                 :class="item.class"
                 class="card"
                 to=""
      >
        <v-list-item>
          <v-list-item-icon class="me-0">
            <span :class="'icon icong-' + item.icon"></span>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>

      <nuxt-link class="card test" to="">
        <v-list-item>
            <span class="icon">
            </span>
        </v-list-item>
      </nuxt-link>
    </div>
  </v-container>
  <!--   Start: category    -->
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      {class: 'test', text: 'نمونه سوال', icon: 'test'},
      {class: 'content', text: 'محتوای آموزشی', icon: 'learnfiles'},
      {class: 'faq', text: 'پرسش و پاسخ', icon: 'qa'},
      {class: 'exam', text: 'آزمون آنلاین', icon: 'azmoon'},
      {class: 'textbook ', text: 'درسنامه آموزشی', icon: 'blog'},
      {class: 'school', text: 'مدرسه یاب', icon: 'school'},
      {class: 'tutor', text: 'معلم خصوصی', icon: 'teacher'},
    ],
  }),
}
</script>

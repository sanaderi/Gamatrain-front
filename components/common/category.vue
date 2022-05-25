<template>
  <!--   Start: category  main-container  -->
  <v-container class="d-md-block d-none py-0">
    <div class="d-flex justify-center align-center category box">
      <nuxt-link v-for="(item, i) in items"
                 :key="i"
                 :class="item.class"
                 class="card"
                 to=""
      >
        <v-list-item class="d-flex flex-column  mx-7">
          <v-list-item-icon class="ma-0 d-flex align-center justify-center p-icon">
            <span :class="'icon icong-' + item.icon"></span>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>

      
    </div>
  </v-container>
  <!--   End: category    -->
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      {class: 'exam', text: 'آزمون آنلاین', icon: 'azmoon'},
      {class: 'test', text: 'نمونه سوال', icon: 'test'},
      {class: 'content', text: 'محتوای آموزشی', icon: 'learnfiles'},
      {class: 'faq', text: 'پرسش و پاسخ', icon: 'qa'},
      {class: 'textbook ', text: 'درسنامه آموزشی', icon: 'blog'},
      {class: 'school', text: 'مدرسه یاب', icon: 'school'},
      {class: 'tutor', text: 'معلم خصوصی', icon: 'teacher'},
    ],
  }),
}
</script>

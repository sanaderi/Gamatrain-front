<template>
  <!--   Start: category    -->
  <div class="d-md-block d-none main-container">
    <div class="d-flex justify-space-between align-center category box">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="card"
          :class="item.class"
        >
          <v-list-item>
            <v-list-item-icon class="me-0">
              <v-icon v-text="item.icon" class="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
    </div>
  </div>
  <!--   Start: category    -->
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { class:'test', text: 'نمونه سوال', icon: 'mdi-clipboard-edit-outline'},
      { class:'content', text: 'محتوای آموزشی', icon: 'mdi-book-open-page-variant-outline' },
      { class:'faq', text: 'پرسش و پاسخ', icon: 'mdi-chat-question-outline' },
      { class:'exam', text: 'آزمون آنلاین', icon: 'mdi-monitor-edit' },
      { class:'textbook ', text: 'درسنامه آموزشی', icon: 'mdi-tooltip-edit-outline' },
      { class:'school', text: 'مدرسه یاب', icon: 'mdi-home-search-outline' },
      { class:'tutor', text: 'معلم خصوصی', icon: 'mdi-human-male-board' },
    ],
  }),
}
</script>

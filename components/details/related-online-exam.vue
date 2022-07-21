<template>
  <div class="online-exam-card  pa-4 ">
    <div class="online-exam-title d-flex align-center mb-5">
      <span :class="'icon icong-' + testCard.icon" class="online-exam-icon d-flex align-center"></span>
      <div class="online-exam-title-texts d-flex flex-column ml-3">
        <div class="online-exam-title">Related Online Exam</div>
      </div>
    </div>
    <div class="online-exam-texts d-flex" v-for="(item, test) in testTexts " :key="test.value">
      <p class="my-3 online-exam-text">
        <i class="fa-solid fa-link online-text-icon mr-2"></i>
        {{displayExam(item.testText)}}
      </p>
    </div>
    <v-divider class="mt-4"></v-divider>
    <div class="online-exam-footer my-4">
      <nuxt-link to="" class="online-exam-card-footer-link">
        More
      </nuxt-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "related-online-exam",
  data() {
    return {
      testCard: {
        icon: "azmoon"
      },

      testTexts: [
        {
          responsiveText: "Exercise solution video (3 and 4) lesson 10 and text translation...",
          testText: "Exercise solution video (3 and 4) lesson 10 and text translation + exercise solution (1 and 2) lesson 11"
        },
        {
          responsiveText: "Math 7th movie Chapter 2: Integers...",
          testText: "Math 7th movie Chapter 2: Integers (fourth session: sample solution)"
        },
        {
          responsiveText: "7th social studies PowerPoint Lesson 12: ...",
          testText: "7th social studies PowerPoint Lesson 12: Protection of Iran's habitats"
        },
      ],
    }
  },
  methods: {
    displayExam(text) {
      if (this.$vuetify.breakpoint.xs)
        return text.length > 44 ? `${text.substring(0, 44)}...` : text;
      else
        return text.length > 90 ? `${text.substring(0, 90)}...` : text;
    }
  }
}
</script>

<style scoped>

</style>

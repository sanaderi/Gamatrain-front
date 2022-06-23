<template>
  <v-container class="timeline" style="max-width: 600px;">
    <v-timeline clipped dense>

      <v-timeline-item v-for="(item, index) in timeLines"
                       :key="index" :color="item.color"
                       class="mb-4" fill-dot
                       icon-color="grey lighten-3"
                       medium
      >
        <span :id="'number' + index" class="headline font-weight-bold timeline-number"
              v-text="item.number">
        </span>
        <v-row>
          <v-col cols="12">
            <p :id="'title' + index"
               class="category-book-titles "
            > {{ item.title }}</p>
          </v-col>
          <v-col
            v-for="lesson in item.lessons"
            cols="12"
            @click="activeTitle(index)">
            <nuxt-link id="lesson-name" to="">
              <i class="fa-regular fa-window-minimize ml-2"></i>
              {{ lesson.lesson }}
            </nuxt-link>
          </v-col>
        </v-row>
      </v-timeline-item>

    </v-timeline>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      timeLines: [
        {
          number: '1',
          color: "teal",
          title: "تنظیم عصبی",
          lessons: [
            {lesson: " گفتار 1 :یاخته های بافت عصبی"},
            {lesson: "گفتار 2 : ساختار دستگاه عصبی"}
          ]
        },
        {
          number: '2',
          color: "grey lighten-3",
          title: "پاسخ گیاهان به محرک ها",
          lessons: [
            {lesson: " گفتار 1 :یاخته های بافت عصبی"},
            {lesson: "گفتار 2 : ساختار دستگاه عصبی"}
          ]
        },
        {
          number: '3',
          color: "grey lighten-3",
          title: "حواس",
          lessons: [
            {lesson: " گفتار 1 :یاخته های بافت عصبی"},
            {lesson: "گفتار 2 : ساختار دستگاه عصبی"}
          ]
        },
      ],
    }
  },
  methods: {
    activeTitle(value) {
      const allTitle = document.querySelectorAll('.category-book-titles')
      const allNumber = document.querySelectorAll('.timeline-number')

      for (let i = 0; i < allTitle.length; i++) {
        allTitle[i].classList.remove("active")
        allNumber[i].classList.remove("active")
      }

      let title = document.getElementById('title' + value)
      let number = document.getElementById('number' + value)

      title.classList.add("active")
      number.classList.add("active")
    }
  },
}
</script>

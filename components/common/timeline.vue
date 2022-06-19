<template >
    <v-container style="max-width: 600px;" class="timeline">
        <v-timeline dense clipped>

            <v-timeline-item class="mb-4" :color="item.color" icon-color="grey lighten-3" medium fill-dot
                v-for="item in timeLines" :key="item.value">           
                    <span class="headline font-weight-bold timeline-number" v-text="item.number"></span>
                <v-row>
                    <v-col cols="12">
                        <p class="category-book-titles " id="title"> {{ item.title }}</p>
                    </v-col>
                    <v-col cols="12">

                        <nuxt-link to="" id="lesson-name1">
                            <i class="fa-regular fa-window-minimize ml-2"></i>
                            {{ item.link1 }}
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12">
                        <nuxt-link to="" id="lesson-name2">
                            <i class="fa-regular fa-window-minimize ml-2"></i>
                            {{ item.link2 }}
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
                    link1: " گفتار 1 :یاخته های بافت عصبی",
                    link2: "گفتار 2 : ساختار دستگاه عصبی"
                },
                {
                    number: '2',
                    color: "grey lighten-3",
                    title: "پاسخ گیاهان به محرک ها",
                    link1: " گفتار 1 :یاخته های بافت عصبی",
                    link2: "گفتار 2 : ساختار دستگاه عصبی"
                },
                {
                    number: '3',
                    color: "grey lighten-3",
                    title: "حواس",
                    link1: " گفتار 1 :یاخته های بافت عصبی",
                    link2: "گفتار 2 : ساختار دستگاه عصبی"
                },
            ],
        

        }
    },
    mounted() {
        this.changeColor()
    },
    methods: {
        changeColor() {
            let title = document.getElementById("title")
            let lesson = document.getElementById("lesson-name1")
            let secondLesson = document.getElementById("lesson-name2")
            lesson.addEventListener("click", function () {
                title.style.color = "#008B8B"
            })
            secondLesson.addEventListener("click", function () {
                title.style.color = "#008B8B"
            })
        }
    },
}
</script>
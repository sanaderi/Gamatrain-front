<template>
    <v-card class="d-block tab-header sticky-scroll">
        <v-tabs>
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <i class="fa-solid fa-list d-none d-md-block"></i>
            <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-sample" content="35000">
                <nuxt-link to="sample-q" class="nav-link sample-q-icon">
                    <span class="'icon icong-test mr-1 d-none"></span>
                    Sample Exam
                </nuxt-link>
            </v-badge>
            <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-training" content="1258" color="#2E7D32">
                <nuxt-link to="training-content" class="nav-link training-content-icon">
                    <span class="'icon icong-learnfiles mr-1 d-none"></span>
                    Training Content
                </nuxt-link>
            </v-badge>
            <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-q" content="21260" color="#BF360C">
                <nuxt-link to="q&a" class="nav-link q-a-icon">
                    <span class="'icon icong-qa mr-1 d-none"></span>
                    Q & A
                </nuxt-link>
            </v-badge>
            <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-online" content="1690" color="#5600E8">
                <nuxt-link to="online-exam" class="nav-link exam-icon">
                    <span class="'icon icong-azmoon mr-1 d-none"></span>
                    Online Exam
                </nuxt-link>
            </v-badge>
            <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-tutorial" content="169" color="#BD081C">
                <nuxt-link to="tutorials" class="nav-link tutorial-icon">
                    <span class="'icon icong-blog mr-1 d-none"></span>
                    tutorial
                </nuxt-link>
            </v-badge>
            <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-teachers" content="2810" color="#8E24AA">
                <nuxt-link to="teachers" class="nav-link teacher-icon">
                    <span class="'icon icong-teacher mr-1 d-none"></span>
                    Teacher
                </nuxt-link>
            </v-badge>
        </v-tabs>
    </v-card>
</template>
<script>
export default {
    data() {
        return {

        }
    },
     beforeMount() {
        window.addEventListener('scroll', this.testHeader);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.testHeader);
    },
    methods: {
        testHeader() {
            let header = document.querySelector(".sticky-scroll")
            if (scrollY > 210) {
                header.classList.add("scroll-header")
            } else if (scrollY < 200) {
                header.classList.remove("scroll-header")
            }
        }
    },
}
</script>

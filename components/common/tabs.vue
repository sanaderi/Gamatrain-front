<template>
  <v-card class="d-block tab-header sticky-scroll">
    <v-tabs v-model="active_tab">
      <v-tab @click="openLink('test')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-sample" :content="content_statistics.test">
          <div class="nav-link sample-q-icon">
            <span class="icon icong-test mr-1"></span>
            Paper
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('learnfiles')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-training" :content="content_statistics.learnfiles"
                 color="#2E7D32">
          <div class="nav-link training-content-icon">
            <span class="icon icong-learnfiles mr-1"></span>
            Multimedia
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('question')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-q" :content="content_statistics.question" color="#BF360C">
          <div class="nav-link q-a-icon">
            <span class="icon icong-qa mr-1 "></span>
            Q & A
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('azmoon')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-online" :content="content_statistics.azmoon" color="#5600E8">
          <div class="nav-link exam-icon">
            <span class="icon icong-azmoon mr-1"></span>
            Online Exam
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('dars')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-tutorial" :content="content_statistics.tutorial"
                 color="#BD081C">
          <div class="nav-link tutorial-icon">
            <span class="icon icong-blog mr-1"></span>
            Tutorial
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('tutor')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-teachers"
                 :content="content_statistics.tutor" color="#8E24AA">
          <div class="nav-link teacher-icon">
            <span class="icon icong-teacher mr-1"></span>
            Tutor
          </div>
        </v-badge>
      </v-tab>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      active_tab: 0,
      content_statistics: {
        azmoon: '',
        dars: '',
        learnfiles: '',
        question: '',
        test: '',
        tutor: '',
        tutorial: '',
      }
    }
  },
  beforeMount() {
    var active_route = this.$route.query.type;
    if (active_route === "test")
      this.active_tab = 0;
    else if (active_route === "learnfiles")
      this.active_tab = 1;
    else if (active_route === "question")
      this.active_tab = 2;
    else if (active_route === "azmoon")
      this.active_tab = 3;
    else if (active_route === "dars")
      this.active_tab = 4;
    else if (active_route === "tutor")
      this.active_tab = 5;

  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.testHeader);
  },

  methods: {
    openLink(val) {
      const query = {type: val}
      if (this.$route.query.section) {
        query.section = this.$route.query.section
      }
      if (this.$route.query.base) {
        query.base = this.$route.query.base;
      }
      if (this.$route.query.lesson) {
        query.lesson = this.$route.query.lesson;
      }
      if (this.$route.query.topic) {
        query.topic = this.$route.query.topic;
      }
      if (this.$route.query.test_type !== 0 && query.type === "test") {
        query.test_type = this.$route.query.test_type;
      }
      if (this.$route.query.level !== 0 && query.type === "test") {
        query.level = this.$route.query.level;
      }
      if (this.$route.query.word === 1 && query.type === "test") {
        query.word = 1;
      }
      if (this.$route.query.pdf === 1 && query.type === "test") {
        query.pdf = 1;
      }
      if (this.$route.query.free === 1 && query.type === "test") {
        query.free = 1;
      }
      if (this.$route.query.a_file === 1 && query.type === "test") {
        query.a_file = 1;
      }

      this.$router.replace({query: query})
    }

    // testHeader() {
    //     let header = document.querySelector(".sticky-scroll")
    //     if (scrollY > 210) {
    //         header.classList.add("scroll-header")
    //     } else if (scrollY < 200) {
    //         header.classList.remove("scroll-header")
    //     }
    // }
  },
}
</script>

<style>

/*Remove default style for vuetify tabs and apply new style*/
.tab-header .v-tab {
  text-transform: none !important;
  font-size: 1.2rem;
}
.tab-header .v-tab .nav-link {
  padding: 0.8rem 0.8rem 0.8rem 0;
}

.tab-header .v-tab:before {
  background-color: transparent !important;
}
.tab-header .v-badge__wrapper{
  right:1.5rem!important;
  top:0rem!important;
}

.tab-header .v-tab--active .nav-link {
  padding: 0.8rem 0.8rem 0.8rem 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 1.4rem;
  display: flex;
  align-items: center;
  color: #000000;
}

.tab-header .v-tab--active .badge-sample .nav-link {
  background: rgba(41, 98, 255, .05);
}

.tab-header .v-tab--active .badge-training .nav-link {
  background: rgba(1, 87, 155, .02);
}

.tab-header .v-tab--active .badge-q .nav-link {
  background: rgba(189, 8, 28, .05);
}

.tab-header .v-tab--active .badge-online .nav-link {
  background: rgba(86, 0, 232, 0.05);
}

.tab-header .v-tab--active .badge-tutorial .nav-link {
  background: rgba(189, 8, 28, 0.05);
}

.tab-header .v-tab--active .badge-teachers .nav-link {
  background: rgba(142, 36, 170, 0.05);
}


.tab-header .nav-link .icon {
  display: none !important;
}

.tab-header .v-tab--active .nav-link .icon {
  display: block !important;
  font-size: 2.5rem !important;
  padding-left: 1rem !important;
}

.tab-header .v-tabs-slider {
  display: none !important;
}


.tab-header .v-tab--active:hover::before {
  opacity: 0;
}

.tab-header .v-tab:hover::before {
  opacity: 0;
}
.tab-header .v-badge__badge{
  top:-0.6rem!important;
}

.sample-q-icon span {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #2962ff;
}

.training-content-icon span {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #2E7D32FF;
}

.q-a-icon span {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #bf360c;
}

.exam-icon span {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #5600e8;
}


.tutorial-icon span {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #bd081c;
}

.teacher-icon span {
  font-size: 2.5rem;
  padding-left: 1rem;
  color: #8e24aa;
}

/*End Remove default style for vuetify tabs and apply new style*/

</style>

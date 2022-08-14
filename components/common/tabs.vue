<template>
  <v-card class="d-block tab-header sticky-scroll">
    <v-tabs v-model="active_tab">
      <v-tab @click="openLink('sample-q')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-sample" content="35000">
          <div class="nav-link sample-q-icon">
            <span class="icon icong-test mr-1"></span>
            Sample Exam
          </div>
        </v-badge>
      </v-tab>
      <v-tab  @click="openLink('training-contents')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-training" content="1258" color="#2E7D32">
          <div class="nav-link training-content-icon">
            <span class="icon icong-learnfiles mr-1"></span>
            Training Content
          </div>
        </v-badge>
      </v-tab>
      <v-tab  @click="openLink('q-a')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-q" content="21260" color="#BF360C">
          <div class="nav-link q-a-icon">
            <span class="icon icong-qa mr-1 "></span>
            Q & A
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('online-exam')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-online" content="1690" color="#5600E8">
          <div class="nav-link exam-icon">
            <span class="icon icong-azmoon mr-1"></span>
            Online Exam
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('tutorials')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-tutorial" content="169" color="#BD081C">
          <div class="nav-link tutorial-icon">
            <span class="icon icong-blog mr-1"></span>
            Tutorial
          </div>
        </v-badge>
      </v-tab>
      <v-tab @click="openLink('teachers')">
        <v-badge bordered class="pa-1 mx-1 mx-md-10 badge-teachers" content="2810" color="#8E24AA">
          <div class="nav-link teacher-icon">
            <span class="icon icong-teacher mr-1"></span>
            Teacher
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
       active_tab:0
    }
  },
  beforeMount() {
    var active_route=this.$route.path;
    if (active_route==="/search/sample-q")
      this.active_tab=0;
    else if (active_route==="/search/training-contents")
      this.active_tab=1;
    else if (active_route==="/search/q-a")
      this.active_tab=2;
    else if (active_route==="/search/online-exam")
      this.active_tab=3;
    else if (active_route==="/search/tutorials")
      this.active_tab=4;
    else if (active_route==="/search/teachers")
      this.active_tab=5;

  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.testHeader);
  },

  methods: {
    openLink(val){
      this.$router.push({path:`/search/${val}`,query:this.$route.query})
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
.v-tab {
  text-transform: none !important;
  font-size: 1.2rem;
}

.v-tab--active .nav-link {
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 1.4rem;
  display: flex;
  align-items: center;
}

.v-tab--active .badge-sample .nav-link {
  background: rgba(41, 98, 255, .05);
}

.v-tab--active .badge-training .nav-link {
  background: rgba(1, 87, 155, .02);
}

.v-tab--active .badge-q .nav-link {
  background: rgba(189, 8, 28, .05);
}

.v-tab--active .badge-online .nav-link {
  background: rgba(86, 0, 232, 0.05);
}

.v-tab--active .badge-tutorial .nav-link {
  background: rgba(189, 8, 28, 0.05);
}

.v-tab--active .badge-teachers .nav-link {
  background: rgba(142, 36, 170, 0.05);
}



.nav-link .icon {
  display: none !important;
}

.v-tab--active .nav-link .icon {
  display: block !important;
  font-size: 2.5rem !important;
  padding-left: 1rem !important;
}

.v-tabs-slider {
  display: none !important;
}


.v-tab--active:hover::before{
  opacity: 0;
}
.v-tab:hover::before {
  opacity: 0;
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

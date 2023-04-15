<template>
  <v-container fluid ref="slider" class="px-0 pb-0">
            <v-card outlined flat class="py-10" color="#FEF7FE">
                  <p class="text-center text-md-h4 text-h5">
                    Stats and Achievements
                    (GAMA Experience in Iran’s EdTech Market)
                  </p>

                  <v-slide-group center  class="stat-sec text-center">
                    <v-slide-item v-for="(item, index) in statList" :key="index">
                      <div class="
              d-flex
              justify-space-between
              align-center
              flex-wrap
              stat-holder
              mt-5
              px-lg-8
            ">
                        <div  class="
                d-flex
                flex-column
                justify-center
                align-center
                px-3
                stat-item
              ">
              <span class="stat-icon d-flex align-center justify-center">
                <i :class="' icon-g icon icong-' + item.icon"> </i>
              </span>
                          <span class="stat-label">{{ item.label }}</span>
                          <span class="stat-value" :id="'stat' + index + 1">{{ item.counter }} +</span>
                        </div>
                      </div>
                    </v-slide-item>
                  </v-slide-group>
            </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    statList: [
      { label: "School", value: 130000, counter: 0, icon: "school" },
      { label: "Tutor", value: 500000, counter: 0, icon: "teacher" },
      { label: "Student", value: 3000000, counter: 2700000, icon: "student" },
      { label: "Paper", value: 60000, counter: 0, icon: "test" },
      { label: "Multimedia", value: 37000, counter: 0, icon: "learnfiles" },
      { label: "Exam", value: 7000, counter: 0, icon: "azmoon" },
    ],
    countsInterval: null,
    countsIntervalCompleted: 0,
    bottomOfElement: false
  }),
  watch: {
    bottomOfElement: function(val) {
      this.countsInterval = setInterval(this.updated);
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    updated() {
      for (let i in this.statList) {
        let item = this.statList[i];
        if (item.value >= item.counter) {
          item.counter = item.counter + 1000;
          item.counter = item.counter > item.value ? item.value : item.counter;
        } else {
          this.countsIntervalCompleted++;
        }
      }

      if (this.countsIntervalCompleted === this.statList.length) {
        clearInterval(this.countsInterval);
      }
    },
    getOffsetOfElement(el) {
      let _x = 0;
      let _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    },
    scroll() {
      window.onscroll = () => {
        let offset = this.getOffsetOfElement(this.$refs.slider);
        let spaceSize = 0;
        let bottomOfElement = (window.innerHeight + window.scrollY) >= (offset.top + this.$refs.slider.clientHeight - spaceSize);

        if (bottomOfElement) {
          this.bottomOfElement = true
        }
      }
    },
  },
};
</script>

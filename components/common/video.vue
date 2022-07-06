<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, index) in videos" :key="index">
      <div
        id="videoPlayer"
        class="video-player"
        @mouseover="showPlayBtn(index)"
        @mouseleave="hidePlayBtn(index)"
      >
        <video
          :id="'video' + index"
          :poster="require('@/assets/images/' + item.img)"
          :src="require('assets/video/' + item.vid)"
          class="video"
          width="100%">
        </video>
        <div v-show="show" class="buttons">
          <button
            :id="'pausePlay' + index"
            class="play"
            @click="play(index)">
          </button>
        </div>
        <div class="shadow"></div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    videos: Array
  },
  data() {
    return {
      show: true,
    }
  },
  components: {
    // VideoPlayer,
  },
  methods: {
    play(index) {
      let btn = document.getElementById('pausePlay'+ index)
      let vid = document.getElementById('video'+ index)

      if (vid.paused) {
        btn.className = "pause"
        vid.play();
      } else {
        btn.className = "play";
        vid.pause();
      }
    },
    showPlayBtn() {
      this.show= true
    },
    hidePlayBtn: function (index) {
      let vid = document.getElementById('video' + index)

      if (!vid.paused) {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
};
</script>

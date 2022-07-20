<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, index) in videos" :key="unique + index">
      <div
        :id="'videoPlayer' + unique"
        class="video-player"
        @mouseover="showPlayBtn(index)"
        @mouseleave="hidePlayBtn(index)"
      >
        <video
          :id="'video' + unique + index"
          :poster="require('@/assets/images/' + item.img)"
          :src="require('assets/video/' + item.vid)"
          class="video"
          width="100%">
        </video>
        <div v-show="show" class="buttons">
          <button
            :id="'pausePlay' + unique + index"
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
    videos: Array,
    unique: String
  },
  data() {
    return {
      show: true
    }
  },
  components: {
    // VideoPlayer,
  },
  methods: {
    play(index) {
      let btn = document.getElementById('pausePlay' + this.unique + index)
      let vid = document.getElementById('video' + this.unique + index)

      if(!vid || !btn) {
        return;
      }

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
    hidePlayBtn(index) {
      let vid = document.getElementById('video' + this.unique + index)

      if(!vid) {
        return;
      }

      if (!vid.paused) {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
};
</script>

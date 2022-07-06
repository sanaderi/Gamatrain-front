<template>
  <!-- <v-carousel :show-arrows="false">
      <v-carousel-item class="item-video" v-for="item in videos" :key="item.value">
          <video id="my-player" class="video-js video-carousel" controls
              :poster="require('@/assets/images/' + item.img)" data-setup='{}'>
              <source :src="require('@/assets/video/' + item.vid)" type="video/mp4" />
          </video>
          <div class="shadow"></div>
      </v-carousel-item>
  </v-carousel> -->
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, index) in videos" :key="index">
      <div class="video-player">
        <video
          :id="'video' + index"
          :poster="require('@/assets/images/' + item.img)"
          :src="require('assets/video/' + item.vid)"
          class="video"
          width="100%">
        </video>
        <div class="buttons">
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
// import VideoPlayer from "nuxt-video-player";
// require("nuxt-video-player/src/assets/css/main.css");
export default {
  data() {
    return {
      video: "video.mp4",
      img: "vid.png",
      videos: [
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },
        {
          img: "vid.png",
          vid: "video.mp4"
        },

      ]
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
    }
  },
};
</script>

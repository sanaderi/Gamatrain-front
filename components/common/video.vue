<template>

    <v-carousel :show-arrows="false">
        <!-- <v-carousel-item class="item-video" v-for="item in videos" :key="item.value">
            <video :src="require('@/assets/video/' + item.vid)" controls width="575" class="video-carousel"
                      :poster="require('@/assets/images/' + item.img)">
                    </video>
            <video-player :src="item.url" />
        </v-carousel-item> -->
        <video id="my-player" class="video-js" controls preload="auto" poster="//vjs.zencdn.net/v/oceans.png"
            data-setup='{}'>
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>
    </v-carousel>



</template>


<script>
// import VideoPlayer from "nuxt-video-player";
// require("nuxt-video-player/src/assets/css/main.css");
export default {
    data() {
        return {
            // videos: [
            //     {
            //         url: "https://www.youtube.com/watch?v=r1XE8ON8fos"
            //     },
            //     {
            //         url: "https://www.youtube.com/watch?v=MWSR17vEVBw"
            //     },
            //     {
            //         url: "https://www.youtube.com/watch?v=r1XE8ON8fos"
            //     },
            //     {
            //         url: "https://www.youtube.com/watch?v=MWSR17vEVBw"
            //     },
            // ]
        }
    },
    components: {
        // VideoPlayer,
    },
};
</script>
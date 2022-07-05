<template>
        <v-carousel :show-arrows="false">
            <v-carousel-item class="item-video" v-for="item in videos" :key="item.value">
                <video id="my-player" class="video-js video-carousel" controls
                    :poster="require('@/assets/images/' + item.img)" data-setup='{}'>
                    <source :src="require('@/assets/video/' + item.vid)" type="video/mp4" />
                </video>
                <div class="shadow"></div>
            </v-carousel-item>
        </v-carousel>
</template>
<script>
// import VideoPlayer from "nuxt-video-player";
// require("nuxt-video-player/src/assets/css/main.css");
export default {
    data() {
        return {
            rating: 4.5,
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
};
</script>
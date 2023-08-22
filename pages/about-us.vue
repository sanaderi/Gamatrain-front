<template>
    <div>

        <v-container fluid id="about-page-header">

            <v-container>
                <v-card id="map-card" flat>
                    <v-row>
                        <v-col cols="12">
                            <div class="lottie-background" ref="lottieBackground">
                                <div id="main-title-holder">
                                    <h1 class="gama-text-h1 ">
                                        About Us
                                    </h1>
                                    <p class="gama-text-subtitle2">
                                        Learning Together, Earning Together Building a Brighter Future
                                    </p>
                                </div>
                            </div>



                        </v-col>

                    </v-row>
                </v-card>

            </v-container>


        </v-container>

        <v-container id="about-introduce-container">
            <v-row>
                <v-col cols="12">
                    <h2 class="gama-text-h4">
                        GamaTrain
                    </h2>
                    <p class="gama-text-body1">
                        Welcome to GamaTrain, the EdTech startup revolutionizing education. Our platform offers innovative
                        services like sample exams, online tests, tutoring, and more, enhancing the learning experience for
                        teachers and students. Join us to shape the future of education!
                    </p>
                </v-col>
            </v-row>
        </v-container>


        <!-- <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="progress-container">
                        <div class="progress-bar" ref="progressBar"></div>
                    </div>
                </v-col>
            </v-row>
        </v-container> -->
    </div>



    <!-- <v-img src="/images/about-us-header.png" alt="About us" /> -->
</template>


<script>
import lottie from 'lottie-web';
import mapAnimation from '../static/images/about-us-header.json'; // Adjust the path

export default {
    auth: false,
    mounted() {
        this.initLottieAnimation();
    },
    methods: {
        initLottieAnimation() {
            const animationContainer = this.$refs.lottieBackground;
            const animationInstance = lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg', // Use 'svg' or 'canvas' based on your preference
                loop: true,
                autoplay: true,
                animationData: mapAnimation, // Pass the animation data directly
            });
            animationInstance.setSpeed(2); // Set the speed factor (0.5 is 50% of the original speed)

        },
    },
}
</script>


<style scoped>
.progress-container {
    width: 50px;
    height: 200px;
    border: 4px solid #ccc;
    position: relative;
    overflow: hidden;
}

.progress-bar {
    height: 200px;
    width: 100%;
    background-color: #3498db;
    animation: progressAnimation 5s linear forwards;
}

@keyframes progressAnimation {
    0% {
        height: 0;
    }

    100% {
        height: 100%;
        background-color: #2ecc71;
    }
}


#about-page-header {
    height: 34rem;
    background: #24292F;
    position: relative;


    #map-card {
        background-color: transparent;
        background-image: url('/images/about-us-header.svg');
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 43rem 23rem;
        height: 30rem;
        position: relative;
        display: grid;
        place-items: center;

        .lottie-background {
            width: 40rem;
            height: 38rem;
            background-repeat: no-repeat;
        }

        #main-title-holder {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 11rem;
            text-align: center;

            .gama-text-h1 {
                color: #FFB600;
                margin-bottom: 0.8rem;
            }

            .gama-text-subtitle2 {
                color: #FFB600 !important;
            }
        }
    }
}


#about-introduce-container{
    text-align: center;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .gama-text-h4{
        color: #24292F; 
        margin-bottom: 4.8rem;
    }
    .gama-text-body1{
        color: rgba(36, 41, 47, 0.80);
        text-align: left;
    }
}

@media only screen and (min-width: 600px) {}



@media only screen and (min-width: 960px) {}</style>
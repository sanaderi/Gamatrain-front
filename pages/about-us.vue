<template>
    <div>

        <v-container fluid id="about-page-header">
            <div class="overlay"></div>


            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div id="main-title-holder">
                            <h1 class="gama-text-h1 ">
                                About Us
                            </h1>
                            <p class="gama-text-subtitle2">
                                Learning Together, Earning Together Building a Brighter Future
                            </p>
                        </div>

                    </v-col>

                </v-row>

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

        <v-container id="about-map-container">
            <v-card id="map-card" flat>
                <v-row>
                    <v-col cols="12">
                        <LottieAnimation id="map-holder" :animation-data="mapAnimation"></LottieAnimation>
                    </v-col>

                </v-row>
            </v-card>
        </v-container>


        <v-container id="about-vision-container">
            <v-row>
                <v-col cols="12">
                    <h2 class="gama-text-h4">Our Vision</h2>
                    <p class="gama-text-body1">
                        At GamaTrain, our vision is to revolutionize the world of education by providing innovative
                        solutions that empower both students and teachers. As we move toward the future, we are
                        committed to offering new services that leverage the latest technology and trends. Some of the
                        exciting new services we are working on include:
                    </p>
                </v-col>
                <v-col cols="12">
                    <div id="step-container">
                        <div class="step-progress-bar" ref="stepProgressBar"></div>
                        <LottieAnimation id="step1" v-if="enableStep1" :animation-data="stepAnimation"
                            :end-time="stepEndTime" :loop-status="false"></LottieAnimation>
                        <LottieAnimation id="step2" v-if="enableStep2" :animation-data="stepAnimation"
                            :end-time="stepEndTime" :loop-status="false"></LottieAnimation>
                        <LottieAnimation id="step3" v-if="enableStep3" :animation-data="stepAnimation"
                            :end-time="stepEndTime" :loop-status="false"></LottieAnimation>
                    </div>

                </v-col>
                <v-col cols="12" md="4">
                    <v-slide-x-transition v-if="enableStep1Txt">
                        <div>
                            <h3 class="gama-text-h5">
                                Decentralized Content Quality Moderation
                            </h3>
                            <p class="gama-text-body2">
                                We believe that quality education is paramount, and that's why we are developing a
                                decentralized
                                content quality moderation system. This system will allow our users to participate in
                                moderating
                                the
                                quality of the content on our platform, ensuring that it remains accurate, relevant, and
                                up-to-date.
                                By decentralizing content quality moderation, we can provide a more transparent and
                                collaborative
                                platform that empowers our users.
                            </p>

                        </div>
                    </v-slide-x-transition>
                </v-col>
                <v-col cols="12" md="4">
                    <v-slide-x-transition v-if="enableStep2Txt">
                        <div>
                            <h3 class="gama-text-h5">
                                Customized Learning Paths Using AI
                            </h3>
                            <p class="gama-text-body2">
                                We believe that quality education is paramount, and that's why we are developing a
                                decentralized
                                content quality moderation system. This system will allow our users to participate in
                                moderating
                                the
                                quality of the content on our platform, ensuring that it remains accurate, relevant, and
                                up-to-date.
                                By decentralizing content quality moderation, we can provide a more transparent and
                                collaborative
                                platform that empowers our users.
                            </p>
                        </div>
                    </v-slide-x-transition>
                </v-col>
                <v-col cols="12" md="4">
                    <v-slide-x-transition v-if="enableStep3Txt">
                        <div>
                            <h3 class="gama-text-h5">
                                Moving Towards Green Economy
                            </h3>
                            <p class="gama-text-body2">
                                We believe that quality education is paramount, and that's why we are developing a
                                decentralized
                                content quality moderation system. This system will allow our users to participate in
                                moderating
                                the
                                quality of the content on our platform, ensuring that it remains accurate, relevant, and
                                up-to-date.
                                By decentralizing content quality moderation, we can provide a more transparent and
                                collaborative
                                platform that empowers our users.
                            </p>
                        </div>
                    </v-slide-x-transition>
                </v-col>
            </v-row>
        </v-container>


        <v-container id="about-our-team-container">
            <v-row>
                <v-col cols="12">
                    <h2 class="gama-text-h4">
                        Our Team
                    </h2>
                    <p class="gama-text-body1">
                        We are proud of our team's dedication and expertise, and we are confident that their contributions
                        will be instrumental in helping GamaTrain achieve its vision of becoming a leading EdTech company in
                        the global market.
                    </p>

                        <!-- <v-slide-group  class="pa-4 text-center" flat>
                            <v-slide-item  v-for="(n,index) in teamMembers.slice(1,6)" >
                                <v-card @click="handleSlideClick(index)"  class="ma-4" height="200" width="100"
                                    >
                                    <v-row class="fill-height" align="center" justify="center">
                                        {{ index }}
                                        {{ n.fullName }}
                                        
                                    </v-row>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group> -->
                </v-col>
            </v-row>
        </v-container>
    </div>



    <!-- <v-img src="/images/about-us-header.png" alt="About us" /> -->
</template>


<script>
import mapAnimation from '../static/images/about-us-header.json'; // Adjust the path
import stepAnimation from '../static/images/about-vision-step.json'; // Adjust the path
import LottieAnimation from '~/components/common/lottie-animation.vue';

export default {
    auth: false,
    mounted() {
        // Initialize the Intersection Observer
        this.initIntersectionObserver();
    },
    data() {
        return {
            mapAnimation,
            stepAnimation,
            stepEndTime: 30, // Set the desired end time in seconds

            enableStep1: false,
            enableStep1Txt: false,

            enableStep2: false,
            enableStep2Txt: false,

            enableStep3: false,
            enableStep3Txt: false,

            teamMembers:[
                {
                    fullName:'Ramin Naderi',
                },
                {
                    fullName:'Ali Poorbazargan',
                },
                {
                    fullName:'Mehdi Zare',
                },
                {
                    fullName:'Fahim Kavian',
                },
                {
                    fullName:'Amin Naderi',
                },
                {
                    fullName:'Sadeq Naderi',
                },
                {
                    fullName:'Mohammad Salehi',
                },
            ]


        }
    },
    methods: {
        startAnimation(step) {
            // Toggle a class on the element to trigger the CSS animation
            if (step == 1) {
                if (!this.$refs.stepProgressBar.classList.contains('animateStep1')) {
                    this.$refs.stepProgressBar.classList.add('animateStep1');
                }
            } else {
                if (!this.$refs.stepProgressBar.classList.contains('animateStep2')) {
                    this.$refs.stepProgressBar.classList.add('animateStep2');
                }
            }
        },

        initIntersectionObserver() {
            const options = {
                root: null, // Use the viewport as the root
                rootMargin: '0px', // No margin
                threshold: 0.5, // Trigger when 50% of the element is visible
            };

            const observer = new IntersectionObserver(this.handleIntersection, options);
            observer.observe(this.$refs.stepProgressBar);
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Display the alert message when the div is in view

                    this.enableStep1 = true;
                    this.enableStep1Txt = true;
                    setTimeout(() => { this.startAnimation(1) }, 1000);
                    setTimeout(() => {
                        this.enableStep2 = true
                        this.enableStep2Txt = true;
                    }, 4000);
                    setTimeout(() => { this.startAnimation(2) }, 5000);
                    setTimeout(() => {
                        this.enableStep3 = true;
                        this.enableStep3Txt = true;
                    }, 8000);
                }
            });
        },

        handleSlideClick(index) {
            const deltaIndex = 4 - index;
            if (deltaIndex > 0) {
                for (let i = 0; i < deltaIndex; i++) {
                        var pop_data = this.teamMembers.pop();
                        this.teamMembers.unshift(pop_data);
                }
            } else if (deltaIndex < 0) {
                for (let i = 0; i > deltaIndex; i--) {
                        var splice_data = this.teamMembers.splice(0, 1);
                       
                        this.teamMembers.push(...splice_data);

                }
            }
        },
    },
    components: { LottieAnimation }
}
</script>


<style scoped>
@keyframes progressAnimation {
    0% {
        height: 0;
    }

    100% {
        height: 100%;
        background-color: #2ecc71;
    }
}

@keyframes step1ProgressAnimation {
    0% {
        width: 0;
    }

    100% {
        width: 50%;
        background-color: #000;
    }
}


@keyframes step2ProgressAnimation {
    0% {
        width: 50%;
        background-color: #FFB600;
    }

    100% {
        width: 100%;
        background-color: #000;
    }
}


#about-page-header {
    height: 34rem;
    background-image: url('/images/about-header.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100vw 100vh;
    position: relative;

    .overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 100%;
        background: rgba(36, 41, 47, 0.40);
        backdrop-filter: blur(7.5px);

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

#about-map-container {
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


        .lottie-container {
            width: 40rem !important;
            height: 38rem !important;
        }



    }
}


#about-introduce-container {
    text-align: center;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .gama-text-h4 {
        color: #24292F;
        margin-bottom: 4.8rem;
    }

    .gama-text-body1 {
        color: rgba(36, 41, 47, 0.80);
        text-align: left;
    }
}




#about-vision-container {
    text-align: center;
    min-height: 88.2rem;
    padding-top: 13.6rem;
    padding-bottom: 13.6rem;

    .gama-text-h4 {
        color: #24292F;
        margin-bottom: 4.8rem;
    }

    .gama-text-body1 {
        color: rgba(36, 41, 47, 0.80);
        text-align: left;
        margin-bottom: 4.8rem;
    }

    #step-container {
        height: 0.5rem;
        width: 75%;
        margin: auto auto 2.4rem auto;
        position: relative;


        .step-progress-bar {
            width: 0;
            height: 100%;
            background-color: #FFB600;
        }

        .lottie-container {
            width: 10rem !important;
            height: 10rem !important;
        }

        #step1 {
            position: absolute;
            left: -4rem;
            top: 0;
            bottom: 0;
            margin: auto;
        }

        #step2 {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }

        #step3 {
            position: absolute;
            right: -4rem;
            top: 0;
            bottom: 0;
            margin: auto;

        }

    }

    .animateStep1 {
        animation: step1ProgressAnimation 3s linear forwards;
    }

    .animateStep2 {
        animation: step2ProgressAnimation 3s linear forwards;
    }





    .gama-text-h5 {
        margin-bottom: 2.4rem;
    }

    .gama-text-body2 {
        text-align: left;
        color: #24292F !important;
    }
}


#about-our-team-container {
    text-align: center;
    padding-top: 13.6rem;
    padding-bottom: 13.6rem;

    .gama-text-h4 {
        color: #24292F;
        margin-bottom: 4.8rem;
    }

    .gama-text-body1 {
        color: rgba(36, 41, 47, 0.80);
        text-align: left;
        margin-bottom: 4.8rem;
    }
}

@media only screen and (min-width: 600px) {}



@media only screen and (min-width: 960px) {}
</style>
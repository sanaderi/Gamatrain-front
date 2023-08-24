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
                                Customized Learning Paths Using AI
                            </h3>
                            <p class="gama-text-body2">
                                We understand that every student has their own unique learning style and preferences. That's
                                why we're working on integrating AI into our platform to offer personalized learning paths
                                that adapt to each student's needs. With customized learning paths, students can learn at
                                their own pace and in a way that works best for them.
                            </p>

                        </div>
                    </v-slide-x-transition>
                </v-col>
                <v-col cols="12" md="4">
                    <v-slide-x-transition v-if="enableStep2Txt">
                        <div>
                            <h3 class="gama-text-h5">
                                Moving Towards Green Economy
                            </h3>
                            <p class="gama-text-body2">
                                We recognize the importance of environmental sustainability and the role education plays in
                                creating a better future. We are committed to promoting a green economy by offering courses
                                that educate students about sustainability, eco-friendly practices, and environmental
                                stewardship. By doing so, we hope to inspire a generation of students who are passionate
                                about creating a better world.
                            </p>
                        </div>
                    </v-slide-x-transition>
                </v-col>
                <v-col cols="12" md="4">
                    <v-slide-x-transition v-if="enableStep3Txt">
                        <div>
                            <h3 class="gama-text-h5">
                                Decentralized Content Quality Moderation
                            </h3>
                            <p class="gama-text-body2">
                                We believe that quality education is paramount, and that's why we are developing a
                                decentralized content quality moderation system. This system will allow our users to
                                participate in moderating the quality of the content on our platform, ensuring that it
                                remains accurate, relevant, and up-to-date. By decentralizing content quality moderation, we
                                can provide a more transparent and collaborative platform that empowers our users.
                            </p>
                        </div>
                    </v-slide-x-transition>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid id="about-commitment-container">
            <v-container>
                <h2 class="gama-text-h4">Our Commitment</h2>



                <v-card flat>
                    <v-tabs-items v-model="activeCommitment">
                        <v-tab-item v-for="(item, index) in commitmentList" :value="'tab-' + index">
                            <v-card flat id="commitment-card">
                                <v-card-text>
                                    <v-icon>mdi-{{ item.icon }}</v-icon>
                                    <h3 class="gama-text-h5">
                                        {{ item.title }}
                                    </h3>
                                    <p class="gama-text-subtitle2">{{ item.describe }}</p>

                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>

                    

                    <v-tabs v-model="activeCommitment" background-color="#24292F" centered icons-and-text>

                        <v-tab :href="`#tab-${index}`" v-for="(item, index) in commitmentList">
                            <v-icon>mdi-{{ item.icon }}</v-icon>
                        </v-tab>

                    </v-tabs>


                </v-card>

            </v-container>
        </v-container>

        <v-container id="about-our-service">
            <v-row>
                <v-col cols="12">
                    <h2 class="gama-text-h4">Our Services</h2>
                </v-col>
                <v-col md="4" v-for="(item, index) in serviceList" :key="index">
                    <nuxt-link :to="`${item.link}`" class="gama-text-h6">
                        <span :class="`service-icon ${item.icon}`"></span>
                        {{ item.title }}
                    </nuxt-link>

                </v-col>

                <v-col cols="12">
                    <p class="gama-text-body1">Welcome to GamaTrain, the EdTech startup revolutionizing education. Our
                        platform offers innovative
                        services like sample exams, online tests, tutoring, and more, enhancing the learning experience for
                        teachers and students. Join us to shape the future of education!</p>

                    <v-btn to="/services">All services</v-btn>
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

                    <v-sheet class="mx-auto ">
                        <div class="d-flex memberSliderContainer">
                            <div v-for="(member, index) in teamMembers.slice(1, 6)" @click="slideClicked(index)">
                                <v-card flat class="ma-2 pointer">
                                    <v-img :class="memberSlideClass(index)" :alt="member.fullName"
                                        :src="`/images/member/${member.avatar}`" />

                                </v-card>
                            </div>
                        </div>
                        <v-row id="active-user-data">
                            <v-col cols="12">
                                <h5 class="gama-text-h5">{{ teamMembers[activeMember + 1].fullName }}</h5>
                                <p class="gama-text-subtitle1">
                                    {{ teamMembers[activeMember + 1].role }}
                                </p>
                                <p class="gama-text-body1">
                                    {{ teamMembers[activeMember + 1].bio }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-col>
            </v-row>

        </v-container>
    </div>



    <!-- <v-img src="/images/about-us-header.png" alt="About us" /> -->
</template>


<script>
import { randomInt } from 'crypto';
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

            teamMembers: [
                {
                    fullName: 'Mohammad Salehi',
                    avatar: 'mohammad-salehi.jpeg',
                    role: 'DevOps',
                    bio: 'I enjoy of coding and solving hard problems.'
                },
                {
                    fullName: 'Fahim Kavian',
                    avatar: 'avatar.svg',
                    role: 'UI/UX Designer',
                    bio: ''
                },
                {
                    fullName: 'Ali Poorbazargan',
                    avatar: 'ali-poorbazargan.png',
                    role: 'CTO',
                    bio: 'With over 7 years of experience in full-stack web development, Ali has been the technical leader of Gama.ir and has been instrumental in designing and developing all aspects of the software, from infrastructure to the final products and user experiences. His expertise and leadership skills help the company stay ahead of the curve in the ever-evolving EdTech industry.'
                },
                {
                    fullName: 'Ramin Naderi',
                    avatar: 'ramin-naderi.png',
                    role: 'Co-founder & CEO',
                    bio: "As the co-founder and CEO of Gama.ir, Ramin brings a wealth of experience in software development, team management, problem-solving, and business management to GamaTrain. His deep understanding of the EdTech industry and the market has been instrumental in identifying opportunities for expansion and driving the company's success over the past ten years."

                },
                {
                    fullName: 'Mehdi Zare',
                    avatar: 'mehdi-zare.png',
                    role: 'Marketing Manager',
                    bio: "Marketing Manager: With over seven years of expertise in marketing research, marketing strategy, content strategy, and business development, Mehdi is an experienced marketing manager who has previously worked for well-known Iranian startups and brands. His contributions enable GAMATrain to understand the market dynamics, identify growth opportunities, and develop effective marketing campaigns to improve user experience. He is committed to helping the company grow and achieve long-term success."
                },
                {
                    fullName: 'Sadeq Naderi',
                    avatar: 'sadeq-naderi.png',
                    role: 'FrontEnd Developer',
                    bio: "Frontend Developer dedicated to crafting immersive and user-centric web applications. His expertise lies in harnessing a diverse array of frontend technologies, allowing him to consistently deliver polished, intuitive, and captivating user experiences that resonate with audiences. Always in pursuit of excellence, he strives to search for and implement the best strategies or techniques that elevate the quality of web applications. His commitment to continuous improvement drives him to explore innovative solutions that enhance user engagement and satisfaction."
                },
                {
                    fullName: 'Amin Naderi',
                    avatar: 'avatar.svg',
                    role: 'Support',
                    bio: ""
                },

            ],
            activeMember: 2,
            intervalId: null,


            activeCommitment: 'tab-2',
            commitmentList: [
                {
                    icon: 'white-balance-incandescent',
                    title: 'Innovation',
                    describe: 'We are dedicated to innovation and are constantly exploring new ways to enhance the learning experience. We use the latest technology and teaching methods to create engaging and interactive content that keeps our users motivated and excited about learning.'
                },
                {
                    icon: 'umbrella-beach',
                    title: 'Accessibility',
                    describe: 'We are committed to providing our services to as many people as possible, regardless of their location, financial situation, or background. Our platform is designed to be accessible and affordable, allowing anyone to access high-quality education.'
                },
                {
                    icon: 'star',
                    title: 'Quality',
                    describe: 'We strive to provide the highest quality of education to our users by working with experienced educators and experts to create our content. We constantly review and update our content to ensure that it is accurate, relevant, and up-to-date.'
                },
                {
                    icon: 'headset',
                    title: 'Support',
                    describe: 'We are committed to providing our users with the support they need to succeed in their education. Our customer support team is available 24/7 to answer any questions or concerns that our users may have.'
                },
                {
                    icon: 'account-multiple',
                    title: 'Community',
                    describe: 'We believe that education is a collaborative process and that learning is enhanced when students and educators work together. We are committed to creating a supportive and inclusive community that encourages collaboration and communication between our users.'
                },
                {
                    icon: 'memory',
                    title: 'Digital Transformation',
                    describe: "In today's digital age, traditional learning falls short. At GamaTrain, we're dedicated to enhancing education through technology. Our intuitive platform is accessible on various devices, providing a flexible and dynamic learning experience that adapts to individual preferences."
                },
            ],

            serviceList: [
                {
                    icon: 'icon-multimedia',
                    link: '/search?type=learnfiles',
                    title: 'Multimedia'
                },
                {
                    icon: 'icon-paper',
                    link: '/search?type=test',
                    title: 'Paper'
                },
                {
                    icon: 'icon-school',
                    link: '/school-service',
                    title: 'School finder'
                },
                {
                    icon: 'icon-teacher',
                    link: '/services',
                    title: 'Teacher'
                },
                {
                    icon: 'icon-q-a',
                    link: '/search?type=question',
                    title: 'Q&A'
                },
                {
                    icon: 'icon-exam',
                    link: '/search?type=azmoon',
                    title: 'Exam'
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
        memberSlideClass(index) {
            if (index == this.activeMember)
                return "active-slide";
            else if (index == (this.activeMember - 1) || index == parseInt(this.activeMember) + parseInt(1))
                return "adjacent-slide";
            else if (index == (this.activeMember - 2) || index == parseInt(this.activeMember) + parseInt(2))
                return "subsequent-slide";
            else if (index == (this.activeMember - 3) || index == parseInt(this.activeMember) + parseInt(3))
                return "after-subsequent-slide";
            else if (index == (this.activeMember - 4) || index == parseInt(this.activeMember) + parseInt(4))
                return "after-after-subsequent-slide";
        },
        slideClicked(index) {

            const deltaIndex = this.activeMember - index;
            if (deltaIndex > 0) {
                for (let i = 0; i < deltaIndex; i++) {
                    setTimeout(() => {
                        var pop_data = this.teamMembers.pop();
                        this.teamMembers.unshift(pop_data);
                    }, 100 * i + 1)
                }
            } else if (deltaIndex < 0) {
                for (let i = 0; i > deltaIndex; i--) {
                    setTimeout(() => {
                        var splice_data = this.teamMembers.splice(0, 1);
                        this.teamMembers.push(...splice_data);
                    }, 100 * Math.abs(i) + 1)

                }
            }

        }



    },
    components: { LottieAnimation },

}
</script>


<style>
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

#about-commitment-container {
    background: #24292F;
    min-height: 48.8rem;
    text-align: center;
    padding-top: 10rem;

    .gama-text-h4 {
        color: #FFB600 !important;
        margin-bottom: 4.8rem;
    }



    .v-card {
        background-color: transparent !important;
        height: 21.4rem;


        .v-tabs-items {
            background-color: transparent !important;

            #commitment-card {
                width: 80%;
                margin: auto;

                .v-icon {
                    color: #FFB600;
                    font-size: 6.4rem;
                    margin-bottom: 1.6rem;
                }

                .gama-text-h5 {
                    color: #FFB600;
                    margin-bottom: 2.6rem;
                }

                .gama-text-subtitle2 {
                    color: #FFB600;
                    text-align: left;
                    margin-bottom: 5.6rem;
                }

            }

        }

        .v-tabs {
            .v-icon {
                font-size: 3.2rem;
                color: #FFB600;
            }




            .v-tab {
                min-width: 6.4rem;
                min-height: 6.4rem !important;
                width: 6.4rem !important;
                height: 6.4rem !important;
            }

            .v-tab--active {
                background-color: #FFB600;
                border-radius: 0.4rem;


                .v-icon {
                    font-size: 4.8rem;
                    color: #24292F;
                    ;
                }
            }

            .v-tabs-slider-wrapper {
                display: none !important;
            }



        }



    }


}

#about-our-service {
    margin-top: 10rem;
    margin-bottom: 5rem;
    text-align: center;

    .gama-text-h4 {
        text-align: center;
        margin-bottom: 6rem;
    }

    .gama-text-h6 {
        display: block;
        position: relative;
        padding-left: 5.6rem;
        text-align: left;
        margin-bottom: 7.2rem;

        .service-icon {
            display: block;
            position: absolute;
            left: 0;
            top: -1rem;
            color: #FFB600 !important;
            font-size: 4.8rem;
        }

    }

    .gama-text-body1 {
        text-align: left;
        margin-bottom: 4.8rem;
    }

    .v-btn {
        height: 3.6rem;
        padding: 0rem 1.6rem;
        justify-content: center;
        border-radius: 3rem;
        background: #FFB600;
        margin: auto auto;

        .v-btn__content {
            color: #24292F;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 600;
        }
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

    .memberSliderContainer {
        max-width: 80rem;
        margin: 0 auto;

    }


    .active-slide {
        border-radius: 0.6rem;
        width: 21rem;
        height: 24rem;
    }

    .adjacent-slide {
        border-radius: 0.6rem;
        width: 16rem;
        height: 18.2rem;
        margin-top: 3rem !important;


    }

    .subsequent-slide {
        border-radius: 0.6rem;
        width: 10.5495rem;
        height: 12rem;
        margin-top: 6rem !important;

    }

    .after-subsequent-slide {
        border-radius: 0.6rem;
        width: 6.5495rem;
        height: 8rem;
        margin-top: 8rem !important;

    }

    .after-after-subsequent-slide {
        border-radius: 0.6rem;
        width: 4.5495rem;
        height: 6rem;
        margin-top: 9rem !important;

    }

    #active-user-data {
        margin-top: 2.4rem;
        text-align: center;

        .gama-text-h5 {
            margin-bottom: 2.4rem;
        }

        .gama-text-subtitle1 {
            margin-bottom: 1.6rem;
        }
    }
}

@media only screen and (min-width: 600px) {}



@media only screen and (min-width: 960px) {}</style>
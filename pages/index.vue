<template>
    <v-container fluid class="px-0 py-0   mt-md-0">
        <main-slider />

        <grade-explorer :stats="stats" />

        <level-guid-banner :slide-arr="slideArr" />

        <!--Ai learn banner-->
        <v-container>
            <v-row>
                <v-col cols="12" id="ai-learn-banner">
                    <img id="img-top" alt="AI Learn" src="/images/ai-learn-bg1.png" />
                    <v-card flat>
                        <h2 class="gama-text-h2">
                            AI Learn
                        </h2>
                        <p class="gama-text-subtitle1">
                            Discover Your Full Potential with AI-based Education
                        </p>
                        <nuxt-link to="/smart-learning" class="gama-primary-btn">
                            Read about it
                        </nuxt-link>
                        <img id="img-bottom" alt="AI Learn" src="/images/ai-learn-bg2.png" />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!--End ai learn banner-->


        <!--Sudent help banner-->
        <v-container id="student-help-container" fluid>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="gama-text-h4">Are you a student?</h2>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card class="fill-height float-sm-right" to="/search?type=test">
                            <v-card-title>
                                <v-icon color="#FFB300" size="36" class="mr-2">mdi-cloud-download</v-icon>
                                Educational Content
                            </v-card-title>
                            <v-card-text>
                                Empower Your Studies. Download Worksheets and Educational Materials.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card class="fill-height float-sm-left" to="/search?type=azmoon">
                            <v-card-title>
                                <span class="icon-exam"></span>
                                &nbsp;Exam
                            </v-card-title>
                            <v-card-text>
                                You can test yourself with online tests and increase your preparation.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>


        <!--School service banner-->
        <v-container id="school-service-container">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-img width="246" height="184" class="mx-auto" src="/images/school-service.png" />
                </v-col>
                <v-col cols="12" sm="8">
                    <h2 class="gama-text-h4">Find school service</h2>
                    <p class="gama-text-body1 describe">
                        You don't have to try the hardest ways anymore. GamaTrain has provided you with access to school
                        information. Just
                        filter and GamaTrain will find it for you.
                    </p>
                    <nuxt-link class="gama-primary-btn" to="/school-service">Learn more</nuxt-link>
                </v-col>
            </v-row>

        </v-container>
        <!--End school service banner-->


        <!-- Stats container -->
        <stats-banner />
        <!-- End stats container -->


        <!-- Blog container -->
        <blog-container />
        <!-- End blog container -->

        <!--Earn money banner-->
        <v-container fluid id="earn-money-container">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12" md="12" class="text-md-right">
                        <h2 class="describe text-center ">Why wait? Earn money with us in minutes with
                            just a few clicks!</h2>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="text-center ">
                        <v-btn to="/earn-money" height="36" color="#FFB300" class="white--text">Earn money</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <!--End earn money banner-->





    </v-container>
</template>
 
<script>
import MainSlider from '~/components/home/main-slider.vue';
import GradeExplorer from '~/components/home/grade-explorer.vue';
import LevelGuidBanner from '~/components/home/level-guid-banner.vue';
import BlogContainer from '~/components/home/blog-container.vue';
import StatsBanner from '~/components/home/stats-banner.vue';

export default {
    auth: false,
    head() {
        return {
            titleTemplate: "Gamatrain | %s",
            title: 'Learning together, earning together, building a brighter future'

        }
    },
    components: {
        MainSlider,
        GradeExplorer,
        LevelGuidBanner,
        BlogContainer,
        StatsBanner
    },


    data() {
        return {
            test_schools: '',
            less: true,
            showLess: true,





            items: [
                {
                    src: "banner_home_2.jpg",
                },
                {
                    src: "banner_home_2.jpg"
                }
            ],
            slideArr: [
                {
                    img: 'guid-banner1.svg',
                    caption: 'Sign Up',
                    describe: "Register and Create Your Content Creator Profile"
                },
                {
                    img: 'guid-banner2.png',
                    caption: 'Upload Your Content',
                    describe: 'Share Your Lesson Plans, Study Guides, and More.'
                },
                {
                    img: 'guid-banner3.svg',
                    caption: 'Reach Students',
                    describe: 'Gain Exposure through Our Platform and Network.'
                },
                {
                    img: 'guid-banner4.svg',
                    caption: 'Earn Big',
                    describe: 'Reap the Rewards as Students Purchase Your Content.'
                }
            ],
        }
    },
    computed: {
        slideColor() {
            if (this.colors && this.carousel_model) {
                return this.colors[this.carousel_model];
            }
            return '#24292F'; // or some default value if colors or carousel_model is not available
        },

    },





    //Load data
    async asyncData({ params, $axios }) {
        // This could also be an action dispatch
        const response = await $axios.$get('/api/v1/home/stats');
        var stats = response.data;

        return { stats }
    }
}



</script>
 
<style >
/*Home page banner control background*/
.index-banner .v-window__prev,
.v-window__next {
    background: none !important;
}

.v-select__slot {
    /* border: transparent; */
    padding-left: 0;
    padding-right: 0;
}

.theme--dark.v-input input,
.theme--dark.v-input textarea {
    color: #000 !important;
}





#ai-learn-banner {
    position: relative;
    max-width: 73rem;
    margin: 0 auto 0 auto;

    .v-card {
        border-radius: 1rem;
        background-color: #24292F;
        color: #FFFFFF;
        text-align: center;
        margin: 100px auto 100px auto;
        padding: 2.4rem 0 2.4rem 0;
        position: relative;
        height: 17rem;

        .gama-text-h2 {
            color: #FFF;
            text-align: center;
            margin-bottom: 1.6rem;
        }

        .gama-text-subtitle1 {
            color: #FFF;
            width: 28.8rem;
            margin: auto;
        }

        #img-bottom {
            position: absolute;
            top: 12.5rem;
            width: 9.7rem;
            height: 11.1rem;
            flex-shrink: 0;
            left: 0;
        }

        .gama-primary-btn {
            margin-top: 1.5rem;
            color: #24292F;
        }
    }



    #img-top {
        position: absolute;
        top: 6.45rem;
        height: auto;
        left: 0;
        right: 0;
        z-index: 1;
        width: 7.7333rem;
        height: 6.4rem;
        margin: 0 auto;
    }




}


#student-help-container {
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
    background: #FFB600;

    .gama-text-h4 {
        color: #24292F;
        text-align: center;

    }

    .v-card {
        border-radius: 0.625rem;
        background: rgba(36, 41, 47, 0.70);
        backdrop-filter: blur(0.46875rem);
        color: white;
        max-width: 35.3rem;
        min-height: 17.6rem;
        margin: auto;

        .v-card__title {
            color: #FFF;
            font-family: 'Inter-Bold';
            font-size: 2.2rem !important;
            font-style: normal;
            font-weight: 750;
            line-height: 4.4rem;


            .icon-exam {
                font-size: 3.6rem;
                color: #FFB600;
            }
        }

        .v-card__text {
            color: #FFF;
            font-family: 'Inter-Md';
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 2.4rem;
        }
    }
}


#school-service-container {
    margin: 10rem auto 10rem auto;
    text-align: center;


    .gama-text-h4 {
        color: #354053;
        margin-bottom: 2.4rem;
    }

    .gama-text-body1 {
        color: #6E7781;
        text-align: left;

    }

    .gama-primary-btn {
        margin-top: 2.4rem;

    }



}

#earn-money-container {
    padding: 6.8rem 0 6.8rem 0;
    background: #24292F;

    .v-btn {

        .v-btn__content {
            font-family: 'Inter-Meduim';
            color: #24292F
        }
    }

    .describe {
        color: #F3F3FB;
        font-size: 2.2rem;
        font-family: 'Inter-Meduim';
        font-style: normal;
        font-weight: 500;
        line-height: 3.4rem;
    }
}


@media (min-width: 600px) {
    #school-service-container {
        margin: 10rem auto 10rem auto;
        text-align: left;


        .gama-text-h4 {
            color: #354053;
            margin-bottom: 2.4rem;
        }

        .gama-text-body1 {
            color: #6E7781;

        }

        .v-btn {
            margin-top: 2rem;



            .v-btn__content {
                color: #24292F;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.0125rem;
            }

        }



    }


    #ai-learn-banner {


        .v-card {
            padding: 4.8rem 0 4.8rem 0;
            height: 21.5rem;

            .gama-text-h2 {
                color: #FFF;
                text-align: center;
                margin-bottom: 1.6rem;
            }

            .gama-text-subtitle1 {
                width: 40rem;
            }

            #img-bottom {
                top: 13.8rem;
                width: 12.8908rem;
                height: 16.3rem;
            }

            .gama-primary-btn {
                margin-top: 2.4rem;
                color: #24292F;
            }
        }



        #img-top {
            top: 4.55rem;
            width: 10.9367rem;
            height: 9rem;
        }




    }
}


@media (min-width: 960px) {
    #ai-learn-banner {
        margin: 8rem auto 8rem auto;


        .v-card {
            padding: 3.4rem 0 4.8rem 0;
            height: 21.5rem;

            .gama-text-h2 {
                color: #FFF;
                text-align: center;
                margin-bottom: 1.6rem;
            }

            .gama-text-subtitle1 {
                width: 50rem;
            }

            #img-bottom {
                top: 13.8rem;
                width: 15.0261rem;
                height: 19rem;
            }

            .gama-primary-btn {
                margin-top: 2.4rem;
                color: #24292F;
            }
        }



        #img-top {
            top: 2.45rem;
            width: 14.5823rem;
            height: 12rem;
        }




    }
}
</style>
 
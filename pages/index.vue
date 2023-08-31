<template>
    <v-container fluid class="px-0 py-0   mt-md-0">
        <main-slider />

        <grade-explorer :stats="stats" />

        <level-guid-banner />

        <!--Ai learn banner-->
        <v-container class="mt-16">
            <v-row>
                <v-col cols="12" id="ai-learn-banner">
                    <img id="img-top" alt="AI Learn" src="/images/ai-learn-bg1.png" />
                    <v-card flat>
                        <h2 class="title">
                            AI Learn
                        </h2>
                        <p class="describe">
                            Discover Your Full Potential with AI-based Education
                        </p>
                        <v-btn to="/smart-learning" color="#FFB300" rounded class="white--text">
                            Read about it
                        </v-btn>
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
                        <h2 class="title">Are you a student?</h2>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card class="fill-height float-sm-right" to="/search?type=test">
                            <v-card-title>
                                <v-icon color="#FFB300" size="36">mdi-cloud-download</v-icon>
                                &nbsp;Educational Content
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
                    <h2 class="title">Find school service</h2>
                    <p class="gama-text-body1 describe">
                        You don't have to try the hardest ways anymore. GamaTrain has provided you with access to school
                        information. Just
                        filter and GamaTrain will find it for you.
                    </p>
                    <v-btn to="/school-service" rounded large color="#FFB300">Learn more</v-btn>
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
                        <v-btn height="36" color="#FFB300" class="white--text">Earn money</v-btn>
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
            ]
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
    background: #fff !important;
    border: transparent;
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
    margin: 6.4rem auto 6.4rem auto;

    .v-card {
        border-radius: 1rem;
        background-color: #24292F;
        color: #FFFFFF;
        text-align: center;
        margin: 100px 0 100px 0;
        padding: 48px 0 24px 0;
        position: relative;

        .title {
            color: #FFF;
            text-align: center;
            font-family: 'Inter-Bold' !important;
            font-size: 4.6rem !important;
            font-style: normal;
            font-weight: 750;
            line-height: 4.4rem;
            margin-bottom: 1.6rem;
        }

        .describe {
            color: #FFF;
            text-align: center;
            font-family: 'Inter-Regular';
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 2.4rem;
            margin-bottom: 1.5rem;
        }

        #img-bottom {
            position: absolute;
            top: 12.5rem;
            left: 0;
        }

        .v-btn {
            font-weight: 700;

            .v-btn__content {
                color: #24292F;
            }



        }
    }



    #img-top {
        position: absolute;
        top: 2.4rem;
        height: auto;
        left: 0;
        right: 0;
        z-index: 1;
        margin: 0 auto;
    }




}


#student-help-container {
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
    background: #FFB600;

    .title {
        color: #24292F;
        text-align: center;
        font-family: 'Inter-Bold' !important;
        font-size: 2.8rem !important;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
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

    .title {
        color: #354053;
        font-family: 'Inter-Bold';
        font-size: 2.8rem !important;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
        margin-bottom: 2.4rem;
    }

    .describe {
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
</style>
 
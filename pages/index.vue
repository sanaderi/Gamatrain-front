<template>
    <v-app>
        <main-header :menuSetting="menuSetting" />
        <v-container fluid class="px-0 py-0 mt-10  mt-md-0">

            <v-row>
                <v-col cols="12" sm="12" md="12" class="pt-0 px-0 pt-sm-0">
                    <v-carousel id="main-slider" v-model="carousel_model" cycle delimiter-icon="mdi-square" interval="10000"
                        hide-delimiter-background :show-arrows="false">

                        <v-carousel-item v-for="(slide, i) in slides" :key="i">
                            <v-sheet class="section1" :id="slide.id">
                                <v-container>
                                    <v-card flat>
                                        <v-row class="white--text mt-4  ">
                                            <v-col md="12">
                                                <div class="slide-title " v-html="slide.title" />
                                                <div class="slide-describe mt-6 d-none d-md-block" v-html="slide.text" />
                                                <v-btn rounded class="mt-8   d-none d-md-block" id="read-about-btn"
                                                    x-large>Read about it</v-btn>

                                                <v-btn text id="slide-register-btn" class="d-md-none">
                                                    Touch to register
                                                    <v-icon color="#FFB300">
                                                        mdi-arrow-right-bold
                                                    </v-icon>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card>

                                </v-container>
                            </v-sheet>
                            <v-sheet class="section2">
                            </v-sheet>

                        </v-carousel-item>
                        <v-card id="main-search" class="d-none d-md-block">
                            <v-card-text>
                                <v-row class="text-center">
                                    <v-col cols="7" id="main-search-keyword">
                                        <v-text-field class="rounded-ts" label="Insert text" dense hide-details
                                            filled></v-text-field>
                                    </v-col>
                                    <v-col cols="4" class="pl-0 " id="keysearch-cate">
                                        <v-autocomplete hide-details dense label="Select category"
                                            :items="['Paper', 'Multimedia', 'Q&A', 'Exam', 'Tutorial']"
                                            filled></v-autocomplete>
                                    </v-col>
                                    <v-col cols="1" class="pl-0">
                                        <v-btn color="#FFB300" class="white--text">
                                            <v-icon>
                                                mdi-magnify
                                            </v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                        </v-card>

                    </v-carousel>
                </v-col>
            </v-row>
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
                            <v-btn color="#FFB300" rounded class="white--text">
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
                            <v-card class="fill-height">
                                <v-card-title>
                                    <v-icon color="#FFB300" size="36">mdi-cloud-download</v-icon>
                                    &nbsp;Download
                                </v-card-title>
                                <v-card-text>
                                    Empower Your Studies. Download Worksheets and Educational Materials.
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card class="fill-height">
                                <v-card-title>
                                    <v-icon color="#FFB300" size="36">mdi-text-box-edit</v-icon>
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
                        <p class="describe">
                            You don't have to try the hardest ways anymore. Gamma has provided you with access to school
                            information. Just
                            filter and Gamma will find it for you.
                        </p>
                        <v-btn rounded large color="#FFB300">Search school</v-btn>
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
                        <v-col cols="12" sm="12" md="8">
                            <h2 class="describe text-center text-md-left">Why wait? Earn money with us in minutes with
                                just a few clicks!</h2>
                        </v-col>
                        <v-col cols="12" sm="12" md="4" class="text-center text-md-left">
                            <v-btn height="36" color="#FFB300" class="white--text">Earn money</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
            <!--End earn money banner-->





        </v-container>
        <v-footer class="px-0 pb-0">
            <main-footer />
        </v-footer>
    </v-app>
</template>
 
<script>
import GradeExplorer from '~/components/home/grade-explorer.vue';
import LevelGuidBanner from '~/components/home/level-guid-banner.vue';
import BlogContainer from '~/components/home/blog-container.vue';
import StatsBanner from '~/components/home/stats-banner.vue';
import MainFooter from '../components/common/footer'
import MainHeader from '../components/common/header'

export default {
    layout: "home",
    auth: false,
    head() {
        return {
            titleTemplate: "Gamatrain | %s",
            title: 'Learning together, earning together, building a brighter future'

        }
    },
    components: {
        MainHeader,
        GradeExplorer,
        LevelGuidBanner,
        BlogContainer,
        StatsBanner,
        MainFooter
    },


    data() {
        return {
            test_schools: '',
            less: true,
            showLess: true,




            carousel_model: 0,
            colors: [
                '#24292F',
                '#0092A9'
            ],


            slides: [
                {
                    title: '<span class="pre-title">AI</span> System <span class="d-sm-none"><br>&nbsp&nbsp</span>in Education',
                    img: 'ai-robot.png',
                    text: "You don't have to try the hardest ways anymore.<br> Gamma has provided you with access to school.",
                    id: 'ai-slide'
                }, {
                    title: '<span class="text-h3 text-md-h2   font-weight-bold">Answer<span class="d-sm-none"><br>&nbsp&nbsp</span> & Question</span>',
                    text: "You don't have to try the hardest ways anymore.<br> Gamma has provided you with access to school.",
                    img: 'a-q.png',
                    id: 'aq-slide'
                }
            ],
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
        menuSetting() {
            return {
                logo: 'gamatrain-logo.svg',
                bgColor: this.slideColor,
                linkColor: '#fff'

            }
        }
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


#main-slider {
    height: 49.28 !important;
}

#main-slider #main-search {
    position: absolute;
    bottom: 12rem;
    width: 78rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 8.2rem;
    border-radius: 9rem;
    background: rgba(0, 0, 0, 0.40);
    backdrop-filter: blur(7.5px);
}

#main-slider #main-search textarea {
    color: #24292F !important
}


#main-slider #main-search #keysearch-cate .v-input__slot {
    background: #fff;
    border-radius: 0.4rem;

}

#main-slider #main-search #keysearch-cate .v-label {
    color: rgba(0, 0, 0, 0.60);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.8rem;

}

#main-slider #main-search #keysearch-cate .v-label.v-label--active {
    color: rgba(0, 0, 0, 0.60) !important;

}


#main-slider #main-search #main-search-keyword {

    .v-input {
        border-color: #fff;
        color: #24292F !important;

        .v-input__control {
            border-color: #fff;


            .v-input__slot {
                background-color: #fff !important;

                border: transparent;
                border-radius: 3rem 0.4rem 0.4rem 3rem;

                .v-label {
                    color: rgba(0, 0, 0, 0.60);
                    font-size: 1.6rem;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 1.8rem;

                }

                .v-label.v-label--active {
                    color: rgba(0, 0, 0, 0.60) !important;

                }


            }

            .v-input__slot::before {
                border: transparent;
            }




        }
    }







}



#main-slider #main-search .v-btn {
    border-radius: 0.4rem 3rem 3rem 0.4rem;
    height: 5.2rem !important;
    width: 5rem !important;
    min-width: 4rem;

    .v-btn__content .v-icon {
        display: block;
    }
}


#main-slider .section1 {
    height: 95%;

    .pre-title {
        color: #FFF;
        font-family: 'Helvetica Neue LT Std Bold';
        font-size: 5rem;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    .slide-title {
        font-family: 'Helvetica Neue LT Std Bold' !important;
        font-weight: 750;
        font-size: 2.8rem !important;
    }

    .slide-describe {
        margin-top: 2rem;
        color: #FFF;
        font-size: 2rem;
        font-style: normal;
        font-weight: 300;
        line-height: 3.2rem;
    }

    .slide-img {
        width: 33rem;
        float: right;

    }

    #read-about-btn {
        background: #FFB600;

        .v-btn__content {
            color: #FFF !important;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.0143rem;
            text-transform: uppercase;
            padding-top: 0.5rem;
        }

    }
}

#main-slider #ai-slide {
    background: #24292F !important;
    background-repeat: no-repeat;
    background-size: 90%, 10%;
    height: 40rem;
}

#main-slider #ai-slide .v-card {
    height: 44rem;
    background-color: transparent;
    background-image: url('/images/ai-robot.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 32.4rem 40.5rem;
}

#main-slider #aq-slide {
    background: #0092A9;
    background-repeat: no-repeat;
    height: 40rem;
}

#main-slider #aq-slide .v-card {
    height: 44rem;
    background-color: transparent;
    background-image: url('/images/a-q.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 32.4rem 30.36rem;
}

#main-slider .section2 {
    height: 10%;
}




#main-slider .v-carousel__controls {
    position: absolute;
    top: 37.5rem;
    /* height: 5rem !important; */
}

#main-slider .v-carousel__controls .v-btn--icon {
    background-color: #ebece9;
    /* Background color of non-active ones */
    height: 0.42rem;
    /* Height you want */
    width: 8rem;
    /* Width you want */
    border-radius: 0;
    /* Remove default border radius */
}

#main-slider .v-carousel__controls .v-btn--icon.v-btn--active {
    background-color: #FFB300;
    /* Colour for active one */
}

#main-slider .v-carousel__controls .v-btn--icon:hover {
    background-color: #FFB300;
    /* You might also want to customise the hover effect */
}

#main-slider .v-btn__content .v-icon {
    display: none;
}



#ai-learn-banner {
    position: relative;
    max-width: 73rem;
    margin: 0 auto;

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
            font-family: 'Helvetica Neue LT Std Bold' !important;
            font-size: 4.6rem !important;
            font-style: normal;
            font-weight: 750;
            line-height: 4.4rem;
            margin-bottom: 1.6rem;
        }

        .describe {
            color: #FFF;
            text-align: center;
            font-family: 'Helvetica Neue LT Std';
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
            padding-top: 0.3rem;
            font-weight: 700;



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
    margin-top: 6rem;
    background: #FFB600;

    .title {
        color: #24292F;
        text-align: center;
        font-family: 'Helvetica Neue LT Std Bold' !important;
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

        .v-card__title {
            color: #FFF;
            font-family: 'Helvetica Neue LT Std Bold';
            font-size: 2.2rem !important;
            font-style: normal;
            font-weight: 750;
            line-height: 4.4rem;
        }

        .v-card__text {
            color: #FFF;
            font-family: 'Helvetica Neue LT Std Md';
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 2.4rem;
        }
    }
}


#school-service-container {
    margin: 5rem auto 5rem auto;

    .title {
        color: #354053;
        font-family: 'Helvetica Neue LT Std Bold';
        font-size: 2.8rem !important;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    .describe {
        color: #6E7781;
        font-family: 'Helvetica Neue LT Std Md';
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.2rem;
    }

    .v-btn {
        margin-top: 2rem;



        .v-btn__content {
            margin-top: 0.4rem;
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
    background: #24292F;

    .v-btn {
        padding-top: 0.3rem;

        .v-btn__content {
            font-family: 'Helvetica Neue LT Std Md';
            color: #24292F
        }
    }

    .describe {
        color: #F3F3FB;
        font-size: 2.2rem;
        font-family: 'Helvetica Neue LT Std Md';
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
    }
}


@media only screen and (max-width: 600px) {
    #main-slider {
        height: 18rem !important;
    }

    #main-slider .section1 {
        height: 35%;

        .container {
            width: 100%;

            .slide-img {
                width: 12rem;
                float: right;

            }

            .pre-title {
                color: #FFF;
                font-family: 'Helvetica Neue LT Std Bold';
                font-size: 4rem;
                font-style: normal;
                font-weight: 750;
                line-height: 4.4rem;
            }

            .slide-title {
                font-family: 'Helvetica Neue LT Std Bold' !important;
                font-weight: 750;
                font-size: 2.2rem !important;
            }






            #slide-register-btn {
                text-transform: none;
                color: #A5A6A7;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 500;
                line-height: 2.4rem;

                .v-icon {
                    display: inline-flex !important;
                    color: #FFB300 !important;
                    font-size: 2.4rem;
                    padding-left: 0.8rem;
                }
            }
        }
    }

    #main-slider .section2 {
        height: 80%;
    }






    #main-slider #ai-slide {
        height: 15.5rem;
    }

    #main-slider #ai-slide .v-card {
        height: 16rem;
        background-position: right top;
        background-size: 12rem 15.1rem;
    }

    #main-slider #aq-slide {
        height: 15.5rem;
    }

    #main-slider #aq-slide .v-card {
        height: 16rem;
        background-size: 13.4rem 11.36rem;
    }

    #main-slider .v-carousel__controls {
        position: absolute;
        top: 13rem;
    }


    #main-slider .v-carousel__controls .v-btn--icon {
        /* Background color of non-active ones */
        height: 0.32rem;
        /* Height you want */
        width: 4rem;
        /* Width you want */

    }


}

@media only screen and (min-width: 600px) and (max-width: 960px) {
    #main-slider {
        height: 24.8rem !important;
    }

    #main-slider .section1 {
        height: 51%;

        .container {
            width: 80%;

            .slide-img {
                width: 17rem;
                float: right;

            }

            #slide-register-btn {
                margin-top: 3rem;
                text-transform: none;
                color: #A5A6A7;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 500;
                line-height: 2.4rem;

                .v-icon {
                    display: inline-flex !important;
                    color: #FFB300 !important;
                    font-size: 4.8rem;
                    padding-left: 3.4rem;
                }
            }
        }
    }



    #main-slider #ai-slide {
        height: 21rem;
    }

    #main-slider #ai-slide .v-card {
        height: 34rem;
        background-position: right top;
        background-size: 17.7rem 22.11rem;
    }

    #main-slider #aq-slide {
        height: 21rem;
    }

    #main-slider #aq-slide .v-card {
        height: 34rem;
        background-size: 18.4rem 16.36rem;
    }

    #main-slider .v-carousel__controls {
        position: absolute;
        top: 18.5rem;
    }

}

@media only screen and (min-width: 960px) and (max-width: 1264px) {

    #main-slider {
        height: 49.28 !important;

        #main-search {
            width: 78rem;


        }
    }
}

@media only screen and (min-width: 1264px) and (max-width: 1904px) {

    #main-slider {
        height: 49.28 !important;

        #main-search {
            width: 78rem;


        }
    }
}
</style>
 
<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" class="pt-0 px-0 pt-sm-0">
            <v-carousel id="main-slider" v-model="carousel_model" cycle delimiter-icon="mdi-square" interval="10000"
                hide-delimiter-background :show-arrows="false">

                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet class="section1" :id="slide.id">
                        <v-container class="pt-0 pt-sm-8 pt-md-8 ">
                            <v-card flat>
                                <v-row class="white--text ">
                                    <v-col md="12">
                                        <div class="slide-title " v-html="slide.title" />
                                        <div class="slide-describe gama-text-body1 mt-6 d-none d-md-block"
                                            v-html="slide.text" />
                                        <v-btn rounded :to="slide.link" class="mt-8   d-none d-md-inline-flex"
                                            id="read-about-btn" x-large>Learn more</v-btn>

                                        <v-btn @click="openAuthDialog('register')" text id="slide-register-btn" class="d-md-none">
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
                                <v-text-field class="rounded-ts" label="Ex: Paper Summer Session" dense hide-details
                                    filled></v-text-field>
                            </v-col>
                            <v-col cols="4" class="pl-0 " id="keysearch-cate">
                                <v-autocomplete hide-details dense label="Select category"
                                    :items="['Paper', 'Multimedia', 'Q&A', 'Exam', 'Tutorial']" filled></v-autocomplete>
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
</template>

<script>
export default {
    name: 'main-slider',
    data() {
        return {
            carousel_model: 0,
            colors: [
                '#24292F',
                '#0092A9'
            ],


            slides: [
                {
                    title: '<span class="gama-text-h1">AI</span> <span class=""gama-text-h2>System <span class="d-sm-none"><br>&nbsp&nbsp</span>in Education</span>',
                    img: 'ai-robot.png',
                    text: "Discover the future of education with our AI-powered learning platform,<br> revolutionizing the way you acquire knowledge and skills.",
                    id: 'ai-slide',
                    link: '/smart-learning'
                }, {
                    title: '<span class="gama-text-h1 font-weight-bold">Question<span class="d-sm-none"><br>&nbsp&nbsp</span> & Answer</span>',
                    text: "Q&A made easy. Connect with classmates and<br> teachers for quick answers to your questions.",
                    img: 'a-q.png',
                    id: 'aq-slide',
                    link: '/search?type=question'

                }
            ],
        }
    },
    methods: {
        openAuthDialog(val) {
            this.$router.push({ query: { auth_form: val } });
        },
    }
}
</script>


<style>
#main-slider {
    height: 49.28 !important;
}

#main-slider #main-search {
    position: absolute;
    bottom: 8rem;
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



#main-slider #main-search #keysearch-cate .v-input {
    background: #fff;
    border-radius: 0.4rem;

}

#main-slider {
    #main-search {
        .v-text-field>.v-input__control>.v-input__slot:before {
            border-style: none !important;
        }


        .v-text-field>.v-input__control>.v-input__slot:after {
            border-style: none !important;
        }


        .v-input--dense .v-select__slot>input {
            align-self: center;
            margin-top: 1.2rem;
        }

        .v-text-field--filled:not(.v-text-field--single-line) input {
            align-self: center;
            margin-top: 1.2rem;
        }
    }
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
        color: transparent !important;

        .v-input__control {
            border-color: transparent;


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

    .gama-text-h1 {
        color: #FFF;

    }

    .slide-title {
        font-family: 'Inter-Bold' !important;
        font-weight: 750;
        font-size: 2.8rem !important;
    }

    .slide-describe {
        margin-top: 2rem;
        color: #FFF;
    }

    .slide-img {
        width: 33rem;
        float: right;

    }

    #read-about-btn {
        background: #FFB600;
        max-width: 16rem;

        .v-btn__content {
            color: #24292F !important;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2rem;
            letter-spacing: 0.0143rem;
            text-transform: uppercase;
        }

    }
}

#main-slider #ai-slide {
    padding-top: 6rem;
    background: #24292F !important;
    background-repeat: no-repeat;
    background-size: 90%, 10%;
    height: 44rem;
}

#main-slider #ai-slide .v-card {
    height: 42rem;
    background-color: transparent;
    background-image: url('/images/ai-robot.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 32.4rem 40.5rem;
}

#main-slider #aq-slide {
    padding-top: 6rem;
    background: linear-gradient(45deg, #0092A9 0%, #2BDDFF 100%);
    background-repeat: no-repeat;
    height: 44rem;
}

#main-slider #aq-slide .v-card {
    height: 42rem;
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
    top: 41.18rem;
    /* height: 5rem !important; */
}

#main-slider .v-carousel__controls .v-btn--icon {
    background-color: #ebece9;
    /* Background color of non-active ones */
    height: 0.42rem;
    /* Height you want */
    width: 10.3rem;
    margin-right: 0.1rem !important;
    margin-left: 0.1rem !important;
    /* Width you want */
    border-radius: 0.4rem;
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



@media only screen and (max-width: 600px) {
    #main-slider {
        height: 25rem !important;
    }

    #main-slider .section1 {
        height: 35%;

        .container {
            width: 100%;

            .slide-img {
                width: 12rem;
                float: right;

            }


            .gama-text-h1 {
                font-size: 4.2rem !important;

            }

            .gama-text-h2 {
                font-size: 2.4rem !important;

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
        height: 21.5rem;
    }

    #main-slider #ai-slide .v-card {
        height: 21.5rem;
        background-position: right top;
        background-size: 15rem 18.1rem;
    }

    #main-slider #aq-slide {
        height: 21.5rem;
    }

    #main-slider #aq-slide .v-card {
        height: 21.5rem;
        background-size: 15.4rem 13.36rem;
    }

    #main-slider .v-carousel__controls {
        position: absolute;
        top: 18.8rem;
    }


    #main-slider .v-carousel__controls .v-btn--icon {
        /* Background color of non-active ones */
        height: 0.1rem;
        /* Height you want */
        width: 2.90rem;
        /* Width you want */
        margin-right: 0.05rem !important;
        margin-left: 0.05rem !important;

    }


}

@media only screen and (min-width: 600px) and (max-width: 959px) {
    #main-slider {
        height: 30.8rem !important;
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
        height: 27rem;
    }

    #main-slider #ai-slide .v-card {
        height: 34rem;
        background-position: right top;
        background-size: 17.7rem 22.11rem;
    }

    #main-slider #aq-slide {
        height: 27rem;
    }

    #main-slider #aq-slide .v-card {
        height: 34rem;
        background-size: 18.4rem 16.36rem;
    }

    #main-slider .v-carousel__controls {
        position: absolute;
        top: 24.2rem;
    }

    #main-slider .v-carousel__controls .v-btn--icon {
        /* Background color of non-active ones */
        height: 0.2rem;
        /* Height you want */
        width: 6.40rem;
        /* Width you want */

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
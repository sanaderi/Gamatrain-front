<template>
    <div>
        <v-container fluid id="earn-page-header">

            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div id="main-title-holder">
                            <h1 class="gama-text-h1 ">
                                Earn money
                            </h1>
                            <p class="gama-text-subtitle2">
                                Empower Educators with Our Lucrative Content Monetization Service
                            </p>
                        </div>
                    </v-col>

                </v-row>
            </v-container>
        </v-container>


        <v-container fluid id="earn-page-banner">
            <v-container>
                <img src="/images/mov-img.svg" id="mov-img" />
                <img src="/images/doc-img.svg" id="doc-img" />
                <img src="/images/zip-img.svg" id="zip-img" />
                <img src="/images/pdf-img.svg" id="pdf-img" />
                <img src="/images/gif-img.svg" id="gif-img" />
                <img src="/images/mp3-img.svg" id="mp3-img" />
            </v-container>
        </v-container>


        <v-conteiner id="content-monetization">
            <v-row>
                <v-col cols="12">
                    <v-card flat>
                        <h2 class="gama-text-h4">Content Monetization</h2>
                        <div id="content-monetization-steps">
                            <div class="step">
                                <div class="step-num">
                                    <h3 class="gama-text-h4">1</h3>
                                </div>

                                <div class="step-info">
                                    <h3 class="gama-text-h6">Maximize Your Earnings</h3>
                                    <p class="gama-text-body2">Earn the Highest Share of Sales in the Industry.</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-num">
                                    <h3 class="gama-text-h4">2</h3>
                                </div>

                                <div class="step-info">
                                    <h3 class="gama-text-h6">Share Your Expertise</h3>
                                    <p class="gama-text-body2">Empower K-12 Students with Your Valuable Educational Content.</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-num">
                                    <h3 class="gama-text-h4">3</h3>
                                </div>

                                <div class="step-info">
                                    <h3 class="gama-text-h6">Flexible Formats</h3>
                                    <p class="gama-text-body2">Share Word, PDF, PowerPoint, and More.</p>
                                </div>
                            </div>
                            <div class="step">
                                <div class="step-num">
                                    <h3 class="gama-text-h4">4</h3>
                                </div>

                                <div class="step-info">
                                    <h3 class="gama-text-h6">Easy Setup</h3>
                                    <p class="gama-text-body2">Quick and Hassle-Free Integration into Your Workflow.</p>
                                </div>
                            </div>

                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-conteiner>


    </div>
</template>


<script>
export default {
    layout: 'gama-ds-default',
    auth: false,
    data() {
        return {

        }
    },
    methods: {

    },
    watch: {

    },
    computed: {

    }
}
</script>


<style >
#earn-page-header {
    height: 20rem;
    background: #24292F;
    position: relative;


    #main-title-holder {
        max-width: 31.2rem;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 9.7rem;
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




#earn-page-banner {
    height: 43.8rem;

    .container {
        position: relative;
        height: 43.8rem;


        #mov-img {
            position: absolute;
            top: 10.6;
            opacity: 0;
            left: 3.38rem;
            animation-name: slideAndRotateMovMobileAnimation;
            animation-duration: 2s;
            /* Adjust the animation duration as needed */
            animation-timing-function: ease;
            /* Adjust the timing function as needed */
            animation-fill-mode: forwards;
            /* Keeps the final state of the animation */
        }

        #doc-img {
            position: absolute;
            top: 19.2rem;
            left: 2.85rem;
            animation-name: slideAndRotateDocMobileAnimation;
            animation-duration: 2s;
            /* Adjust the animation duration as needed */
            animation-timing-function: ease;
            /* Adjust the timing function as needed */
            animation-fill-mode: forwards;
            /* Keeps the final state of the animation */
        }


        #zip-img {
            position: absolute;
            top: 14.5rem;
            left: 6.7rem;
            animation-name: slideAndRotateZipMobileAnimation;
            animation-duration: 4s;
            /* Adjust the animation duration as needed */
            animation-timing-function: ease;
            /* Adjust the timing function as needed */
            animation-fill-mode: forwards;
            /* Keeps the final state of the animation */
        }


        #pdf-img {
            position: absolute;
            top: 13.1rem;
            right: 6.29rem;
            animation-name: slideAndRotatePdfMobileAnimation;
            animation-duration: 2s;
            /* Adjust the animation duration as needed */
            animation-timing-function: ease;
            /* Adjust the timing function as needed */
            animation-fill-mode: forwards;
            /* Keeps the final state of the animation */
            z-index: 1;

        }


        #gif-img {
            position: absolute;
            top: 8.03rem;
            right: 4.52rem;
            animation-name: slideAndRotateGifMobileAnimation;
            animation-duration: 2s;
            /* Adjust the animation duration as needed */
            animation-timing-function: ease;
            /* Adjust the timing function as needed */
            animation-fill-mode: forwards;
            /* Keeps the final state of the animation */
            z-index: 2;
        }


        #mp3-img {
            position: absolute;
            top: 17.5rem;
            right: 1.88rem;
            animation-name: slideAndRotateMp3MobileAnimation;
            animation-duration: 2s;
            /* Adjust the animation duration as needed */
            animation-timing-function: ease;
            /* Adjust the timing function as needed */
            animation-fill-mode: forwards;
            /* Keeps the final state of the animation */
            z-index: 0;
        }

    }

}

#content-monetization {

    text-align: center;

    .gama-text-h4 {
        text-align: center;
    }

    #content-monetization-steps {
        width: 88rem;
        margin: auto auto;

        .step {
            border-left: 6.4rem solid #24292F1A;
            border-top: 1rem solid transparent;
            border-bottom: 1rem solid transparent;
            height: 10.7rem;
            width: 0;
            position: relative;

            .step-num {
                position: absolute;
                right: 2.6rem;
                top: 2.6rem;
            }

            .step-info {
                width: 81.6rem;
                height: 8.6rem;
                background: #F4F4F4;
                padding: 2.4rem 1.6rem 1.6rem 1.6rem;
                text-align: left;
               

                .gama-text-h6 {
                    margin-bottom: 0.8rem;
                }

                .gama-text-body2 {
                    
                }

            }


        }


    }
}




@media (min-width: 600px) {
    #earn-page-header {
        height: 26rem;


    }



}



@media only screen and (min-width: 960px) {



    #earn-page-banner {
        height: 38.4rem;

        .container {
            position: relative;
            height: 38.4rem;


            #mov-img {
                position: absolute;
                top: 0;
                opacity: 0;
                left: 10.78rem;
                animation-name: slideAndRotateMovDesktopAnimation;
                animation-duration: 2s;
                /* Adjust the animation duration as needed */
                animation-timing-function: ease;
                /* Adjust the timing function as needed */
                animation-fill-mode: forwards;
                /* Keeps the final state of the animation */
            }

            #doc-img {
                position: absolute;
                top: 24.9rem;
                left: -10rem;
                animation-name: slideAndRotateDocDesktopAnimation;
                animation-duration: 2s;
                /* Adjust the animation duration as needed */
                animation-timing-function: ease;
                /* Adjust the timing function as needed */
                animation-fill-mode: forwards;
                /* Keeps the final state of the animation */
            }


            #zip-img {
                position: absolute;
                bottom: -10rem;
                left: -40rem;
                animation-name: slideAndRotateZipDesktopAnimation;
                animation-duration: 2s;
                /* Adjust the animation duration as needed */
                animation-timing-function: ease;
                /* Adjust the timing function as needed */
                animation-fill-mode: forwards;
                /* Keeps the final state of the animation */
            }


            #pdf-img {
                position: absolute;
                top: 12rem;
                right: -60rem;
                animation-name: slideAndRotatePdfDesktopAnimation;
                animation-duration: 2s;
                /* Adjust the animation duration as needed */
                animation-timing-function: ease;
                /* Adjust the timing function as needed */
                animation-fill-mode: forwards;
                /* Keeps the final state of the animation */
            }


            #gif-img {
                position: absolute;
                top: 5.83rem;
                right: -40rem;
                animation-name: slideAndRotateGifDesktopAnimation;
                animation-duration: 2s;
                /* Adjust the animation duration as needed */
                animation-timing-function: ease;
                /* Adjust the timing function as needed */
                animation-fill-mode: forwards;
                /* Keeps the final state of the animation */
            }


            #mp3-img {
                position: absolute;
                top: 20.81rem;
                right: 15.46rem;
                animation-name: slideAndRotateMp3DesktopAnimation;
                animation-duration: 2s;
                /* Adjust the animation duration as needed */
                animation-timing-function: ease;
                /* Adjust the timing function as needed */
                animation-fill-mode: forwards;
                /* Keeps the final state of the animation */
            }

        }

    }
}



/* Animate for mobile*/
@keyframes slideAndRotateMovMobileAnimation {
    0% {
        top: -10rem;
        opacity: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        opacity: 1;
        top: 10.6rem;
        right: 3.38rem;
        transform: translateY(-50%) rotate(-11deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateDocMobileAnimation {
    0% {
        left: -10rem;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        left: 2.85rem;
        top: 19.2rem;
        transform: translateY(-50%) rotate(-45deg);
        /* Rotate to 45 degrees */
    }
}

@keyframes slideAndRotateZipMobileAnimation {
    0% {
        top: 0;
        left: 12rem;
        opacity: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        top: 15.2rem;
        left: 8.4rem;
        opacity: 1;
        transform: translateY(-50%) rotate(-28.7deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotatePdfMobileAnimation {
    0% {
        top: 40rem;
        right: -10rem;
        opacity: 0;
        transform: translateY(-50%) rotate(180deg);
    }

    100% {
        top: 13.1rem;
        right: 6.29rem;
        opacity: 1;
        transform: translateY(-50%) rotate(-11deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateGifMobileAnimation {
    0% {
        top: -100rem;
        right: -40rem;
        opacity: 0;
        transform: translateY(-50%) rotate(360deg);
    }

    100% {
        top: 8.03rem;
        right: 4.52rem;
        opacity: 1;
        transform: translateY(-50%) rotate(6.416deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateMp3MobileAnimation {
    0% {
        top: 20.81rem;
        right: -40rem;
        transform: translateY(-50%) rotate(0);
    }

    100% {
        top: 17.5rem;
        right: 1.88rem;
        transform: translateY(-50%) rotate(42.5deg);
        /* Rotate to 45 degrees */
    }
}

/* End animate for mobile*/






/* Animate for tablet*/
@keyframes slideAndRotateMovTabletAnimation {
    0% {
        top: -10rem;
        opacity: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        opacity: 1;
        top: 10rem;
        transform: translateY(-50%) rotate(-11deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateDocTabletAnimation {
    0% {
        left: -10rem;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        left: 12.75rem;
        transform: translateY(-50%) rotate(-45deg);
        /* Rotate to 45 degrees */
    }
}

@keyframes slideAndRotateZipTabletAnimation {
    0% {
        bottom: -10rem;
        left: 12rem;
        opacity: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        bottom: 19.6rem;
        left: 23.65rem;
        opacity: 1;
        transform: translateY(-50%) rotate(-28.7deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotatePdfTabletAnimation {
    0% {
        top: 40rem;
        right: -10rem;
        opacity: 0;
        transform: translateY(-50%) rotate(180deg);
    }

    100% {
        right: 27rem;
        top: 12rem;
        opacity: 1;
        transform: translateY(-50%) rotate(-11deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateGifTabletAnimation {
    0% {
        top: -100rem;
        right: -40rem;
        opacity: 0;
        transform: translateY(-50%) rotate(360deg);
    }

    100% {
        top: 5.83rem;
        right: 13.12rem;
        opacity: 1;
        transform: translateY(-50%) rotate(6.416deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateMp3TabletAnimation {
    0% {
        top: 20.81rem;
        right: -40rem;
        transform: translateY(-50%) rotate(0);
    }

    100% {
        top: 20.81rem;
        right: 15.46rem;
        transform: translateY(-50%) rotate(42.5deg);
        /* Rotate to 45 degrees */
    }
}

/* End animate for tablet*/



/* Animate for desktop*/
@keyframes slideAndRotateMovDesktopAnimation {
    0% {
        top: -10rem;
        opacity: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        opacity: 1;
        top: 10rem;
        transform: translateY(-50%) rotate(-11deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateDocDesktopAnimation {
    0% {
        left: -10rem;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        left: 12.75rem;
        transform: translateY(-50%) rotate(-45deg);
        /* Rotate to 45 degrees */
    }
}

@keyframes slideAndRotateZipDesktopAnimation {
    0% {
        bottom: -10rem;
        left: 12rem;
        opacity: 0;
        transform: translateY(-50%) rotate(0deg);
    }

    100% {
        bottom: 19.6rem;
        left: 23.65rem;
        opacity: 1;
        transform: translateY(-50%) rotate(-28.7deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotatePdfDesktopAnimation {
    0% {
        top: 40rem;
        right: -10rem;
        opacity: 0;
        transform: translateY(-50%) rotate(180deg);
    }

    100% {
        right: 27rem;
        top: 12rem;
        opacity: 1;
        transform: translateY(-50%) rotate(-11deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateGifDesktopAnimation {
    0% {
        top: -100rem;
        right: -40rem;
        opacity: 0;
        transform: translateY(-50%) rotate(360deg);
    }

    100% {
        top: 5.83rem;
        right: 13.12rem;
        opacity: 1;
        transform: translateY(-50%) rotate(6.416deg);
        /* Rotate to 45 degrees */
    }
}


@keyframes slideAndRotateMp3DesktopAnimation {
    0% {
        top: 20.81rem;
        right: -40rem;
        transform: translateY(-50%) rotate(0);
    }

    100% {
        top: 20.81rem;
        right: 15.46rem;
        transform: translateY(-50%) rotate(42.5deg);
        /* Rotate to 45 degrees */
    }
}

/* End animate for desktop*/
</style>
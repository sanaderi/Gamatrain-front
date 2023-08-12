<template>
    <v-container fluid id="level-guid-banner">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center">
                    <h2 class="main-title">Join Us and Earn Today in 1-2-3</h2>
                </v-col>
                <v-col cols="12">
                    <p class="slide-describe">{{ slideArr[slideIndex].describe }}</p>
                    <div class="img-holder">
                        <v-slide-x-transition>
                            <v-img :alt="slideArr[slideIndex].caption" v-if="expand"
                                :src="`/images/${slideArr[slideIndex].img}`"></v-img>
                        </v-slide-x-transition>
                    </div>

                    <p class="img-caption">{{ slideArr[slideIndex].caption }}</p>

                    <v-item-group v-model="slideIndex" class="paginate d-flex justify-space-between ">
                        <v-item v-for="n in 3" :key="n">
                            <template>
                                <v-btn icon variant="text" @click="slideIndex = n - 1">
                                    {{ n }}
                                </v-btn>
                            </template>
                        </v-item>
                    </v-item-group>
                </v-col>

            </v-row>
        </v-container>
    </v-container>
</template>
<script>
export default {
    name: 'level-guid-banner',
    data() {
        return {
            slideIndex: 1,
            expand: true,
            slideArr: [
                {
                    img: 'guid-banner1.png',
                    caption: 'Register now!',
                    describe: "You don't have to try the hardest ways anymore. Gamma has provided you with access to school."
                },
                {
                    img: 'guid-banner2.png',
                    caption: 'Upload file!',
                    describe: 'Easily Upload Your Files and Share Your Knowledge'
                },
                {
                    img: 'guid-banner3.png',
                    caption: 'Earn money!',
                    describe: 'Start earning money now by getting paid for your valuable content'
                }
            ],
            intervalId: null // Store the interval ID
        }
    },
    methods: {
        handleAutoCycle() {
            this.intervalId = setInterval(() => {
                if (this.slideIndex == 2)
                    this.slideIndex = 0;
                else
                    this.slideIndex++;

            }, 6000);
        },
        stopInterval() {
            clearInterval(this.intervalId); // Clear the interval using the interval ID
        }

    },
    watch: {
        slideIndex(val) {
            this.expand = false;

            setTimeout(() => {
                this.expand = true;
            }, 500)
        }
    },
    mounted() {
        this.handleAutoCycle();
    },
    beforeDestroy() {
        this.stopInterval();
    }
}


</script>

<style >
#level-guid-banner {
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
    background: #F6F8FA;


    .main-title {
        color: #354053;
        text-align: center;
        font-family: 'Helvetica Neue LT Std Bold';
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    .slide-describe {
        text-align: center;
        color: #6E7781;
        font-size: 1.8rem;
        font-family: 'Helvetica Neue LT Std Md';
        font-style: normal;
        font-weight: 500;
        line-height: 3.2rem;
    }

    .v-img {
        width: 32rem;
        height: 24rem;
        margin: 0 auto 0 auto;
    }

    .img-holder {
        width: 32rem;
        height: 24rem;
        margin: 0 auto 0 auto;
    }

    .img-caption {
        color: #354053;
        text-align: center;
        font-size: 2.2rem;
        font-family: 'Helvetica Neue LT Std Bold';
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    .paginate {
        width: 22.7rem;
        height: 5.1rem;
        border-radius: 3rem;
        background: #EAEEF2;
        padding: 0 0.4rem 0 0.4rem;
        margin: 0 auto 0 auto;


        .v-btn {
            width: 4.4rem;
            height: 4.4rem;
            justify-content: center;
            background-color: #FFFFFF;
            color: #000000;
            font-weight: bold;
            margin: auto 0;
            


        }


        .v-item--active {
            color: #FFFFFF;
            background-color: #FFB300;
        }
    }
}
</style>
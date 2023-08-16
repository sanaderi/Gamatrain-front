<template>
    <v-container id="blog-list-container">
        <v-card flat class="mt-10">
            <v-card-text class="px-0 px-sm-6">
                <v-row>
                    <v-col cols="6">
                        <h2 id="main-title">Blog</h2>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <v-btn rounded outlined size="small" class="d-none d-md-inline">Go to blog</v-btn>
                        <v-btn text class="d-inline d-md-none seeAllBtn">
                            See all
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12">
                        <v-slide-group v-model="model" class="slider pa-sm-4">
                            <v-slide-item v-for="(item, n) in slideItmes" :key="n">
                                <v-card flat>
                                    <v-card @mouseover="toggleHover('enter', n)" @mouseleave="toggleHover('leave', n)"
                                        class="ma-1">
                                        <v-img :src="`/images/${item.img}`" />
                                        <v-card-title class="text-white">
                                            <span v-if="!isHovered[n]">
                                                {{ item.short_describe }}
                                            </span>
                                            <div v-else class="text-center">
                                                <v-btn text size="small" color="primary">
                                                    read more</v-btn>
                                            </div>
                                        </v-card-title>
                                    </v-card>
                                    <div class="describe">
                                        we have a few fundamentalwe principles that ...
                                        <nuxt-link to="/">Read more</nuxt-link>
                                    </div>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
export default {
    name: 'home-blog-container',
    data() {
        return {
            model: null,
            isHovered: [],
            slideItmes: [
                {
                    img: 'blog1.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog2.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog1.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog2.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog1.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog1.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog1.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                },
                {
                    img: 'blog1.png',
                    short_describe: 'Excited young teachercherr eachercherr wearing..',
                    readmore_describe: 'Excited young teachercherr eachercherr wearing..'
                }
            ]
        }
    },
    methods: {
        toggleHover(action, n) {
            if (action == 'enter')
                this.isHovered[n] = true;
            if (action == 'leave')
                this.isHovered[n] = false;


        }
    }
}

</script>

<style>
#blog-list-container {
    margin: 10rem auto 10rem auto;

    #main-title {
        color: #354053;
        font-family: 'Inter-Bold';
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 750;
        line-height: 2.4rem;
    }

    .v-btn {
        .v-btn__content {
            font-family: 'Inter-Bold';

        }
    }

    .seeAllBtn {
        padding-right: 0;
        .v-btn__content {
            text-transform: none;
            color: #6E7781;
            font-family: Inter-Regular;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }



        .v-icon {
            padding-left: 0.4rem;
            font-size: 2.8rem;
            color: #FFB600;
        }
    }

    .slider {
        .v-card {
            width: 21.9rem;
            height: 19.9rem;
            margin-right: 1.6rem;
            position: relative;
            border-radius: 0.6rem;


            .v-card {
                height: 15.9rem;

                .v-card__title {
                    border-radius: 0px 0px 6px 6px;
                    background: rgba(36, 41, 47, 0.70);
                    backdrop-filter: blur(7.5px);
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    font-family: 'Inter-Meduim';
                    margin: 0 auto;
                    color: #FFF;
                    font-size: 1.4rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 1.8rem;
                    padding-top: .6rem !important;
                    padding-bottom: .6rem;


                }
            }
        }

        .describe {
            text-align: center;
            color: #6E7781;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.6rem;


            .nuxt-link-exact-active {
                color: #FFB600;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 500;
                line-height: 1.6rem;
            }
        }
    }
}


@media screen and (min-width:600px) {
    #blog-list-container {

        .slider {
            .v-card {
                width: 25.6rem;
                height: 22.7rem;
                margin-right: 1.6rem;


                .v-card {
                    height: 18.5rem;

                    .v-card__title {
                        font-size: 1.6rem;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 1.8rem;
                        padding-top: .8rem !important;
                        padding-bottom: .8rem;
                        line-height: normal;


                    }
                }
            }

            .describe {
                color: #6E7781;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;


                .nuxt-link-exact-active {
                    color: #FFB600;
                    font-size: 1.4rem;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 2.4rem;
                }
            }
        }
    }
}


@media screen and (min-width:960px) {
    #blog-list-container {

        .slider {
            .v-card {
                width: 26.1rem;
                height: 22.7rem;
                margin-right: 1.6rem;


                .v-card {
                    height: 18.5rem;

                    .v-card__title {
                        font-size: 1.8rem;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 1.8rem;
                        padding-top: .8rem !important;
                        padding-bottom: .8rem;
                        line-height: normal;


                    }
                }
            }

            .describe {
                color: #6E7781;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;


                .nuxt-link-exact-active {
                    color: #FFB600;
                    font-size: 1.4rem;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 2.4rem;
                }
            }
        }
    }
}
</style>
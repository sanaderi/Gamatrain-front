<template>
    <v-container id="blog-list-container">
        <v-card flat class="mt-10">
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <h2 id="main-title">Blog</h2>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <v-btn rounded outlined size="small">Go to blog</v-btn>
                    </v-col>
                    <v-col cols="12">
                        <v-slide-group v-model="model" class="slider pa-4">
                            <v-slide-item v-for="(item, n) in slideItmes" :key="n">
                                <v-card flat width="260">
                                    <v-card @mouseover="toggleHover('enter', n)" @mouseleave="toggleHover('leave', n)"
                                        height="185" width="260" class="ma-1">
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
    #main-title {
        color: #354053;
        font-family: 'Helvetica Neue LT Std Bold';
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 750;
        line-height: 2.4rem;
    }

    .v-btn {
        padding-top: .5rem;
        .v-btn__content {
            font-family: 'Helvetica Neue LT Std Bold';

        }
    }

    .slider {
        .v-card {
            position: relative;

            .v-card__title {
                border-radius: 0px 0px 6px 6px;
                background: rgba(36, 41, 47, 0.70);
                backdrop-filter: blur(7.5px);
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                font-family: 'Helvetica Neue LT Std Md';
                margin: 0 auto;
                color: #FFF;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: 2.4rem;


            }
        }

        .describe {
            color: #6E7781;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: 2.4rem;


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
</style>
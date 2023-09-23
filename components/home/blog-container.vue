<template>
    <v-container id="blog-list-container">
        <v-card flat>
            <v-card-text class="px-0 px-sm-6 main-card">
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
                        <v-slide-group v-model="model" class="slider py-sm-4" :show-arrows="$vuetify.breakpoint.lgAndUp">
                            <v-slide-item v-if="isLoading" v-for="i in 10">
                                <v-skeleton-loader class="mx-auto slide-loading"  type="card"></v-skeleton-loader>
                            </v-slide-item>
                            
                            <v-slide-item v-else v-for="(item, n) in slideItmes" :key="n">
                                <v-card flat :to="`/blog/${item.id}/${item.title}`">
                                    <v-card @mouseover="toggleHover('enter', n)" @mouseleave="toggleHover('leave', n)"
                                        class="ma-1">
                                        <v-img :src="item.pic" />
                                        <v-card-title>
                                            <span class="gama-text-button" v-if="!isHovered[n]">
                                                {{ item.title }}
                                            </span>
                                            <div v-else class="text-center">
                                                <v-btn text size="small" color="primary">
                                                    read more</v-btn>
                                            </div>
                                        </v-card-title>
                                    </v-card>
                                    <div class="gama-text-subtitle2">
                                        <span v-html="item.body"></span>
                                        <nuxt-link :to="`/blog/${item.id}/${item.title}`">Read more</nuxt-link>
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
            slideItmes: [],
            isLoading:false
        }
    },
    mounted() {
        this.loadBlog();
    },
    methods: {
        toggleHover(action, n) {
            if (action == 'enter')
                this.isHovered[n] = true;
            if (action == 'leave')
                this.isHovered[n] = false;


        },
        loadBlog() {
            this.isLoading=true;
            this.$axios.$get('/api/v1/home/news')
                .then(response => {
                    this.slideItmes = response.data;
                }).catch(err => {
                    console.log(err);
                }).finally(()=>{
                    this.isLoading=false;
                })
        }
    }
}

</script>

<style>
#blog-list-container {
    margin: 2.4rem auto 2.4rem auto;
    min-height: 40rem;

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
        .slide-loading{
            width: 21.9rem;
            margin-right: 1.6rem!important;
            position: relative;
            border-radius: 0.6rem; 
        }
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
                    padding-top: .6rem !important;
                    padding-bottom: .6rem;
                    height: 4.9rem;
                    max-height: 4.9rem;

                    .gama-text-button {
                        color: #FFF;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }

        .gama-text-subtitle2 {
            margin: auto;
            max-width: 23rem;
            text-align: left;
            color: #6E7781;


            &>a {
                color: #FFB600;

            }
        }
    }
}


@media screen and (min-width:600px) {
    #blog-list-container {

        .main-card {
            padding-left: 1.3rem !important;
            padding-right: 1.3rem !important;
        }

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
                        height: 5.4rem;
                        max-height: 5.4rem;


                    }
                }
            }


        }
    }
}


@media screen and (min-width:960px) {
    #blog-list-container {
        margin: 8rem auto 8rem auto;


        .main-card {
            padding-left: 1.2rem !important;
            padding-right: 1.2rem !important;
        }

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


        }
    }
}
</style>
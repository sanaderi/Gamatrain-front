<template>
    <v-container id="blog">
        <v-row>
            <v-col cols="12">
                <div id="general-data-holder">
                    <div id="general-data">
                        <h1 class="gama-text-h1">
                            {{ contentData.title }}
                        </h1>
                        <div class="gama-text-subtitle1">
                            Cat: {{ contentData.cat_title }}
                        </div>

                        <v-img id="blog-img" :src="contentData.pic" />
                    </div>
                </div>
                <div id="blog-body">
                    <div id="general-data-footer">
                        <div>
                            <div id="autor-holder">
                                <img :src="contentData.avatar" />
                                <span class="gama-text-overline">{{ contentData.first_name }} {{ contentData.last_name }}</span>
                            </div>
                            <div id="date-holder">
                                <v-icon @click="share()" class="pr-6">
                                    mdi-share-variant
                                </v-icon>
                                <v-icon>
                                    mdi-calendar-blank-outline
                                </v-icon>
                                <span class="gama-text-overline">
                                    {{ $moment(contentData.subdate).format("M/D/YYYY") }}
                                </span>

                            </div>
                        </div>

                    </div>
                    <div id="blog-describe" v-html="contentData.body">
                    </div>
                    <div id="blog-like-section">
                        <p class="gama-text-h6">
                            Did you like this article?
                        </p>
                        <div id="like-area">
                            <div class="btn dislike-btn">
                                <v-icon>
                                    mdi-thumb-down
                                </v-icon>
                            </div>
                            <div class="btn like-btn">
                                <v-icon>
                                    mdi-thumb-up
                                </v-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>
export default {
    auth: false,
    name: 'blog',
    head() {
        return {
            title: this.contentData.title
        }
    },

    async asyncData({ params, $axios }) {
        const content = await $axios.$get(`/api/v1/blogs/${params.id}`);
        var contentData = [];

        if (content.status == 1)
            contentData = content.data;

        return { contentData };
    },
    methods: {
        async share() {
            if (navigator.share) {
                console.log("level 1")
                try {
                    await navigator.share({
                        title: this.contentData.title,
                        text: this.contentData.body,
                        url: `https://gamatrain.com/blog/${this.contentData.id}`,
                    });
                    console.log('Shared successfully');
                } catch (error) {
                    console.error('Error sharing:', error);
                }
            } else {
                console.warn('Share API is not supported in this browser');
            }
        }
    }
}
</script>


<style>
#blog {
    max-width: 72rem!important;
    #general-data-holder {
        /* margin-top: 5.6rem; */
        padding-bottom: 8.7rem;

        #general-data {
            min-height: 25rem;
            flex-shrink: 0;
            padding: 3.2rem 2.4rem 14.2rem 1.4rem;
            border-radius: 1rem;
            background: rgba(167, 177, 194, 0.10);
            position: relative;

            .gama-text-h1 {
                margin-bottom: 0.4rem;
                color: #24292F;
            }



            .gama-text-subtitle1 {
                color: #A7B1C2;
                width: 100%;
                text-align: right;
                margin-bottom: 0.8rem;
                padding-right: 1.2rem;


            }

            #blog-img {
                height: 23.4rem;
                width: 92.85%;
                position: absolute;
                bottom: -8.5rem;
                left: 0;
                right: 0;
                margin: auto;
                border-radius: 1rem;
            }
        }


    }

    #general-data-footer {
        padding: 0.8rem 2.4rem 2.9rem 2.4rem;
        width: 100%;
        height: 4.4rem;
        margin-bottom: 3.4rem;


        #autor-holder {
            float: left;
            position: relative;

            .gama-text-overline {
                color: #24292F;
                padding-left: 2.4rem;

            }

            >img {
                position: absolute;
                height: 2rem;
                width: 2rem;
                top: 0.2rem;
                border-radius: 50%;
            }
        }

        #date-holder {
            float: right;

            .v-icon {
                font-size: 1.8rem;
                color: #A7B1C2;

            }
        }



    }

    #blog-describe {
        margin-bottom: 10rem;
        width: 98%;
        margin: auto auto 8.8rem auto;

        >h2 {
            font-family: Inter;
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-top: 2.4rem;
            margin-bottom: 2.4rem;
        }

        >h3 {
            font-family: Inter;
            font-size: 2.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        >h4 {
            font-family: Inter;
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
        }

        >h5 {
            font-family: Inter;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        >h6 {
            font-family: Inter;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        >p {
            font-family: Inter;
            font-size: 1.2rem !important;
            font-style: normal;
            font-weight: 400 !important;
            line-height: 2rem;
            margin-bottom: 1rem;
        }

        >ul {
            font-family: Inter;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2rem;
        }
    }

    #blog-describe img {
        border-radius: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        height: auto;
        max-width: 100%;
    }

    #blog-like-section {
        text-align: center;
        margin-bottom: 4.8rem;

        .gama-text-h6 {
            margin-bottom: 2.4rem;
        }

        #like-area {
            width: 7.2rem;
            margin: auto;
            display: flex;

            .btn {
                height: 2.4rem;
                width: 2.4rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                .v-icon {
                    color: white;
                    font-size: 1.2rem;
                }
            }

            .dislike-btn {
                background: #919491;
                margin-right: 1.2rem;

            }

            .like-btn {
                background: #FFB600;
            }
        }
    }


}


@media (min-width: 600px) {
    #blog {
        #general-data-holder {
            padding-bottom: 36rem;


            #general-data {
                min-height: 22rem;
                flex-shrink: 0;
                padding: 2.4rem 1.2rem 14.4rem 1.2rem;
                border-radius: 1rem;
                background: rgba(167, 177, 194, 0.10);
                position: relative;

                .gama-text-h1 {
                    margin-bottom: 0.4rem;
                    color: #24292F;
                }



                .gama-text-subtitle1 {
                    color: #A7B1C2;
                    width: 100%;
                    text-align: right;
                    margin-bottom: 1.45rem;
                    padding-right: 1.2rem;


                }

                #blog-img {
                    height: 50.9rem;
                    width: 95.96%;
                    position: absolute;
                    bottom: -36.5rem;
                    left: 0;
                    right: 0;
                    margin: auto;
                    border-radius: 1rem;
                }
            }


        }

        #general-data-footer {
            padding: 0.8rem 1.6rem 2.9rem 1.6rem;

            width: 100%;
            height: 4.4rem;
            margin: auto auto 4.8rem auto;


            #autor-holder {
                float: left;
                position: relative;

                .gama-text-overline {
                    color: #24292F;
                    padding-left: 2.4rem;

                }

                >img {
                    position: absolute;
                    height: 2rem;
                    width: 2rem;
                    top: 0.2rem;
                    border-radius: 50%;
                }
            }

            #date-holder {
                float: right;

                .v-icon {
                    font-size: 1.8rem;
                    color: #A7B1C2;

                }
            }



        }

        #blog-describe {
            margin-bottom: 10rem;
            width: 98%;
            margin: auto auto 6.4rem auto;

            >h2 {
                font-family: Inter;
                font-size: 3rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-top: 2.4rem;
                margin-bottom: 2.4rem;
            }

            >h3 {
                font-family: Inter;
                font-size: 2.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

            >h4 {
                font-size: 2.6rem;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
            }

            >h5 {
                font-size: 2rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

            >h6 {
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

            >p {
                font-size: 1.4rem !important;
                font-style: normal;
                font-weight: 400 !important;
                line-height: normal;
                margin-bottom: 1rem;
            }

            >ul {
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }

        #blog-describe img {
            border-radius: 2rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            height: auto;
            max-width: 100%;
        }

        #blog-like-section {
            text-align: center;
            margin-bottom: 6.4rem;

            .gama-text-h6 {
                margin-bottom: 2.4rem;
            }

            #like-area {
                width: 8.8rem;
                margin: auto;
                display: flex;

                .btn {
                    height: 3.2rem;
                    width: 3.2rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    .v-icon {
                        color: white;
                        font-size: 1.6rem;
                    }
                }

                .dislike-btn {
                    background: #919491;
                    margin-right: 1.2rem;

                }

                .like-btn {
                    background: #FFB600;
                }
            }
        }


    }
}

@media (min-width: 960px) {
    #blog {

        #general-data-holder {
            padding-bottom: 23rem;

            #general-data {
                min-height: 49rem;
                padding: 4.8rem 1.6rem 34.1rem 1.6rem;

                .gama-text-h1 {
                    color: #24292F;
                }

                .gama-text-body1 {
                    margin: 2.4rem auto 2.4rem auto;
                }

                .gama-text-subtitle1 {
                    color: #A7B1C2;
                    width: 100%;
                    text-align: right;
                    margin-bottom: 1.8rem;
                    padding-right: 1.6rem;


                }


                #blog-img {
                    width: 95.96%;
                    height: 57.1rem;
                    bottom: -23rem;
                }
            }


        }

        #general-data-footer {
            padding: 1.6rem 1rem 2.9rem 1rem;

            width: 97%;
            margin: auto auto 6.4rem auto;
            height: 4.4rem;


            #autor-holder {
                float: left;

                .gama-text-overline {
                    padding-left: 2.8rem;

                }

                >img {
                    position: absolute;
                    height: 2.4rem;
                    width: 2.4rem;
                    top: -0.2rem;
                    border-radius: 50%;
                }
            }

            #date-holder {
                float: right;
            }



        }

        #blog-describe {
            margin-bottom: 10rem;

            >h2 {
                font-size: 4.4rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-top: 2.4rem;
                margin-bottom: 2.4rem;
            }

            >h3 {
                font-size: 3.6rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

            >h4 {
                font-size: 3rem;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
            }

            >h5 {
                font-size: 2.4rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

            >h6 {
                font-size: 2rem;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
            }

            >p {
                font-size: 1.6rem !important;
                font-style: normal;
                font-weight: 400 !important;
                line-height: normal;
                margin-bottom: 1rem;
            }

            >ul {
                font-family: Inter;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }

        #blog-describe img {
            border-radius: 2rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            height: auto;
            max-width: 100%;
        }

        #blog-like-section {
            text-align: center;
            margin-bottom: 10rem;

            .gama-text-h6 {
                margin-bottom: 4.8rem;
            }

            #like-area {
                width: 12rem;
                margin: auto;
                display: flex;

                .btn {
                    height: 4.8rem;
                    width: 4.8rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    .v-icon {
                        color: white;
                    }
                }

                .dislike-btn {
                    background: #919491;
                    margin-right: 1.2rem;

                }

                .like-btn {
                    background: #FFB600;
                }
            }
        }


    }
}

@media (min-width: 1264px) {
    #blog {
        margin-top: 0;
    }
}

@media (max-width:1263px) {
    #blog {
        margin-top: 5.6rem;
    }
}
</style>
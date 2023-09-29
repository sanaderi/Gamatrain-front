<template>
    <v-container id="blog">
        <v-row>
            <v-col cols="12">
                <div id="general-data-holder">
                    <div id="general-data">
                        <h1 class="gama-text-h2">
                            {{ contentData.title }}
                        </h1>
                        <p class="gama-text-body1">
                            As the co-founder and CEO of Gama.ir, Ramin brings a wealth of experience in software
                            development,
                            team management, problem-solving, and business management to GamaTrain.and business management
                            to
                            Gama
                        </p>

                        <v-img id="blog-img" :src="contentData.pic" />
                    </div>
                </div>
                <div id="general-data-footer">
                    <div class="chip">
                        {{ contentData.cat_title }}
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
    }
}
</script>


<style>
#blog {
    #general-data-holder {
        height: 65.7rem;

        #general-data {
            height: 45.7rem;
            flex-shrink: 0;
            padding: 4.8rem 2.4rem 24.8rem 2.4rem;
            border-radius: 1rem;
            background: rgba(167, 177, 194, 0.10);

            .gama-text-body1 {
                margin: 2.4rem auto 2.4rem auto;
            }

            #blog-img {
                height: 40rem;
                border-radius: 1rem;
            }
        }


    }

    #general-data-footer {
        padding: 2.9rem 2.4rem 2.9rem 2.4rem;

        .chip {
            height: 3.2rem;
            width: max-content;
            padding: 0.8rem 1.6rem;
            justify-content: center;
            align-items: center;
            display: flex;
            justify-content: center;
            border-radius: 1.6rem;
            background: #A7B1C2;
            font-family: Inter;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: #FFFFFF;
        }
    }

    #blog-describe {
        margin-bottom: 10rem;

        >h2 {
            font-family: Inter;
            font-size: 3rem;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            margin-top: 2.4rem;
            margin-bottom: 2.4rem;
        }

        >p {
            font-family: Inter;
            font-size: 1.6rem!important;
            font-style: normal;
            font-weight: 400!important;
            line-height: normal;
        }

        >ul{
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
</style>
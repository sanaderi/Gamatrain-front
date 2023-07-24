<template>
    <v-container id="content-stats-container">
        <v-card flat>
            <v-card-text>
                <v-row>
                    <v-col cols="2" class="pr-0">
                        <v-sheet class="text-right" id="stats-handler" @touchstart="handleTouchStart"
                            @mousemove="handleMouseMove" @touchend="handleTouchEnd" @mousedown="handleMouseDown"
                            @mouseup="handleMouseUp">
                            <div v-for="(item, index) in stats">
                                <v-btn @click="handleBtnClick(index)" class="my-0 white--text"
                                    :class="index == 5 ? 'rounded-pill active' : 'rounded-s-xl'"
                                    v-if="shouldDisplayButton(index)" :height="gradeSizes[index].height"
                                    :color="gradeColors[index]" :style="`font-size:${gradeSizes[index].fontSize}px`">
                                    {{ item.base_title }}
                                </v-btn>
                                <div v-if="index == 5"
                                    :style="`height:${gradeSizes[index].height}px;width:${gradeSizes[index].width}px`" />

                            </div>
                        </v-sheet>
                    </v-col>
                    <v-col cols="10" class="pl-0">
                        <v-card height="566">
                            <v-card-text class="pa-14">
                                <v-row id="stats-details">
                                    <v-col cols="12" md="6">
                                        <div class="d-none d-md-block">
                                            <v-icon color="primary" size="32">mdi-file</v-icon>
                                            <nuxt-link
                                                :to="`/search?type=test&section=${stats[5].section}&base=${stats[5].base}`"
                                                class="label">
                                                Paper
                                            </nuxt-link>
                                            <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            <div class="stat">+{{ stats[5].tests | numberFormat }}</div>
                                        </div>
                                        <v-row class="d-md-none">
                                            <v-col cols="6">
                                                <v-icon color="primary" size="32">mdi-file</v-icon>

                                                <nuxt-link
                                                    :to="`/search?type=test&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Paper
                                                </nuxt-link>
                                            </v-col>
                                            <v-col cols="6" class="text-right">
                                                <span class="stat">+{{ stats[5].tests | numberFormat }}</span>
                                                <v-icon size="20" class="pl-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <div class="d-none d-md-block">
                                            <v-icon color="primary" size="32">mdi-multimedia</v-icon>
                                            <nuxt-link
                                                :to="`/search?type=learnfiles&section=${stats[5].section}&base=${stats[5].base}`"
                                                class="label">
                                                Multimedia
                                            </nuxt-link>
                                            <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            <div class="stat">+{{ stats[5].files | numberFormat }}</div>
                                        </div>
                                        <v-row class="d-md-none">
                                            <v-col cols="6">
                                                <v-icon color="primary" size="32">mdi-multimedia</v-icon>

                                                <nuxt-link
                                                    :to="`/search?type=learnfiles&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Multimedia
                                                </nuxt-link>
                                            </v-col>
                                            <v-col cols="6" class="text-right">
                                                <span class="stat">+{{ stats[5].files | numberFormat }}</span>
                                                <v-icon size="20" class="pl-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <div class="d-none d-md-block">
                                            <v-icon color="primary" size="32">mdi-text-box-edit</v-icon>
                                            <nuxt-link
                                                :to="`/search?type=azmoon&section=${stats[5].section}&base=${stats[5].base}`"
                                                class="label">
                                                Exam
                                            </nuxt-link>
                                            <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            <div class="stat">+{{ stats[5].exams | numberFormat }}</div>
                                        </div>
                                        <v-row class="d-md-none">
                                            <v-col cols="6">
                                                <v-icon color="primary" size="32">mdi-text-box-edit</v-icon>

                                                <nuxt-link
                                                    :to="`/search?type=azmoon&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Exam
                                                </nuxt-link>
                                            </v-col>
                                            <v-col cols="6" class="text-right">
                                                <span class="stat">+{{ stats[5].exams | numberFormat }}</span>
                                                <v-icon size="20" class="pl-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <div class="d-none d-md-block">
                                            <v-icon color="primary" size="32">mdi-head-question-outline</v-icon>
                                            <nuxt-link
                                                :to="`/search?type=question&section=${stats[5].section}&base=${stats[5].base}`"
                                                class="label">
                                                Q & A
                                            </nuxt-link>
                                            <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            <div class="stat">+{{ stats[5].questions | numberFormat }}</div>
                                        </div>
                                        <v-row class="d-md-none">
                                            <v-col cols="6">
                                                <v-icon color="primary" size="32">mdi-head-question-outline</v-icon>

                                                <nuxt-link
                                                    :to="`/search?type=question&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Q & A
                                                </nuxt-link>
                                            </v-col>
                                            <v-col cols="6" class="text-right">
                                                <span class="stat">+{{ stats[5].questions | numberFormat }}</span>
                                                <v-icon size="20" class="pl-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                </v-row>

                                <v-divider class="d-none d-md-block mt-14 mb-6" />
                                <v-row class="d-none d-md-flex">
                                    <v-col cols="6" md="6">
                                        <h4 class="section-title">Last questions</h4>
                                        <v-card class="latest-card" flat v-for="item in questions.slice(0, 3)">
                                            <v-row>
                                                <v-col cols="1">
                                                    <v-avatar class="my-3" size="32" rounded="0">
                                                        <v-img :src="item.avatar"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col cols="11">
                                                    <v-card-title>
                                                        <nuxt-link class="title" :to="`/qa/${item.id}`">{{
                                                            truncateLatestTitle(item.title)
                                                        }}</nuxt-link>
                                                    </v-card-title>

                                                    <v-card-subtitle>
                                                        <v-row>
                                                            <v-col cols="6" class="owner-container">
                                                                By: {{ truncateFullName(getFullName(item.first_name,
                                                                    item.last_name)) }}
                                                            </v-col>
                                                            <v-col cols="6" class="subdate-container">
                                                                <v-icon size="12">mdi-calendar</v-icon>
                                                                {{ $moment(item.subdate).format('MMM DD') }}
                                                            </v-col>

                                                        </v-row>
                                                    </v-card-subtitle>

                                                </v-col>


                                            </v-row>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="6" md="6">
                                        <h4 class="section-title">Last Uploaded File</h4>
                                        <v-card class="latest-card" flat v-for="item in papers.slice(0, 3)">
                                            <v-row>
                                                <v-col cols="1">
                                                    <v-avatar class="my-3" size="32" rounded="0">
                                                        <v-img :src="item.avatar"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col cols="11">
                                                    <v-card-title>
                                                        <nuxt-link class="title" :to="`paper/${item.id}`">{{
                                                            truncateLatestTitle(item.title) }}</nuxt-link>
                                                    </v-card-title>

                                                    <v-card-subtitle>
                                                        <v-row>
                                                            <v-col cols="6" class="owner-container">
                                                                By: {{ truncateFullName(getFullName(item.first_name,
                                                                    item.last_name)) }}
                                                            </v-col>
                                                            <v-col cols="6" class="subdate-container">
                                                                <v-icon size="12">mdi-calendar</v-icon>
                                                                {{ $moment(item.subdate).format('MMM DD') }}
                                                            </v-col>

                                                        </v-row>
                                                    </v-card-subtitle>

                                                </v-col>


                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'grade-explorer-component',
    props: {
        stats: {
            default: []
        }

    },
    data() {
        return {
            statsSlideVal: 6,
            gradeColors: [
                '#2093BF',
                '#20BFA2',
                '#98CA57',
                '#DADB42',
                '#FCE300',
                '#FCE300',
                '#FEAA47',
                '#FFA99F',
                '#FE68B2',
                '#CF1E93',
                '#A10492',
                '#656565',
                '#C3C1C1'
            ],
            gradeSizes: [
                {
                    width: 60,
                    height: 28,
                    fontSize: 10
                },
                {
                    width: 68,
                    height: 38,
                    fontSize: 12
                },
                {
                    width: 76,
                    height: 48,
                    fontSize: 14
                },
                {
                    width: 84,
                    height: 56.6,
                    fontSize: 16
                },
                {
                    width: 92,
                    height: 66,
                    fontSize: 18
                },
                {
                    width: 161,
                    height: 75,
                    fontSize: 28
                },
                {
                    width: 92,
                    height: 66,
                    fontSize: 18
                },
                {
                    width: 84,
                    height: 56.6,
                    fontSize: 16
                },
                {
                    width: 76,
                    height: 48,
                    fontSize: 14
                },
                {
                    width: 68,
                    height: 38,
                    fontSize: 12
                },
                {
                    width: 60,
                    height: 28,
                    fontSize: 10
                },
                {
                    width: 52,
                    height: 18,
                    fontSize: 8
                },
            ],
            touchStartY: 0,
            questions: [],
            papers: [],
            intervalId: null,
            isDragging: false,
            deltaY: 0

        }

    },
    methods: {

        shouldDisplayButton(index) {
            // Determine whether to display the button based on screen size and specific indexes
            if (this.screenWidth === "xs" || this.screenWidth === "sm") {
                return ![0, 1, 9, 10, 11].includes(index);
            } else {
                return true;
            }
        },

        handleBtnClick(index) {
            const deltaIndex = 5 - index;
            if (deltaIndex > 0) {
                for (let i = 0; i < deltaIndex; i++) {
                    // setTimeout(() => {
                    var pop_color = this.gradeColors.pop();
                    var pop_data = this.stats.pop();
                    this.gradeColors.unshift(pop_color);
                    this.stats.unshift(pop_data);
                    // }, 100 * i + 1)
                }
            } else if (deltaIndex < 0) {
                for (let i = 0; i > deltaIndex; i--) {
                    // setTimeout(() => {
                    var splice_color = this.gradeColors.splice(0, 1);

                    var splice_data = this.stats.splice(0, 1);
                    console.log(splice_data);

                    this.gradeColors.push(...splice_color);
                    this.stats.push(...splice_data);
                    // }, 500 * Math.abs(i) + 1)

                }
            }
            this.stopInterval(); // Clear the interval using the interval ID

        },

        handleMouseDown(event) {
            this.isDragging = true;

            this.stopInterval(); // Clear the interval using the interval ID
            this.touchStartY = event.clientY;
        },

        handleMouseUp(event) {
            this.isDragging = false;
            this.touchStartY = 0;
            this.deltaY = 0;
        },
        handleMouseMove(event) {
            if (!this.isDragging) return;



            // Calculate the distance traveled during the touch move
            if (Math.abs(this.deltaY) > 8) {
                this.touchStartY = event.clientY;
            }
            this.deltaY = event.clientY - this.touchStartY;
            console.log(this.deltaY);

            // Based on the distance, determine the drag direction
            if (this.deltaY > 0) {
                // User dragged to the bottom
                if (Math.abs(this.deltaY) == 8) {
                    var pop_color = this.gradeColors.pop();
                    var pop_data = this.stats.pop();
                    this.gradeColors.unshift(pop_color);
                    this.stats.unshift(pop_data);
                    
                }

            } else if (this.deltaY < 0) {
                // User dragged to the top
                if (Math.abs(this.deltaY)==5) {
                    var splice_color = this.gradeColors.splice(0, 1);

                    var splice_data = this.stats.splice(0, 1);
                    console.log(splice_data);

                    this.gradeColors.push(...splice_color);
                    this.stats.push(...splice_data);
                   
                }
            }
        },


        handleTouchStart(event) {
            this.stopInterval(); // Clear the interval using the interval ID
            this.touchStartY = event.touches[0].clientY;
        },

        handleTouchEnd(event) {
            // Calculate the distance traveled during the touch move
            const deltaY = event.changedTouches[0].clientY - this.touchStartY;
            console.log(deltaY);

            // Based on the distance, determine the drag direction
            if (deltaY > 0) {
                // User dragged to the bottom
                console.log('Dragged to the bottom');
                var pop_color = this.gradeColors.pop();
                var pop_data = this.stats.pop();
                this.gradeColors.unshift(pop_color);
                this.stats.unshift(pop_data);
            } else if (deltaY < 0) {
                // User dragged to the top
                console.log('Dragged to the to top');
                var splice_color = this.gradeColors.splice(0, 1);
                var splice_data = this.stats.splice(0, 1);
                this.gradeColors.push(...splice_color);
                this.stats.push(...splice_data);
            }


            this.touchStartY = 0;
        },

        handleAutoCycle() {
            this.intervalId = setInterval(() => {
                var splice_color = this.gradeColors.splice(0, 1);

                var splice_data = this.stats.splice(0, 1);

                this.gradeColors.push(...splice_color);
                this.stats.push(...splice_data);
            }, 6000);
        },

        stopInterval() {
            clearInterval(this.intervalId); // Clear the interval using the interval ID
        },


        async getQuestions() {
            await this.$axios.$get('/api/v1/home/questions')
                .then(res => {
                    this.questions = res.data;
                }).catch(err => {
                    console.log(err);
                });
        },

        async getPapers() {
            await this.$axios.$get('/api/v1/home/tests')
                .then(res => {
                    this.papers = res.data;
                }).catch(err => {
                    console.log(err);
                });
        },

        truncateFullName(fullName) {
            return fullName.length > 10 ? fullName.slice(0, 10) + '...' : fullName;
        },

        truncateLatestTitle(title) {
            return title.length > 38 ? title.slice(0, 38) + '...' : title;
        },
        getFullName(firstName, lastName) {
            return `${firstName} ${lastName}`
        }
    },








    mounted() {
        this.handleAutoCycle();
        this.getQuestions();
        this.getPapers();
    },
    beforeDestroy() {
        this.stopInterval();// Stop the interval when the component is about to be unmounted
    }
};



</script>

<style>
#content-stats-container {
    .v-btn {
        text-transform: unset !important;
        font-weight: 500;


    }

    #stats-handler {
        position: relative;


        .active {
            position: absolute;
            right: -3rem;
            font-weight: 750;
            z-index: 2;
        }

        .rounded-pill {
            border-radius: 10rem;
        }

        .rounded-s-xl {
            border-radius: 10rem 0 0rem 10rem;
        }
    }

    #stats-details {
        height: 14.6rem;

        .label {
            padding-left: 1rem;
            text-decoration: none;
            font-family: 'Helvetica Neue LT Std Bold';
            color: #424A53;
            font-size: 2rem;
            font-style: normal;
            display: inline-block;
            font-weight: 750;
            line-height: 2rem;
        }

        .stat {
            padding-left: 3rem;
            color: #6E7781;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 300;
            line-height: 4.4rem;
            /* 244.444% */
        }
    }


    .section-title {
        color: #6E7781;
        font-family: Helvetica Neue LT Std Bold;
        font-size: 2rem;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    .latest-card {
        .v-card-title {
            .title {
                color: #6E7781;
                text-decoration: none;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 500;
                line-height: 2rem;
            }
        }



        .v-img__img {
            border-radius: 10rem;
        }


        .v-card-subtitle {


            .owner-container {
                text-align: left;
                color: #AFB8C1;
                font-size: 0.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: 2rem;
            }

            .subdate-container {
                text-align: right !important;
                color: #6E7781;
                font-size: 0.8;
                font-style: normal;
                font-weight: 300;
                line-height: 2rem;
            }
        }
    }





}
</style>
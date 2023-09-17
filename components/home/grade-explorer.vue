<template>
    <v-container id="content-stats-container">

        <v-card flat>
            <v-card-text>
                <v-row>
                    <v-col cols="2" sm="2" class="px-0">
                        <v-sheet class="text-right" id="stats-handler" ref="statsHandler">
                            <div v-for="(item, index) in stats" :key="index" @touchstart="handleTouchStart(index)"
                                @touchend="handleTouchEnd(index)" @touchmove="handleTouchMove" @mousemove="handleMouseMove"
                                @mousedown="handleMouseDown(index)" @mouseup="handleMouseUp(index)" :ref="`handler${index}`"
                                class="grade-btn">
                                <v-btn @click="handleBtnClick(index)" class="my-0  white--text" :class="[index == 5 ? 'rounded-pill active' : 'rounded-s-xl',
                                currentIndex == index ? 'handlerShadow' : ''
                                ]" v-if="shouldDisplayButton(index)" :color="gradeColors[index]"
                                    :style="`font-size:${gradeSizes[index].fontSize}px;width:${gradeSizes[index].width}px!important;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             min-width:${gradeSizes[index].width}px!important;height:${gradeSizes[index].height}px`">
                                    {{ gradeHandlerTitle(item.base_title) }}
                                </v-btn>
                                <div v-if="index == 5"
                                    :style="`height:${gradeSizes[index].height}px;width:${gradeSizes[index].width}px`" />

                            </div>
                        </v-sheet>

                    </v-col>
                    <v-col cols="10" sm="10" class="pl-0">
                        <v-card id="grade-details-card">
                            <div>
                                <v-row class="stats-details d-none d-lg-flex">
                                    <v-col lg="6" class="pb-0 pb-sm-6">
                                        <span class="stat-icon icon-paper"></span>
                                        <nuxt-link
                                            :to="`/search?type=test&section=${stats[5].section}&base=${stats[5].base}`"
                                            class="label">
                                            Paper
                                        </nuxt-link>
                                        <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                        <div class="stat">+{{ stats[5].tests | numberFormat }}</div>
                                    </v-col>
                                    <v-col lg="6" class="pb-0 pb-sm-6">
                                        <span class="stat-icon icon-multimedia"></span>
                                        <nuxt-link
                                            :to="`/search?type=learnfiles&section=${stats[5].section}&base=${stats[5].base}`"
                                            class="label">
                                            Multimedia
                                        </nuxt-link>
                                        <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                        <div class="stat">+{{ stats[5].files | numberFormat }}</div>
                                    </v-col>
                                    <v-col lg="6" class="pb-0 pb-sm-6">
                                        <span class="stat-icon icon-exam"></span>
                                        <nuxt-link
                                            :to="`/search?type=azmoon&section=${stats[5].section}&base=${stats[5].base}`"
                                            class="label">
                                            Exam
                                        </nuxt-link>
                                        <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                        <div class="stat">+{{ stats[5].exams | numberFormat }}</div>

                                    </v-col>
                                    <v-col lg="6" class="pb-0 pb-sm-6">
                                        <span class="stat-icon icon-q-a"></span>
                                        <nuxt-link
                                            :to="`/search?type=question&section=${stats[5].section}&base=${stats[5].base}`"
                                            class="label">
                                            Q & A
                                        </nuxt-link>
                                        <v-icon size="20" color="#D0D7DE">mdi-chevron-right</v-icon>
                                        <div class="stat">+{{ stats[5].questions | numberFormat }}</div>
                                    </v-col>
                                </v-row>


                                <v-row class="stats-details d-flex d-lg-none">
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="7" class="py-0">
                                                <span class="stat-icon icon-paper"></span>
                                                <nuxt-link
                                                    :to="`/search?type=test&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Paper
                                                </nuxt-link>
                                                <div class="date-holder ">{{
                                                    $moment(stats[5].last_update).format('MMM,DD YYYY') }}</div>
                                            </v-col>
                                            <v-col cols="5" class="text-right pt-0">
                                                <span class="stat">+{{ stats[5].tests | numberFormat }}</span>
                                                <v-icon size="20" class="pl-sm-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                            <v-col cols="12" class="pt-0">
                                                <v-divider />
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="7" class="py-0">
                                                <span class="stat-icon icon-multimedia"></span>
                                                <nuxt-link
                                                    :to="`/search?type=learnfiles&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Multimedia
                                                </nuxt-link>
                                                <div class="date-holder pb-0"> {{
                                                    $moment(stats[5].last_update).format('MMM,DD YYYY') }}</div>
                                            </v-col>
                                            <v-col cols="5" class="text-right pt-0">
                                                <span class="stat">+{{ stats[5].files | numberFormat }}</span>
                                                <v-icon size="20" class="pl-sm-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                            <v-col cols="12" class="pt-0">
                                                <v-divider />
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="7" class="py-0">
                                                <span class="stat-icon icon-exam"></span>
                                                <nuxt-link
                                                    :to="`/search?type=azmoon&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Exam
                                                </nuxt-link>
                                                <div class="date-holder pb-0"> {{
                                                    $moment(stats[5].last_update).format('MMM,DD YYYY') }}</div>
                                            </v-col>
                                            <v-col cols="5" class="text-right pt-0">
                                                <span class="stat">+{{ stats[5].exams | numberFormat }}</span>
                                                <v-icon size="20" class="pl-sm-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                            <v-col cols="12" class="pt-0">
                                                <v-divider />
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col cols="7" class="py-0 ">
                                                <span class="stat-icon icon-q-a"></span>
                                                <nuxt-link
                                                    :to="`/search?type=question&section=${stats[5].section}&base=${stats[5].base}`"
                                                    class="label">
                                                    Q & A
                                                </nuxt-link>
                                                <div class="date-holder"> {{
                                                    $moment(stats[5].last_update).format('MMM,DD YYYY') }}</div>
                                            </v-col>
                                            <v-col cols="5" class="text-right pt-0">
                                                <span class="stat">+{{ stats[5].questions | numberFormat }}</span>
                                                <v-icon size="20" class="pl-sm-4" color="#D0D7DE">mdi-chevron-right</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            <v-divider class="d-none d-lg-block" style="margin-top: 94px;margin-bottom: 9px;" />


                            <div class="d-none d-lg-block">
                                <v-row>
                                    <v-col cols="6" md="6">
                                        <h4 class="section-title">Last questions</h4>
                                        <v-card class="latest-card" flat v-for="item in questions.slice(0, 3)"
                                            :key="item.id">
                                            <v-row>
                                                <v-col cols="1">
                                                    <v-avatar class="my-3" size="32" rounded="0">
                                                        <v-img :src="item.avatar"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col cols="11">
                                                    <v-card-title>
                                                        <nuxt-link class="title" :to="`/qa/${item.id}`">
                                                            <span v-html="truncateLatestTitle(item.title)"></span>
                                                        </nuxt-link>
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
                                        <v-card class="latest-card" flat v-for="item in papers.slice(0, 3)" :key="item.id">
                                            <v-row>
                                                <v-col cols="1">
                                                    <v-avatar class="my-3" size="32" rounded="0">
                                                        <v-img :src="item.avatar"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col cols="11">
                                                    <v-card-title>
                                                        <nuxt-link class="title" :to="`papers/${item.id}`">
                                                            <span v-html="truncateLatestTitle(item.title)"></span>
                                                        </nuxt-link>
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
                            </div>
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
                    width: 32,
                    height: 32,
                    fontSize: 10
                },
                {
                    width: 32,
                    height: 36,
                    fontSize: 12
                },
                {
                    width: 32,
                    height: 36,
                    fontSize: 14
                },
                {
                    width: 36,
                    height: 40,
                    fontSize: 14
                },

                {
                    width: 40,
                    height: 44,
                    fontSize: 16
                },
                {
                    width: 77,
                    height: 52,
                    fontSize: 22
                },
                {
                    width: 40,
                    height: 40,
                    fontSize: 14
                },
                {
                    width: 36,
                    height: 36,
                    fontSize: 12
                },
                {
                    width: 32,
                    height: 32,
                    fontSize: 10
                },
                {
                    width: 24,
                    height: 24,
                    fontSize: 8
                },
                {
                    width: 20,
                    height: 20,
                    fontSize: 7
                },
                {
                    width: 52,
                    height: 18,
                    fontSize: 8
                }
            ],
            gradeSizesXs: [
                {
                    width: 32,
                    height: 32,
                    fontSize: 10
                },
                {
                    width: 32,
                    height: 36,
                    fontSize: 12
                },
                {
                    width: 32,
                    height: 36,
                    fontSize: 14
                },
                {
                    width: 36,
                    height: 40,
                    fontSize: 14
                },

                {
                    width: 40,
                    height: 44,
                    fontSize: 16
                },
                {
                    width: 77,
                    height: 52,
                    fontSize: 22
                },
                {
                    width: 40,
                    height: 40,
                    fontSize: 14
                },
                {
                    width: 36,
                    height: 36,
                    fontSize: 12
                },
                {
                    width: 32,
                    height: 32,
                    fontSize: 10
                },
                {
                    width: 24,
                    height: 24,
                    fontSize: 8
                },
                {
                    width: 20,
                    height: 20,
                    fontSize: 7
                },
                {
                    width: 52,
                    height: 18,
                    fontSize: 8
                }
            ],
            gradeSizesSm: [
                {
                    width: 24,
                    height: 24,
                    fontSize: 10
                },
                {
                    width: 28,
                    height: 32,
                    fontSize: 10
                },
                {
                    width: 32,
                    height: 36,
                    fontSize: 12
                },
                {
                    width: 36,
                    height: 40,
                    fontSize: 14
                },
                {
                    width: 40,
                    height: 44,
                    fontSize: 16
                },
                {
                    width: 85,
                    height: 52,
                    fontSize: 22
                },
                {
                    width: 44,
                    height: 44,
                    fontSize: 16
                },
                {
                    width: 40,
                    height: 40,
                    fontSize: 14
                },
                {
                    width: 36,
                    height: 36,
                    fontSize: 12
                },
                {
                    width: 32,
                    height: 32,
                    fontSize: 10
                },
                {
                    width: 24,
                    height: 24,
                    fontSize: 8
                },
                {
                    width: 20,
                    height: 20,
                    fontSize: 6
                },
            ],
            gradeSizesMd: [
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
                }
            ],
            gradeSizesLg: [
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
                }
            ],
            gradeSizesXl: [
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
                }
            ],
            questions: [],
            papers: [],
            intervalId: null,

            startIndex: -1,
            currentIndex: -1,
            isMouseDown: false,
            easeSlide: ''

        }

    },
    methods: {
        shouldDisplayButton(index) {
            // Determine whether to display the button based on screen size and specific indexes
            if (this.$vuetify.breakpoint.xs) {
                return ![0, 1, 11].includes(index);
            } else {
                return true;
            }
        },
        handleBtnClick(index) {
            this.stopInterval(); // Clear the interval using the interval ID

            const deltaIndex = 5 - index;
            if (deltaIndex > 0) {
                for (let i = 0; i < deltaIndex; i++) {
                    setTimeout(() => {
                        this.currentIndex = index + i + 1;
                        var pop_color = this.gradeColors.pop();
                        var pop_data = this.stats.pop();
                        this.gradeColors.unshift(pop_color);
                        this.stats.unshift(pop_data);
                    }, 200 * i + 1)
                }
            } else if (deltaIndex < 0) {
                for (let i = 0; i > deltaIndex; i--) {
                    setTimeout(() => {
                        this.currentIndex = index + i - 1;
                        var splice_color = this.gradeColors.splice(0, 1);

                        var splice_data = this.stats.splice(0, 1);

                        this.gradeColors.push(...splice_color);
                        this.stats.push(...splice_data);
                    }, 200 * Math.abs(i) + 1)

                }
            }


        },


        handleMouseDown(index) {
            this.isMouseDown = true;
            this.startIndex = index;
            // event.preventDefault();
            // this.stopInterval(); // Clear the interval using the interval ID
        },
        handleMouseUp(event) {
            this.isMouseDown = false;
            this.startIndex = -1;
            this.currentIndex = -1;
        },
        handleMouseMove(event) {
            if (this.isMouseDown) {
                this.stopInterval();
                event.preventDefault();

                // Get the touch coordinates
                const touchX = event.clientX;
                const touchY = event.clientY;

                // Loop through the buttons and check if the touch is over a button
                for (let index = 0; index < this.stats.length; index++) {
                    const buttonRef = this.$refs[`handler${index}`][0];
                    const rect = buttonRef.getBoundingClientRect();

                    if (
                        touchX >= rect.left &&
                        touchX <= rect.right &&
                        touchY >= rect.top &&
                        touchY <= rect.bottom
                    ) {
                        this.currentIndex = index;

                        // Set the index of the touched button
                        if (index > this.startIndex) {
                            var pop_color = this.gradeColors.pop();
                            var pop_data = this.stats.pop();
                            this.gradeColors.unshift(pop_color);
                            this.stats.unshift(pop_data);
                        } else if (index < this.startIndex) {
                            var splice_color = this.gradeColors.splice(0, 1);

                            var splice_data = this.stats.splice(0, 1);

                            this.gradeColors.push(...splice_color);
                            this.stats.push(...splice_data);
                        }


                        this.startIndex = index;
                        return; // Stop checking once a button is found
                    }
                }

                // Reset the touchIndex if the touch is not over any button
                this.startIndex = -1;
            }
        },





        handleTouchStart(index) {
            this.startIndex = index;
            // this.stopInterval(); // Clear the interval using the interval ID
            // this.touchStartY = event.touches[0].clientY;


        },


        handleTouchEnd(event) {
            this.startIndex = -1;
            this.currentIndex = -1;
            // this.touchStartY = 0;

        },

        handleTouchMove(event) {
            this.stopInterval();
            event.preventDefault();

            // Get the touch coordinates
            const touchX = event.touches[0].clientX;
            const touchY = event.touches[0].clientY;

            // Loop through the buttons and check if the touch is over a button
            for (let index = 0; index < this.stats.length; index++) {
                const buttonRef = this.$refs[`handler${index}`][0];
                const rect = buttonRef.getBoundingClientRect();

                if (
                    touchX >= rect.left &&
                    touchX <= rect.right &&
                    touchY >= rect.top &&
                    touchY <= rect.bottom
                ) {
                    this.currentIndex = index;

                    // Set the index of the touched button
                    if (index > this.startIndex) {
                        var pop_color = this.gradeColors.pop();
                        var pop_data = this.stats.pop();
                        this.gradeColors.unshift(pop_color);
                        this.stats.unshift(pop_data);
                    } else if (index < this.startIndex) {
                        console.log(index);
                        var splice_color = this.gradeColors.splice(0, 1);

                        var splice_data = this.stats.splice(0, 1);

                        this.gradeColors.push(...splice_color);
                        this.stats.push(...splice_data);
                    }

                    this.startIndex = index;
                    return; // Stop checking once a button is found
                }
            }

            // Reset the touchIndex if the touch is not over any button
            this.startIndex = -1;
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
            var cutLength = window.innerWidth < 1330 ? 32 : 38;
            return title.length > cutLength ? title.slice(0, cutLength) + '...' : title;
        },
        getFullName(firstName, lastName) {
            return `${firstName} ${lastName}`
        },
        gradeHandlerTitle(title) {
            if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md)
                return title.replace(" Grade", "");
            else
                return title;
        }
    },
    computed: {
        // gradeSizes() {
        //     if (this.$vuetify.breakpoint.xs)
        //         return this.gradeSizesXs;
        //     else if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md)
        //         return this.gradeSizesSm;
        //     else
        //         return this.gradeSizesLg;
        // }

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
#content-stats-container .v-btn {
    text-transform: unset !important;

    .v-btn__content {
        font-family: Inter-Regular !important;
        font-weight: 500 !important;
    }


}

#content-stats-container #stats-handler {
    position: relative;
    top: 1.2rem;
}



#content-stats-container #stats-handler .active {
    position: absolute;
    right: -1.6rem;
    font-weight: 750;
    z-index: 2;
}

#content-stats-container #stats-handler .rounded-pill {
    border-radius: 10rem;
}

#content-stats-container #stats-handler .rounded-s-xl {
    border-radius: 10rem 0 0rem 10rem;
}



#content-stats-container #grade-details-card {
    height: 35rem;
    padding: 1.6rem;
    border-radius: 0rem 2rem 2rem 0rem;
}

#content-stats-container #grade-details-card .v-card__text {
    padding: 3rem !important;
}




#content-stats-container #grade-details-card .stats-details {
    height: 28.4rem;
}

#content-stats-container #grade-details-card .label {
    text-decoration: none;
    color: #424A53;
    text-align: center;
    font-family: Inter-Bold;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

#content-stats-container #grade-details-card .date-holder {
    margin-left: 2.4rem;
    color: #6E7781;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 3.8rem;
}

#content-stats-container #grade-details-card .stat {
    color: #6E7781;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: 4.4rem;
}


#content-stats-container #grade-details-card .stat-icon {
    color: #FFB300 !important;
    font-size: 2rem;
}



#content-stats-container #grade-details-card .section-title {
    color: #6E7781;
    font-family: "Inter-Bold";
    font-size: 2rem;
    font-style: normal;
    font-weight: 750;
    line-height: 4.4rem;
}

#content-stats-container #grade-details-card .latest-card .v-card-title .title {
    color: #6E7781;
    text-decoration: none;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
}




#content-stats-container #grade-details-card .latest-card .v-img__img {
    border-radius: 10rem;
}





#content-stats-container {
    #grade-details-card {
        .latest-card {
            .v-card__subtitle {
                .owner-container {
                    text-align: left;
                    color: #AFB8C1;
                    font-size: 1.2rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 2rem;
                    padding-bottom: 0rem;
                    padding-top: 0rem;
                }

                .subdate-container {
                    text-align: right !important;
                    color: #6E7781;
                    font-size: 1.2rem;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 2rem;
                    margin-bottom: 0;
                    padding-bottom: 0;
                    padding-top: 0;

                }
            }
        }
    }
}

#content-stats-container .handlerShadow {
    box-shadow: rgba(0, 0, 0, 0.85) 0px 54px 55px, rgba(0, 0, 0, 0.85) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}


#content-stats-container .depth1 {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 54px 55px;
}

#content-stats-container .depth2 {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 54px 55px;
}

#content-stats-container .depth3 {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 54px 55px;
}

#content-stats-container .depth4 {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px, rgba(0, 0, 0, 0.85) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#content-stats-container .depth5 {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 54px 55px, rgba(0, 0, 0, 0.4) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#content-stats-container .depth7 {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 54px 55px;
}




@media (min-width: 600px) {

    #content-stats-container {
        max-width: 90%;
    }

    #content-stats-container .v-btn {
        color: #FFF;
        font-family: "Inter-Regular";
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 4.4rem;
    }

    #content-stats-container #stats-handler {
        top: 0;
    }

    #content-stats-container #stats-handler .active {
        right: -2rem;
    }

    #content-stats-container #grade-details-card {
        height: 42.5rem;
        width: 88.8%;
        padding: 3rem;
        border-radius: 0rem 2rem 2rem 0rem;
    }


    #content-stats-container #grade-details-card .stats-details {
        height: 28.4rem;

        .row {
            height: 7.6rem;

            .v-icon.primary--text {
                font-size: 2rem !important;
            }

            .label {
                color: #424A53;
                font-family: Inter-Bold;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
            }

            .stat {
                color: #6E7781;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 4.4rem;

            }

            .date-holder {
                margin-left: 3rem;
                color: #6E7781;
                font-size: 1.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 3.8rem;
            }

            .stat-icon {
                font-size: 2.4rem;
            }
        }
    }


    #content-stats-container #grade-details-card .section-title {
        color: #6E7781;
        font-family: Inter-Bold;
        font-size: 2rem;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    #content-stats-container #grade-details-card .latest-card {
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





@media (min-width: 1264px) {
    #content-stats-container {


        #stats-handler {
            top: 0;

            .active {
                right: -2rem;
            }
        }

        #grade-details-card {
            height: 56.6rem;
            padding: 5rem;
            border-radius: 0rem 2rem 2rem 0rem;

            .stats-details {
                height: 14.6rem;

                .label {
                    color: #424A53;
                    font-family: Inter-Bold;
                    font-size: 1.8rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                }

                .date-holder {
                    margin-left: 3rem;
                    color: #6E7781;
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 4.4rem;
                }

                .stat-icon {
                    font-size: 3.2rem;
                }

                .stat {
                    color: #6e7781;
                    font-size: 1.8rem;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 4.4rem;
                    padding-left: 3rem;
                }
            }

        }


    }
}
</style>
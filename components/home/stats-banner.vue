<template>
    <v-container fluid id="stats-container">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2 class="gama-text-h4">The best are here.</h2>
                    <v-row>
                        <v-col cols="6" sm="4" md="2" v-for="(item,index) in stats" 
                        :key="index" class="text-center">
                            <span :class="item.icon" class="item-icon" ></span>
                            <div class="item-stat">
                                +{{ item.stat | numberFormat }}
                            </div>
                            <div class="item-title">
                                {{ item.title }}
                            </div>
                        </v-col>
                    </v-row>
                    <p class="describe">
                        These are professional numbers
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script >
export default {
    name: "stats-banner",
    data() {
        return {
            stats: [
                {
                    icon: 'icon-school',
                    stat: '130000',
                    title: 'Schools'
                },
                {
                    icon: 'icon-teacher',
                    stat: '500000',
                    title: 'Teacher'
                },
                {
                    icon: 'icon-student',
                    stat: '3000000',
                    title: 'Student'
                },
                {
                    icon: 'icon-exam',
                    stat: '7000',
                    title: 'Exam'
                },
                {
                    icon: 'icon-q-a',
                    stat: '60000',
                    title: 'Q&A'
                },
                {
                    icon: 'icon-multimedia',
                    stat: '37000',
                    title: 'Multimedia'
                },
            ]
        }
    }
}
</script>

<style>
#stats-container {
    padding: 4.8rem 0 4.8rem 0;
    background: #24292F;
    color: #FFFFFF;
    text-align: center;

    .gama-text-h4 {
        color: #F3F3FB;
        margin-bottom: 4.4rem;
    }

    .describe {
        color: #F3F3FB;
        opacity: 0.30000001192092896;
        font-family: 'Inter-Meduim';
        font-size: 2.2rem;
        margin-top: 3.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 4.4rem;
    }

    .item-icon{
        font-size: 4.8rem;
        color: #ffb600;
    }

    .item-stat {
        color: #FFF;
        font-family: 'Inter-Meduim';
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 750;
        line-height: 4.4rem;
    }

    .item-title {
        color: #FFF;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 300;
        line-height: 2.4rem;
    }
}
</style>
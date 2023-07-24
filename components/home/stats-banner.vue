<template>
    <v-container fluid id="stats-container">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2 class="title">The best are here.</h2>
                    <v-row>
                        <v-col cols="6" sm="4" md="2" v-for="item in stats" class="text-center">
                            <v-icon color="primary" size="48">
                                {{ item.icon }}
                            </v-icon>
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
    name: "stats=banner",
    data() {
        return {
            stats: [
                {
                    icon: 'mdi-town-hall',
                    stat: '130000',
                    title: 'Schools'
                },
                {
                    icon: 'mdi-human-male-board',
                    stat: '500000',
                    title: 'Teacher'
                },
                {
                    icon: 'mdi-account-school',
                    stat: '3000000',
                    title: 'Student'
                },
                {
                    icon: 'mdi-text-box-edit',
                    stat: '7000',
                    title: 'Exam'
                },
                {
                    icon: 'mdi-forum',
                    stat: '60000',
                    title: 'Answer & Question'
                },
                {
                    icon: 'mdi-multimedia',
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
    background: #24292F;
    color: #FFFFFF;
    text-align: center;

    .title {
        color: #F3F3FB;
        font-size: 2.8rem!important;
        font-family: 'Helvetica Neue LT Std Bold';
        font-style: normal;
        font-weight: 750;
        line-height: 2.75rem;
        margin-bottom: 4.4rem;
    }

    .describe {
        color: #F3F3FB;
        opacity: 0.30000001192092896;
        font-family: 'Helvetica Neue LT Std Md';
        font-size: 2.2rem;
        margin-top: 3.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 4.4rem;
    }

    .item-stat {
        color: #FFF;
        font-family: 'Helvetica Neue LT Std Md';
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
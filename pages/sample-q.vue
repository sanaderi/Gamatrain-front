<template>
    <div>
        <category />

        <!-- Start : sample-q -->
        <section class="sample-q">
            <v-container>
                <v-row>
                    <v-col lg="3">
                        <div class="sample-filter">
                            <v-expansion-panels v-for="item in sampleFilters" :key="item.value">
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="filter-title">
                                        {{ item.filterTitle }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="filter-content ">
                                        {{ item.filterContent }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-divider class="filter-divider my-2"></v-divider>
                            </v-expansion-panels>
                            <div v-for="item in switchs" :key="item.value"
                                class="filter-switchs d-flex justify-space-between w-100 ">
                                <p class="switch-title mb-0">{{ item.switchTitle }}</p>
                                <v-switch class="mt-0 pt-0"></v-switch>
                            </div>
                        </div>
                    </v-col>
                    <v-col lg="9">
                        <div class="sample-q-content">
                            <v-breadcrumbs :items="breadcrumbs" class="sample-q-breadcrumb">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                            <v-card>
                                <v-tabs dark background-color="teal darken-3">
                                    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                                    <nuxt-link to="lesson" v-for="i in 30" :key="i" :href="'#tab-' + i">
                                        Item {{ i }}
                                    </nuxt-link>
                                </v-tabs>
                            </v-card>
                            <div class="sample-q-bar my-3">
                                <v-app-bar class="app-bar" elevation="0" rounded>
                                    <div class="d-flex w-100 align-center ">
                                        <i class="fa-solid fa-list"></i>
                                        <v-badge bordered class="pa-1 mx-10" content="35000">
                                            <nuxt-link to="" class="nav-link nav-link1">
                                                Sample Exam
                                                <span class="'icon icong-test"></span>
                                            </nuxt-link>
                                        </v-badge>
                                        <v-badge bordered class="pa-1 mx-auto" content="1258" color="#2E7D32">
                                            <nuxt-link to="" class="nav-link">
                                                Training Content
                                            </nuxt-link>
                                        </v-badge>
                                        <v-badge bordered class="pa-1 mx-auto" content="21260" color="#BF360C">
                                            <nuxt-link to="" class="nav-link">
                                                Q & A
                                            </nuxt-link>
                                        </v-badge>
                                        <v-badge bordered class="pa-1 mx-auto" content="1690" color="#5600E8">
                                            <nuxt-link to="" class="nav-link">
                                                online Exam
                                            </nuxt-link>
                                        </v-badge>
                                        <v-badge bordered class="pa-1 mx-auto" content="169" color="#BD081C">
                                            <nuxt-link to="" class="nav-link">
                                                tutorial
                                            </nuxt-link>
                                        </v-badge>
                                        <v-badge bordered class="pa-1 mx-auto" content="2810" color="#8E24AA">
                                            <nuxt-link to="" class="nav-link">
                                                Teacher
                                            </nuxt-link>
                                        </v-badge>
                                    </div>
                                </v-app-bar>
                            </div>
                            <div class="sample-q-items ">
                                <div class="sample-q-item pa-6" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col lg="2">
                                            <div class="item-img">
                                                <img :src="require('assets/images/' + item.itemImg)" alt="">
                                            </div>
                                        </v-col>
                                        <v-col lg="8">
                                            <div class="sample-item-content d-flex flex-column justify-space-between">
                                                <p class="item-content-title">
                                                    {{ item.title }}
                                                </p>
                                                <p class="item-content-subtitle">
                                                    {{ item.subtitle }}
                                                </p>
                                                <div class="item-content-tags d-flex">
                                                    <div class="item-content-tag " v-for="item in tags">
                                                        {{ item.tag }}</div>
                                                </div>
                                                <div class="item-content-footer d-flex">
                                                    <div class="item-content-user d-flex align-center mr-2">
                                                        <img src="" alt="">
                                                        <p>{{item.user}}</p>
                                                    </div>
                                                    <div class="item-content-file-type d-flex align-center mx-auto">
                                                        <i class="fa-solid fa-folder "></i>
                                                        <p class="mx-2">file type : {{item.type}}</p>
                                                    </div>
                                                    <div class="item-content-view d-flex align-center mx-auto">
                                                        <i class="fa-solid fa-eye"></i>
                                                        <p class="mx-2">view : {{item.view}}</p>
                                                    </div>
                                                    <div class="item-content-last-update d-flex align-center mx-auto">
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                        <p class="mx-2">last update : {{item.update}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col lg="2"></v-col>
                                    </v-row>
                                </div>
                            </div>
                        </div>

                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
<script>
import category from "~/components/common/category.vue";
export default {
    components: { category },
    data() {
        return {
            sampleFilters: [
                {
                    filterTitle: "grade",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Book",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Title",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Sample question type",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
            ],
            switchs: [
                {
                    switchTitle: "Word",
                },
                {
                    switchTitle: "PDF",
                },
                {
                    switchTitle: "With Answer",
                },
                {
                    switchTitle: "Free",
                },
            ],
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Olympiads',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'sample Question',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
            tags: [
                {
                    tag: "Tutorial",
                },
                {
                    tag: "Q & A",
                },
                {
                    tag: "Exam Online",
                },
            ],
            items: [
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
                {
                    itemImg: "book1.png",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    user: "Alireza Davoodi",
                    type:"Arzeshyabi mostamar",
                    view:"15835",
                    update:"3july"
                },
            ]
        }
    }
}
</script>
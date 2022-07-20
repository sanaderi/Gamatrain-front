<template>
    <div>
        <FilterModal />
        <!-- mobile header -->
        <div class="
        d-flex
        align-center
        justify-space-between
        logo-search-content
        mx-5
        d-flex d-sm-none ">
            <div class="pl-2 header-search mobile-res-search my-4">
                <v-btn class="px-0 btn-transparent search-btn-icon">
                    <v-icon class="search-icon">mdi-magnify</v-icon>
                </v-btn>
                <v-divider vertical></v-divider>
                <v-text-field class="py-1 my-0 search-field main-search-icon mr-2 mt-4" placeholder="Search ...">
                </v-text-field>
            </div>
        </div>
        <!-- Start : sample-q -->
        <section class="tutorial">
            <v-container>
                <v-row>
                    <v-col lg="3">
                        <div class="tutorial-filter d-none d-sm-block">
                            <v-expansion-panels v-for="item in sampleFilters" :key="item.value">
                                <v-expansion-panel >
                                    <v-expansion-panel-header class="filter-title">

                                      {{ item.filterTitle }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="filter-content ">
                                        {{ item.filterContent }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-col>
                    <v-col lg="9" md="9" sm="12" class="tutorial-contents">
                        <div class="tutorial-content">
                            <v-breadcrumbs :items="breadcrumbs" class="tutorial-breadcrumb d-none d-md-block">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                            <!-- header desktop -->
                            <v-card class="d-none d-md-block desktop-tutorial-header">
                                <v-tabs>
                                    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                                    <i class="fa-solid fa-list"></i>
                                    <!-- <nuxt-link to="lesson" v-for="i in 6" :key="i" :href="'#tab-' + i">
                                        Item {{ i }}
                                    </nuxt-link> -->
                                    <v-badge bordered class="pa-1 mx-10" content="35000">
                                        <nuxt-link to="sample-q" class="nav-link ">
                                            Sample Exam
                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="1258" color="#2E7D32">
                                        <nuxt-link to="training-content" class="nav-link">
                                            Training Content
                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="21260" color="#BF360C">
                                        <nuxt-link to="q&a" class="nav-link ">
                                            Q & A

                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="1690" color="#5600E8">
                                        <nuxt-link to="online-exam" class="nav-link">
                                            Online Exam
                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="169" color="#BD081C">
                                        <nuxt-link to="tutorial" class="nav-link nav-link1">
                                            Tutorial
                                            <span class="'icon icong-blog"></span>
                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="2810" color="#8E24AA">
                                        <nuxt-link to="teachers" class="nav-link">
                                            Teacher
                                        </nuxt-link>
                                    </v-badge>
                                </v-tabs>
                            </v-card>
                            <!-- header mobile -->
                            <v-card class="d-block d-md-none mobile-tutorial-header">
                                <v-tabs>
                                    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                                    <i class="fa-solid fa-list"></i>

                                    <nuxt-link to="sample-q" class="nav-link ">
                                        Sample Exam
                                    </nuxt-link>


                                    <nuxt-link to="training-content" class="nav-link">
                                        Training Content
                                    </nuxt-link>


                                    <nuxt-link to="q&a" class="nav-link ">
                                        Q & A

                                    </nuxt-link>


                                    <nuxt-link to="online-exam" class="nav-link">
                                        Online Exam
                                    </nuxt-link>


                                    <nuxt-link to="tutorial" class="nav-link nav-link1">
                                        Tutorial
                                        <span class="'icon icong-blog"></span>
                                    </nuxt-link>


                                    <nuxt-link to="teachers" class="nav-link">
                                        Teacher
                                    </nuxt-link>

                                </v-tabs>
                            </v-card>
                            <!-- sample-q-items-desktop -->
                            <div class="tutorial-items tutorial-items-desktop d-none d-lg-block">
                                <div class="tutorial-item pa-6 my-5" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col lg="2">
                                            <div class="item-img">
                                                <nuxt-link :to="`/tutorial-details/${item.id}`">
                                                  <img  :src="require('assets/images/' + item.itemImg)" alt=""
                                                        class="item-image">
                                                </nuxt-link>
                                            </div>
                                        </v-col>
                                        <v-col lg="10">
                                            <div class="tutorial-content d-flex flex-column justify-space-between">
                                                <div class="tutorial-title d-flex justify-space-between">
                                                    <nuxt-link :to="`/tutorial-details/${item.id}`" >
                                                        {{ item.title }}
                                                    </nuxt-link>
                                                </div>
                                                <p class="item-content-subtitle">
                                                    <nuxt-link :to="`/tutorial-details/${item.id}`">
                                                        {{ item.subtitle }}
                                                    </nuxt-link>
                                                </p>
                                                <div class="item-content-tags d-flex">
                                                    <div class="item-content-tag " v-for="item in tags">
                                                        <nuxt-link to="">
                                                            {{ item.tag }}
                                                        </nuxt-link>
                                                    </div>
                                                </div>
                                                <div class="item-content-footer d-flex justify-space-between">
                                                    <div class="d-flex ">
                                                        <div class="item-content-user d-flex align-center mr-2">
                                                            <img :src="require('@/assets/images/' + item.userImg)"
                                                                alt="">
                                                            <p class="mx-2">{{ item.user }}</p>
                                                        </div>

                                                        <div
                                                            class="item-content-last-update d-flex align-center mx-auto">
                                                            <i class="fa-solid fa-calendar-days"></i>
                                                            <p class="mx-2">last update : {{ item.update }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                            <!-- sample-q-items-mobile -->
                            <div class="tutorial-items tutorial-items-mobile d-block d-lg-none">
                                <div class="tutorial-item pa-1 pa-sm-5 my-5" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col cols="3" class="pa-1">
                                            <div class="tutorial-book">
                                                <img :src="require('assets/images/' + item.itemImg)" alt="" width="65"
                                                    height="90">
                                            </div>
                                        </v-col>
                                        <v-col cols="7" class="px-0">
                                            <div class="tutorial-book-contents d-flex flex-column justify-space-between">
                                                <p class="tutorial-book-title px-1">
                                                    <nuxt-link to="">
                                                        {{ item.title }}
                                                    </nuxt-link>
                                                </p>
                                                <div class="item-content-tags d-flex mt-3">
                                                    <div class="item-content-tag" v-for="item in tags">
                                                        <nuxt-link to="">
                                                            <p>
                                                                {{ item.tag }}
                                                            </p>
                                                        </nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <div class="tutorial-item-footer d-flex mt-2">
                                        <div class="item-content-user d-flex align-center mr-2">
                                            <img :src="require('@/assets/images/' + item.userImg)" alt="" width="25">
                                            <p class="mx-2">{{ item.user }}</p>
                                        </div>
                                        <div class="item-content-last-update d-flex align-center mx-auto">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            <p class="mx-2">confirm date : {{ item.update }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>

</template>
<script>
import category from "~/components/common/category.vue";
import Pagination from "~/components/common/pagination.vue";
import FilterModal from "~/components/common/filter-modal.vue";
export default {
    components: { category, Pagination, FilterModal },
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
                    filterTitle: "Base",
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
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3 july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    answers: "14",
                    update: "3july"
                },
            ]
        }
    }
}
</script>

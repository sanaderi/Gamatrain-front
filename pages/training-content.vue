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
        d-flex d-sm-none
      ">
            <div class="pl-2 header-search mobile-res-search my-4">
                <v-btn class="px-0 btn-transparent search-btn-icon">
                    <v-icon class="search-icon">mdi-magnify</v-icon>
                </v-btn>
                <v-divider vertical></v-divider>
                <v-text-field class="py-1 my-0 search-field main-search-icon mr-2 mt-4" placeholder="Search ...">
                </v-text-field>
            </div>
        </div>
        <!-- Start : training -->
        <section class="training-content">
            <v-container>
                <v-row>
                    <v-col lg="3">
                        <div class="training-content-filter d-none d-sm-block">
                            <v-expansion-panels v-for="item in sampleFilters" :key="item.value">
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="filter-title">
                                        {{ item.filterTitle }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="filter-content">
                                        {{ item.filterContent }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-col>
                    <v-col lg="9" md="9" sm="12" class="training-contents">
                        <div class="training-contents">
                            <v-breadcrumbs :items="breadcrumbs" class="training-breadcrumb d-none d-md-block">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                            <!-- header desktop -->
                            <v-card class="d-none d-md-block desktop-training-header">
                                <v-tabs>
                                    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                                    <i class="fa-solid fa-list"></i>
                                    <v-badge bordered class="pa-1 mx-10" content="35000">
                                        <nuxt-link to="sample-q" class="nav-link">
                                            Sample Exam
                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="1258" color="#2E7D32">
                                        <nuxt-link to="training-content" class="nav-link nav-link1">
                                            Training Content
                                            <span class="'icon icong-learnfiles"></span>
                                        </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="21260" color="#BF360C">
                                        <nuxt-link to="" class="nav-link"> Q & A </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="1690" color="#5600E8">
                                        <nuxt-link to="" class="nav-link"> online Exam </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="169" color="#BD081C">
                                        <nuxt-link to="" class="nav-link"> tutorial </nuxt-link>
                                    </v-badge>
                                    <v-badge bordered class="pa-1 mx-auto" content="2810" color="#8E24AA">
                                        <nuxt-link to="" class="nav-link"> Teacher </nuxt-link>
                                    </v-badge>
                                </v-tabs>
                            </v-card>
                            <!-- header mobile -->
                            <v-card class="d-block d-md-none mobile-training-header">
                                <v-tabs>
                                    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                                    <i class="fa-solid fa-list"></i>

                                    <nuxt-link to="sample-q" class="nav-link">
                                        Sample Exam
                                    </nuxt-link>

                                    <nuxt-link to="training-content" class="nav-link nav-link1">
                                        Training Content
                                        <span class="'icon icong-learnfiles"></span>
                                    </nuxt-link>

                                    <nuxt-link to="" class="nav-link"> Q & A </nuxt-link>

                                    <nuxt-link to="" class="nav-link"> online Exam </nuxt-link>

                                    <nuxt-link to="" class="nav-link"> tutorial </nuxt-link>

                                    <nuxt-link to="" class="nav-link"> Teacher </nuxt-link>
                                </v-tabs>
                            </v-card>
                            <!-- Book Carousel -->
                            <div class="book-carousel my-3">
                                <v-container class="mx-0">
                                    <v-row>
                                        <v-col lg="2" cols="4">
                                            <div class="
                          book-carousel-sub
                          d-flex
                          flex-column
                          align-center
                        ">
                                                <div class="
                            book-carousel-title
                            d-flex
                            flex-column
                            align-center
                          ">
                                                    <h4>Course</h4>
                                                    <p>{{ bookCarousel.carouselName }}</p>
                                                </div>
                                                <div class="carousel-img">
                                                    <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="115"
                                                        max-width="98" :src="
                                                            require('@/assets/images/' +
                                                                bookCarousel.carouselImg)
                                                        " class="books-image"></v-img>
                                                </div>
                                                <div class="book-carousel-q">
                                                    <p>complete courses</p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col lg="10" class="pa-0" cols="8">
                                            <v-sheet class="mx-auto book-carousel-books" elevation="8" max-width="900">
                                                <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                                                    <v-slide-item v-for="book in books" :key="book.value"
                                                        class="mx-2 slide-item mt-6">
                                                        <div>
                                                            <div class="book-body pa-5">
                                                                <img :src="require('@/assets/images/' + book.img)"
                                                                    alt="" class="book-body-image">
                                                                <nuxt-link to="">
                                                                    <h3 class="book-title text-center">{{ book.title }}
                                                                    </h3>
                                                                </nuxt-link>
                                                                <nuxt-link to="">
                                                                    <div
                                                                        class="book-season pa-2 my-2 d-flex justify-space-between align-center">
                                                                        <p class="season-number">{{ book.season }}</p>
                                                                        <p>Season</p>
                                                                    </div>
                                                                </nuxt-link>
                                                                <nuxt-link to="">
                                                                    <div
                                                                        class="book-price  pa-2  my-2 d-flex justify-space-between align-center">
                                                                        <p class="price-number">{{ book.price }}</p>
                                                                        <p>Dollar</p>
                                                                    </div>
                                                                </nuxt-link>

                                                            </div>

                                                        </div>

                                                    </v-slide-item>
                                                </v-slide-group>
                                            </v-sheet>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                            <!-- training-items-desktop -->
                            <div class="training-items training-items-desktop d-none d-lg-block">
                                <div class="training-item pa-6 my-5" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col lg="2">
                                            <div class="item-img">
                                                <img :src="require('assets/images/' + item.itemImg)" alt=""
                                                    class="item-image" />
                                            </div>
                                        </v-col>
                                        <v-col lg="10">
                                            <div class="
                          training-item-content
                          d-flex
                          flex-column
                          justify-space-between
                        ">
                                                <div class="
                            item-content-title
                            d-flex
                            justify-space-between
                          ">
                                                    <p>
                                                        {{ item.title }}
                                                    </p>
                                                    <div class="item-content-title-icon d-flex">
                                                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" class="mx-1">
                                                            <path
                                                                d="M34.375 4.57227H30.125V0.322266H8.875V4.57227H4.625C2.2875 4.57227 0.375 6.48477 0.375 8.82227V10.9473C0.375 16.366 4.455 20.786 9.70375 21.4448C11.0425 24.6323 13.9113 27.0335 17.375 27.7348V34.3223H8.875V38.5723H30.125V34.3223H21.625V27.7348C25.0888 27.0335 27.9575 24.6323 29.2963 21.4448C34.545 20.786 38.625 16.366 38.625 10.9473V8.82227C38.625 6.48477 36.7125 4.57227 34.375 4.57227ZM4.625 10.9473V8.82227H8.875V16.9398C6.41 16.0473 4.625 13.7098 4.625 10.9473ZM34.375 10.9473C34.375 13.7098 32.59 16.0473 30.125 16.9398V8.82227H34.375V10.9473Z"
                                                                fill="#F9A825" />
                                                        </svg>
                                                        <svg width="51" height="52" viewBox="0 0 51 52" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M23.1094 22.5998L19.455 18.9453L17.2014 21.1989L23.1094 27.1069L33.7987 16.4176L31.5452 14.1641L23.1094 22.5998Z"
                                                                fill="#32BA91" />
                                                            <path
                                                                d="M43.0312 20.0723C43.0312 10.3918 35.1836 2.54102 25.5 2.54102C15.8196 2.54102 7.96875 10.3918 7.96875 20.0723C7.96875 26.782 11.7443 32.6071 17.2826 35.554L15.9375 50.3535L25.5 43.9785L35.0625 50.3535L33.7174 35.554C36.5296 34.0627 38.8825 31.8336 40.5234 29.106C42.1643 26.3784 43.0313 23.2554 43.0312 20.0723V20.0723ZM25.5 34.416C17.5775 34.416 11.1562 27.9948 11.1562 20.0723C11.1562 12.1497 17.5775 5.72852 25.5 5.72852C33.4225 5.72852 39.8438 12.1497 39.8438 20.0723C39.8438 27.9948 33.4225 34.416 25.5 34.416Z"
                                                                fill="#32BA91" />
                                                        </svg>
                                                        <svg width="51" height="30" viewBox="0 0 51 30" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M38.2498 3.87516L35.2536 0.878906L21.7811 14.3514L24.7773 17.3477L38.2498 3.87516ZM47.2598 0.878906L24.7773 23.3614L15.8948 14.5002L12.8986 17.4964L24.7773 29.3752L50.2773 3.87516L47.2598 0.878906ZM0.871094 17.4964L12.7498 29.3752L15.7461 26.3789L3.88859 14.5002L0.871094 17.4964Z"
                                                                fill="#EC4949" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div class="item-content-tags d-flex">
                                                    <div class="item-content-tag" v-for="item in tags"
                                                        :key="item.value">
                                                        <nuxt-link to="">
                                                            {{ item.tag }}
                                                        </nuxt-link>
                                                    </div>
                                                </div>
                                                <div class="
                            item-content-footer
                            d-flex
                            justify-space-between
                          ">
                                                    <div class="d-flex">
                                                        <div class="item-content-user d-flex align-center mr-2">
                                                            <img :src="
                                                                require('@/assets/images/' + item.userImg)
                                                            " alt="" />
                                                            <p class="mx-2">{{ item.user }}</p>
                                                        </div>
                                                        <div class="
                                item-content-file-type
                                d-flex
                                align-center
                                mx-auto
                              ">
                                                            <i class="fa-solid fa-folder"></i>
                                                            <p class="mx-2">file type : {{ item.type }}</p>
                                                        </div>

                                                        <div class="
                                item-content-last-update
                                d-flex
                                align-center
                                mx-auto
                              ">
                                                            <i class="fa-solid fa-calendar-days"></i>
                                                            <p class="mx-2">
                                                                last update : {{ item.update }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="item-content-footer-icon d-flex flex-column"></div>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                            <!-- training-items-mobile -->
                            <div class="training-items training-items-mobile d-block d-lg-none">
                                <div class="training-item pa-1 pa-sm-5 my-5" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col cols="3" sm="1" class="pa-1">
                                            <div class="training-book">
                                                <img :src="require('assets/images/' + item.itemImg)" alt="" width="65"
                                                    height="90" />
                                            </div>
                                        </v-col>
                                        <v-col cols="7" sm="8" class="px-0">
                                            <div class="
                          training-book-contents
                          d-flex
                          flex-column
                          justify-space-between
                        ">
                                                <p class="training-book-title px-1">
                                                    <nuxt-link to="">
                                                        {{ item.title }}
                                                    </nuxt-link>
                                                </p>
                                                <div class="item-content-tags d-flex mt-3">
                                                    <div class="item-content-tag" v-for="item in tags"
                                                        :key="item.values">
                                                        <nuxt-link to="">
                                                            <p>
                                                                {{ item.tag }}
                                                            </p>
                                                        </nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="2" sm="3" class="pa-0">
                                            <div class="item-content-cup-icon d-flex align-center">
                                                <svg width="51" height="30" viewBox="0 0 51 30" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M38.2498 3.87516L35.2536 0.878906L21.7811 14.3514L24.7773 17.3477L38.2498 3.87516ZM47.2598 0.878906L24.7773 23.3614L15.8948 14.5002L12.8986 17.4964L24.7773 29.3752L50.2773 3.87516L47.2598 0.878906ZM0.871094 17.4964L12.7498 29.3752L15.7461 26.3789L3.88859 14.5002L0.871094 17.4964Z"
                                                        fill="#EC4949" />
                                                </svg>
                                                <svg width="37" height="25" viewBox="0 0 39 39" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="mx-1">
                                                    <path
                                                        d="M34.375 4.57227H30.125V0.322266H8.875V4.57227H4.625C2.2875 4.57227 0.375 6.48477 0.375 8.82227V10.9473C0.375 16.366 4.455 20.786 9.70375 21.4448C11.0425 24.6323 13.9113 27.0335 17.375 27.7348V34.3223H8.875V38.5723H30.125V34.3223H21.625V27.7348C25.0888 27.0335 27.9575 24.6323 29.2963 21.4448C34.545 20.786 38.625 16.366 38.625 10.9473V8.82227C38.625 6.48477 36.7125 4.57227 34.375 4.57227ZM4.625 10.9473V8.82227H8.875V16.9398C6.41 16.0473 4.625 13.7098 4.625 10.9473ZM34.375 10.9473C34.375 13.7098 32.59 16.0473 30.125 16.9398V8.82227H34.375V10.9473Z"
                                                        fill="#F9A825" />
                                                </svg>
                                                <svg width="52" height="40" viewBox="0 0 51 52" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M23.1094 22.5998L19.455 18.9453L17.2014 21.1989L23.1094 27.1069L33.7987 16.4176L31.5452 14.1641L23.1094 22.5998Z"
                                                        fill="#32BA91" />
                                                    <path
                                                        d="M43.0312 20.0723C43.0312 10.3918 35.1836 2.54102 25.5 2.54102C15.8196 2.54102 7.96875 10.3918 7.96875 20.0723C7.96875 26.782 11.7443 32.6071 17.2826 35.554L15.9375 50.3535L25.5 43.9785L35.0625 50.3535L33.7174 35.554C36.5296 34.0627 38.8825 31.8336 40.5234 29.106C42.1643 26.3784 43.0313 23.2554 43.0312 20.0723V20.0723ZM25.5 34.416C17.5775 34.416 11.1562 27.9948 11.1562 20.0723C11.1562 12.1497 17.5775 5.72852 25.5 5.72852C33.4225 5.72852 39.8438 12.1497 39.8438 20.0723C39.8438 27.9948 33.4225 34.416 25.5 34.416Z"
                                                        fill="#32BA91" />
                                                </svg>
                                            </div>
                                            <div class="item-content-word-pdf-icon d-flex flex-column"></div>
                                        </v-col>
                                    </v-row>
                                    <div class="training-item-footer d-flex mt-2">
                                        <div class="item-content-user d-flex align-center">
                                            <img :src="require('@/assets/images/' + item.userImg)" alt="" width="25" />
                                            <p class="mx-2">{{ item.user }}</p>
                                        </div>
                                        <div class="item-content-file-type d-flex align-center mx-1">
                                            <i class="fa-solid fa-folder"></i>
                                            <p class="mx-2">{{ item.type }}</p>
                                        </div>

                                        <div class="item-content-last-update d-flex align-center mx-1">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            <p class="mx-2">{{ item.update }}</p>
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
            model: null,
            bookCarousel: {
                carouselName: "List",
                carouselImg: "carouselBook.png",
            },
            books: [
                {
                    img: "poster1.jpg",
                    title: "Maths",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book2.png",
                    title: "History",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book3.png",
                    title: "Art",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book4.png",
                    title: "Geography",
                    season: "14",
                    price: "16",
                },
                {
                    img: "poster1.jpg",
                    title: "Maths",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book2.png",
                    title: "Maths",
                    season: "14",
                    price: "16",
                },
                {
                    img: "poster1.jpg",
                    title: "Maths",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book2.png",
                    title: "History",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book3.png",
                    title: "Art",
                    season: "14",
                    price: "16",
                },
                {
                    img: "book4.png",
                    title: "Geography",
                    season: "14",
                    price: "16",
                },

            ],
            sampleFilters: [
                {
                    filterTitle: "grade",
                    filterContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Book",
                    filterContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Title",
                    filterContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Sample question type",
                    filterContent:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
            ],
            //
            breadcrumbs: [
                {
                    text: "Dashboard",
                    disabled: false,
                    href: "breadcrumbs_dashboard",
                },
                {
                    text: "Olympiads",
                    disabled: false,
                    href: "breadcrumbs_link_1",
                },
                {
                    text: "Training-Content",
                    disabled: true,
                    href: "breadcrumbs_link_2",
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

                    title:
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",
                    update: "3 july",
                },
                {
                    itemImg: "book1.jpg",

                    title:
                        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        ". Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    title:
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "PDF",

                    update: "3july",
                },
            ],
        };
    },
};
</script>
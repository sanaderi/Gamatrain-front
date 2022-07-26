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
        <section class="sample-q">
            <v-container>
                <v-row>
                    <v-col lg="3" class="d-none d-sm-block">
                        <div class="sample-filter ">
                            <v-select :items="item" label="Grade" outlined> </v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Book" outlined></v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Title" outlined></v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Sample question" outlined></v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <div v-for="item in switchs" :key="item.value"
                                class="filter-switchs d-flex justify-space-between w-100 ">
                                <p class="switch-title mb-0">{{ item.switchTitle }}</p>
                                <v-switch class="mt-0 pt-0"></v-switch>
                            </div>
                        </div>
                    </v-col>
                    <v-col lg="9" md="9" sm="12" class="sample-q-contents">
                        <div class="sample-q-content">
                            <v-breadcrumbs :items="breadcrumbs" class="sample-q-breadcrumb d-none d-md-block">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                            <!-- header desktop -->
                            <Tabs />
                            <!-- sample-q-items-desktop -->
                            <div class="sample-q-items sample-q-items-desktop d-block">
                                <div class="sample-q-item pa-1 pa-sm-6 my-5" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col lg="2" cols="3">
                                            <div class="item-img">
                                                <img :src="require('assets/images/' + item.itemImg)" alt="">
                                            </div>
                                        </v-col>
                                        <v-col lg="10" cols="9" class="px-0">
                                            <div class="sample-item-content d-flex flex-column justify-space-between">
                                                <div class="item-content-title d-flex justify-space-between">
                                                    <p>
                                                        {{ item.title }}
                                                    </p>
                                                    <div>
                                                         <div class="item-content-title-icon d-flex align-center">
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
                                                    </div>
                                                    <div class="d-flex flex-column responsive-icon-title ml-7 mt-2">
                                                        <svg width="18" height="18" viewBox="0 0 20 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" class="mb-2"
                                                            v-show="isSvg">
                                                            <path
                                                                d="M10 0L0 2V16L10 18V0ZM12 2V4H18V6H12V8H18V10H12V12H18V14H12V16H19C19.552 16 20 15.552 20 15V3C20 2.448 19.552 2 19 2H12ZM1.29492 5.29492H2.83008L3.32227 8.77344C3.35727 8.98244 3.38458 9.26714 3.39258 9.61914H3.41797C3.42597 9.36214 3.46244 9.06891 3.52344 8.75391L4.1543 5.29492H6.02344L6.60742 8.74219C6.64242 8.92319 6.66736 9.1892 6.69336 9.5332H6.71289C6.72089 9.2662 6.74725 8.98913 6.78125 8.70312L7.25977 5.29492H8.70312L7.32031 12.7051H6.00586L5.12695 8.74414C5.08295 8.49714 5.05883 8.21906 5.04883 7.91406H5.03125C5.01325 8.24706 4.97855 8.52414 4.93555 8.74414L4.03906 12.7051H2.67188L1.29492 5.29492Z"
                                                                fill="#616161" />
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" v-show="isSvg">
                                                            <path
                                                                d="M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z"
                                                                fill="#616161" />
                                                        </svg>
                                                    </div>
                                                    </div>
                                                   
                                                </div>
                                                <p class="item-content-subtitle d-none d-sm-block">
                                                    <nuxt-link to="">
                                                        {{ item.subtitle }}
                                                    </nuxt-link>

                                                </p>
                                                <div class="item-content-tags d-flex">
                                                    <v-chip link v-for="item in tags" class="mr-1">
                                                        <nuxt-link to="">
                                                            {{ item.tag }}
                                                        </nuxt-link>
                                                    </v-chip>
                                                </div>
                                                <div class="item-content-footer" v-show="isDesk">
                                                    <div class="d-flex ">
                                                        <div class="item-content-user d-flex align-center mr-2">
                                                            <img :src="require('@/assets/images/' + item.userImg)"
                                                                alt="">
                                                            <p class="mx-2">{{ item.user }}</p>
                                                        </div>
                                                        <div class="item-content-file-type d-flex align-center mx-auto">
                                                            <i class="fa-solid fa-folder "></i>
                                                            <p class="mx-2">file type : {{ item.type }}</p>
                                                        </div>
                                                        <div class="item-content-view d-flex align-center mx-auto">
                                                            <i class="fa-solid fa-eye"></i>
                                                            <p class="mx-2">view : {{ item.view }}</p>
                                                        </div>
                                                        <div
                                                            class="item-content-last-update d-flex align-center mx-auto">
                                                            <i class="fa-solid fa-calendar-days"></i>
                                                            <p class="mx-2">last update : {{ item.update }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="item-content-footer-icon d-flex flex-column">
                                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" class="mb-2">
                                                            <path
                                                                d="M10 0L0 2V16L10 18V0ZM12 2V4H18V6H12V8H18V10H12V12H18V14H12V16H19C19.552 16 20 15.552 20 15V3C20 2.448 19.552 2 19 2H12ZM1.29492 5.29492H2.83008L3.32227 8.77344C3.35727 8.98244 3.38458 9.26714 3.39258 9.61914H3.41797C3.42597 9.36214 3.46244 9.06891 3.52344 8.75391L4.1543 5.29492H6.02344L6.60742 8.74219C6.64242 8.92319 6.66736 9.1892 6.69336 9.5332H6.71289C6.72089 9.2662 6.74725 8.98913 6.78125 8.70312L7.25977 5.29492H8.70312L7.32031 12.7051H6.00586L5.12695 8.74414C5.08295 8.49714 5.05883 8.21906 5.04883 7.91406H5.03125C5.01325 8.24706 4.97855 8.52414 4.93555 8.74414L4.03906 12.7051H2.67188L1.29492 5.29492Z"
                                                                fill="#616161" />
                                                        </svg>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z"
                                                                fill="#616161" />
                                                        </svg>

                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" class=" py-1" v-show="isMobile">
                                            <div class="item-content-footer">
                                                    <div class="d-flex " >
                                                        <div class="item-content-user d-flex align-center mr-1">
                                                            <img :src="require('@/assets/images/' + item.userImg)"
                                                                alt="">
                                                            <p class="mx-1">{{ item.user }}</p>
                                                        </div>
                                                        <div class="item-content-file-type d-flex align-center mr-auto">
                                                            <i class="fa-solid fa-folder "></i>
                                                            <p class="mx-1"> {{ item.type }}</p>
                                                        </div>
                                                        <div class="item-content-view d-flex align-center mr-auto">
                                                            <i class="fa-solid fa-eye"></i>
                                                            <p class="mx-1"> {{ item.view }}</p>
                                                        </div>
                                                        <div
                                                            class="item-content-last-update d-flex align-center mr-auto">
                                                            <i class="fa-solid fa-calendar-days"></i>
                                                            <p class="mx-1">{{ item.update }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </v-col>
                                    </v-row>
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
import Tabs from "~/components/common/tabs.vue";
export default {
    components: { category, Pagination, FilterModal, Tabs },
    data() {
        return {
            isSvg: false,
            isDesk: true,
            isMobile:false,
            item: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3 july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "mostamar",
                    view: "15835",
                    update: "3july"
                },
            ]
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            if (window.innerWidth < 600) {
                this.isDesk = false
                this.isSvg = true
                this.isMobile = true
            }
        },
    },

}
</script>
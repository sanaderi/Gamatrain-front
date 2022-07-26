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
        <section class="online-exam">
            <v-container>
                <v-row>
                    <v-col lg="3" class="d-none d-sm-block">
                        <div class="online-exam-filter ">
                            <v-select :items="item" label="Grade" outlined> </v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Book" outlined></v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Title" outlined></v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Sample question" outlined></v-select>
                        </div>
                    </v-col>
                    <v-col lg="9" md="9" sm="12" class="online-exam-contents">
                        <div class="online-exam-content">
                            <v-breadcrumbs :items="breadcrumbs" class="online-exam-breadcrumb d-none d-md-block">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                            <!-- header desktop -->
                            <Tabs />
                            <!-- Book Carousel -->
                            <div class="book-carousel my-3">
                                <v-container class="mx-0">
                                    <v-row>
                                        <v-col lg="2" cols="4" class="pa-0">
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
                            my-3
                          ">
                                                    <h4 class="text-center">With Album test</h4>
                                                    <p>{{ bookCarousel.carouselName }}</p>
                                                </div>
                                                <div class="carousel-img  my-3 d-flex justify-center">
                                                    <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="115"
                                                        max-width="90%" :src="
                                                            require('@/assets/images/' +
                                                                bookCarousel.carouselImg)
                                                        " class="books-image"></v-img>
                                                </div>
                                                <div class="book-carousel-q  my-3">
                                                    <p>Lets Create Test</p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col lg="10" cols="8" class="pa-0">
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
                                                                        class="book-test px-2 py-1 my-2 d-flex justify-space-between align-center">
                                                                        <p class="test-number">{{ book.test }}</p>
                                                                        <p>test</p>
                                                                    </div>
                                                                </nuxt-link>
                                                                <nuxt-link to="">
                                                                    <div
                                                                        class="book-price  px-2 py-1  my-2 d-flex justify-space-between align-center">
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
                            <div class="online-exam-items online-exam-items-desktop d-block">
                                <div class="online-exam-item pa-sm-6 pa-1 my-5" v-for="item in items" :key="item.value">
                                    <v-row>
                                        <v-col lg="2" cols="3">
                                            <div class="item-img">
                                                <img :src="require('assets/images/' + item.itemImg)" alt=""
                                                    class="item-image" />
                                            </div>
                                        </v-col>
                                        <v-col lg="10" cols="9" class="px-0">
                                            <div class="
                          online-exam-item-content
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

                                                </div>
                                                <div class="item-content-features">
                                                    <v-row>
                                                        <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                                                            <i class="fa-solid fa-list"></i>
                                                            <p class="mx-2 ">questions :{{ item.qNumber }}
                                                            </p>
                                                        </v-col>
                                                        <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                                                            <i class="fa-solid fa-temperature-three-quarters"></i>
                                                            <p class="mx-2 ">difficulty level :{{ item.level }} </p>
                                                        </v-col>
                                                        <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                                                            <i class="fa-solid fa-circle-play"></i>
                                                            <p class="mx-2 ">Start :{{ item.start }} </p>
                                                        </v-col>
                                                        <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                                                            <i class="fa-solid fa-circle-stop"></i>
                                                            <p class="mx-2 ">Finish :{{ item.End }} </p>
                                                        </v-col>
                                                    </v-row>
                                                </div>

                                                <div class="item-content-tags" v-show="isTags">
                                                    <v-chip link v-for="item in tags" class="mr-1">
                                                        <nuxt-link to="">
                                                            {{ item.tag }}
                                                        </nuxt-link>
                                                    </v-chip>
                                                </div>
                                                <div class="
                                                    item-content-footer
                           
                                                         " v-show="isDesk">
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
                                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M15.6667 1.99967H9.00008L7.33342 0.333008H2.33341C1.41675 0.333008 0.675081 1.08301 0.675081 1.99967L0.666748 11.9997C0.666748 12.9163 1.41675 13.6663 2.33341 13.6663H15.6667C16.5834 13.6663 17.3334 12.9163 17.3334 11.9997V3.66634C17.3334 2.74967 16.5834 1.99967 15.6667 1.99967ZM10.6667 10.333H4.00008V8.66634H10.6667V10.333ZM14.0001 6.99967H4.00008V5.33301H14.0001V6.99967Z"
                                                                    fill="#616161" />
                                                            </svg>
                                                            <p class="mx-2">test type : {{ item.type }}</p>
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
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" v-show="mobileTag" class="py-0">
                                            <div class="item-content-tags ">
                                                <v-chip link v-for="item in tags" class="mr-1">
                                                    <nuxt-link to="">
                                                        {{ item.tag }}
                                                    </nuxt-link>
                                                </v-chip>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" v-show="isMobile">
                                            <div class="
                                                    item-content-footer
                           
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
                                                            mr-2
                                                        ">
                                                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6667 1.99967H9.00008L7.33342 0.333008H2.33341C1.41675 0.333008 0.675081 1.08301 0.675081 1.99967L0.666748 11.9997C0.666748 12.9163 1.41675 13.6663 2.33341 13.6663H15.6667C16.5834 13.6663 17.3334 12.9163 17.3334 11.9997V3.66634C17.3334 2.74967 16.5834 1.99967 15.6667 1.99967ZM10.6667 10.333H4.00008V8.66634H10.6667V10.333ZM14.0001 6.99967H4.00008V5.33301H14.0001V6.99967Z"
                                                                fill="#616161" />
                                                        </svg>
                                                        <p class="mx-2">{{ item.type }}</p>
                                                    </div>

                                                    <div class="
                                                           item-content-last-update
                                                          d-flex
                                                     align-center
                                                           mr-2
                                                            ">
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                        <p class="mx-2">
                                                            {{ item.update }}
                                                        </p>
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
            isMobile: false,
            isTags: true,
            mobileTag: false,
            item: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            model: null,
            bookCarousel: {
                carouselName: "Create Test",
                carouselImg: "test.png",
            },
            books: [
                {
                    img: "poster1.jpg",
                    title: "Maths",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book2.png",
                    title: "History",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book3.png",
                    title: "Art",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book4.png",
                    title: "Geography",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "poster1.jpg",
                    title: "Maths",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book2.png",
                    title: "Maths",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "poster1.jpg",
                    title: "Maths",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book2.png",
                    title: "History",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book3.png",
                    title: "Art",
                    test: "3405",
                    price: "3405",
                },
                {
                    img: "book4.png",
                    title: "Geography",
                    test: "3405",
                    price: "3405",
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
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        " standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",
                    update: "3 july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        "  standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        "standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        ". standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        "  standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        " standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        "standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        " standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        "  standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
                {
                    itemImg: "book1.jpg",
                    qNumber: "20",
                    level: "Hard",
                    start: "Free",
                    End: "Free",
                    title:
                        " standard dummy text ever since the 1500s",
                    userImg: "dexter-morse2.png",
                    user: "Alireza Davoodi",
                    type: "Test",

                    update: "3july",
                },
            ],
        };
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            if (window.innerWidth < 600) {
                this.isDesk = false
                this.isMobile = true
                this.isTags = false
                this.mobileTag = true
            }
        },
    },

};
</script>
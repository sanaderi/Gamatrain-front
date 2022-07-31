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
        <section class="q-a">
            <v-container>
                <v-row>
                    <v-col lg="3" class="d-none d-sm-block">
                        <div class="q-a-filter d-none d-sm-block">
                            <v-select :items="item" label="Grade" outlined> </v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Book" outlined></v-select>
                            <v-divider class="filter-divider my-5"></v-divider>
                            <v-select :items="item" label="Title" outlined></v-select>

                        </div>
                    </v-col>
                    <v-col lg="9" md="9" sm="12" class="q-a-contents">
                        <div class="q-a-content">
                            <v-breadcrumbs :items="breadcrumbs" class="q-a-breadcrumb d-none d-md-block">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                            <!-- header desktop -->
                            <Tabs />
                            <!-- sample-q-items-desktop -->
                            <div class="q-a-items q-a-items-desktop d-block">
                                <div class="q-a-item pa-1 pa-sm-6 my-5" v-for="(item, index) in items" :key="index">
                                    <v-row>
                                        <v-col lg="2" cols="3">
                                            <div class="item-img">
                                                <img :src="require('@/assets/images/' + item.itemImg)" alt=""
                                                    class="item-image">
                                            </div>
                                        </v-col>
                                        <v-col lg="10" cols="9" class="px-0">
                                            <div class="q-a-content d-flex flex-column justify-space-between">
                                                <div class="q-a-title d-flex justify-space-between">
                                                    <p>
                                                        {{ item.title }}
                                                    </p>
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
                                                <div class="item-content-footer " v-show="isDesk">
                                                    <TabsContentFooter :footerCard="item.footerCard">
                                                    </TabsContentFooter>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" v-show="isMobile">
                                            <TabsContentFooter :footerCard="item.footerCard">
                                            </TabsContentFooter>
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
import TabsContentFooter from "~/components/common/tabs-content-footer.vue";
export default {
    components: { category, Pagination, FilterModal, Tabs, TabsContentFooter },
    data() {
        return {
            isSvg: false,
            isDesk: true,
            isMobile: false,
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
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }

                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
                },
                {
                    itemImg: "book1.jpg",
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    subtitle: " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    footerCard: {
                        userImg: "dexter-morse2.png",
                        user: "Alireza Davoodi",
                        answers: "14",
                        update: "3 july"
                    }
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
<template>
  <div>
    <header class="main-header">
      <topbar></topbar>
      <!--   Start: navbar   main-container -->
      <v-container class="pa-0">
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center navbar-items">
            <!-- Start:  show sidebar menu in mobile -->
            <v-navigation-drawer
              v-model="sidebar"
              app
              class="hidden-md-and-up"
              right
            >
              <!-- Start:  Menu items -->
              <v-list nav dense>
                <div v-for="(item, index) in menuItems" :key="index">
                  <v-list-item v-if="!item.subMenuList" :to="item.link">
                    <!--                    <v-list-item-icon>-->
                    <!--                      <v-icon class="">{{ item.icon }}</v-icon>-->
                    <!--                    </v-list-item-icon>-->
                    <v-list-item-title v-text="item.title" />
                  </v-list-item>

                  <v-list-group
                    v-else
                    :key="item.title"
                    no-action
                    :value="false"
                  >
                    <template v-slot:activator>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </template>

                    <v-list-item
                      v-for="(subMenuItem, index) in item.subMenuList"
                      :to="subMenuItem.path"
                      :key="subMenuItem.title"
                    >
                      <nuxt-link :to="subMenuItem.link">
                        <span class="fa-solid fa-angles-left ms-2"></span>
                        {{ subMenuItem.title }}
                      </nuxt-link>
                    </v-list-item>
                  </v-list-group>
                </div>
              </v-list>
              <!-- End:  Menu items -->

              <!-- Start:  Social link -->
              <v-list dense>
                <v-list-item-group class="d-flex justify-center align-center">
                  <a
                    v-for="(socialItem, i) in socialList"
                    :key="i"
                    :href="socialItem.link"
                    class="d-flex justify-center align-center px-4"
                  >
                    <span :class="'fa-brands ' + socialItem.icon"></span>
                  </a>
                </v-list-item-group>
              </v-list>
              <!-- End:  Social link  -->
            </v-navigation-drawer>
            <!-- End:  show sidebar menu in mobile -->

            <!-- Start: App bar in top page for menu list -->
            <v-app-bar class="desktop-nav">
              <!--   hamburgers-icon in mobile-->
              <span class="hidden-md-and-up">
                <v-btn class="pa-0 btn-transparent" @click="sidebar = !sidebar">
                  <span class="fa-solid fa-bars hamburgers-icon"></span>
                </v-btn>
              </span>
              <v-spacer></v-spacer>
              <!--  show menu in desktop -->
              <v-toolbar-items class="hidden-md-and-down">
                <v-menu
                  v-for="(item, index) in menuItems"
                  :key="index"
                  open-on-hover
                  bottom
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">
                      <nuxt-link :to="item.link" class="headermenu-item">
                        <span :class="'ml-1 fa-solid ' + item.icon"></span>
                        {{ item.title }}
                      </nuxt-link>
                    </v-btn>
                  </template>
                  <v-list class="dropdown-items">
                    <v-list-item
                      v-for="(subMenuItem, index) in item.subMenuList"
                      :key="index"
                      class="dropdown-item"
                    >
                      <nuxt-link :to="subMenuItem.link">
                        <span class="fa-solid fa-angles-left ms-2"></span>
                        {{ subMenuItem.title }}
                      </nuxt-link>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar-items>
            </v-app-bar>
            <!-- End: App bar in top page for menu list -->

            <!-- Start: show Search in mobile -->
            <div class="mobile-search">
              <!--              <v-btn class="pa-0 btn-transparent" @click="showSearchBox">-->
              <!--                <span class="fa-solid fa-magnifying-glass search-icon"></span>-->
              <!--              </v-btn>-->
              <template>
                <v-row justify="center">
                  <v-dialog
                    v-model="dialog"
                    fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="pa-0 btn-transparent"
                      >
                        <span
                          class="fa-solid fa-magnifying-glass search-icon"
                        ></span>
                      </v-btn>
                    </template>
                    <v-card class="mobile-card-dialog-search">
                      <v-btn
                        class="close-mobile-dialog-search dialog-search-close"
                        dark
                        icon
                        @click="dialog = false"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <div class="ml-3 px-2 search-box">
                        <v-text-field
                          class="
                            py-1
                            my-0
                            search-field
                            d-flex
                            align-sm-center align-center
                            search-icon-placeholder
                          "
                          placeholder="جستجو کنید..."
                        >
                        </v-text-field>
                        <v-btn class="pl-0 btn-transparent d-flex justify-end">
                          <v-icon class="search-icon">mdi-magnify</v-icon>
                        </v-btn>
                      </div>
                      <!--   category    -->
                      <section class="category-sec">
                        <nuxt-link
                          to=""
                          class="d-flex align-center test-cat mb-5"
                        >
                          <div>
                            <span
                              class="icong-test icon ml-5 d-flex align-center"
                            ></span>
                          </div>
                          <div class="responsive-search-item">
                            <p>نمونه سوال</p>
                            <p>50,000 +</p>
                          </div>
                        </nuxt-link>
                        <nuxt-link
                          to=""
                          class="d-flex align-center learnfile-cat mb-5"
                        >
                          <div>
                            <span
                              class="
                                icong-learnfiles
                                icon
                                ml-5
                                d-flex
                                align-center
                              "
                            ></span>
                          </div>
                          <div class="responsive-search-item">
                            <p>محتوای آموزشی</p>
                            <p>30,000 +</p>
                          </div>
                        </nuxt-link>
                        <nuxt-link
                          to=""
                          class="d-flex align-center qa-cat mb-5"
                        >
                          <div>
                            <span
                              class="icong-qa icon ml-5 d-flex align-center"
                            ></span>
                          </div>
                          <div class="responsive-search-item">
                            <p>پرسش و پاسخ</p>
                            <p>20,000 +</p>
                          </div>
                        </nuxt-link>
                        <nuxt-link
                          to=""
                          class="d-flex align-center azmoon-cat mb-5"
                        >
                          <div>
                            <span
                              class="icong-azmoon icon ml-5 d-flex align-center"
                            ></span>
                          </div>
                          <div class="responsive-search-item">
                            <p>آزمون آنلاین</p>
                            <p>5,000 +</p>
                          </div>
                        </nuxt-link>
                        <nuxt-link
                          to=""
                          class="d-flex align-center blog-cat mb-5"
                        >
                          <div>
                            <span
                              class="icong-blog icon ml-5 d-flex align-center"
                            ></span>
                          </div>
                          <div class="responsive-search-item">
                            <p>درسنانه آموزشی</p>
                            <p>1,500 +</p>
                          </div>
                        </nuxt-link>
                        <nuxt-link
                          to=""
                          class="d-flex align-center school-cat mb-5"
                        >
                          <div>
                            <span
                              class="icong-school icon ml-5 d-flex align-center"
                            ></span>
                          </div>
                          <div class="responsive-search-item">
                            <p>مدرسه یاب</p>
                            <p>130,000 +</p>
                          </div>
                        </nuxt-link>
                      </section>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
            </div>
            <!--  End: show Search in mobile  -->
          </div>
          <PopularHashtags/>
        </div>
      </v-container>
      <!--   End: navbar   -->
    </header>
  </div>
</template>
<script>
import topbar from "../widgets/topbar";
import PopularHashtags from "./popular-hashtags.vue";

export default {
  components: {
    topbar,
    PopularHashtags
},
  data() {
    return {
      sidebar: false,
      dialog: false,
      menuItems: [
        {
          title: "خانه",
          link: "./",
          icon: "fa-house-chimney",
        },
        {
          title: "آشنایی",
          link: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "قوانین و مقررات", link: "" },
            { title: "پرسش های متداول", link: "" },
            { title: "راهنمای عضویت", link: "" },
          ],
        },
        {
          title: "المپیادها",
          link: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "المپیاد ریاضی", link: "" },
            { title: "المپیاد فیزیک", link: "" },
            { title: "المپیاد شیمی", link: "" },
          ],
        },
        {
          title: "نمونه و تیزهوشان",
          link: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "آزمون ورودی پایه چهارم", link: "" },
            { title: "آزمون ورودی پایه پنجم", link: "" },
            { title: "آزمون ورودی پایه ششم", link: "" },
          ],
        },
        {
          title: "کتابهای درسی",
          link: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "دوره دبستان", link: "" },
            { title: "دوره اول متوسطه", link: "" },
            { title: "دوره دوم متوسطه", link: "" },
          ],
        },
        {
          title: "پیشنهاد ویژه",
          link: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "امتحانات هماهنگ نهم", link: "" },
            { title: "امتحانات هماهنگ ششم", link: "" },
            { title: "امتحانات هماهنگ دوازدهم", link: "" },
          ],
        },
        {
          title: "تدریس آنلاین",
          link: "",
          icon: "fa-tv",
          subMenuList: [
            { title: "آزمون ورودی پایه چهارم", link: "" },
            { title: "آزمون ورودی پایه پنجم", link: "" },
            { title: "آزمون ورودی پایه ششم", link: "" },
          ],
        },
      ],
      selectedItem: 1,
      socialList: [
        { link: "telegram", icon: "fa-telegram" },
        { link: "twitter", icon: "fa-twitter-square" },
        { link: "instagram", icon: "fa-instagram" },
      ],
    };
  },
  methods: {
    showSearchBox() {
      this.searchBox = true;
    },
  },
};
</script>

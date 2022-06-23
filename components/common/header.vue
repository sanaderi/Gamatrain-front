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
              class="hidden-md-and-up main-sidebar"
              right
            >
              <!-- Start:  Menu items -->
              <v-list nav dense>
                <div
                  class="
                    sidemenu-profile
                    d-flex
                    flex-column
                    justify-space-around
                    mb-5
                  "
                >
                  <nuxt-link to="">
                    <v-avatar size="40">
                      <img
                        :src="require('@/assets/images/' + avatar)"
                        alt="John"
                      />
                    </v-avatar>
                  </nuxt-link>
                  <div class="profile-info">
                    <p class="profile-name">حبیب الله حق شناس</p>
                    <div
                      class="profile-wallet d-flex justify-space-between mr-2"
                    >
                      <div class="d-flex">
                        <p class="wallet">{{ wallet }}</p>
                        <p class="mx-3 wallet-balance">{{ walletBalance }}</p>
                      </div>
                      <nuxt-link to="">
                        <i class="fa-solid fa-angle-left ml-4 profile-wallet-arrow"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <v-divider></v-divider>

                <div
                  v-for="(item, side) in sidemenuItems"
                  :key="side"
                  class="my-8"
                >
                  <v-list-item
                    v-if="!item.subMenuList"
                    :to="item.link"
                    class="menuu"
                  >
                    <!-- <v-list-item-icon>
                                         <v-icon class="">{{ item.icon }}</v-icon>
                                       </v-list-item-icon> -->
                    <v-list-item-title v-text="item.title" class="menu-title" />
                  </v-list-item>

                  <v-list-group
                    v-else
                    :key="item.title"
                    no-action
                    :value="false"
                  >
                    <template v-slot:activator>
                      <v-list-item-title class="sidemenu-item">{{
                        item.title
                      }}</v-list-item-title>
                    </template>

                    <v-list-item
                      v-for="(subMenuItem, side) in item.subMenuList"
                      :to="subMenuItem.path"
                      :key="side.title"
                    >
                      <nuxt-link :to="subMenuItem.link">
                        <span class="fa-solid fa-angles-left ms-2"></span>
                        {{ subMenuItem.title }}
                      </nuxt-link>
                    </v-list-item>
                  </v-list-group>
                </div>
                <v-divider></v-divider>
                <div class="logout d-flex align-center my-4">
                  <nuxt-link to="">
                    <v-icon>mdi-logout</v-icon>
                  </nuxt-link>

                  <nuxt-link to=""
                    ><p class="logout-item mx-2">
                      خروج از حساب کاربری
                    </p></nuxt-link
                  >
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
                    class="d-flex justify-center align-center px-3"
                  >
                    <span
                      :class="' side-icon fa-2xl fa-brands ' + socialItem.icon"
                    ></span>
                  </a>
                </v-list-item-group>
              </v-list>
              <!-- End:  Social link  -->
            </v-navigation-drawer>
            <!-- End:  show sidebar menu in mobile -->

            <!-- Start: App bar in top page for menu list -->
            <v-app-bar class="desktop-nav">
              <!--   hamburgers-icon in mobile-->
              <span class="d-block d-md-none">
                <v-btn class="pa-0 btn-transparent" @click="sidebar = !sidebar">
                  <span class="fa-solid fa-bars hamburgers-icon"></span>
                </v-btn>
              </span>
              <v-spacer></v-spacer>
              <!--  show menu in desktop -->
              <v-toolbar-items class="d-none d-md-block">
                <v-menu
                  v-for="(item, side) in menuItems"
                  :key="side"
                  open-on-hover
                  bottom
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">
                      <nuxt-link :to="item.link" class="headermenu-item">
                        <span v-show="item.title=='Home'" class="fa-solid fa-house-chimney mx-1"/>
                        {{ item.title }}
                        <span :class="'mr-1 fa-solid ' + item.icon"></span>
                      </nuxt-link>
                    </v-btn>
                  </template>
                  <v-list :class="'dropdown-items dropdown-items'+ (side + 1)">
                    <v-list-item
                      v-for="(subMenuItem, side) in item.subMenuList"
                      :key="side"
                      class="dropdown-item"
                    >
                      <nuxt-link :to="subMenuItem.link">
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
                          placeholder="Search..."
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
                            <p>Sample Exam</p>
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
                            <p>Training content</p>
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
                            <p>Q & A</p>
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
                            <p>Online Exam</p>
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
                            <p>Training content</p>
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
                            <p>School finder</p>
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
          <div class="header-logo d-block d-sm-none">
            <v-img
              class="logo"
              :src="require('@/assets/images/' + logo)"
              max-width="100"
            ></v-img>
          </div>
          <div class="header-bell d-block d-sm-none">
            <nuxt-link to="">
              <i class="fa-regular fa-bell fa-2xl ml-4"></i>
            </nuxt-link>
          </div>
          <PopularHashtags />
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
    PopularHashtags,
  },
  data() {
    return {
      sidebar: false,
      dialog: false,
      logo: "mainlogo4.png",
      avatar: "dexter-morse.png",
      wallet: "کیف پول:",
      walletBalance: "2000 تومان",
      sidemenuItems: [
        {
          title: "آشنایی",
          link: "",
          icon: "mdi-chevron-left",
          subMenuList: [
            { title: "Terms and Conditions", link: "" },
            { title: "FAQ's", link: "" },
            { title: "راهنمای عضویت", link: "" },
          ],
        },
        {
          title: "المپیادها",
          link: "",
          icon: "fa-chevron-left",
          subMenuList: [
            { title: "المپیاد ریاضی", link: "" },
            { title: "المپیاد فیزیک", link: "" },
            { title: "المپیاد شیمی", link: "" },
          ],
        },
        {
          title: "نمونه و تیزهوشان",
          link: "",
          icon: "fa-chevron-left",
          subMenuList: [
            { title: "آزمون ورودی پایه چهارم", link: "" },
            { title: "آزمون ورودی پایه پنجم", link: "" },
            { title: "آزمون ورودی پایه ششم", link: "" },
          ],
        },
        {
          title: "کتب درسی",
          link: "",
          icon: "fa-chevron-left",
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
      ],
      menuItems: [
        {
          title: "Home",
          link: "./",
          icon: "",
        },
        {
          title: "Announcement",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "Terms and Conditions", link: "" },
            { title: "Privacy Policy", link: "" },
            { title: "FAQs", link: "" },
          ],
        },
        {
          title: "Olympiad",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "International Mathematical Olympiad (IMO)", link: "" },
            { title: "International Physics Olympiad (IPhO)", link: "" },
            { title: "International Chemistry Olympiad (IChO)", link: "" },
          ],
        },
        {
          title: "High-level",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "آزمون ورودی پایه چهارم", link: "" },
            { title: "آزمون ورودی پایه پنجم", link: "" },
            { title: "آزمون ورودی پایه ششم", link: "" },
          ],
        },
        {
          title: "Books",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "دوره دبستان", link: "" },
            { title: "دوره اول متوسطه", link: "" },
            { title: "دوره دوم متوسطه", link: "" },
          ],
        },
        {
          title: "Suggestions",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "امتحانات هماهنگ نهم", link: "" },
            { title: "امتحانات هماهنگ ششم", link: "" },
            { title: "امتحانات هماهنگ دوازدهم", link: "" },
          ],
        },
        // {
        //   title: "تدریس آنلاین",
        //   link: "",
        //   icon: "fa-tv",

        // },
      ],
      selectedItem: 1,
      socialList: [
        { link: "telegram", icon: "fa-telegram" },
        { link: "twitter", icon: "fa-twitter" },
        { link: "instagram", icon: "fa-instagram" },
        { link: "Youtube", icon: "fa-youtube" },
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

<template>
  <div>
    <header class="main-header">
      <topbar></topbar>
      <!--   Start: navbar   main-container -->
      <v-container class="">
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center navbar-items">
            <v-navigation-drawer
              v-model="sidebar"
              app
              class="hidden-md-and-up"
              right
            >
              <v-list>
                <v-list-item
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.path"
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>{{ item.title }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
            <v-app-bar class="desktop-nav">
              <span class="hidden-md-and-up">
                <v-btn class="pa-0 btn-transparent" @click="sidebar = !sidebar">
                  <span class="fa-solid fa-bars hamburgers-icon"></span>
                </v-btn>
                <!--                <span class="fa-solid fa-bars hamburgers-icon" @click="sidebar = !sidebar" ></span>-->
                <!--                <v-app-bar-nav-icon @click="sidebar = !sidebar" class="hamburgers-icon">-->
                <!--                </v-app-bar-nav-icon>-->
              </span>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-md-and-down">
                <v-btn
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.path"
                >
                  <span :class="'ml-1 fa-solid ' + item.icon"></span>
                  <!--                    <v-icon dark left>{{ item.icon }}</v-icon>-->
                  {{ item.title }}
                </v-btn>
              </v-toolbar-items>
            </v-app-bar>

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
                            <p>درستانه آموزشی</p>
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
          </div>

          <div
            class="
              d-flex
              align-center
              justify-space-between
              logo-search-content
            "
          >
            <div class="mr-3 px-2 header-search desktop-search">

              <v-text-field
                class="py-1 my-0 search-field main-search-icon"
                placeholder="Search..."
              >
              </v-text-field>

            </div>
            <div class="logo-holder">
              <nuxt-link class="logo" to=""></nuxt-link>
            </div>
          </div>
        </div>
      </v-container>
      <!--   End: navbar   -->
    </header>
  </div>
</template>
<script>
import topbar from "../widgets/topbar";

export default {
  components: {
    topbar,
  },
  data() {
    return {
      sidebar: false,
      dialog: false,
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      menuItems: [
        {
          title: "Home",
          path: "./home",
          icon: "fa-house-chimney",
        },
        {
          title: "آشنایی",
          path: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "قوانین و مقررات", path: "" },
            { title: "پرسش های متداول", path: "" },
            { title: "راهنمای عضویت", path: "" },
          ],
        },
        {
          title: "Olympiad",
          path: "",
          icon: "fa-caret-down",
          subMenuList: [
            { title: "المپیاد ریاضی", path: "" },
            { title: "المپیاد فیزیک", path: "" },
            { title: "المپیاد شیمی", path: "" },
          ],
        },
        {
          title: "High-level",
          path: "",
          icon: "fa-caret-down",
        },
        {
          title: "Books",
          path: "",
          icon: "fa-caret-down",
        },
        {
          title: "Suggestions",
          path: "",
          icon: "fa-caret-down",
        },
        {
          title: "تدریس آنلاین",
          path: "",
          icon: "fa-tv",
        },
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

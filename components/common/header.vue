<template>
  <div>
    <header class="main-header">
      <topbar></topbar>
      <!--   Start: navbar   main-container -->
      <v-container class="">
        <div class="d-flex align-center justify-space-between">
          <div class="navbar-items">
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
                <v-app-bar-nav-icon @click="sidebar = !sidebar">
                </v-app-bar-nav-icon>
              </span>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-md-and-down">
                <v-btn
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.path"
                >
                    <v-icon dark left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                 
                </v-btn>
              </v-toolbar-items>
            </v-app-bar>
          </div>
          <div
            class="
              d-flex
              align-center
              justify-space-between
              logo-search-content
            "
          >
            <div class="d-flex align-center ml-3 px-2 header-search">
              <v-text-field
                class="py-1 my-0 search-field"
                placeholder="جستجو کنید..."
              >
              </v-text-field>
              <v-btn class="pl-0 btn-transparent">
                <v-icon class="search-icon">mdi-magnify </v-icon>
              </v-btn>
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
      menuItems: [
        { title: "خانه", path: "./home", icon: "mdi-home" },
        { title: "آشنایی", path: "", icon: "mdi-chevron-down" },
        { title: "المپیادها", path: "", icon: "mdi-chevron-down" },
        { title: "نمونه و تیزهوشان", path: "", icon: "mdi-chevron-down" },
        { title: "کتابهای درسی", path: "", icon: "mdi-chevron-down" },
        { title: "پیشنهاد ویژه", path: "", icon: "mdi-chevron-down" },
        { title: "تدریس آنلاین", path: "", icon: "mdi-monitor" },
      ],
    };
  },
};
</script>

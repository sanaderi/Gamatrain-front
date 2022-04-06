<template>
  <div>
    <header class="main-header">
      <topbar></topbar>
      <!--   Start: navbar   main-container -->
      <v-container class="">
        <div class="d-flex align-center justify-space-between py-sm-3 py-1">
          <div class="navbar-items">
            <v-navigation-drawer v-model="sidebar" app class="hidden-md-and-up" right>
              <v-list>
                <v-list-item
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.path">
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
          <div class="logo-holder">
            <nuxt-link class="logo" to=""></nuxt-link>
          </div>
        </div>
      </v-container>
      <!--   End: navbar   -->
    </header>
  </div>
</template>
<script>
import topbar from '../widgets/topbar'

export default {
  components: {
    topbar
  },
  data() {
    return {
      sidebar: false,
      menuItems: [
        {title: 'خانه', path: './home', icon: 'mdi-home'},
        {title: 'آشنایی', path: '', icon: 'mdi-chevron-down'},
        {title: 'المپیادها', path: '', icon: 'mdi-chevron-down'},
        {title: 'نمونه و تیزهوشان', path: '', icon: 'mdi-chevron-down'},
        {title: 'کتابهای درسی', path: '', icon: 'mdi-chevron-down'},
        {title: 'پیشنهاد ویژه', path: '', icon: 'mdi-chevron-down'},
        {title: 'تدریس آنلاین', path: '', icon: 'mdi-monitor'},
      ]
    }
  }
}
</script>

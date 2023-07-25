<template>
  <div>
    <header class="main-header">
      <!-- <topbar ref="header_topbar"></topbar> -->

      <!--Desktop menu-->
      <div class="topbar d-none d-md-block">
        <v-sheet id="main-menu" :color="menuSetting.bgColor">
          <v-container>
            <v-row>
              <v-col cols="2" md="2" lg="2" xl="1" xxl="1" class=" text-left">
                <nuxt-link to="/">
                  <v-img alt="Gamatrain" width="120" height="30" :src="`/images/${menuSetting.logo}`" />
                </nuxt-link>
              </v-col>
              <v-col cols="6" md="6" lg="6" xl="7" xxl="7">
                <v-btn tile v-for="(link, i) in menuLink" :to="link.link" :key="i" :color="menuSetting.linkColor" text
                  class="mx-2">
                  <v-icon class="mb-2 mr-1" v-if="link.icon" color="#FFB300">
                    {{ link.icon }}
                  </v-icon>
                  {{ link.title }}
                </v-btn>
              </v-col>
              <v-col cols="4" class="text-right">
                <div class="d-flex text-right" v-if="$auth.loggedIn">
                  <v-spacer />
                  <v-menu transition="slide-x-transition" offset-y min-width="150">
                    <template v-slot:activator="{ props }">
                      <div v-bind="props">
                        <v-avatar size="32">
                          <v-img :src="$auth.user.avatar" alt="user avatar" />
                        </v-avatar>
                        <span class="pointer pa-2 font-weight-bold "
                          :class="menuSetting.bgColor == '#fff' ? '' : 'text-white'">{{ $auth.user.first_name }}</span>
                      </div>
                    </template>
                    <v-list>
                      <v-list-item v-for="(item, i) in user_profile_items" :key="i" :to="item.link">
                        <v-list-item-title>
                          <v-icon small>
                            {{ item.icon }}
                          </v-icon>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item class="pointer" @click="logout">

                        <v-list-item-title>
                          <v-icon small>
                            mdi:mdi-logout
                          </v-icon>
                          Logout
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>


                  <!--Desktop version-->
                  <common-notification-component ref="notificationComponent" class="d-none d-md-block" />

                </div>
                <div v-else>
                  <v-btn  :color="menuSetting.linkColor" text class="px-0" @click="openLoginDialog">
                    Sign in
                  </v-btn>
                  <span :class="menuSetting.bgColor!='#fff' ? 'white--text' : 'black--text'">/</span>
                  <v-btn :color="menuSetting.linkColor" text class="px-0" @click="openRegisterDialog">
                    Sign up
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>



        <div>
          <!--Login component-->
          <login ref="login_modal" :switchToRegister.sync="currentOpenDialog"
            :switchToPassRecover.sync="currentOpenDialog" />
          <!--End login component-->

          <!--Register component-->
          <register ref="register_modal" :switchToLogin.sync="currentOpenDialog" />
          <!--End register component-->

          <!--Recover password component-->
          <pass-recover ref="pass_recover_modal" :switchToLogin.sync="currentOpenDialog"
            :switchToRegister.sync="currentOpenDialog" />
          <!--End recover password component-->


        </div>
      </div>
      <!--End desktop menu-->


      <!--   Start: navbar   main-container -->
      <v-container class="pa-0">
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center navbar-items">
            <!-- Start:  show sidebar menu in mobile -->
            <v-navigation-drawer v-model="sidebar" app class="hidden-md-and-up main-sidebar">
              <!-- Start:  Menu items -->
              <v-list dense shaped class=" pl-1">
                <!--Profile info-->
                <div v-if="$auth.loggedIn" class="
                    sidemenu-profile
                    d-flex
                    flex-column
                    justify-space-around
                    mb-5
                  ">
                  <nuxt-link to="/user">
                    <v-avatar size="40">
                      <v-img :src="$loadAvatar.currentUser($auth)" alt="Avatar" />
                    </v-avatar>
                  </nuxt-link>

                  <div class="profile-info">
                    <nuxt-link :to="'/user'" class="profile-name">{{ $auth.user.first_name }} {{ $auth.user.last_name }}
                    </nuxt-link>


                    <div class="profile-wallet d-flex justify-space-between mr-2">
                      <div class="d-flex">
                        <p class="wallet">Wallet: </p>
                        <p class="mx-3 wallet-balance">${{ $auth.user.credit }}</p>
                      </div>
                      <nuxt-link to="/user">
                        <i class="fa-solid fa-angle-right ml-4 profile-wallet-arrow"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div v-else class="d-flex align-center">
                  <v-btn plain @click="openLoginDialog">
                    <i class="fa-solid fa-sign-in mr-1"></i>
                    Login
                  </v-btn>

                  <v-btn plain @click="openRegisterDialog">
                    <i class="fa-solid fa-user-plus mr-1"></i>
                    Register
                  </v-btn>
                </div>
                <v-divider class="mb-2"></v-divider>
                <!--End Profile info-->


                <!--Mobile menu items-->
                <div v-for="(item, side) in menuItems" :key="side">
                  <v-list-item class="py-2" active-class="menu_active" v-if="!item.subMenuList" :to="item.link">
                    <v-list-item-title v-text="item.title" class="menu-title" />
                  </v-list-item>

                  <v-list-group v-else active-class="menu_group_active" :key="item.title" no-action :value="false">
                    <template v-slot:activator>
                      <v-list-item-title v-text="item.title" class="py-2"></v-list-item-title>
                    </template>

                    <v-list-item class="pl-7 " active-class="menu_active" v-for="(subMenuItem, side) in item.subMenuList"
                      :to="subMenuItem.link" :key="side.title">
                      <v-list-item-content class="py-2">
                        <v-list-item-title v-text="subMenuItem.title"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </div>
                <v-divider class="my-3"></v-divider>
                <div v-if="$auth.loggedIn" @click="$auth.logout()" class="logout d-flex align-center my-4 ">
                  <v-icon>mdi-logout</v-icon>
                  <p class="logout-item mx-2">
                    Logout
                  </p>

                </div>
              </v-list>
              <!-- End:  Menu items -->

              <!-- Start:  Social link -->
              <v-list dense>
                <v-list-item-group class="d-flex justify-center align-center mt-5">
                  <a v-for="(socialItem, i) in socialList" :key="i" :href="socialItem.link"
                    class="d-flex justify-center align-center px-3">
                    <span :class="' side-icon fa-2xl fa-brands ' + socialItem.icon"></span>
                  </a>
                </v-list-item-group>
              </v-list>
              <!-- End:  Social link  -->
            </v-navigation-drawer>
            <!-- End:  show sidebar menu in mobile -->


            <!--Mobile nav-->
            <v-app-bar class="d-block d-md-none mobile_bar" fixed :color="menuSetting.bgColor">

              <!--Logo section-->
              <nuxt-link to="/">
                <v-img class="logo" :src="`/images/${menuSetting.logo}`" max-width="120" />
              </nuxt-link>
              <!--End logo section-->

              <v-spacer></v-spacer>


              <!--Mobile notification section-->
              <!-- <notification-component ref="notification-section" /> -->
              <!--   hamburgers-icon in mobile-->
              <v-icon :color="menuSetting.linkColor" class="pa-23">
                mdi-magnify
              </v-icon>

                <v-icon large @click="sidebar = !sidebar" class="pa-2"  :class="menuSetting.bgColor == '#fff' ? '' : 'white--text ' "  >
                  mdi-menu
                </v-icon>


            </v-app-bar>
            <!--End mobile nav-->
          </div>
        </div>
      </v-container>
      <!--   End: navbar   -->
    </header>
  </div>
</template>
<script>
import Login from "@/components/common/login";
import Register from "@/components/common/register";
import SearchBox from "@/components/common/search-box";
import PassRecover from "@/components/common/pass-recover";
import NotificationComponent from "~/components/common/notification-component.vue";

export default {
  name: "header-component",
  components: {
    NotificationComponent,
    Login,
    Register,
    PassRecover,
    SearchBox
  },
  props: {
    menuSetting: {
      default: {
        logo: 'gamatrain-logo-top-black.png',
        bgColor: '#fff',
        linkColor: '#424A53'

      }
    }
  },
  data() {
    return {
      sidebar: false,
      dialog: false,
      logo: "mainlogo-gamatrain.png",
      avatar: "dexter-morse.png",
      wallet: "کیف پول:",
      walletBalance: "2000 تومان",
      menuItems: [
        {
          title: "Home",
          link: "/",
          icon: "",
        },
        {
          title: "Olympiad",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            {
              title: "International Mathematical Olympiad",
              link: "/search?type=test&section=6025&base=6026&lesson=6028"
            },
            { title: "International Physics Olympiad", link: "/search?type=test&section=6025&base=6026&lesson=6029" },
            { title: "International Chemistry Olympiad", link: "/search?type=test&section=6025&base=6026&lesson=6030" },
            {
              title: "International Olympiad in Informatics",
              link: "/search?type=test&section=6025&base=6026&lesson=6031"
            },
            { title: "International Biology Olympiad", link: "/search?type=test&section=6025&base=6026&lesson=6032" },
          ],
        },
        {
          title: "Books",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "1st grade", link: "/search?type=test&section=1&base=13&test_type=314" },
            { title: "2nd grade", link: "/search?type=test&section=1&base=14&test_type=314" },
            { title: "3rd grade", link: "/search?type=test&section=1&base=15&test_type=314" },
            { title: "4th grade", link: "/search?type=test&section=1&base=16&test_type=314" },
            { title: "5th grade", link: "/search?type=test&section=1&base=17&test_type=314" },
            { title: "6th grade", link: "/search?type=test&section=1&base=18&test_type=314" },
            { title: "7th grade", link: "/search?type=test&section=2&base=19&test_type=314" },
            { title: "8th grade", link: "/search?type=test&section=2&base=20&test_type=314" },
            { title: "9th grade", link: "/search?type=test&section=2&base=21&test_type=314" },
            { title: "IGCSE", link: "/search?type=test&section=3&base=22&test_type=314" },
            { title: "O-Level", link: "/search?type=test&section=3&base=23&test_type=314" },
            { title: "As Level", link: "/search?type=test&section=1463&base=1464&test_type=314" },
            { title: "A Level", link: "/search?type=test&section=1463&base=4161&test_type=314" },
          ],
        },
        {
          title: "Announcement",
          link: "",
          icon: "fa-angle-down",
          subMenuList: [
            { title: "Terms and Conditions", link: "" },
            { title: "Privacy Policy", link: "" },
            { title: "FAQs", link: "/faq" },
          ],
        },
      ],
      selectedItem: 1,
      socialList: [
        { link: "telegram", icon: "fa-telegram" },
        { link: "twitter", icon: "fa-twitter" },
        { link: "instagram", icon: "fa-instagram" },
        { link: "Youtube", icon: "fa-youtube" },
      ],
      hotTopics: {},

      menuLink: [
        {
          title: 'Home',
          link: '/',
          icon: '',
        },
        {
          title: 'About us',
          link: '/about-us',
          icon: ''
        },
        {
          title: 'Services',
          link: '/services',
          icon: ''
        },
        {
          title: 'FAQ',
          link: '/faq',
          icon: ''
        },
        {
          title: 'Offers',
          link: '/offers',
          icon: 'mdi-wallet-giftcard'
        },
      ],
      currentOpenDialog: ''

    };
  },
  mounted() {
    if (window.innerWidth <= 960 && this.$auth.loggedIn) {
      this.$refs["notification-section"].getNotifications();
    }
  },
  async fetch() {
    await this.$axios.$get('/api/v1/admin/values')
      .then(response => {
        if (response.data.mostVisitedTags.enable == "true")
          this.hotTopics = response.data.mostVisitedTags.tags;
      }).catch(err => {
        console.log(err);
      })
  },
  methods: {
    openLoginDialog() {
      this.$refs.login_modal.login_dialog = true;
    },
    openRegisterDialog() {
      this.$refs.register_modal.register_dialog = true;
    },
  },
  watch: {
    currentOpenDialog(val) {
      if (val === 'login') {
        this.$refs.register_modal.register_dialog = false;
        this.$refs.pass_recover_modal.pass_recover_dialog = false;
        this.$refs.login_modal.login_dialog = true;
      } else if (val === 'register') {
        this.$refs.login_modal.login_dialog = false;
        this.$refs.pass_recover_modal.pass_recover_dialog = false;
        this.$refs.register_modal.register_dialog = true;
      } else if (val === 'pass_recover') {
        this.$refs.login_modal.login_dialog = false;
        this.$refs.register_modal.register_dialog = false;
        this.$refs.pass_recover_modal.pass_recover_dialog = true;
      } else {
        this.$refs.login_modal.login_dialog = false;
        this.$refs.login_modal.register_dialog = false;
        this.$refs.pass_recover_modal.pass_recover_dialog = false;
      }

    },

    //Handle auth form from all of section
    "$route.query.auth_form"(val) {
      if (val === 'login') {
        this.$refs.login_modal.login_dialog = true;
        this.$router.push({ query: {} });
      } else if (val == 'register') {
        this.$refs.register_modal.register_dialog = true;
        this.$router.push({ query: {} });
      }

    }
  },
};
</script>


<style>
#main-menu {
  .v-btn {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    font-family: 'Helvetica Neue LT Std Md';
    line-height: normal;


  }

  .v-btn--active {
    border-bottom: 0.2rem solid #FFB300 !important;

    .v-btn__overlay {
      opacity: 0;
    }
  }
}

.menu-item:hover {
  border-bottom: 3px solid rgb(0, 139, 139);
}

.menu_active {
  border-bottom: 4px solid white !important;
  background-color: rgba(33, 186, 69, 0.1);
  color: #21ba45 !important;
}

.menu_group_active {
  border-bottom: 4px solid white !important;
  background-color: #e1e2e3;
  color: #000 !important;
}

.mobile_bar .v-toolbar__content {
  padding: 0 1.4rem 0 0.5rem !important;
}

.mobile_bar .fa-bell {
  line-height: 3rem !important;
  font-size: 2.8rem !important;
}
</style>

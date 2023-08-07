<template>
  <div>
    <header id="main-header">
      <!--Desktop menu-->
      <v-app-bar flat :fixed="menuSetting.fixedStatus" id="main-menu" :class="menuSetting.class"
        class="d-none d-md-block">
        <v-container>
          <v-row>
            <v-col cols="2" md="2" lg="2" xl="2" class="text-left">
              <nuxt-link to="/">
                <v-img alt="Gamatrain" id="main-logo" :src="`/images/${menuSetting.logo}`" />
              </nuxt-link>
            </v-col>
            <v-col cols="6" md="7" lg="7" xl="7">
              <v-btn tile v-for="(link, i) in menuLink" :to="link.link" :key="i" :color="menuSetting.linkColor" text
                class="mx-2 mx-md-0 mx-lg-2">
                <v-icon class="mb-2 mr-1" v-if="link.icon" color="#FFB300">
                  {{ link.icon }}
                </v-icon>
                {{ link.title }}
              </v-btn>
            </v-col>
            <v-col cols="4" md="3" lg="3" xl="3" class="text-right">
              <div class="d-flex text-right" v-if="$auth.loggedIn">
                <v-spacer />
                <v-menu transition="slide-x-transition" offset-y min-width="150">
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <v-avatar size="32">
                        <v-img :src="$auth.user.avatar" alt="user avatar" />
                      </v-avatar>
                      <span class="pointer pa-2 font-weight-bold "
                        :class="menuSetting.bgColor == '#fff' ? '' : 'white--text'">
                        <span v-if="$auth.user.first_name">
                          {{ $auth.user.first_name }}
                        </span>
                        <span v-else-if="$auth.user.last_name">
                          {{ $auth.user.last_name }}
                        </span>
                        <span v-else>
                          No name
                        </span>

                      </span>
                    </div>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, i) in user_profile_items" :key="i" :to="item.link">
                      <v-list-item-icon class="mr-0">
                        <v-icon small>
                          {{ item.icon }}
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>
                        {{ item.title }}
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item class="pointer " @click="$auth.logout()">
                      <v-list-item-icon class="mr-0">
                        <v-icon small>
                          mdi-logout
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>

                        Logout
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>


                <!--Desktop version-->
                <common-notification-component :menuSetting="menuSetting" ref="notificationComponent"
                  class="d-none d-md-block" />

              </div>
              <div v-else>
                <v-btn color="primary" text class="px-0" @click="openLoginDialog">
                  Sign in
                </v-btn>
                <span :class="menuSetting.bgColor != '#fff' ? 'white--text' : 'black--text'">/</span>
                <v-btn :color="menuSetting.linkColor" text class="px-0" @click="openRegisterDialog">
                  Sign up
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>



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
      <!--End desktop menu-->



      <v-navigation-drawer right v-model="sidebar" app  class="hidden-md-and-up main-sidebar">
        <!-- Start:  Menu items -->
        <v-list dense shaped>
          <!--Profile info-->
          <v-list-group v-if="$auth.loggedIn" active-class="menu_group_active">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon v-text="'mdi-account-outline'"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <span v-if="$auth.user.first_name">{{ $auth.user.first_name }}</span>
                <span v-else-if="$auth.user.last_name">{{ $auth.user.last_name }}</span>
                <span v-else>No name</span>
              </v-list-item-title>
            </template>

            <v-list-item class="pl-7 " v-for="(item, i) in user_profile_items" :key="i" link>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>

            <v-list-item class="pl-7 " @click="$auth.logout()">
              <v-list-item-icon>
                <v-icon v-text="'mdi-exit-to-app'"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="'Logout'"></v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item v-if="$auth.loggedIn" @click="notificationListDialog = true">

            <v-list-item-icon>
              <v-badge overlap content="3">
                <v-icon v-text="'mdi-bell-outline'"></v-icon>
              </v-badge>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Notification
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="openLoginDialog" v-if="!$auth.loggedIn">
            <v-list-item-icon>
              <v-icon v-text="'mdi-account-outline'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class="primary--text">Sign in</span>
                / Sign up
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!--End Profile info-->


          <!--Mobile menu items-->
          <div v-for="(item, side) in menuItems" :key="side">
            <v-list-item class="py-2" active-class="menu_active" v-if="!item.subMenuList" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon" :color="item.icon_color"></v-icon>
              </v-list-item-icon>
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
        </v-list>
        <!-- End:  Menu items -->


      </v-navigation-drawer>
      <!-- End:  show sidebar menu in mobile -->

      <!--   Start: navbar   main-container -->

      <!--Mobile nav-->
      <v-app-bar class="d-block d-md-none mobile_bar" fixed flat :class="menuSetting.class" >

        <!--Logo section-->
        <nuxt-link to="/">
          <v-img id="main-logo" :src="`/images/${menuSetting.logo}`" />
        </nuxt-link>
        <!--End logo section-->

        <v-spacer></v-spacer>



        <!--   hamburgers-icon in mobile-->


        <div class="text-center">
          <v-bottom-sheet v-model="mobileSearchSheet">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" :color="menuSetting.linkColor" class="pa-23">
                mdi-magnify
              </v-icon>
            </template>
            <v-sheet class="mobile-search-sheet">
              <v-slide-group v-model="mobileSearchFilter" class="pa-4" active-class="active-item" show-arrows>
                <v-slide-item v-for="(item, n) in searchFilterItems" :key="n" v-slot="{ active, toggle }">
                  <v-card :color="active ? undefined : 'white lighten-1'" class="ma-2 " height="7.6rem" width="7.6rem"
                    @click="toggle">
                    <v-row class="fill-height text-center" justify="center">
                      <v-col cols="12">
                        <div><v-icon>{{ item.icon }}</v-icon></div>
                        <div class="title">{{ item.title }}</div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
              <v-card flat>
                <v-card-text>
                  <v-card>
                    <v-card-text id="keyword-card">
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="keyword" label="Search" append-icon="mdi-magnify"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">

                          <v-skeleton-loader type="table-heading, list-item-two-line, image, table-tfoot">
                          </v-skeleton-loader>

                          <v-skeleton-loader type="table-heading, list-item-two-line, image, table-tfoot">
                          </v-skeleton-loader>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>

              </v-card>
            </v-sheet>
          </v-bottom-sheet>
        </div>

        <v-badge dot overlap>
          <v-icon large @click="sidebar = !sidebar" class="px-2" style="font-size: 3rem;"
            :class="menuSetting.bgColor == '#fff' ? '' : 'white--text '">
            mdi-menu
          </v-icon>
        </v-badge>

      </v-app-bar>
      <!--End mobile nav-->


      <!--   End: navbar   -->
    </header>

    <v-dialog v-model="notificationListDialog" fullscreen transition="dialog-bottom-transition" scrollable>
      <v-card id="notificationListCard">
        <v-card-text>
          <v-toolbar flat>
            <h2 class="main-title">Notifications</h2>
            <v-spacer></v-spacer>

            <v-btn icon @click="notificationListDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list three-line>
            <template v-for="(item, index) in notificationItems">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <div class="date">{{ item.date }}</div>
                  <v-list-item-title class="title" v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle class="describe" v-html="item.describe"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>


        </v-card-text>
      </v-card>
    </v-dialog>
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
          title: "About us",
          link: "/about-us",
          icon: "mdi-account-multiple",
          icon_color: ''
        },
        {
          title: "Services",
          link: "/services",
          icon: "mdi-view-module",
          icon_color: ''
        },
        {
          title: "Faq",
          link: "/faq",
          icon: "mdi-information",
          icon_color: ''
        },
        {
          title: "Offers",
          link: "/offers",
          icon: "mdi-wallet-giftcard",
          icon_color: 'primary'
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
      currentOpenDialog: '',
      mobileSearchSheet: false,
      searchFilterItems: [
        {
          icon: 'mdi-file',
          title: 'Paper',
          key: 'paper'
        },
        {
          icon: 'mdi-multimedia',
          title: 'Multimedia',
          key: 'multimedia'
        },
        {
          icon: 'mdi-text-box-edit',
          title: 'Exam',
          key: 'exam'
        },
        {
          icon: 'mdi-head-question-outline',
          title: 'Q & A',
          key: 'qa'
        },
        {
          icon: 'mdi-cast-education',
          title: 'Tutorial',
          key: 'tutorial'
        }
      ],
      mobileSearchFilter: '',
      keyword: '',

      user_profile_items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          link: '/user'
        },
        {
          title: 'Messages',
          icon: 'mdi-email-outline',
          link: '/user/ticket'
        },
        {
          title: 'Edit Profile',
          icon: 'mdi-account-outline',
          link: '/user/profile'
        },
        {
          title: 'Change Password',
          icon: 'mdi-key',
          link: '/user/edit-pass'
        },

      ],
      notificationListDialog: false,
      notificationItems: [
        {
          icon: 'mdi-table-furniture',
          date: 'Today, 11:48 am',
          title: 'Sample Question uploded',
          describe: 'Satisfied course question sample has been uploaded for your level of education.'
        },
        {
          icon: 'mdi-map-marker-check',
          date: 'Today, 11:48 am',
          title: 'Sample Question uploded',
          describe: 'Satisfied course question sample has been uploaded for your level of education.'
        },
      ],

      menuSetting: {
        logo: 'gamatrain-logo-black.svg',
        bgColor: '#fff',
        fixedStatus: false,
        linkColor: '#424A53',
        class: ''
      }

    };
  },
  mounted() {
    // if (window.innerWidth <= 960 && this.$auth.loggedIn) {
    //   this.$refs["notification-section"].getNotifications();
    // }

    if (this.$route.name == 'index' || this.$route.name == 'services') {
      this.menuSetting = {
        logo: 'gamatrain-logo.svg',
        bgColor: '#000',
        fixedStatus: true,
        linkColor: '#fff',
        class: 'transparentMenu'

      }
    }
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
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

    handleScroll() {
      if (this.$route.name == 'index' || this.$route.name == 'services')  
        if (window.scrollY > 60) {
          this.menuSetting = {
            logo: 'gamatrain-logo-black.svg',
            bgColor: '#fff',
            fixedStatus: true,
            linkColor: '#424A53',
            class: ''
          }
        } else {
          this.menuSetting = {
            logo: 'gamatrain-logo.svg',
            bgColor: '#000',
            fixedStatus: true,
            linkColor: '#fff',
            class: 'transparentMenu'

          }
        };
      }
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

      },

      "$route.name"(val) {
        if (val == 'index' || val == 'services') {
          this.menuSetting = {
            logo: 'gamatrain-logo.svg',
            bgColor: '#000',
            fixedStatus: true,
            linkColor: '#fff',
            class: 'transparentMenu'

          }
        } else {
          this.menuSetting = {
            logo: 'gamatrain-logo-black.svg',
            bgColor: '#fff',
            fixedStatus: false,
            linkColor: '#424A53',
            class: ''
          }
        }
      }
    },
  };
</script>


<style>
.v-application .primary {
  background-color: #FFB300 !important;
  border-color: #FFB300 !important;
}

.v-application .primary--text {
  color: #FFB300 !important;
}


.transparentMenu {
  background: transparent !important;
}


#main-header {
  .menu-item:hover {
    border-bottom: 3px solid rgb(0, 139, 139);
  }


  #main-menu {
    .v-btn {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      font-family: 'Helvetica Neue LT Std';
      line-height: normal;
    }

    .v-btn--active {
      border-bottom: 0.2rem solid #FFB300 !important;

      .v-btn__overlay {
        opacity: 0;
      }
    }


  }

  .menu_active {
    border-bottom: 4px solid white !important;
    background-color: rgba(255, 179, 0, 0.1) !important;
    color: #ffb300f3 !important;
  }

  .menu_group_active {
    border-bottom: 4px solid white !important;
    background-color: #e1e2e3;
    color: #000 !important;
  }

  .mobile_bar .v-toolbar__content {
    background: transparent;
    padding: 0 1.4rem 0 0.5rem !important;
  }

  .mobile_bar .fa-bell {
    line-height: 3rem !important;
    font-size: 2.8rem !important;
  }



}


#notificationListCard {
  .main-title {
    color: #424A53;
    font-size: 1.6rem !important;
    font-style: normal;
    font-weight: 750;
    line-height: 4.4rem;
  }


  .v-list-item__icon {
    margin-right: 1rem;

    .v-icon {
      font-size: 2.4rem;
      color: #FFB600 !important;
    }
  }


  .title {
    color: #424A53;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }

  .describe {
    color: #6E7781;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: 2rem;
  }

  .date {
    color: #6E7781;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
  }
}



#main-logo {
  width: 12.0827rem !important;
  height: 3rem !important;

}




@media only screen and (max-width: 600px) {
  #main-logo {
    margin-left: 1.6rem !important;
    width: 8.0551rem !important;
    height: 2rem !important;
  }

  .mobile-search-sheet {
    height: 70vh;
    border-radius: 3rem 3rem 0 0;
    justify-content: center;
    align-items: center;

    .active-item {
      background: #FFB300;
      color: #000;

      .v-icon,
      .title {
        color: #fff;
      }
    }

    .v-icon {
      font-size: 2.4rem;
      color: #FF9400;
    }

    .title {
      margin-top: 0.2rem;
      color: #424A53;
      text-align: center;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.6rem;
    }

    #keyword-card {
      .v-icon {
        font-size: 2.4rem;
        color: #000000;
      }

      .primary--text {
        color: #000 !important;
      }
    }
  }


}

@media only screen and (min-width: 600px) and (max-width: 960px) {
  #main-logo {
    margin-left: 3rem !important;
    width: 1.6458rem;
    height: 1.6511rem;
  }

  .mobile-search-sheet {
    height: 50vh;
    border-radius: 3rem 3rem 0 0;
    justify-content: center;
    align-items: center;

    .active-item {
      background: #FFB300;
      color: #000;

      .v-icon,
      .title {
        color: #fff;
      }
    }

    .v-icon {
      font-size: 2.4rem;
      color: #FF9400;
    }

    .title {
      margin-top: 0.2rem;
      color: #424A53;
      text-align: center;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.6rem;
    }

    #keyword-card {
      .v-icon {
        font-size: 2.4rem;
        color: #000000;
      }

      .primary--text {
        color: #000 !important;
      }
    }
  }

  .v-badge__badge {
    color: #FFB300 !important;

  }
}
</style>

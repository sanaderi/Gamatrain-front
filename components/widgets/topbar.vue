<template>
  <div class="topbar d-none d-md-block">
    <v-container class="align-center justify-space-between topbar-items">
      <v-row>
        <v-col md="4" lg="2">
          <nuxt-link to="/" class="float-md-left pt-5">
            <v-img
              class="logo"
              :src="require('@/assets/images/' + logo)"
              max-width="150"
            />
          </nuxt-link>
        </v-col>
        <v-col md="5" lg="3">
          <!--  Start:  Search and logo in header  -->
          <search-box class="ml-lg-4 mt-4"/>
          <v-spacer></v-spacer>
          <!--  End:  Search and logo in header  -->
        </v-col>
        <v-col md="3" lg="7">
          <v-spacer/>
          <div class="float-md-right  pt-5">
            <div class="d-flex align-center" v-if="$auth.loggedIn">

              <v-menu
                transition="slide-x-transition"
                offset-y
                min-width="150"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <v-avatar size="32"
                    >
                      <v-img :src="$loadAvatar.currentUser($auth)" alt="user avatar"/>
                    </v-avatar>
                    <span class="pointer pa-2">{{ $auth.user.first_name }}</span>
                  </div>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in user_profile_items"
                    :key="i"
                    :to="item.link"
                  >
                    <v-list-item-title class="user_menu_title">
                      <v-icon small>
                        {{ item.icon }}
                      </v-icon>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    class="pointer"
                    @click="$auth.logout()"
                  >

                    <v-list-item-title class="user_menu_title">
                      <v-icon small>
                        mdi-logout
                      </v-icon>
                      Logout
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu
                transition="slide-x-transition"
                offset-y
                min-width="150"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div
                    v-bind="attrs" v-on="on"
                       class="notice-btn d-block align-center mr-3 ml-5
                        "
                  >
                    <v-chip x-small
                            color="red"
                            text-color="white"
                            class="px-1 ">
                      {{notifications.length}}
                    </v-chip>
                    <v-icon
                      size="28"
                      class="topbar-bell d-none d-sm-block"
                    >
                      mdi-bell-outline
                    </v-icon>

                  </div>
                </template>
                <v-card
                  height="400"
                  width="256"
                  class="mx-auto"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="text-h5">
                        Notifications
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider></v-divider>

                  <v-list
                    dense
                    nav
                  >
                    <v-list-item
                      v-for="item in notifications"
                      :to="`/user/ticket/detail/${item.id}`"
                      link
                    >
                      <v-list-item-icon class="mr-2">
                        <v-icon color="rgb(255, 193, 7)" large>
                          mdi-email</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <div v-html="item.body"/>
                          <div >{{item.subdate}}</div>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>


            </div>
            <div class="d-flex align-center" v-else>
              <v-btn plain @click="openLoginDialog">
                <i class="fa-solid fa-sign-in mr-1"></i>
                Login
              </v-btn>

              <v-btn plain @click="openRegisterDialog">
                <i class="fa-solid fa-user-plus mr-1"></i>
                Register
              </v-btn>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>

    <div>
      <!--Login component-->
      <login ref="login_modal" :switchToRegister.sync="currentOpenDialog"
             :switchToPassRecover.sync="currentOpenDialog"
      />
      <!--End login component-->

      <!--Register component-->
      <register ref="register_modal" :switchToLogin.sync="currentOpenDialog"/>
      <!--End register component-->

      <!--Recover password component-->
      <pass-recover ref="pass_recover_modal" :switchToLogin.sync="currentOpenDialog"
                    :switchToRegister.sync="currentOpenDialog"
      />
      <!--End recover password component-->


    </div>
  </div>
</template>

<script>
import Login from "@/components/common/login";
import Register from "@/components/common/register";
import SearchBox from "@/components/common/search-box";
import PassRecover from "@/components/common/pass-recover";

export default {
  name: "top-bar",
  data() {
    return {
      logo: "mainlogo-gamatrain.png",
      avatar: "dexter-morse.png",
      items: [
        {title: "Dashboard", icon: "mdi-view-dashboard"},
        {title: "Photos", icon: "mdi-image"},
        {title: "About", icon: "mdi-help-box"},
      ],

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
      right: null,
      currentOpenDialog: '',
      notifications: []
    };
  },
  components: {
    PassRecover,
    SearchBox,
    Register,
    Login
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
        this.$router.push({query: {}});
      } else if (val == 'register') {
        this.$refs.register_modal.register_dialog = true;
        this.$router.push({query: {}});
      }

    }
  },
  mounted() {
    if (this.$route.query.access === 'denied') {
      this.$refs.login_modal.login_dialog = true;
    }

  },
  methods: {
    openLoginDialog() {
      this.$refs.login_modal.login_dialog = true;
    },
    openRegisterDialog() {
      this.$refs.register_modal.register_dialog = true;
    },
  },

};
</script>
<style>
.user_menu_title {
  font-size: 1.2rem !important;
  padding: 1rem !important;
}

</style>

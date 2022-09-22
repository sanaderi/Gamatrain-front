<template>
  <div class="topbar d-none d-md-block">
    <v-container class="align-center justify-space-between topbar-items">
      <v-row>
        <v-col md="4" lg="2">
          <div class="align-center pt-5">
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
                        {{item.icon}}
                      </v-icon>
                      {{ item.title }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    class="pointer"
                    @click="$auth.logout()"
                  >

                    <v-list-item-title  class="user_menu_title">
                      <v-icon small>
                        mdi-logout
                      </v-icon>
                      Logout
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <nuxt-link to="/dashboard"
                         class="d-block align-center mr-3 ml-5 ">
                <i class="fa-regular fa-bell fa-xl topbar-bell d-none d-sm-block"></i>
              </nuxt-link>
            </div>
            <div class="d-flex align-center" v-if="!$auth.loggedIn">
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
        <v-col md="5" lg="3">
          <!--  Start:  Search and logo in header  -->
          <search-box class="ml-lg-4 mt-4"/>
          <v-spacer></v-spacer>
          <!--  End:  Search and logo in header  -->
        </v-col>
        <v-col md="3" lg="7">
          <nuxt-link to="/" class="float-md-right pt-5">
            <v-img
              class="logo"
              :src="require('@/assets/images/' + logo)"
              max-width="150"
            />
          </nuxt-link>
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
  name:"top-bar",
  data() {
    return {
      logo: "mainlogo4.png",
      avatar: "dexter-morse.png",
      items: [
        {title: "Dashboard", icon: "mdi-view-dashboard"},
        {title: "Photos", icon: "mdi-image"},
        {title: "About", icon: "mdi-help-box"},
      ],

      user_profile_items: [
        {
          title: 'Dashboard',
          icon:'mdi-view-dashboard',
          link: '/dashboard'
        },
        {
          title: 'Messages',
          icon:'mdi-email-outline',
          link: '/ticket'
        },
        {
          title: 'Edit profile',
          icon:'mdi-account-outline',
          link: '/info'
        },
        {
          title: 'Edit pass',
          icon:'mdi-key',
          link: '/dashboard/edit-pass'
        },

      ],
      right: null,
      currentOpenDialog: '',
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
.user_menu_title{
  font-size: 1.2rem!important;
  padding: 1rem!important;
}
</style>

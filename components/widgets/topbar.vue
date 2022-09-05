<template>
  <div class="topbar d-none d-sm-block">
    <v-container class="d-flex align-center justify-space-between topbar-items">
      <div class="d-flex align-center">
          <nuxt-link v-if="$auth.loggedIn" to="/user/dashboard">
            <v-avatar size="32">
              <v-img :src="$loadAvatar.currentUser($auth)" alt="user avatar"/>
            </v-avatar>
          </nuxt-link>
          <nuxt-link v-if="$auth.loggedIn" to="/user/dashboard" class="d-block align-center mr-3 ml-5 ">
            <i class="fa-regular fa-bell fa-xl topbar-bell d-none d-sm-block"></i>
          </nuxt-link>
        <div v-if="!$auth.loggedIn">
          <v-btn plain @click="openLoginDialog">
            <i class="fa-solid fa-sign-in mr-1"></i>
            Login
          </v-btn>

          <v-btn plain @click="openRegisterDialog">
            <i class="fa-solid fa-user-plus mr-1"></i>
            Register
          </v-btn>
        </div>


        <!--  Start:  Search and logo in header  -->
        <div
          class="
            d-flex
            align-center
            justify-space-between
            logo-search-content
            ml-8
          "
        >
          <div class="px-2 header-search desktop-search">
            <v-btn class="px-0 btn-transparent search-btn-icon">
              <v-icon class="search-icon mr-3">mdi-magnify</v-icon>
            </v-btn>
            <v-text-field
              class="py-1 my-0 search-field main-search-icon ml-2"
              placeholder="Search..."
            >
            </v-text-field>
          </div>
        </div>
        <!--  End:  Search and logo in header  -->
      </div>
      <v-spacer></v-spacer>
      <div>
        <nuxt-link to="/">
          <v-img
            class="logo"
            :src="require('@/assets/images/' + logo)"
            max-width="150"
          />
        </nuxt-link>
      </div>
    </v-container>

    <div>
      <!--Login component-->
      <login ref="login_modal" :switchToRegister.sync="currentOpenDialog"/>
      <!--End login component-->

      <!--Register component-->
      <register ref="register_modal" :switchToLogin.sync="currentOpenDialog"/>
      <!--End register component-->
    </div>
  </div>
</template>

<script>
import Login from "@/components/common/login";
import Register from "@/components/common/register";

export default {
  data() {
    return {
      logo: "mainlogo4.png",
      avatar: "dexter-morse.png",
      items: [
        {title: "Dashboard", icon: "mdi-view-dashboard"},
        {title: "Photos", icon: "mdi-image"},
        {title: "About", icon: "mdi-help-box"},
      ],
      right: null,
      currentOpenDialog: '',
    };
  },
  components: {
    Register,
    Login
  },
  watch: {
    currentOpenDialog(val) {
      if (val === 'login') {
        this.$refs.register_modal.register_dialog = false;
        this.$refs.login_modal.login_dialog = true;
      } else if (val === 'register') {
        this.$refs.login_modal.login_dialog = false;
        this.$refs.register_modal.register_dialog = true;
      } else {
        this.$refs.login_modal.login_dialog = false;
        this.$refs.login_modal.register_dialog = false;
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

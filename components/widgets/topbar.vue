<template>
  <div class="topbar d-none d-sm-block">
    <v-container class="d-flex align-center justify-space-between topbar-items">
      <div class="d-flex align-center">
        <nuxt-link to="">
          <v-avatar size="32">
            <img :src="require('@/assets/images/' + avatar)" alt="John"  />
          </v-avatar>
        </nuxt-link>

        <nuxt-link to="" class="d-flex align-center mr-3 ml-5 ">
          <i class="fa-regular fa-bell fa-xl topbar-bell d-none d-sm-block"></i>
        </nuxt-link>
        <!--  Start:  Search and logo in header  -->
        <div
          class="
            d-flex
            align-center
            justify-space-between
            logo-search-content
            mx-5
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "mainlogo4.png",
      avatar: "dexter-morse.png",
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
};
</script>

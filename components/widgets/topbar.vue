<template>
  <div class="topbar">
    <v-container class=" d-flex align-center justify-space-between topbar-items">
      <div class="d-flex align-center">
        <nuxt-link to="" class="d-flex align-center">
          <i class="fa-solid fa-user-plus icon"></i>
          <span class="mr-1">ثبت نام</span>
        </nuxt-link>
        <nuxt-link to="" class="d-flex align-center mr-4">
          <i class="fa-solid fa-right-to-bracket icon"></i>
          <span class="mr-1">ورود</span>
        </nuxt-link>
      </div>
      <div class="d-flex align-center">
        <nuxt-link to="" class="d-flex align-center me-4">
          <i class="fa-solid fa-phone icon"></i>
        </nuxt-link>
        <nuxt-link to="" class="d-flex align-center me-sm-4 me-0">
          <i class="fa-solid fa-gavel"></i>
        </nuxt-link>
        <nuxt-link to="" class="d-none d-sm-flex align-center me-4">
          <i class="fa-solid fa-info"></i>
        </nuxt-link>
        <nuxt-link to="" class="d-none d-sm-flex align-center">
          <i class="fa-solid fa-question"></i>
        </nuxt-link>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
}
</script>

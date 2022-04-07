<template>
  <div class="topbar">
    <v-container class=" d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <nuxt-link to="" class="d-flex align-center">
          <span class="mdi mdi-account-multiple-plus icon"></span>
          <span class="me-1">ثبت نام</span>
        </nuxt-link>
        <nuxt-link to="" class="d-flex align-center me-4">
          <span class="mdi mdi-login"></span>
          <span class="me-1">ورود</span>
        </nuxt-link>
      </div>
      <div class="d-flex align-center">
        <nuxt-link to="" class="d-flex align-center">
          <span class="mdi mdi-phone icon"></span>
        </nuxt-link>
        <nuxt-link to="" class="d-flex align-center me-4">
          <span class="mdi mdi-hammer"></span>
        </nuxt-link>
        <nuxt-link to="" class="d-flex align-center me-4">
          <span class="mdi mdi-information-variant"></span>
        </nuxt-link>
        <nuxt-link to="" class="d-flex align-center me-4">
          <span class="mdi mdi-help"></span>
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

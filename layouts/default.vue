<template>
  <v-app>
    <header1 />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import header1 from '../components/common/header.vue';
export default {
  components: {
    header1
  },
  data () {
    return {

    }
  },

}
</script>

<template>
  <v-app>
    <main_header />
    <div class="mt-16 mt-md-0">
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import main_header from '../components/common/header.vue';
import category from '../components/common/category'
import footer1 from '../components/common/footer'

export default {
  components: {
    main_header,
    category,
    footer1
  },
  data () {
    return {

    }
  },

}
</script>

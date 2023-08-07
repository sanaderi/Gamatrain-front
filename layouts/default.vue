<template>
  <v-app>
    <main_header />
    <div >
       <Nuxt />
    </div>
    <v-footer >
      <main_footer />
    </v-footer>
  </v-app>
</template>

<script>
import main_header from '../components/common/header.vue';
import category from '../components/common/category'
import main_footer from '../components/common/footer'

export default {
  name:'default_layout',
  components: {
    main_header,
    category,
    main_footer
  },
  data () {
    return {

    }
  },


}
</script>

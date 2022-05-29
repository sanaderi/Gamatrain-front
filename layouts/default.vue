<template>
  <v-app>
    <header1 />
    <div>
       <Nuxt />
    </div>
    <v-footer padless class="mt-2">
      <footer1 />
    </v-footer>
  </v-app>
</template>

<script>
import header1 from '../components/common/header.vue';
import popularHashtags from '../components/common/popular-hashtags'
import category from '../components/common/category'
import footer1 from '../components/common/footer'

export default {
  components: {
    header1,
    popularHashtags,
    category,
    footer1
  },
  data () {
    return {

    }
  },

}
</script>

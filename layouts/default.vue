<template>
  <v-app>
    <header1 />
    <popular-hashtags />
    <category />
    <div>
      <v-container>
        <Nuxt />
      </v-container>
    </div>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import header1 from '../components/common/header.vue';
import popularHashtags from '../components/common/popular-hashtags'
import category from '../components/common/category'
export default {
  components: {
    header1,
    popularHashtags,
    category
  },
  data () {
    return {

    }
  },

}
</script>

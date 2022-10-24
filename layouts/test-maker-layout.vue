<template>
  <v-app>
    <test-maker-header />
    <div class="mt-16 mt-md-0">
      <test-maker-menu/>
       <Nuxt />
    </div>
  </v-app>
</template>

<script>
import category from '../components/common/category'
import main_footer from '../components/common/footer'
import TestMakerHeader from "@/components/common/test-maker-header";
import TestMakerMenu from "@/components/test-maker/test-maker-menu";

export default {
  name:'default_layout',
  components: {
    TestMakerMenu,
    TestMakerHeader,
    category,
    main_footer,
  },
  data () {
    return {

    }
  },

}
</script>

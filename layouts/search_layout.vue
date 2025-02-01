<template>
  <v-app>
    <main_header />
    <div class="mt-16 mt-md-0">
      <NuxtPage />
    </div>
  </v-app>
</template>

<script>
import main_header from "../components/common/header.vue";
import footer1 from "../components/common/footer";

export default {
  name: "search_layout",
  components: {
    main_header,
    footer1,
  },
  data() {
    return {};
  },
};
</script>

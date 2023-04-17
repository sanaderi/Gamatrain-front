<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4">{{ page_info.title }}</h1>
        <p class="mt-3" v-html="page_info.describe"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  name: "static_page",
  async asyncData({params, $axios, error}) {
    const page_info = await $axios.$get(`/api/v1/pages/${params.static_page}`);

    if (page_info.length === 0)
      error({statusCode: 404, message: 'Page not found'})
    else
      return {page_info};
  },
  head() {
    return {
      title: this.page_info.title
    }
  }
}
</script>

<style scoped>

</style>

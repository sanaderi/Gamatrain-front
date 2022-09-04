<template>
  <v-container>
    <h2 class="text-center ma-16">
      <v-progress-circular color="primary" class="mr-2" size="30" indeterminate></v-progress-circular>
      Login
    </h2>
  </v-container>
</template>

<script>

import querystring from "querystring";

export default {
  name: "googleCallBack",
  auth: 'guest',
  async mounted() {
    const querystring = require('querystring');
    console.log(this.$route.query.code);

    await this.$axios.post('/api/v1/users/googleAuth',
      querystring.stringify({
        id_token: this.$route.query.code,
      })).then(response => {
      console.log(response);
    }).catch(({response}) => {
      if (response.status == 401) {
        this.$toast.error(this.$t(`LOGIN_WRONG_DATA`));
      } else if (response.status == 500 || response.status == 504) {
        this.$toast.error(this.$t(`REQUEST_FAILED`));
      }
    });
  }
}
</script>

<style scoped>

</style>

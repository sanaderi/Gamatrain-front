<template>
<v-container>
  <p>
    Wellcome dear {{this.$auth.user.first_name}}
  </p>

  <v-btn outlined @click="logout()">
    Logout
  </v-btn>
</v-container>
</template>

<script>
export default {
  name: "user-dashboard",
  methods:{
    logout(){
      this.$auth.logout();
    }
  }
}
</script>

<style scoped>

</style>

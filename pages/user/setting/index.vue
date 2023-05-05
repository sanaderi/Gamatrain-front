<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-left">
          <span class="text-h4 teal--text">
            <v-icon color="teal">
              mdi-account-cog-outline
            </v-icon>
           Settings
          </span>
      </v-col>


    </v-row>
    <v-card class="mt-3 pb-10" id="charge-wallet">

      <v-card-text class="px-sm-8 px-md-4">
        <v-row>
          <v-col cols="12" md="6">
            <v-switch
              color="teal"
              v-model="push_notice"
              label="Receive notifications (Push notifications)"
            ></v-switch>
          </v-col>
          <v-col cols="12" md="6">
            <v-switch
              color="teal"
              v-model="direct_msg"
              label="Receive direct message"
            ></v-switch>
          </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: "dashboard_layout",
  name: "user-setting",
  head() {
    return {
      title: 'Settings',
    }
  },
  data() {
    return {
      push_notice:false,
      direct_msg:true
    }
  },
  methods: {

  }
}
</script>

<style>


</style>

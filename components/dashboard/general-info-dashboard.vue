<template>
  <v-row>
    <v-col cols="12" md="8" class="d-flex pb-0">
      <v-btn class="d-flex" outlined fab x-large>
        <v-icon>
          mdi-account-outline
        </v-icon>
      </v-btn>
      <div class="pa-3">
        <p class="text-h4 ">
          <strong v-if="$auth.user.first_name || $auth.user.last_name">
            {{ $auth.user.first_name }} {{ $auth.user.last_name }}
          </strong>
          <strong v-else>
            No name
          </strong>

        </p>
        <p class="text-h5">
          High school student
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4" class="text-right pb-0">
      <!--Choose username-->
      <v-alert
        class="py-0 pl-5"
        prominent
      >
        <v-row>
          <v-col cols="12" md="12" class="pa-0 pa-md-3">
            <v-text-field
              v-model="username"
              filled
              dense
              class="mt-4 mb-0"
              label="Choose username"
              type="text"
            >
              <templete slot="append">
                <v-btn class="default"
                       absolute style="right: 0;height:80%;top: 10%;bottom: 0">
                  choose
                </v-btn>
              </templete>
            </v-text-field>
          </v-col>

        </v-row>
      </v-alert>
      <!--End choose username-->
    </v-col>


    <!--Profile complete progress-->
    <v-col cols="12" class="pt-0">
      <p class="text-h5 font-weight-bold mt-3 mb-3">
        Profile complete: 20%
      </p>
      <v-progress-linear
        color="teal"
        height="8"
        buffer-value="0"
        value="20"
        stream
      ></v-progress-linear>
    </v-col>
    <!--End profile complete progress-->
  </v-row>
</template>

<script>
export default {
  name: "general-info-dashboard"
}
</script>

<style scoped>

</style>

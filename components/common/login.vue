<template>
    <v-dialog
      v-model="login_dialog"
      max-width="300px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  dense
                  label="Email*"
                  required
                  outlined
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  outlined
                  dense
                  type="password"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  required
                />
                <a>
                  Forget password
                </a>
              </v-col>
              <v-col cols="12">
                <v-divider class="mb-3"/>
                <p class="text-h6 text-center pointer" @click="switchToRegister">
                  Not registered? register now
                </p>
                <v-divider class="mt-3"/>
              </v-col>
              <v-col cols="6">
                <v-btn outlined block @click="login_dialog=!login_dialog">
                  Cancel
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="primary" block >
                  Login
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      login_dialog: false,
      show1: false,
    }
  },
  methods:{
    switchToRegister() {
      this.$emit("update:switchToRegister",'register')
    }
  }
}
</script>

<style scoped>

</style>

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
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <v-row>
                <v-col cols="12">
                  <validation-provider v-slot="{ errors }" name="Email" rules="required|email">
                    <v-text-field
                      v-model="email"
                      dense
                      label="Email"
                      :error-messages="errors"
                      required
                      outlined
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="12">
                  <validation-provider v-slot="{ errors }" name="Password" rules="required">
                    <v-text-field
                      label="Password"
                      v-model="password"
                      outlined
                      :error-messages="errors"
                      dense
                      type="password"
                      :type="show1 ? 'text' : 'password'"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show1 = !show1"
                      required
                    />
                  </validation-provider>
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
                  <v-btn color="primary"
                         type="submit"
                         :disabled="invalid"
                         block
                         :loading="login_loading">
                    Login
                  </v-btn>
                </v-col>
              </v-row>
            </form>
          </validation-observer>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  name: "login",
  data() {
    return {
      login_dialog: false,
      show1: false,
      login_loading: false,
      email:'',
      password:''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    switchToRegister() {
      this.$emit("update:switchToRegister", 'register')
    },
    async submit() {
      this.login_loading=true;
      const querystring = require('querystring');
      await this.$axios.$post('/api/v1/users/login', querystring.stringify({
          identity: this.email,
          pass: this.password
      }),{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(response => {
        this.$auth.setUserToken(response.data.jwtToken);
        this.$auth.setUser(response.data.info);
        this.login_dialog=false;
        this.$toast.success("Logged in successfully");
        this.$router.push({
          path: "/user/dashboard"
        })
      }).catch(err => {
        if (err.response.status==400)
          this.$toast.error(err.response.data.message);
      }).finally(()=>{
        this.login_loading=false;
      });
    },
  }
}
</script>

<style scoped>

</style>

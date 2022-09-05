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
        <v-row>
          <v-col cols="12" class="text-center">
            <v-divider class="my-2"/>
            <div v-show="google_login_loading">
              <v-progress-circular color="teal" class="mr-2" size="20" width="2" indeterminate>
              </v-progress-circular>
              <span style="font-size: 1.2rem"> Loading google sign in</span>
            </div>
            <div v-show="!google_login_loading" ref="googleLoginBtn"/>
          </v-col>
          <v-col cols="12">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <v-row>
                  <v-col cols="12">
                    <validation-provider v-slot="{ errors }" name="Email or Phone" rules="required">
                      <v-text-field
                        v-model="identity"
                        dense
                        label="Email or Phone"
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
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";
import querystring from "querystring";

export default {
  name: "login",
  data() {
    return {
      login_dialog: false,
      show1: false,
      login_loading: false,
      identity: '',
      password: '',


      google_login_loading: true

    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  mounted() {

  },
  watch:{
    login_dialog(val){
      if (val===true){
        //Initialize google login
        setTimeout(() => {
          window.google.accounts.id.initialize({
            client_id: process.env.GOOGLE_CLIENT_Id,
            callback: this.handleCredentialResponse,
            auto_select: true
          })

          window.google.accounts.id.renderButton(
            this.$refs.googleLoginBtn, {
              text: 'Login',
              size: 'large',
              width: '252',
              theme: 'outline' // option : filled_black | outline | filled_blue
            }
          );

          this.google_login_loading = false;
        }, 4000);
      }
    }
  },
  methods: {
    //Handle google login callback
    async handleCredentialResponse(response) {
      const querystring = require('querystring');

      await this.$axios.post('/api/v1/users/googleAuth',
        querystring.stringify({
          id_token: response.credential,
        })).then(response => {
        this.$auth.setUserToken(response.data.data.jwtToken);
        this.$auth.setUser(response.data.data.info);
        this.login_dialog = false;
        this.$toast.success("Logged in successfully");
        this.$router.push({
          path: "/user/dashboard"
        })
      }).catch(({response}) => {
        if (response.status == 401) {
          this.$toast.error(this.$t(`LOGIN_WRONG_DATA`));
        } else if (response.status == 500 || response.status == 504) {
          this.$toast.error(this.$t(`REQUEST_FAILED`));
        }
      });
    },

    switchToRegister() {
      this.$emit("update:switchToRegister", 'register')
    },
    async submit() {
      this.login_loading = true;
      const querystring = require('querystring');
      await this.$axios.$post('/api/v1/users/login', querystring.stringify({
        identity: this.identity,
        pass: this.password
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(response => {
        this.$auth.setUserToken(response.data.jwtToken);
        this.$auth.setUser(response.data.info);
        this.login_dialog = false;
        this.$toast.success("Logged in successfully");
        this.$router.push({
          path: "/user/dashboard"
        })
      }).catch(err => {
        if (err.response.status == 400)
          this.$toast.error(err.response.data.message);
      }).finally(() => {
        this.login_loading = false;
      });
    }
  }
}
</script>

<style scoped>
.btn-google {
  color: #545454;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #ddd;
}

.btn-google img {
  width: 30px;
  margin-right: 8px;
  max-width: 30px;
}
</style>

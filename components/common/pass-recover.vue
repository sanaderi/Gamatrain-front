<template>
  <v-dialog
    v-model="pass_recover_dialog"
    max-width="300px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Password recovery</span>
      </v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" class="text-center">
            <v-divider class="my-2"/>

            <div v-show="google_register_loading">
              <v-progress-circular color="teal" class="mr-2" size="20" width="2" indeterminate>
              </v-progress-circular>
              <span style="font-size: 1.2rem"> Loading google sign in</span>
            </div>
            <div v-show="!google_register_loading" ref="googleRegisterBtn"/>
          </v-col>
          <v-col cols="12">
            <div v-show="identity_holder">
              <validation-observer ref="observer" v-slot="{ invalid }">
                <form @submit.prevent="requestPassRecover()">
                  <v-row>
                    <v-col cols="12">
                      <validation-provider v-slot="{ errors }" name="request_identity" rules="required">
                        <v-text-field
                          dense
                          label="Email"
                          :error-messages="errors"
                          v-model="identity"
                          outlined
                        />
                      </validation-provider>
                    </v-col>

                    <v-col cols="12">
                      <v-divider class="mb-3"/>
                      <p class="text-h6 text-center pointer" >
                        <span @click="switchToLogin">Login</span>
                         |
                        <span @click="switchToRegister">Register</span>
                      </p>

                      <v-divider class="mt-3"/>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" lg="6">
                      <v-btn outlined @click="cancelPassRecover()">
                        Cancel
                      </v-btn>
                    </v-col>
                    <v-col cols="6" lg="6">
                      <v-btn color="primary" type="submit"
                             :loading="pass_recover_loading" :disabled="invalid">
                        Recover
                      </v-btn>
                    </v-col>
                  </v-row>
                </form>
              </validation-observer>
            </div>
            <div v-show="otp_holder">
              <!--Otp holder-->
              <v-col cols="12">
                <p class="text-h6">Please enter code received your email address?</p>
                <v-otp-input
                  v-model="otp"
                  :disabled="otp_loading"
                  length="5"
                  @finish="onFinish"
                ></v-otp-input>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-3 text-center "/>
                <v-btn plain class="text-none  pointer" @click="sendOtpCodeAgain()" :disabled="sendOtpBtnStatus">
                  Send code again
                  <span v-show="countDown" class="ml-3 ">{{ countDown }}</span>
                </v-btn>
              </v-col>
              <!--End otp holder-->
            </div>
            <div v-show="select_pass_holder">
              <!--Otp holder-->
              <v-col cols="12">
                <p class="text-h6">Please enter password</p>
                <validation-observer ref="final_reg_observer" v-slot="{ invalid }">
                  <form @submit.prevent="passRecover()">
                    <v-row>
                      <v-col cols="12">
                        <validation-provider v-slot="{ errors }" name="password" rules="required|min:4">
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
                      </v-col>
                      <!--     Confirm Password       -->
                      <v-col cols="12">
                        <validation-provider name="confirmPassword" v-slot="{errors}"
                                             rules="required|min:4|confirmed:password">
                          <v-text-field
                            v-model="confirmPassword"
                            type="password"
                            :error-messages="errors"
                            label="Confirm password"
                            dense
                            outlined>
                          </v-text-field>
                        </validation-provider>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="6" lg="6">
                        <v-btn outlined @click="cancelPassRecover()">
                          Cancel
                        </v-btn>
                      </v-col>
                      <v-col cols="6" lg="6">
                        <v-btn color="primary" type="submit" :loading="pass_recover_loading" :disabled="invalid">
                          Reset
                        </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </validation-observer>
              </v-col>

              <!--End otp holder-->
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";

export default {
  name: "pass-recover",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      pass_recover_dialog: false,
      google_register_loading: true,
      show1: false,
      password: '',
      confirmPassword: '',
      pass_recover_loading: false,

      otp: '',
      identity: '',
      otp_loading: false,
      countDown: 60,
      sendOtpBtnStatus: true,


      identity_holder: true,
      otp_holder: false,
      select_pass_holder: false,

    }
  },
  watch: {
    pass_recover_dialog(val) {
      if (val === true){
        //Initialize google login
        setTimeout(() => {
          window.google.accounts.id.initialize({
            client_id: process.env.GOOGLE_CLIENT_Id,
            callback: this.handleCredentialResponse,
            auto_select: true
          })

          window.google.accounts.id.renderButton(
            this.$refs.googleRegisterBtn, {
              text: 'Login',
              size: 'large',
              width: '252',
              theme: 'outline' // option : filled_black | outline | filled_blue
            }
          );

          this.google_register_loading = false;
        }, 4000);
      }
    },
    countDown(val) {
      //When user wait 10 second
      if (val === 0)
        this.sendOtpBtnStatus = false;

      //When user request new otp code
      if (val === 60)
        this.countDownTimer()

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
        this.pass_recover_dialog = false;
        this.$toast.success("Logged in successfully");


        this.$router.push({
          path: "/user"
        });
      }).catch(({response}) => {
        if (response.status == 401) {
          this.$toast.error(this.$t(`LOGIN_WRONG_DATA`));
        } else if (response.status == 500 || response.status == 504) {
          this.$toast.error(this.$t(`REQUEST_FAILED`));
        }
      });
    },
    switchToLogin() {
      this.$emit("update:switchToLogin", 'login')
    },
    switchToRegister() {
      this.$emit("update:switchToRegister", 'register')
    },
    cancelPassRecover() {
      this.pass_recover_dialog = false;
      this.identity_holder = true;
      this.otp_holder = false;
      this.select_pass_holder = false;
    },
    requestPassRecover() {//First level
      this.pass_recover_loading = true;
      const querystring = require('querystring');

      this.$axios.$post("/api/v1/users/recovery",
        querystring.stringify({
          type: 'request',
          identity: this.identity
        })).then(response => {
        this.$toast.success("Otp code sent");
        this.identity_holder = false;
        this.otp_holder = true;
        this.countDownTimer();
      }).catch(err => {
        if (err.response.status == 400)
          this.$toast.error(err.response.data.message);
      }).finally(() => {
        this.pass_recover_loading = false;
      })
    },
    onFinish() {//Finish enter otp code--->Second step
      const querystring = require('querystring');

      this.$axios.$post("/api/v1/users/recovery",
        querystring.stringify({
          type: 'confirm',
          identity: this.identity,
          code: this.otp
        })).then(response => {
        this.otp_holder = false;
        this.select_pass_holder = true;
      }).catch(err => {
        if (err.response.status == 400)
          this.$toast.error(err.response.data.message);
      }).finally(() => {
        this.pass_recover_loading = false;
      })
    },
    sendOtpCodeAgain() {//Send otp code again
      const querystring = require('querystring');

      this.$axios.$post("/api/v1/users/recovery",
        querystring.stringify({
          type: 'resend_code',
          identity: this.identity
        })).then(response => {
        this.countDown = 60;
        this.sendOtpBtnStatus = true;
        this.$toast.success("Otp code sent again");
      }).catch(err => {
        if (err.response.status == 400)
          this.$toast.error(err.response.data.message);
      }).finally(() => {
        this.register_loading = false;
      })
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    passRecover() {//Final refister (level 3: receive password from user)
      this.pass_recover_loading = true;
      const querystring = require('querystring');

      this.$axios.$post("/api/v1/users/recovery",
        querystring.stringify({
          type: 'resetpass',
          identity: this.identity,
          pass: this.password
        })).then(response => {
        this.$toast.success("Password reset successfully");
        this.pass_recover_dialog = false;
        this.identity_holder = true;
        this.otp_holder = false;
        this.select_pass_holder = false;
      }).catch(err => {
        if (err.response.status == 400)
          this.$toast.error(err.response.data.message);
      }).finally(() => {
        this.pass_recover_loading = false;
      })
    },

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

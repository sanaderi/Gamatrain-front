<template>
    <v-dialog
      v-model="register_dialog"
      max-width="300px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Register</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12"  v-show="!otp_holder">
                <v-text-field
                  dense
                  label="Email*"
                  required
                  outlined
                />
                <p class="text-h6">
                  A agree <span class="blue--text">terms and conditions</span>
                </p>
              </v-col>
              <v-col cols="12" v-show="otp_holder">
                <p class="text-h6">Please enter code received your email addrees?</p>
                <v-otp-input
                  v-model="otp"
                  :disabled="otp_loading"
                  length="5"
                  @finish="onFinish"
                ></v-otp-input>
              </v-col>
              <v-col cols="12">
                <v-divider class="mb-3"/>
                <p v-show="!otp_holder" class="text-h6 text-center pointer" @click="switchToLogin">
                  Already registered? login now
                </p>
                <p v-show="otp_holder" class="text-h6 text-center pointer" @click="sendOtpCode">
                  Send code again
                </p>
                <v-divider class="mt-3"/>
              </v-col>
              <v-col cols="6">
                <v-btn outlined block @click="cancelRegister()">
                  Cancel
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="primary" block @click="sendOtpCode">
                  Register
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
  name: "register",
  data() {
    return {
      register_dialog: false,
      show1: false,

      otp:'',
      otp_holder:false,
      otp_loading:false,
    }
  },
  methods:{
    switchToLogin() {
      this.$emit("update:switchToLogin",'login')
    },
    cancelRegister(){
      this.register_dialog=false;
      this.otp_holder=false;
    },
    sendOtpCode(){
      this.otp_holder=true;
    },
    onFinish(){
      this.$toast.success("Register successed")
    }
  }
}
</script>

<style scoped>

</style>

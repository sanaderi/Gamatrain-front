<template>
  <v-dialog v-model="model" max-width="300px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Login</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-divider class="my-2" />
            <div v-show="google_login_loading">
              <v-progress-circular
                color="teal"
                class="mr-2"
                size="20"
                width="2"
                indeterminate
              >
              </v-progress-circular>
              <span style="font-size: 1.2rem"> Loading google sign in</span>
            </div>
            <div v-show="!google_login_loading" ref="googleLoginBtn" />
          </v-col>
          <v-col cols="12">
            <div v-show="identity_holder">
              <!-- <validation-observer ref="observer" v-slot="{ invalid }"> -->
              <form @submit.prevent="submit">
                <v-row>
                  <v-col cols="12">
                    <!-- <validation-provider
                      v-slot="{ errors }"
                      name="Email"
                      rules="required"
                    > -->
                    <v-text-field
                      v-model="identity"
                      dense
                      label="Email"
                      required
                      outlined
                    />
                    <!-- </validation-provider> -->
                  </v-col>
                  <v-col cols="12">
                    <!-- <validation-provider -->
                    <!-- v-slot="{ errors }" name="Password" rules="required" > -->
                    <v-text-field
                      label="Password"
                      v-model="password"
                      outlined
                      dense
                      type="password"
                      :type="passVisible ? 'text' : 'password'"
                      :append-icon="passVisible ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="passVisible = !passVisible"
                      required
                    />
                    <!-- </validation-provider> -->
                    <p @click="switchToPassRecover" class="pointer">
                      Forget password
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-divider class="mb-3" />
                    <p
                      class="text-h6 text-center pointer"
                      @click="switchToRegister"
                    >
                      Not registered? register now
                    </p>
                    <v-divider class="mt-3" />
                  </v-col>
                  <v-col cols="6">
                    <v-btn outlined block @click="model = !model">
                      Cancel
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      color="primary"
                      type="submit"
                      :disabled="invalid"
                      block
                      :loading="login_loading"
                    >
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
              <!-- </validation-observer> -->
            </div>

            <div v-show="otp_holder">
              <!--Otp holder-->
              <v-col cols="12">
                <p class="text-h6">
                  Please enter code received your email address?
                </p>
                <v-otp-input
                  v-model="otp"
                  :disabled="otp_loading"
                  length="5"
                  @finish="onFinish"
                ></v-otp-input>
              </v-col>

              <v-col cols="12">
                <v-divider class="mb-3" />
                <p
                  class="text-h6 text-center pointer"
                  @click="recheckEnteredIdentity"
                >
                  Your email is incorrect? recheck it.
                </p>

                <v-divider class="my-3 text-center" />
                <v-btn
                  plain
                  class="text-none pointer"
                  @click="sendOtpCodeAgain()"
                  :disabled="sendOtpBtnStatus"
                >
                  Send code again
                  <span v-show="countDown" class="ml-3">{{ countDown }}</span>
                </v-btn>
              </v-col>
              <!--End otp holder-->
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
const model = defineModel(false);
const passVisible = ref(false);
const login_loading = ref(false);
const identity = ref("");
const password = ref("");

const otp = ref("");
const otp_loading = ref(false);
const countDown = ref(60);
const sendOtpBtnStatus = ref(true);

const google_login_loading = ref(true);
const identity_holder = ref(true);
const otp_holder = ref(false);
watch(
  () => model,
  (val) => {
    alert("aa");
    if (val === true) {
      //Initialize google login
      setTimeout(() => {
        window.google.accounts.id.initialize({
          client_id:
            "231452968451-rd7maq3v4c8ce6d1e36uk3qacep20lp8.apps.googleusercontent.com",
          callback: this.handleCredentialResponse,
          auto_select: true,
        });
        window.google.accounts.id.renderButton(this.$refs.googleLoginBtn, {
          text: "Login",
          size: "large",
          width: "252",
          theme: "outline", // option : filled_black | outline | filled_blue
        });
        this.google_login_loading = false;
      }, 4000);
    }
  }
);

//Handle google login callback
const handleCredentialResponse = async (response) => {
  const querystring = require("querystring");

  await $fetch
    .post(
      "/api/v1/users/googleAuth",
      querystring.stringify({
        id_token: response.credential,
      })
    )
    .then((response) => {
      this.$auth.setUserToken(response.data.data.jwtToken);
      this.$auth.setUser(response.data.data.info);
      this.model = false;
      this.$toast.success("Logged in successfully");

      this.$router.push({
        path: "/user",
      });
    })
    .catch(({ response }) => {
      if (response.status == 401) {
        this.$toast.error(this.$t(`LOGIN_WRONG_DATA`));
      } else if (response.status == 500 || response.status == 504) {
        this.$toast.error(this.$t(`REQUEST_FAILED`));
      }
    });
};
const openDialog = () => {
  alert("step1");
  this.model = true;
  alert("step2");
};

const switchToRegister = () => {
  this.$emit("update:switchToRegister", "register");
};
const switchToPassRecover = () => {
  this.$emit("update:switchToPassRecover", "pass_recover");
};
const submit = async () => {
  this.login_loading = true;
  const querystring = require("querystring");
  await this.$fetch
    .$post(
      "/api/v1/users/login",
      querystring.stringify({
        identity: this.identity,
        pass: this.password,
        type: "request",
      }),
      {
        responseType: "text",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      if (response.data.type && response.data.type == "loginByOTP") {
        this.$toast.success("Otp code sent");
        this.identity_holder = false;
        this.otp_holder = true;
      } else {
        $auth.setUserToken(response.data.jwtToken);
        $auth.setUser(response.data.info);

        $toast.success("Logged in successfully");
        model = false;

        if (this.$route.path == "/")
          this.$router.push({
            path: "/user",
          });
      }
    })
    .catch((err) => {
      if (err.response.status == 400)
        this.$toast.error(err.response.data.message);
    })
    .finally(() => {
      this.login_loading = false;
    });
};
const onFinish = () => {
  //Finish enter otp code
  const querystring = require("querystring");

  this.$fetch
    .$post(
      "/api/v1/users/login",
      querystring.stringify({
        type: "confirm",
        identity: this.identity,
        pass: this.password,
        code: this.otp,
        type: "confirm",
      })
    )
    .then((response) => {
      this.model = false;
      this.otp_holder = false;
      this.identity_holder = true;
      this.$auth.setUserToken(response.data.jwtToken);
      this.$auth.setUser(response.data.info);

      this.$toast.success("Logged in successfully");

      if (this.$route.path == "/")
        this.$router.push({
          path: "/user",
        });
    })
    .catch((err) => {
      if (err.response.status == 400)
        this.$toast.error(err.response.data.message);
    })
    .finally(() => {
      this.register_loading = false;
    });
};
const recheckEnteredIdentity = () => {
  otp_holder.value = false;
  identity_holder.value = true;
};
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

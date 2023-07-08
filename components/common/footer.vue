<template>
    <v-container fluid class="footer-holder mb-8">
        <div class="footer-head d-flex justify-space-between align-center">
          <v-list-item class="footer-item">
            <nuxt-link
              to="/"
              class="d-md-flex align-center footer-item-link d-none"
            >
              <img
                :src="require(`~/assets/images/mainlogo-gamatrain.png`)"
                alt="Gamatrain"
                width="128"
              />
            </nuxt-link>
          </v-list-item>
        </div>
        <v-row>
          <v-col cols="12" md="5" sm="6" class="footer-items">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <p class="about-footer footer-titles mt-3">About us</p>
              </v-list-item>

              <v-list-item class="footer-item">
                <p class="about-footer-para font-size-15">
                  Since 2013, our team at GAMATrain has been working to improve global education system, specifically K-12 system. Our online education platform connects schools, teachers, students, and parents for better communication and knowledge sharing. GAMATrain’s ultimate goal is to promote fair and equal education opportunities around the world.
                </p>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links" cols="6" md="2" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">Services</p>
                </v-list-item>
              </v-list-item>

              <v-list-item class="footer-item">
                <nuxt-link to="/search?type=test" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Paper</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="/search?type=learnfiles" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">
                    Multimedia
                  </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="/search?type=question" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Q & A</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="/search?type=azmoon" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Exam</span>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links" cols="6" md="2" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">Help</p>
                </v-list-item>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="/contact-us" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Contact Us</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="/about-us" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">About Us</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="/faq" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">FAQ's</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="terms-and-conditions" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Terms and Conditions</span>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links" cols="12" md="3" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">Follow us</p>
                </v-list-item>
              </v-list-item>
              <div>
                <v-btn
                  v-for="(item,index) in social_media"
                  :key="index"
                  icon
                  :href="item.link"
                  target="_blank"
                  color="primary" min-width="0" width="40" class="mx-2">
                  <v-icon
                    :class="item.class" :color="item.color"> {{item.icon}}</v-icon>
                </v-btn>
              </div>
            </v-list>
          </v-col>
        </v-row>
    </v-container>
<!--    <div class="footer-bar">-->
<!--      <v-row>-->
<!--        <v-col-->
<!--          md="2"-->
<!--          cols="4"-->
<!--          class="d-flex justify-center footer-bar-item align-center">-->
<!--          <nuxt-link to="/search?type=azmoon">-->
<!--            Exam-->
<!--          </nuxt-link>-->
<!--        </v-col-->
<!--        >-->
<!--        <v-col-->
<!--          md="2"-->
<!--          cols="4"-->
<!--          class="d-flex justify-center footer-bar-item align-center"-->
<!--          >-->
<!--          <nuxt-link to="/search?type=test">-->
<!--            Paper-->
<!--          </nuxt-link>-->
<!--        </v-col-->
<!--        >-->
<!--        <v-col-->
<!--          md="2"-->
<!--          cols="4"-->
<!--          class="d-flex justify-center footer-bar-item align-center"-->
<!--          >-->
<!--          <nuxt-link to="/search?type=learnfiles">-->
<!--            Multimedia-->
<!--          </nuxt-link>-->
<!--        </v-col-->
<!--        >-->
<!--        <v-col-->
<!--          md="2"-->
<!--          cols="4"-->
<!--          class="d-flex justify-center footer-bar-item align-center"-->
<!--          >-->
<!--          <nuxt-link to="/search?type=question">-->
<!--            Q & A-->
<!--          </nuxt-link>-->
<!--        </v-col-->
<!--        >-->
<!--        <v-col-->
<!--          md="2"-->
<!--          cols="4"-->
<!--          class="d-flex justify-center footer-bar-item align-center"-->
<!--        >-->
<!--          <nuxt-link to="/search?type=dars">-->
<!--            Tutorial-->
<!--          </nuxt-link>-->
<!--        </v-col>-->
<!--        <v-col-->
<!--          md="2"-->
<!--          cols="4"-->
<!--          class="d-flex justify-center footer-bar-item align-center"-->
<!--          >-->
<!--          <nuxt-link to="/search?type=tutor">-->
<!--            Tutor-->
<!--          </nuxt-link>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </div>-->

</template>
<script>
export default {
  data: () => ({
    enamad: "enamad.png",
    secondEnamad: "enamad2.png",
    enamads: [
      {
        img: "enamad.png",
      },
      {
        img: "enamad2.png",
      },
    ],
    social_media: [
      {
        icon: "mdi-facebook",
        link: "https://facebook.com/gamatrain",
        color: "blue",
        class:''
      },{
        icon: "mdi-instagram",
        link: "https://www.instagram.com/gamatrain",
        color: "#e291b9",
        class:''
      },{
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/company/gamatrain",
        color: "#2588CB",
        class:''
      },{
        icon: "mdi-send",
        link: "https://t.me/gamatrain",
        color: "#2588CB",
        class:'mdi-rotate-315'
      },
    ],
  }),
};
</script>

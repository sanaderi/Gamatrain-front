<template>
    <v-container fluid >
      <v-container class="footer-holder mb-8">
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
          <div class="footer-social-icon d-md-flex d-none flex align-center">
            <nuxt-link to="" class="d-flex align-center">
              <img
                :src="require('@/assets/images/' + image.img)"
                alt=""
                v-for="(image,img) in images"
                :key="img"
                class="px-2"
              />
            </nuxt-link>
          </div>
        </div>
        <v-row>
          <v-col cols="12" md="4" sm="6" class="footer-items">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <p class="about-footer footer-titles mt-3">About us</p>
              </v-list-item>

              <v-list-item class="footer-item">
                <p class="about-footer-para">
                  Since 2013, our team at GAMATrain has been working to improve global education system, specifically K-12 system. Our online education platform connects schools, teachers, students, and parents for better communication and knowledge sharing. GAMATrain’s ultimate goal is to promote fair and equal education opportunities around the world.
                </p>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links mr-5" md="3" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">Services</p>
                </v-list-item>
              </v-list-item>

              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Terms and Conditions </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">FAQ's</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Terms and Conditions </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">FAQ's</span>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links" md="2" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">Help</p>
                </v-list-item>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Terms and Conditions </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">FAQ's</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">Terms and Conditions </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">FAQ's</span>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
<!--          <v-col md="2" sm="3" class="d-none d-md-block">-->
<!--            <div class="d-flex align-center mt-15">-->
<!--              <button>-->
<!--                <img :src="require('@/assets/images/' + enamad)" alt="" />-->
<!--              </button>-->
<!--              <button>-->
<!--                <img :src="require('@/assets/images/' + secondEnamad)" alt="" />-->
<!--              </button>-->
<!--            </div>-->
<!--          </v-col>-->
        </v-row>
      </v-container>
      <div
        class="
          footer-social-icon
          d-flex
          justify-space-around
          align-center
          d-md-none
        "
      >
        <p>Be with us</p>
        <div>
          <img
            :src="require('@/assets/images/' + item.img)"
            alt=""
            v-for="(item,bama) in images"
            :key="bama.img"
            class="px-2"
          />
        </div>
      </div>
<!--      <div class="d-flex d-sm-none justify-center my-5">-->
<!--        <div class="enamad d-flex" v-for="(item,enamad) in enamads" :key="enamad">-->
<!--          <img-->
<!--            :src="require('@/assets/images/' + item.img)"-->
<!--            alt=""-->
<!--            width="64"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
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
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
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
    images: [
      {
        img: "telegram.svg",
      },
      {
        img: "twitter.svg",
      },
      {
        img: "instagram.svg",
      },
      {
        img: "youtube.svg",
      },
    ],
  }),
};
</script>

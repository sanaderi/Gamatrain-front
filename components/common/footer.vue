<template>
  <div>
    <v-container class="py-2">
      <div class="footer-holder mb-8">
        <div class="footer-head d-flex justify-space-between align-center">
          <v-list-item class="footer-item">
            <nuxt-link
              to=""
              class="d-md-flex align-center footer-item-link d-none"
            >
              <img
                :src="require(`~/assets/images/mainlogo4.png`)"
                alt="گاما"
                width="128"
              />
            </nuxt-link>
          </v-list-item>
          <div class="footer-social-icon d-md-flex d-none flex align-center">
            <img
              :src="require('@/assets/images/' + item.img)"
              alt=""
              v-for="item in images"
              :key="item"
              class="px-2"
            />
          </div>
        </div>
        <v-row>
          <v-col cols="12" md="3" sm="6" class="footer-items ml-10">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <p class="about-footer footer-titles mt-3">درباره ما</p>
              </v-list-item>

              <v-list-item class="footer-item">
                <p class="about-footer-para">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links mr-5" md="3" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">خدمات مشتری</p>
                </v-list-item>
              </v-list-item>

              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">قوانین و مقررات </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">پرسش های متداول</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">قوانین و مقررات </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">پرسش های متداول</span>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col class="d-block footer-holder__links" md="3" sm="6">
            <v-list class="py-0">
              <v-list-item class="footer-item">
                <v-list-item class="footer-item">
                  <p class="about-footer footer-titles">راهنمای سایت</p>
                </v-list-item>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">قوانین و مقررات </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">پرسش های متداول</span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">قوانین و مقررات </span>
                </nuxt-link>
              </v-list-item>
              <v-list-item class="footer-item">
                <nuxt-link to="" class="d-flex align-center footer-item-link">
                  <span class="mr-2 footer-item-title">پرسش های متداول</span>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <c-col md="6" sm="3"></c-col>
        </v-row>
      </div>
      <div
        class="
          footer-social-icon
          d-flex
          justify-space-around
          align-center
          d-md-none
        "
      >
        <p>همراه ما باشید</p>
        <div>
          <img
            :src="require('@/assets/images/' + item.img)"
            alt=""
            v-for="item in images"
            :key="item"
            class="px-2"
          />
        </div>
      </div>
      <div class="d-flex d-sm-none justify-center my-5">
        <div class="enamad d-flex" v-for="enamad in enamads" :key="enamad">
          <img :src="require('@/assets/images/' + enamad.img)" alt=""  width="64"/>
        </div>
      </div>
    </v-container>
    <div class="footer-bar">
      <v-row>
        <v-col
          md="2"
          cols="4"
          class="d-flex justify-center footer-bar-item align-center"
          >معلم خصوصی</v-col
        >
        <v-col
          md="2"
          cols="4"
          class="d-flex justify-center footer-bar-item align-center"
          >معلم خصوصی</v-col
        >
        <v-col
          md="2"
          cols="4"
          class="d-flex justify-center footer-bar-item align-center"
          >معلم خصوصی</v-col
        >
        <v-col
          md="2"
          cols="4"
          class="d-flex justify-center footer-bar-item align-center"
          >معلم خصوصی</v-col
        >
        <v-col
          md="2"
          cols="4"
          class="d-flex justify-center footer-bar-item align-center"
          >معلم خصوصی</v-col
        >
        <v-col
          md="2"
          cols="4"
          class="d-flex justify-center footer-bar-item align-center"
          >معلم خصوصی</v-col
        >
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
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

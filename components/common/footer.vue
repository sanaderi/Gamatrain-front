<template>
  <v-container class="py-2">
    <div class="footer-holder">
      <v-row>
        <v-col cols="12" md="4" sm="6" class="footer-logo-section">
          <v-list class="py-0">
            <v-list-item class="footer-item">
              <nuxt-link to="" class="d-flex align-center footer-item-link">
                <img :src="require(`~/assets/images/mainlogo4.png`)" alt="گاما">
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
              <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-email"></span>
                <span class="mr-2 footer-item-title">تماس با ما</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-phone icon"></span>
                <span class="mr-2 footer-item-title">02191090966 </span>
                <br>
                <span class="mr-2 footer-item-title">100078000</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-email-outline icon"></span>
                <span class="mr-2 footer-item-title">info@gama.ir </span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-link-variant icon"></span>
                <span class="mr-2 footer-item-title">Gama.ir</span>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="d-none d-sm-block d-md-block footer-holder__links" md="4" sm="6">
          <v-list class="py-0">
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon icong-test"></span>
                <span class="mr-2 footer-item-title">نمونه سوال امتحانی</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon icong-learnfiles"></span>
                <span class="mr-2 footer-item-title">فیلم، پاورپوینت ومحتوای آموزشی</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon icong-azmoon"></span>
                <span class="mr-2 footer-item-title">آزمون آنلاین تستی</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon icong-qa"></span>
                <span class="mr-2 footer-item-title">پرسش های متداول</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-information-variant"></span>
                <span class="mr-2 footer-item-title">درباره ما</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-hammer"></span>
                <span class="mr-2 footer-item-title">قوانین و مقررات</span>
              </nuxt-link>
            </v-list-item>
            <v-list-item class="footer-item">
               <nuxt-link to="" class="d-flex align-center footer-item-link">
                <span class="icon mdi mdi-lock"></span>
                <span class="mr-2 footer-item-title">حریم خصوصی</span>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4"></v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>

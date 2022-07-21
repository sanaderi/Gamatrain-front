<template>
  <!-- Start : Sample Test -->
  <section class="sample">
    <v-container class="pb-md-16 pb-5">
      <div class="d-flex flex-column align-center my-6">
        <div class="sample-titles d-flex align-center ">
          <i class="icon icong-test title-icon d-flex algn-center"></i>
          <div class="sample-title mx-3">
            <p class="s-title">Related Sample Exams</p>
            <p class="s-subtitle">Check out the other sample exams...</p>
          </div>
        </div>
        <div class="sample-slider mt-10">
          <v-sheet class="mx-auto sample-width">
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for="n in 7" :key="n">
                <div class="book-sample pa-4 mx-2">
                  <div class="sample-img">
                    <img :src="require('@/assets/images/' + bookSample.sampleImg)" alt="" class="sample-image">
                    <span class="sample-test-number">
                        <p>{{ testNumber }}</p>
                      </span>
                  </div>
                  <div class="sample-text">
                    <p>
                      {{ bookSample.sampleText.length > 50 ? `${bookSample.sampleText.substring(0, 50)}...` : bookSample.sampleText }}</p>
                  </div>
                  <div class="sbook-footer d-flex justify-space-between align-center mt-4">
                    <div class="d-flex align-center">
                      <img :src="require('@/assets/images/' + bookSample.samplefooterImg)" alt="">
                      <p class="sfooter-name mx-2">{{ bookSample.sfooterName }}</p>
                    </div>
                    <nuxt-link to="" class="mb-0 sfooter-link">Online exam</nuxt-link>
                  </div>
                </div>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div>
      </div>
    </v-container>
  </section>
  <!-- End : Sample test -->
</template>

<script>
export default {
  name: "related-content",
  data(){
    return{
      bookSample: {
        sampleImg: "booksample.png",
        sampleText: "Test exam of 2nd to 8th chapter of Math 7th teacher of Esveh Isfahan University",
        samplefooterImg: "dexter-morse3.png",
        sfooterName: "Arian Etemdi"
      }
    }
  }
}
</script>

<style scoped>

</style>

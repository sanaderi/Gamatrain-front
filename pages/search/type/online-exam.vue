<template>
  <v-row class="online-exam">
    <v-col cols="12" class="online-exam-contents">
      <!-- Book Carousel -->
      <div class="book-carousel my-3">
        <v-container class="mx-0">
          <v-row>
            <v-col lg="2" cols="4" class="pa-0">
              <div class="
                          book-carousel-sub
                          d-flex
                          flex-column
                          align-center
                        ">
                <div class="
                            book-carousel-title
                            d-flex
                            flex-column
                            align-center
                            my-3
                          ">
                  <h4 class="text-center">With Album test</h4>
                  <p>{{ bookCarousel.carouselName }}</p>
                </div>
                <div class="carousel-img  my-3 d-flex justify-center">
                  <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="115"
                         max-width="90%" :src="require('@/assets/images/' +
                                                                bookCarousel.carouselImg)
                                                        " class="books-image"></v-img>
                </div>
                <div class="book-carousel-q  my-3">
                  <p>Lets Create Test</p>
                </div>
              </div>
            </v-col>
            <v-col lg="10" cols="8" class="pa-0">
              <v-sheet class="mx-auto book-carousel-books" elevation="8" max-width="900">
                <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                  <v-slide-item v-for="book in books" :key="book.value"
                                class="mx-2 slide-item mt-6">
                    <div>
                      <div class="book-body pa-5">
                                              <img :src="require('@/assets/images/' + book.img)"
                                                   alt="" class="book-body-image">
                        <nuxt-link to="">
                          <h3 class="book-title text-center">{{ book.title }}
                          </h3>
                        </nuxt-link>
                        <nuxt-link to="">
                          <div
                            class="book-test px-2 py-1 my-2 d-flex justify-space-between align-center">
                            <p class="test-number">{{ book.test }}</p>
                            <p>test</p>
                          </div>
                        </nuxt-link>
                        <nuxt-link to="">
                          <div
                            class="book-price  px-2 py-1  my-2 d-flex justify-space-between align-center">
                            <p class="price-number">{{ book.price }}</p>
                            <p>Dollar</p>
                          </div>
                        </nuxt-link>

                      </div>

                    </div>

                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- training-items-desktop -->
      <div class="online-exam-items online-exam-items-desktop d-block">
        <div class="online-exam-item pa-sm-6 pa-1 my-5" v-for="(item, index) in items"
             :key="index">
          <v-row>
            <v-col lg="2" cols="3" class="pa-0">
              <div class="item-img">
                <v-img v-if="item.lesson_pic" :src="item.lesson_pic"
                        class="item-image"></v-img>
                <v-card v-else class="book-no-img ">
                  <p class="font-weight-bold mb-3 mt-3">{{ item.lesson_title }}</p>
                  <a href="https://gamatrain.com">Gamatrain.com</a>
                </v-card>
              </div>
            </v-col>
            <v-col lg="10" cols="9" >
              <v-row class="online-exam-item-content
                          d-flex
                          flex-column
                          justify-space-between
                        ">
                <div class="item-content-title
                            d-flex
                            justify-space-between">
                  <p>
                    {{ item.title.length>54 ? item.title.substr(0,51)+'...' : item.title }}
                  </p>

                </div>
                <v-col cols="12" class="item-content-features">
                  <v-row>
                      <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                        <i class="fa-solid fa-list"></i>
                        <p class="mx-2 ">Questions: {{ item.tests_num }}
                        </p>
                      </v-col>
                      <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                        <i class="fa-solid fa-temperature-three-quarters"></i>
                        <p class="mx-2 ">Difficulty level: {{ item.level }} </p>
                      </v-col>
                      <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                        <i class="fa-solid fa-circle-play"></i>
                        <p class="mx-2 ">Start: {{ item.start_date ? item.start_date : '-' }} </p>
                      </v-col>
                      <v-col lg="3" cols="6" class="d-flex align-center py-2 px-0">
                        <i class="fa-solid fa-circle-stop"></i>
                        <p class="mx-2 ">End: {{ item.end_date ? item.end_date : '-' }} </p>
                      </v-col>
                  </v-row>
                </v-col>

                <div >
                  <v-chip link class="mr-1" small>
                    <nuxt-link to="">
                      {{ item.lesson_title }}
                    </nuxt-link>
                  </v-chip>
                  <v-chip link class="mr-1" small>
                    <nuxt-link to="">
                      {{ item.base_title }}
                    </nuxt-link>
                  </v-chip>
                  <v-chip link class="mr-1" small>
                    <nuxt-link to="">
                      {{ item.section_title }}
                    </nuxt-link>
                  </v-chip>
                </div>

                <div class="item-content-footer">

                  <div class="d-flex mt-3">
                    <div class="item-content-user d-flex align-center mr-2">
                      <v-avatar size="2em">
                        <img :src="require('assets/images/defaultAvatar1.jpg')"
                             alt="Avatar">
                      </v-avatar>
                      <p class="mx-2">{{ item.first_name }} {{ item.last_name }}</p>
                    </div>

                    <div
                      class="item-content-last-update d-flex align-center mx-auto">
                      <i class="fa-solid fa-calendar-days"></i>
                      <p class="mx-2">last update : {{ item.up_date }}</p>
                    </div>
                  </div>
                </div>
              </v-row>

            </v-col>
            <v-col cols="12" v-show="mobileTag" class="py-0">
              <div class="item-content-tags ">
                <v-chip link v-for="item in tags" class="mr-1">
                  <nuxt-link to="">
                    {{ item.tag }}
                  </nuxt-link>
                </v-chip>
              </div>
            </v-col>
            <v-col cols="12" v-show="isMobile">
              <TabsContentFooter :footerCard="item.footerCard">
              </TabsContentFooter>

            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["items"],
  name: "online-exam",
  data() {
    return {
      model: null,
      bookCarousel: {
        carouselName: "Create Test",
        carouselImg: "test.png",
      },
      books: [
        {
          img: "poster1.jpg",
          title: "Maths",
          test: "3405",
          price: "3405",
        },
        {
          img: "book2.png",
          title: "History",
          test: "3405",
          price: "3405",
        },
        {
          img: "book3.png",
          title: "Art",
          test: "3405",
          price: "3405",
        },
        {
          img: "book4.png",
          title: "Geography",
          test: "3405",
          price: "3405",
        },
        {
          img: "poster1.jpg",
          title: "Maths",
          test: "3405",
          price: "3405",
        },
        {
          img: "book2.png",
          title: "Maths",
          test: "3405",
          price: "3405",
        },
        {
          img: "poster1.jpg",
          title: "Maths",
          test: "3405",
          price: "3405",
        },
        {
          img: "book2.png",
          title: "History",
          test: "3405",
          price: "3405",
        },
        {
          img: "book3.png",
          title: "Art",
          test: "3405",
          price: "3405",
        },
        {
          img: "book4.png",
          title: "Geography",
          test: "3405",
          price: "3405",
        },

      ],
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-row class="training-content">
    <v-col cols="12" class="training-contents px-0">
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
                  <h4>Course</h4>
                  <p>{{ bookCarousel.carouselName }}</p>
                </div>
                <div class="carousel-img  my-3 d-flex justify-center">
                  <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="115"
                         max-width="90%" :src="
                                                            require('@/assets/images/' +
                                                                bookCarousel.carouselImg)
                                                        " class="books-image"></v-img>
                </div>
                <div class="book-carousel-q  my-3">
                  <p>complete courses</p>
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
                            class="book-season px-2 py-1 my-2 d-flex justify-space-between align-center">
                            <p class="season-number">{{ book.season }}</p>
                            <p>Season</p>
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
      <div class="training-items training-items-desktop ">
        <div class="training-item pa-1  pa-sm-6  my-5" v-for="(item, index) in items"
             :key="index">
          <v-row>
            <v-col lg="2" cols="3">
              <div class="item-img">
                <img :src="item.lesson_pic" alt=""
                     class="item-image"/>
              </div>
            </v-col>
            <v-col lg="10" cols="9" class="px-0">
              <div class="
                          training-item-content
                          d-flex
                          flex-column
                          justify-space-between
                        ">
                <div class="
                            item-content-title
                            d-flex
                            justify-space-between
                          ">
                  <nuxt-link :to="`/details/${item.id}/${item.title_url}`">
                    {{ item.title }}
                  </nuxt-link>


                  <div class="item-content-title-icon d-flex">
                    <svg width="51" height="30" viewBox="0 0 51 30" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M38.2498 3.87516L35.2536 0.878906L21.7811 14.3514L24.7773 17.3477L38.2498 3.87516ZM47.2598 0.878906L24.7773 23.3614L15.8948 14.5002L12.8986 17.4964L24.7773 29.3752L50.2773 3.87516L47.2598 0.878906ZM0.871094 17.4964L12.7498 29.3752L15.7461 26.3789L3.88859 14.5002L0.871094 17.4964Z"
                        fill="#EC4949"/>
                    </svg>
                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none"
                         xmlns="http://www.w3.org/2000/svg" class="mx-1">
                      <path
                        d="M34.375 4.57227H30.125V0.322266H8.875V4.57227H4.625C2.2875 4.57227 0.375 6.48477 0.375 8.82227V10.9473C0.375 16.366 4.455 20.786 9.70375 21.4448C11.0425 24.6323 13.9113 27.0335 17.375 27.7348V34.3223H8.875V38.5723H30.125V34.3223H21.625V27.7348C25.0888 27.0335 27.9575 24.6323 29.2963 21.4448C34.545 20.786 38.625 16.366 38.625 10.9473V8.82227C38.625 6.48477 36.7125 4.57227 34.375 4.57227ZM4.625 10.9473V8.82227H8.875V16.9398C6.41 16.0473 4.625 13.7098 4.625 10.9473ZM34.375 10.9473C34.375 13.7098 32.59 16.0473 30.125 16.9398V8.82227H34.375V10.9473Z"
                        fill="#F9A825"/>
                    </svg>
                    <svg width="51" height="40" viewBox="0 0 51 52" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.1094 22.5998L19.455 18.9453L17.2014 21.1989L23.1094 27.1069L33.7987 16.4176L31.5452 14.1641L23.1094 22.5998Z"
                        fill="#32BA91"/>
                      <path
                        d="M43.0312 20.0723C43.0312 10.3918 35.1836 2.54102 25.5 2.54102C15.8196 2.54102 7.96875 10.3918 7.96875 20.0723C7.96875 26.782 11.7443 32.6071 17.2826 35.554L15.9375 50.3535L25.5 43.9785L35.0625 50.3535L33.7174 35.554C36.5296 34.0627 38.8825 31.8336 40.5234 29.106C42.1643 26.3784 43.0313 23.2554 43.0312 20.0723V20.0723ZM25.5 34.416C17.5775 34.416 11.1562 27.9948 11.1562 20.0723C11.1562 12.1497 17.5775 5.72852 25.5 5.72852C33.4225 5.72852 39.8438 12.1497 39.8438 20.0723C39.8438 27.9948 33.4225 34.416 25.5 34.416Z"
                        fill="#32BA91"/>
                    </svg>

                  </div>
                </div>

                <p class="item-content-subtitle mb-2 d-none d-sm-block">
                  <nuxt-link :to="`/tutorial-details/${item.id}/${item.title_url}`">
                    {{ item.description.substr(0,60) }}...
                  </nuxt-link>
                </p>

                <div class="item-content-tags d-flex">
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


              </div>
            </v-col>

          </v-row>


        </div>
      </div>
    </v-col>

    <v-row v-show="page_loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular
          :size="40"
          :width="4"
          class="mt-12 mb-12"
          color="orange"
          indeterminate
        />
      </v-col>
    </v-row>

  </v-row>
</template>

<script>
import TabsContentFooter from "@/components/common/tabs-content-footer";

export default {
  name: "training-contents",
  components: {TabsContentFooter},
  data() {
    return {
      page_loading: false,
      items: [],
      page: 1,

      bookCarousel: {
        carouselName: "List",
        carouselImg: "carouselBook.png",
      },

      books: [
        {
          img: "poster1.jpg",
          title: "Maths",
          season: "14",
          price: "3405",
        },
        {
          img: "book2.png",
          title: "History",
          season: "14",
          price: "3405",
        },
        {
          img: "book3.png",
          title: "Art",
          season: "14",
          price: "3405",
        },
        {
          img: "book4.png",
          title: "Geography",
          season: "14",
          price: "3405",
        },
        {
          img: "poster1.jpg",
          title: "Maths",
          season: "14",
          price: "3405",
        },
        {
          img: "book2.png",
          title: "Maths",
          season: "14",
          price: "3405",
        },
        {
          img: "poster1.jpg",
          title: "Maths",
          season: "14",
          price: "3405",
        },
        {
          img: "book2.png",
          title: "History",
          season: "14",
          price: "3405",
        },
        {
          img: "book3.png",
          title: "Art",
          season: "14",
          price: "3405",
        },
        {
          img: "book4.png",
          title: "Geography",
          season: "14",
          price: "3405",
        },

      ],


    }
  },
  mounted() {
    this.getTutorialList();
    this.scroll();
  },
  methods: {
    async getTutorialList() {
      this.page_loading = true;
      await this.$axios.$get('/api/v1/search',
        {
          params: {
            type: 'learnfiles',
            page: this.page,
          }
        }).then(response => {
        this.items.push(...response.data.list);
      }).catch(err => {

      }).finally(() => {
        this.page_loading = false;
      });
    },
    scroll() {//For infinite loading
      window.onscroll = () => {
        //Scroll position
        var scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight + 50;
        let bottomOfWindow = scrollPosition >= document.documentElement.offsetHeight

        //Avoid the number of requests
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }

        //Load next page
        if (bottomOfWindow) {
          this.page_loading=true;
          this.timer = setTimeout(() => {
            this.page++
            this.getTutorialList();
          }, 800)
        }
      }
    },
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="tutorial-items tutorial-items-desktop d-block">
    <div class="tutorial-item pa-1 pa-sm-6 my-5" v-for="item in items" :key="item.value">
      <v-row>
        <v-col lg="2" cols="3">
          <div class="item-img">
            <img :src="item.lesson_pic" alt=""
                 class="item-image">
          </div>
        </v-col>
        <v-col lg="10" cols="9" class="px-0">
          <div class="tutorial-content d-flex flex-column justify-space-between">
            <div class="tutorial-title d-flex justify-space-between">
              <nuxt-link :to="`/details/${item.id}/${item.title_url}`">
                {{ item.title }}
              </nuxt-link>
            </div>
            <p class="item-content-subtitle mb-2 d-none d-sm-block">
              <nuxt-link :to="`/details/${item.id}/${item.title_url}`">
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
        <v-col cols="12" v-show="isMobile" class="py-1">
          <!-- <div class="item-content-footer">
              <div class="d-flex ">
                  <div class="item-content-user d-flex align-center mr-2">
                      <img :src="require('@/assets/images/' + item.userImg)" alt="">
                      <p class="mx-2">{{ item.user }}</p>
                  </div>

                  <div class="item-content-last-update d-flex align-center mr-2">
                      <i class="fa-solid fa-calendar-days"></i>
                      <p class="mx-2">{{ item.update }}</p>
                  </div>
              </div>
          </div> -->
        </v-col>
      </v-row>

    </div>
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

  </div>
</template>

<script>
import TabsContentFooter from "@/components/common/tabs-content-footer";
export default {
  name: "tutorials",
  components:{TabsContentFooter},
  data(){
    return{
      page_loading:false,
      items: [],
      page:1
    }
  },
  mounted() {
    this.getTutorialList();
    this.scroll();
  },
  methods:{
    async getTutorialList() {
      this.page_loading=true;
      await this.$axios.$get('/api/v1/search',
        {
          params: {
            type: 'test',
            page: this.page,
          }
        }).then(response => {
        this.items.push(...response.data.list);
      }).catch(err => {

      }).finally(()=>{
        this.page_loading=false;
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

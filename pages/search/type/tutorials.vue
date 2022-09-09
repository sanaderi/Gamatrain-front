<template>
  <div class="tutorial-items tutorial-items-desktop d-block">
    <div class="tutorial-item pa-1 pa-sm-6 my-5" v-for="item in items" :key="item.value">
      <v-row>
        <v-col lg="2" cols="3">
          <div class="item-img">
            <img v-if="item.lesson_pic" :src="item.lesson_pic" alt=""
                 class="item-image"/>
            <v-card v-else class="book-no-img ">
              <p class="font-weight-bold mb-3 mt-5">{{ item.lesson_title }}</p>
              <a href="https://gamatrain.com">Gamatrain.com</a>
            </v-card>
          </div>
        </v-col>
        <v-col lg="10" cols="9" class="px-0">
          <div class="tutorial-content d-flex flex-column justify-space-between">
            <div class="tutorial-title d-flex justify-space-between">
              <nuxt-link :to="`/tutorials/${item.id}/${item.title_url}`" class="text-h5 text-md-h4">
                {{ item.title.length>72 ? item.title.substr(0,69)+'...' : item.title }}
              </nuxt-link>
            </div>
            <p class="item-content-subtitle mb-2 d-none d-sm-block">
              <nuxt-link :to="`/tutorials/${item.id}/${item.title_url}`">
                {{ item.description.substr(0,60) }}....
              </nuxt-link>
            </p>
            <div class="item-content-tags d-flex">
              <v-chip link class="mr-1" small>
                <nuxt-link :to="`/search?type=${$route.query.type}&section=${item.section}&base=${item.base}&lesson=${item.lesson}`">
                  {{ item.lesson_title }}
                </nuxt-link>
              </v-chip>
              <v-chip link class="mr-1" small>
                <nuxt-link :to="`/search?type=${$route.query.type}&section=${item.section}&base=${item.base}`">
                  {{ item.base_title }}
                </nuxt-link>
              </v-chip>
              <v-chip link class="mr-1" small>
                <nuxt-link :to="`/search?type=${$route.query.type}&section=${item.section}`">
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
</template>

<script>
import TabsContentFooter from "@/components/common/tabs-content-footer";
export default {
  name: "tutorials",
  components:{TabsContentFooter},
  props:["items"],
  data(){
    return{

    }
  },
  mounted() {
  },
  watch:{

  },
  methods:{


  }
}
</script>

<style scoped>

</style>

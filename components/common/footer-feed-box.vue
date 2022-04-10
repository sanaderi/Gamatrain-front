<template>
  <v-card
    :class="'mx-auto feed-card ' + feed.class "
  >
   <v-list>
        <v-subheader
          v-if="feed.header"
          :key="feed.header"
          v-text="feed.header"
          class="feed-header"
        ></v-subheader>


          <v-list-item
            v-for="(item, index) in feed.contentItemList" :key="index"
          >
            <nuxt-link to="" class="d-flex w-100">
            <v-list-item-avatar class="ma-0 ms-1">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="mb-1 feed-title">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="feed-subtitle">
                <span>توسط </span>
                <b>{{item.name}}</b>
                <span> {{item.date}} </span>
              </v-list-item-subtitle>
            </v-list-item-content>
            </nuxt-link>
          </v-list-item>
     <v-divider></v-divider>
     <div class="d-flex justify-space-between align-center pt-2 feed-card-footer">
       <nuxt-link to="latest" >
         <v-list-item>
           <v-icon class="mdi mdi-format-list-bulleted ms-1 footer-text"></v-icon>
           <span class="footer-text">موارد بیشتر</span>
         </v-list-item>
       </nuxt-link>
       <nuxt-link v-if="(feed.class == 'learning') || (feed.class == 'question')" to="" class="add-file">
         <v-list-item>
         <v-icon class="mdi mdi-plus-circle"></v-icon>
         </v-list-item>
       </nuxt-link>
     </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    feed: Object
  },
  data() {
    return {

    }
  }
}
</script>

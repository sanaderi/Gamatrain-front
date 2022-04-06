<template>
  <v-card
    class="mx-auto footer-feed-card"
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
            <v-list-item-avatar>
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

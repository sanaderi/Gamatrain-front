<template>
  <v-card :class="'mx-auto feed-card ' + feed.class">
    <v-list>
      <v-subheader
        v-if="feed.header"
        class="d-flex align-center feed-header"
      >
        <span
          :class="
            'd-flex align-center me-2 icon icong-' +
            feed.icon +
            ' icon' +
            feed.class
          "
        ></span>
        {{ feed.header }}
      </v-subheader>

      <v-list-item
        v-for="(item, index) in feed.contentItemList"
        :key="index"
        class="feeds"
      >
        <nuxt-link to="" class="pa-2">
          <v-list-item-content class="pt-0 pr-1">
            <p class="mb-1 feed-title">{{ item.title }}</p>
            <v-list-item-subtitle
              class="feed-subtitle d-flex justify-space-between"
            >
              <div class="d-flex align-center">
                <v-list-item-avatar class="ma-0 ms-1 ml-3 avatar-parent">
                    <v-img
                      :src="require('@/assets/images/' + item.avatar)"
                    ></v-img>
                </v-list-item-avatar>
                <p>{{ item.name }}</p>
              </div>
              <div class="d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <span class="d-flex align-center"> {{ item.date }} </span>
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-divider></v-divider>
        </nuxt-link>
      </v-list-item>
      <!-- <v-divider></v-divider> -->
      <div
        class="d-flex justify-space-between align-center pt-2 feed-card-footer"
      >
        <nuxt-link to="latest">
          <v-list-item>
            <!-- <v-icon
              class="mdi mdi-format-list-bulleted ms-1 footer-text"
            ></v-icon> -->
            <span class="footer-text">موارد بیشتر</span>
          </v-list-item>
        </nuxt-link>
        <nuxt-link
          v-if="
            feed.class == 'learning' ||
            feed.class == 'question' ||
            feed.class == 'news'
          "
          to=""
          class="add-file"
        >
          <v-list-item class="d-flex justify-center">
            <i class="fa-solid fa-plus"></i>
          </v-list-item>
        </nuxt-link>
      </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    feed: Object,
  },
  data() {
    return {};
  },
};
</script>
<style>

.avatar-parent {

  border-radius: 0.8rem;
}
</style>

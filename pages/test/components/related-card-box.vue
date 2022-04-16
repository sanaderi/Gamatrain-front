<template>
  <v-card
    :class="'mx-auto related-card ' + related.class "
  >
    <v-list>
      <v-subheader
        v-if="related.header"
        :key="related.header"
        class="d-flex align-center related-header"
      >
        <span :class="'d-flex align-center me-2 icon icong-' + related.icon + ' icon' + related.class"></span>
        {{related.header}}
      </v-subheader>


      <v-list-item
        v-for="(item, index) in related.contentItemList" :key="index"
      >
        <nuxt-link to="" class="d-flex flex-wrap w-100">
          <v-list-item-content class="related-content">
            <v-list-item-title class="mb-1 related-title">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </nuxt-link>
      </v-list-item>
      <v-divider></v-divider>
      <div class="d-flex justify-space-between align-center pt-2 related-card-footer">
        <nuxt-link to="latest" >
          <v-list-item class="extra-case">
            <i class="fa-solid fa-list ml-1 icon footer-text"></i>
            <span class="footer-text">موارد بیشتر</span>
          </v-list-item>
        </nuxt-link>
        <nuxt-link v-if="(related.class == 'learning') || (related.class == 'question')" to="" class="add-file">
          <v-list-item class="pa-0">
            <i class="fa-solid fa-plus ml-1 icon"></i>
            <span v-if="(related.class == 'learning')">ارسال فایل</span>
            <span v-else-if="(related.class == 'question')">ارسال پرسش</span>
          </v-list-item>
        </nuxt-link>
      </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    related: Object
  },
  data() {
    return {

    }
  }
}
</script>

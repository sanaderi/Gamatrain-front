<template>
  <div>
    <div class="feed-header d-none d-md-flex font-weight-bold">
      <img
        :src="require('@/assets/images/' + thirdFeedBoxIcon)"
        alt=""
        class="mx-2"
        width="28"
      />
      Latest News
    </div>

    <div class="d-flex flex-column pa-3">
      <div
        class="feed-box-item d-flex"
        v-for="feed in thirdFeedBox"
        :key="feed.value"
      >
        <div class="feedBoxImg">
          <img :src="require('@/assets/images/' + feed.img)" alt=""/>
        </div>
        <div
          class="
                    feed-content
                    pa-3
                    d-flex
                    flex-column
                    justify-space-between
                  "
        >
          <p>
            {{ feed.para }}
          </p>
          <div class="d-flex justify-space-between">
            <div class="feed-title">
              <i class="fa-solid fa-grip-vertical ml-2"></i>
              {{ feed.title }}
            </div>
            <div class="feed-date">
              <i class="fa-solid fa-calendar-days ml-2"></i>
              {{ feed.date }}
            </div>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
    </div>
    <div class="feed-footer d-flex align-center pa-3">
      <nuxt-link to="" class="pb-0 feed-more mr-4"
      >More
      </nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "latest-news",
  data(){
    return{
      thirdFeedBoxIcon: "News.png",
      thirdFeedBox: [
        {
          img: "laptop.png",
          para: "Lorem Epsom fake text with the production of incomprehensible simplicity from the printing industry and using...",
          title: "Training",
          date: "27 Jun",
        },
        {
          img: "laptop.png",
          para: "Lorem Epsom fake text with the production of incomprehensible simplicity from the printing industry and using...",
          title: "Training",
          date: "27 Jun",
        },
        {
          img: "laptop.png",
          para: "Lorem Epsom fake text with the production of incomprehensible simplicity from the printing industry and using...",
          title: "Training",
          date: "27 Jun",
        },
        {
          img: "laptop.png",
          para: "Lorem Epsom fake text with the production of incomprehensible simplicity from the printing industry and using...",
          title: "Training",
          date: "27 Jun",
        },
        {
          img: "laptop.png",
          para: "Lorem Epsom fake text with the production of incomprehensible simplicity from the printing industry and using...",
          title: "Training",
          date: "27 Jun",
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>

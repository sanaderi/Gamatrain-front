<template v-slot:extension>
  <div class="d-sm-none d-flex flex-column">
    <v-tabs v-model="tabs" centered>
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat class="d-flex flex-column pa-3">
          <v-card-text>
            <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon"></span>
               
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
              <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <img :src="require('@/assets/images/' + avatar)" alt="" />
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
              <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <img :src="require('@/assets/images/' + avatar)" alt="" />
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
              <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <img :src="require('@/assets/images/' + avatar)" alt="" />
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
              <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <img :src="require('@/assets/images/' + avatar)" alt="" />
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
      items: ["فایل های آموزشی", "پرسش ها", "اخبار"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icons: ["file.png", "ask.png", "News.png"],
      avatar: "dexter-morse.png",
    };
  },
};
</script>

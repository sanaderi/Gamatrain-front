<template v-slot:extension>
  <div class="d-md-none d-flex flex-column feed-tab">
    <v-tabs v-model="tabs" centered>
      <v-tabs-slider color="green"></v-tabs-slider>
      
      <v-tab v-for="(item, index) in items" :key="index" class="feed-tab-title">
      <img :src="require('@/assets/images/' + item.icon)" alt="" class="mx-1" width="20" height="20">
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs" class="feed-card ma-4">
      <v-tab-item>
        <v-card flat class="d-flex flex-column pa-3">
          <v-card-text>
            <p class="feed-p-res">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>

                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>

            <div
              class="
                feedtab-footer
                d-flex
                justify-space-between
                align-center
                pa-3
                mt-3
              "
            >
              <nuxt-link to="" class="pb-0 feed-file-more mr-4"
                >موارد بیشتر</nuxt-link
              >
              <nuxt-link
                to=""
                class="add-file-tab d-flex justify-center align-center"
              >
                <i class="fa-solid fa-plus add-file-icon"></i>
              </nuxt-link>
            </div>
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
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>

                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>

            <div
              class="
                feedtab-footer
                d-flex
                justify-space-between
                align-center
                pa-3
                mt-3
              "
            >
              <nuxt-link to="" class="pb-0 feed-ask-more mr-4"
                >موارد بیشتر</nuxt-link
              >
              <nuxt-link
                to=""
                class="add-ask-tab d-flex justify-center align-center"
              >
                <i class="fa-solid fa-plus add-ask-icon"></i>
              </nuxt-link>
            </div>
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
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>

                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
                <div class="feed-name mx-3">علیرضا داوودی</div>
              </div>
              <div class="date d-flex align-center">
                <i class="fa-solid fa-calendar-days mx-3"></i>
                <p>27 فروردین</p>
              </div>
            </div>
            <v-divider></v-divider>
            <p class="feed-p-res mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div class="d-flex justify-space-between px-3 my-5">
              <div class="avatar d-flex align-center">
                <span class="feed-icon">
                  <v-img
                    :src="require('@/assets/images/' + avatar)"
                    alt=""
                    cover
                    width="128"
                  />
                </span>
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
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
      items:[
        {
          icon:"file.png",
          title:"فایل های آموزشی"
        },
         {
           icon:"ask.png",
          title:"پرسش ها"
        },
         {
           icon:"News.png",
          title:"اخبار"
        },
      ],
      // items: ["فایل های آموزشی", "پرسش ها", "اخبار"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatar: "dexter-morse2.png",
    };
  },
};
</script>

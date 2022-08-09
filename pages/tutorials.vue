<template>
  <div>
    <FilterModal/>
    <!-- mobile header -->
    <div class="
        d-flex
        align-center
        justify-space-between
        logo-search-content
        mx-5
        d-flex d-sm-none ">
      <div class="pl-2 header-search mobile-res-search my-4">
        <v-btn class="px-0 btn-transparent search-btn-icon">
          <v-icon class="search-icon">mdi-magnify</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-text-field class="py-1 my-0 search-field main-search-icon mr-2 mt-4" placeholder="Search ...">
        </v-text-field>
      </div>
    </div>
    <!-- Start : sample-q -->
    <section class="tutorial">
      <v-container>
        <v-row>
          <v-col lg="3" class="d-none d-sm-block">
            <div class="tutorial-filter ">
              <v-select :items="item" label="Grade" outlined></v-select>
              <v-divider class="filter-divider my-5"></v-divider>
              <v-select :items="item" label="Book" outlined></v-select>
              <v-divider class="filter-divider my-5"></v-divider>
              <v-select :items="item" label="Title" outlined></v-select>
              <v-divider class="filter-divider my-5"></v-divider>
              <v-select :items="item" label="Sample question" outlined></v-select>
            </div>
          </v-col>
          <v-col lg="9" md="9" sm="12" class="tutorial-contents">
            <div class="tutorial-content">
              <v-breadcrumbs :items="breadcrumbs" class="tutorial-breadcrumb d-none d-md-block">
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
              <!-- header desktop -->
              <Tabs/>
              <!-- sample-q-items-desktop -->
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
                          <nuxt-link :to="`/tutorial-details/${item.id}/${item.title_url}`">
                            {{ item.title }}
                          </nuxt-link>
                        </div>
                        <p class="item-content-subtitle mb-2 d-none d-sm-block">
                          <nuxt-link :to="`/tutorial-details/${item.id}/${item.title_url}`">
                            {{ item.description }}
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
                        <div class="item-content-footer" v-show="isDesk">
                          <TabsContentFooter :footerCard="item.footerCard">
                          </TabsContentFooter>
                          <div class="d-flex mt-3">
                            <div class="item-content-user d-flex align-center mr-2">
                              <v-avatar size="2em">
                                <img :src="require('@/assets/images/defaultAvatar1.jpg')"
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
                      <TabsContentFooter :footerCard="item.footerCard">
                      </TabsContentFooter>
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
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>

</template>
<script>
import category from "~/components/common/category.vue";
import Pagination from "~/components/common/pagination.vue";
import FilterModal from "~/components/common/filter-modal.vue";
import Tabs from "~/components/common/tabs.vue";
import TabsContentFooter from "~/components/common/tabs-content-footer.vue";

export default {
  name: 'tutorials',
  layout: 'search_layout',
  components: {category, Pagination, FilterModal, Tabs, TabsContentFooter},


  data() {
    return {
      isDesk: true,
      isMobile: false,
      item: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      sampleFilters: [
        {
          filterTitle: "grade",
          filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          filterTitle: "Book",
          filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          filterTitle: "Title",
          filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          filterTitle: "Base",
          filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
      ],
      switchs: [
        {
          switchTitle: "Word",
        },
        {
          switchTitle: "PDF",
        },
        {
          switchTitle: "With Answer",
        },
        {
          switchTitle: "Free",
        },
      ],
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Olympiads',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'sample Question',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],

      items: [],
      page_loading:false,
      page: 1,
    }
  },
  mounted() {
    this.onResize();
    this.getTutorialList();
    window.addEventListener('resize', this.onResize);
    this.scroll();
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.isDesk = false
        this.isMobile = true
      }
    },
    async getTutorialList() {
      this.page_loading=true;
      await this.$axios.$get('/api/v1/search',
        {
          params: {
            type: 'tutorial',
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

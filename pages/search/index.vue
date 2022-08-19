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
    <section class="search-page">
      <v-container>
        <v-row>
          <v-col lg="3" class="d-none d-sm-block">
            <div class="search-filter">
              <search-filter :setBreadCrumbs.sync="breadcrumbs"/>
            </div>
          </v-col>
          <v-col lg="9" md="9" sm="12" class="search-contents">
            <div class="search-content">
              <v-breadcrumbs :items="breadcrumbs" class="search-breadcrumb d-none d-md-block">
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
              <!-- header desktop -->
              <Tabs ref="content_tabs"/>
              <!-- sample-q-items-desktop -->
              <div class="text-center" v-if="page_loading===false && items.length===0">
                Oops! no data found
              </div>
              <div v-else>
                <Test v-if="$route.query.type==='test'" :items="items"/>
                <TrainingContents v-else-if="$route.query.type==='learnfiles'" :items="items"/>
                <QuestionAnswer v-else-if="$route.query.type==='question'" :items="items"/>
                <OnlineExam v-else-if="$route.query.type==='azmoon'" :items="items"/>
                <Tutorials v-else-if="$route.query.type==='dars'" :items="items"/>
                <Teachers v-else-if="$route.query.type==='tutor'" :items="items"/>
              </div>
            </div>

          </v-col>
        </v-row>
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

      </v-container>
    </section>
  </div>

</template>


<script>
import Tabs from "@/components/common/tabs.vue";
import searchFilter from "@/components/search/filter";
import FilterModal from "@/components/common/filter-modal";
import OnlineExam from "@/pages/search/type/online-exam";
import QuestionAnswer from "@/pages/search/type/q-a";
import TrainingContents from "@/pages/search/type/training-contents";
import Test from "@/pages/search/type/sample-q";
import Tutorials from "@/pages/search/type/tutorials";
import Teachers from "@/pages/search/type/teachers";

export default {
  name: "searchPage",
  layout: 'search_layout',

  components: {
    Teachers,
    FilterModal,
    Tabs,
    searchFilter,
    OnlineExam,
    QuestionAnswer,
    TrainingContents,
    Test,
    Tutorials
  },
  data() {
    return {
      breadcrumbs: [],
      page_loading: false,
      page: 1,

      items: [],


    }
  },
  beforeMount() {
  },
  mounted() {
    this.getContentList();
    this.scroll();



  },

  watch: {
    "$route.query.type"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();

    },
    "$route.query.section"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();

    },
    "$route.query.base"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();
    },
    "$route.query.lesson"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();
    },
    "$route.query.topic"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();
    },
    "$route.query.test_type"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();
    },
    "$route.query.level"(val) {
      this.page = 1;
      this.items = [];
      this.getContentList();
    },
  },
  methods: {
    // Get content list
    async getContentList() {
      this.page_loading = true;
      await this.$axios.$get('/api/v1/search',
        {
          params: {
            type: this.$route.query.type,
            page: this.page,
            section: this.$route.query.section,
            base: this.$route.query.base,
            lesson: this.$route.query.lesson,
            topic: this.$route.query.topic,
            test_type: this.$route.query.test_type,
            level: this.$route.query.level
          }
        }).then(response => {
        this.items.push(...response.data.list);
        this.$refs.content_tabs.content_statistics = response.data.types_stats;
      }).catch(err => {

      }).finally(() => {
        this.page_loading = false;
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
          this.page_loading = true;
          this.timer = setTimeout(() => {
            this.page++
            this.getContentList();
          }, 800)
        }
      }
    },



  }

}
</script>

<style scoped>

</style>

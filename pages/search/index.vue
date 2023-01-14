<template>
  <div>

    <!--Mobile filter-->
    <v-row justify="center" class="d-block d-md-none">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition ">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"
                 class="d-block d-md-none"
                 min-width="40"
                 fixed bottom right style="z-index:10 "
                 x-large color="teal" dark rounded
          >
            <v-icon>
              mdi-filter
            </v-icon>
            <v-slide-x-reverse-transition>
              <span v-show="expandFilterMenu" class="text-h6">
                filter
              </span>
            </v-slide-x-reverse-transition>


          </v-btn>
        </template>
        <v-card>
          <div style="position: sticky;top: 0;left: 0;right: 0;z-index: 10">
            <v-toolbar class="filter-btn-header">
              <v-toolbar-items>
                <v-btn text @click="dialog = false">
                  Search in content
                </v-btn>
              </v-toolbar-items>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <div class="filter-btn-result my-4">
              <p class="text-right mx-4 transparent" :class="result_count==0 ? 'red--text' : ''">Result :
                {{ result_count }}</p>
            </div>
          </div>
          <v-card-text>
            <search-filter ref="side_filter" class="mx-3"/>
          </v-card-text>
          <v-card-actions style="position: sticky;bottom: 0;left: 0;right: 0">
            <v-btn medium block class="filter-show-result mr-4" @click="dialog=!dialog">
              show result
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>


    <v-divider></v-divider>
    <!--     Start:mobile header-->
    <search-box class="d-block d-md-none mx-3 my-2"/>
    <!--     End: mobile header-->


    <!-- Start : sample-q -->
    <section class="search-page">
      <v-container>
        <v-row>
          <v-col lg="3" class="d-none d-md-block">
            <div class="search-filter">
              <search-filter ref="side_filter" :setBreadCrumbs.sync="breadcrumbs"/>
            </div>
          </v-col>
          <v-col lg="9" md="9" sm="12" class="search-contents px-0">
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
                <Paper v-if="$route.query.type==='test'" :items="items"/>
                <Multimedia v-else-if="$route.query.type==='learnfiles'" :items="items"/>
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
import Multimedia from "@/pages/search/type/multimedia.vue";
import Paper from "@/pages/search/type/paper";
import Tutorials from "@/pages/search/type/tutorials";
import Teachers from "@/pages/search/type/teachers";
import searchBox from "@/components/common/search-box";

export default {
  auth: false,
  name: "searchPage",
  layout: 'search_layout',

  components: {
    Teachers,
    FilterModal,
    Tabs,
    searchFilter,
    OnlineExam,
    QuestionAnswer,
    Multimedia,
    Paper,
    Tutorials,
    searchBox
  },

  async asyncData({query}) {
    var page_title = '';
    if (query.type === 'learnfiles')
      page_title = 'Presentation';
    else if (query.type === 'test')
      page_title = 'Exam Papers';
    else if (query.type === 'question')
      page_title = 'Q & A';
    else if (query.type === 'azmoon')
      page_title = 'Online exam';
    else if (query.type === 'dars')
      page_title = 'Tutorial';
    else if (query.type === 'tutor')
      page_title = 'Teacher';

    return {page_title};

  },
  head() {
    return {
      title: this.page_title,
    }
  },
  data() {
    return {
      breadcrumbs: [],
      page_loading: false,
      page: 1,

      items: [],

      // Mobile filter
      result_count: 0,
      dialog: false,

      all_files_loaded: false,

      expandFilterMenu: true
    }
  },


  mounted() {
    this.getContentList();
  },

  created() {
    if (process.client) {
      window.addEventListener('scroll', this.scroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.scroll);
    }
  },

  watch: {
    "$route.query.type"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      if (this.$route.query.type === 'learnfiles')
        this.page_title = 'Presentation';
      else if (this.$route.query.type === 'test')
        this.page_title = 'Exam Paper';
      else if (this.$route.query.type === 'question')
        this.page_title = 'Q & A';
      else if (this.$route.query.type === 'azmoon')
        this.page_title = 'Online exam';
      else if (this.$route.query.type === 'dars')
        this.page_title = 'Tutorial';
      else if (this.$route.query.type === 'tutor')
        this.page_title = 'Teacher';

      this.$refs.side_filter.setBreadcrumbInfo();

      this.getContentList();

    },
    "$route.query.section"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      //Fire when click on tag in content card, set section value on side filter
      if (val > 0)
        this.$refs.side_filter.section_val = val;
      else
        this.$refs.side_filter.section_val = 0;
      //End fire when click on tag in content card, set section value on side filter


      this.$refs.side_filter.setBreadcrumbInfo();
      this.getContentList();

    },
    "$route.query.base"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;


      //Fire when click on tag in content card, set base value on side filter
      if (val > 0)
        this.$refs.side_filter.base_val = val;
      else
        this.$refs.side_filter.base_val = 0;
      //Fire when click on tag in content card, set base value on side filter


      this.$refs.side_filter.setBreadcrumbInfo();

      this.getContentList();
    },
    "$route.query.lesson"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;


      //Fire when click on tag in content card, set lesson value on side filter
      if (val > 0)
        this.$refs.side_filter.lesson_val = val;
      else
        this.$refs.side_filter.lesson_val = 0;
      //End click on tag in content card


      //Set breadcrumbs info
      this.$refs.side_filter.setBreadcrumbInfo();
      this.getContentList();
    },
    "$route.query.topic"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.test_type"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.level"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.word"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.pdf"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.free"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.a_file"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      this.getContentList();
    },
    "$route.query.state"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      //Fire when click on tag in content card, set state value on side filter
      if (val > 0) {
        this.$refs.side_filter.state_val = val;
      } else {
        this.$refs.side_filter.state_val = 0;
      }
      //End fire when click on tag in content card, set state value on side filter

      this.getContentList();

    },
    "$route.query.city"(val) {
      this.page = 1;
      this.items = [];
      this.all_files_loaded = false;

      //Fire when click on tag in content card, set city value on side filter
      if (val > 0)
        this.$refs.side_filter.city_val = val;
      else
        this.$refs.side_filter.city_val = 0;
      //End fire when click on tag in content card, set section value on side filter

      this.getContentList();
    },

  },
  methods: {
    // Get content list
    async getContentList() {
      if (!this.all_files_loaded) {
        this.page_loading = true;
        let params={
          type: this.$route.query.type,
          page: this.page,
          section: this.$route.query.section,
          base: this.$route.query.base,
          lesson: this.$route.query.lesson,
          topic: this.$route.query.topic,
          test_type: this.$route.query.test_type,
          level: this.$route.query.level,
          pdf: this.$route.query.pdf,
          word: this.$route.query.word,
          free: this.$route.query.free,
          a_file: this.$route.query.a_file,
        };

        if (this.$route.query.type=='tutor'){
          params.state=this.$route.query.state;
          params.city=this.$route.query.city;
        }
        await this.$axios.$get('/api/v1/search',
          {
            params: params
          }).then(response => {
          this.items.push(...response.data.list);
          this.result_count = response.data.num;
          this.$refs.content_tabs.content_statistics = response.data.types_stats;
          if (response.data.list.length === 0)//For terminate auto load request
            this.all_files_loaded = true;
        }).catch(err => {

        }).finally(() => {
          this.page_loading = false;
        });
      }
    },
    scroll() {//For infinite loading

      //Section for control filter menu button on mobile device
      if (window.scrollY > 1000)
        this.expandFilterMenu = false;
      else
        this.expandFilterMenu = true;
      //End section for control filter menu button on mobile device


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
        if (bottomOfWindow && this.all_files_loaded === false) {
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

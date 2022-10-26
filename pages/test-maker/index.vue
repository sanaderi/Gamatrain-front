<template>
  <v-container class="mt-8" id="test-album">
    <v-row>
      <v-col cols="12" class="pl-5">
        <span class="text-h4 teal--text">
          <v-icon color="teal" large>
            mdi-image-album
          </v-icon>
            Album list
          </span>
      </v-col>
    </v-row>
    <v-card flat class="mt-3 pb-10 album-card">
      <v-card-text>
        <!--Filter section-->
        <v-row class="d-none d-md-flex">
          <v-col cols="12" md="3">
            <v-autocomplete
              dense
              v-model="filter.level"
              clearable
              :items="level_list"
              item-text="title"
              item-value="id"
              label="Level"
              outlined
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete
              dense
              v-model="filter.grade"
              clearable
              :items="grade_list"
              item-value="id"
              item-text="title"
              label="Grade"
              outlined
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete
              dense
              :items="lesson_list"
              item-value="id"
              item-text="title"
              v-model="filter.lesson"
              clearable
              label="Lesson"
              outlined
            />
          </v-col>
        </v-row>
        <!--End filter section-->

        <!--Album list-->
        <v-row>
          <v-col cols="12" class="text-center" v-if="page_loading===false && album_list.length===0">
            <p>
              Oops! no data found
            </p>
          </v-col>
          <v-col cols="12" md="3"
                 v-else
                 v-for="album in album_list">
            <v-card>
              <v-card-title class="text-h4">
                <nuxt-link :to="`/albums/${album.lesson}`">
                  {{ album.lesson_title }} album
                </nuxt-link>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="7">
                    <nuxt-link :to="`/albums/${album.lesson}`">
                      <v-img class="album-img" :src="album.lesson_pic"/>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="5" class="d-flex align-center justify-center pr-0">
                    <p class="price_label green--text" v-show="album.price==='0'">
                      Free
                    </p>
                    <p class="price_label" v-show="album.price!=='0'">
                      <span class="red--text">
                        ${{ album.price|numberFormat }}
                      </span>
                      <br>
                      <br>
                      <span class="subscription_label">
                        Yearly subscription
                      </span>
                    </p>


                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-divider/>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-chip label class="test-count-label">
                  <span class="label-text">Test count:&nbsp; </span>
                  <span class="label-val">{{ album.tests_num | numberFormat }}</span>
                </v-chip>
              </v-card-actions>
            </v-card>
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

        <!--End album list-->

      </v-card-text>


    </v-card>

  </v-container>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import TopicSelector from "@/components/form/topic-selector";


export default {
  layout: "test-maker-layout",
  name: "test-maker",
  head() {
    return {
      title: 'Online exam albums'
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    TopicSelector
  },
  data() {
    return {
      test_step: 1,
      page_loading: false,
      page: 1,
      all_files_loaded: false,


      filter: {
        level: '',
        grade: '',
        lesson: '',
      },
      timepicker_menu: false,

      level_list: [],
      grade_list: [],
      field_list: [],
      lesson_list: [],
      album_list: []
    }
  },
  mounted() {
    this.getTypeList('section');
    this.getAlbumList();
    this.scroll();
  },
  watch: {
    "filter.level"(val) {
      this.filter.grade = '';
      this.filter.lesson = '';
      if (val)
        this.getTypeList('base', val);

      this.page = 1;
      this.all_files_loaded = false;
      this.album_list = [];
      this.getAlbumList();
    },
    "filter.grade"(val) {
      this.filter.lesson = '';
      if (val)
        this.getTypeList('lesson', val);

      this.page = 1;
      this.all_files_loaded = false;
      this.album_list = [];
      this.getAlbumList();
    },
    "filter.lesson"(val) {
      this.page = 1;
      this.all_files_loaded = false;
      this.album_list = [];
      this.getAlbumList();
    }
  },
  methods: {
    getTypeList(type, parent = '') {
      var params = {
        type: type
      }
      if (type === 'base')
        params.section_id = parent;
      if (type === 'lesson') {
        params.base_id = parent;
      }


      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        var data = {};
        if (type === 'section') {
          this.level_list = res.data;
        } else if (type === 'base') {
          this.grade_list = res.data;

        } else if (type === 'lesson') {
          this.lesson_list = res.data;
        }
      }).catch(err => {
        this.$toast.error(err);
      })
    },
    getAlbumList() {
      if (!this.all_files_loaded) {
        this.page_loading = true;
        this.$axios.$get('/api/v1/albums', {
          params: {
            perpage: 12,
            section: this.filter.level,
            base: this.filter.grade,
            lesson: this.filter.lesson
          }
        })
          .then(response => {
            this.album_list.push(...response.data.list);

            if (response.data.list.length === 0)//For terminate auto load request
              this.all_files_loaded = true;
          }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.page_loading = false;
        });
      }
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
        if (bottomOfWindow && this.all_files_loaded === false) {
          this.page_loading = true;
          this.timer = setTimeout(() => {
            this.page++
            this.getAlbumList();
          }, 800)
        }
      }
    },

  }
}
</script>

<style scoped>

</style>

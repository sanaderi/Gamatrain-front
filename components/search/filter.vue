<template>
  <div>
    <!--Selected filter, user can disable any filter from here-->
    <div v-if="enabledAppliedFilter()">
      <p>Applied filter</p>
      <v-divider class="mb-1"/>
      <v-chip
        v-if="applied_filter.select_section_title"
        class="mt-1"
        close
        label
        outlined
        @click:close="section_val = 0"
      >
        {{ applied_filter.select_section_title }}
      </v-chip>
      <v-chip
        v-if="applied_filter.select_base_title"
        class="mt-1"
        close
        label
        outlined
        @click:close="base_val = 0"
      >
        {{ applied_filter.select_base_title }}
      </v-chip>
      <v-chip
        v-if="applied_filter.select_lesson_title"
        class="mt-1"
        close
        label
        outlined
        @click:close="lesson_val = 0"
      >
        {{ applied_filter.select_lesson_title }}
      </v-chip>
      <v-chip
        v-if="applied_filter.select_topic_title"
        class="mt-1"
        close
        label
        outlined
        @click:close="topic_val = 0"
      >
        {{ applied_filter.select_topic_title }}
      </v-chip>
      <v-chip
        v-if="applied_filter.select_file_type_title"
        class="mt-1"
        close
        label
        outlined
        @click:close="file_type_val = 0"
      >
        {{ applied_filter.select_file_type_title }}
      </v-chip>
      <v-chip
        v-if="applied_filter.select_test_level_title"
        class="mt-1"
        close
        label
        outlined
        @click:close="test_level_val = 0"
      >
        {{ applied_filter.select_test_level_title }}
      </v-chip>
    </div>
    <!--End select filter  -->
    <div>
      <p class="mt-5">Grade</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 200px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 110px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-radio-group
              v-model="section_val"
              class="mt-0 pr-0"
              column
            >
              <v-radio
                label="All"
                color="red"
                :value="0"
              >
              </v-radio>
              <v-radio v-for="item in filter.section_list"
                       :label="item.title"
                       color="red"
                       :value="item.id"
              >
              </v-radio>

            </v-radio-group>
          </v-col>


        </v-row>
      </v-container>
    </div>

    <!--Base filter-->
    <div v-show="filter.base_list.length>0">
      <p class="mt-5">Base</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 200px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 110px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-radio-group
              v-model="base_val"
              @change="changeBaseVal"
              class="mt-0 pr-0"
              column
            >
              <v-radio
                label="All"
                color="red"
                :value="0"
              >
              </v-radio>
              <v-radio v-for="item in filter.base_list"
                       :label="item.title"
                       color="red"
                       :value="item.id"
              >
              </v-radio>

            </v-radio-group>
          </v-col>


        </v-row>
      </v-container>
    </div>

    <!--Lesson filter-->
    <div v-show="filter.lesson_list.length>0">
      <p class="mt-5">Lesson</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 200px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 110px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-radio-group
              @change="changeLessonVal"
              v-model="lesson_val"
              class="mt-0 pr-0"
              column
            >
              <v-radio
                label="All"
                color="red"
                :value="0"
              >
              </v-radio>
              <v-radio v-for="item in filter.lesson_list"
                       :label="item.title"
                       color="red"
                       :value="item.id"
              >
              </v-radio>

            </v-radio-group>
          </v-col>


        </v-row>
      </v-container>
    </div>

    <!--Topic filter-->
    <div v-show="filter.topic_list.length>0">
      <p class="mt-5">Topic</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 200px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 110px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-radio-group
              @change="changeTopicVal"
              v-model="topic_val"
              class="mt-0 pr-0"
              column
            >
              <v-radio
                label="All"
                color="red"
                :value="0"
              >
              </v-radio>
              <v-radio
                v-for="item in filter.topic_list"
                :label="item.title"
                color="red"
                :value="item.id"
              >
              </v-radio>

            </v-radio-group>
          </v-col>


        </v-row>
      </v-container>
    </div>

    <!--File type filter-->
    <div v-show="filter.file_type_list.length>0">
      <p class="mt-5">{{ $route.query.type === 'test' ? 'Exam Paper' : 'Presentation' }} Type</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 200px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 110px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-radio-group
              @change="changeFileTypeVal"
              v-model="file_type_val"
              class="mt-0 pr-0"
              column
            >
              <v-radio
                label="All"
                color="red"
                :value="0"
              >
              </v-radio>
              <v-radio
                v-for="item in filter.file_type_list"
                :label="item.title"
                color="red"
                :value="item.id"
              >
              </v-radio>

            </v-radio-group>
          </v-col>


        </v-row>
      </v-container>
    </div>

    <!--Test level filter-->
    <div v-show="filter.test_level_list.length>0 && $route.query.type==='test'">
      <p class="mt-5">Level</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 200px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 110px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-radio-group
              v-model="test_level_val"
              class="mt-0 pr-0"
              column
            >
              <v-radio
                label="All"
                color="red"
                :value="0"
              >
              </v-radio>
              <v-radio
                v-for="item in filter.test_level_list"
                :label="item.title"
                color="red"
                :value="item.id"
              >
              </v-radio>

            </v-radio-group>
          </v-col>


        </v-row>
      </v-container>
    </div>


    <!--Test feature-->
    <div v-show="$route.query.type==='test'">
      <p class="mt-5">Test features</p>
      <v-divider class="mb-3"/>

      <v-container
        fluid
        id="scroll-target"
        style="max-height: 180px"
        class="overflow-y-auto"
      >
        <v-row
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
          style="height: 180px;overflow-x: hidden"
        >
          <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100%">
            <v-checkbox v-for="item in filter.test_feature_filter"
                        class="my-0" style="height: 4rem"
                        @change="changeTestFeature(item.value,item.checkbox)"
                        :hide-details="true"
                        color="red"
                        v-model="item.checkbox"
                        :label="item.label"
            />
          </v-col>


        </v-row>
      </v-container>
    </div>


  </div>
</template>

<script>

export default {
  name: "search-filter",
  props: {
    brandId: {
      default: 0,
      type: Number
    },
    cateId: {
      default: 0,
      type: Number
    },
  },
  data() {
    return {
      checkbox: 1,
      scrollInvoked: 0,

      section_loading: false,
      section_val: this.$route.query.section ? this.$route.query.section : 0,


      base_val: 0,
      lesson_val: 0,
      topic_val: 0,
      file_type_val: 0,
      test_level_val: 0,
      word_checkbox_val: false,
      pdf_checkbox_val: false,
      free_checkbox_val: false,
      answer_checkbox_val: false,


      applied_filter: {
        select_section_title: '',
        select_base_title: '',
        select_lesson_title: '',
        select_topic_title: '',
        select_file_type_title: '',
        select_test_level_title: ''
      },

      filter: {
        section_list: [],
        base_list: [],
        lesson_list: [],
        topic_list: [],
        file_type_list: [],
        test_level_list: [
          {
            id: '1',
            title: 'Simple'
          },
          {
            id: '2',
            title: 'Medium'
          },
          {
            id: '3',
            title: 'Hard'
          },
        ],
        test_feature_filter: [
          {
            checkbox: (this.$route.query.word === '1' ? true : false),
            label: "Word",
            value: 'word'
          },
          {
            checkbox: (this.$route.query.pdf === '1' ? true : false),
            label: "Pdf",
            value: "pdf"
          },
          {
            checkbox: (this.$route.query.free === '1' ? true : false),
            label: "Free",
            value: "free"
          },
          {
            checkbox: (this.$route.query.a_file === '1' ? true : false),
            label: "By answer",
            value: "a_file"
          },
        ]
      },

      breadcrumbs: []

    }
  },
  mounted() {
    var params = {
      type: 'section'
    };
    this.getFilterList(params, 'section');

    this.setBreadcrumbInfo();

    //Get sample exam test type
    if (this.$route.query.type === 'test')
      this.getFileType();


    if (this.$route.query.level > 0) {
      this.test_level_val = this.$route.query.level;
    }
  },
  watch: {
    "$route.query.type"(val) {
      this.filter.file_type_list = [];
      if (this.$route.query.type === 'test')
        this.getFileType();
    },
    section_val(val) {
      //Reset base filter
      this.base_val = 0;
      this.lesson_val = 0;
      this.topic_val = 0;

      this.filter.base_list = [];
      this.filter.lesson_list = [];
      this.filter.topic_list = [];

      //Reset related tags
      this.applied_filter.select_section_title = '';
      this.applied_filter.select_base_title = '';
      this.applied_filter.select_lesson_title = '';
      this.applied_filter.select_topic_title = '';
      //End reset related tags

      this.updateQueryParams();
      this.setBreadcrumbInfo();


      if (val > 0) {
        this.applied_filter.select_section_title = this.filter.section_list.find(x => x.id === val).title;
        //Load base list
        var params = {
          type: 'base',
          section_id: val
        }
        this.getFilterList(params, 'base');

      } else {
        this.applied_filter.select_section_title = "";
      }

    },
    base_val(val) {
      if (val === 0) {
        //Rest other related filter
        this.lesson_val = 0;
        this.topic_val = 0;

        this.applied_filter.select_base_title = '';
      }else{
        if (this.filter.lesson_list.length===0){
          var params = {
            type: 'lesson',
            base_id: this.base_val
          }

          this.getFilterList(params, 'lesson');


        }
      }
    },
    lesson_val(val) {
      if (val === 0) {
        //Rest other related filter
        this.topic_val = 0;

        this.applied_filter.select_lesson_title = '';
      }else{
        this.changeLessonVal();
      }
    },
    test_level_val(val) {
      if (val > 0) {
        this.applied_filter.select_test_level_title = this.filter.test_level_list
          .find(x => x.id === val).title;
        this.updateQueryParams();
      } else {
        this.applied_filter.select_test_level_title = "";
      }


    },


  },
  methods: {
    onScroll() {
      this.scrollInvoked++
    },
    getFilterList(params, type) {
      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        var data = {};
        if (type === 'section') {
          this.filter.section_list = res.data;

          //Initiate loading filter
          if (this.$route.query.section > 0) {
            data = {
              type: 'base',
              section_id: this.$route.query.section
            }
            this.getFilterList(data, 'base');
            this.base_val = this.$route.query.base;

            this.applied_filter.select_section_title = this.filter.section_list.find(x => x.id === this.section_val).title;

            //Set breadcrumbs info
            this.setBreadcrumbInfo();

          }
          //
        } else if (type === 'base') {
          this.filter.base_list = res.data;

          //Get lesson data
          if (this.$route.query.base > 0) {
            data = {
              type: 'lesson',
              base_id: this.$route.query.base
            }
            this.getFilterList(data, 'lesson');

            //Set lesson val
            this.lesson_val = this.$route.query.lesson;

            //Enable tag
            this.applied_filter.select_base_title = this.filter.base_list.find(x => x.id === this.base_val).title;

            //Set breadcrumbs info
            this.setBreadcrumbInfo();

          }
        } else if (type === 'lesson') {
          this.filter.lesson_list = res.data;

          //Get lesson data
          if (this.$route.query.lesson > 0) {
            data = {
              type: 'topic',
              lesson_id: this.$route.query.lesson
            }
            this.getFilterList(data, 'topic');

            //Set topic val
            this.topic_val = this.$route.query.topic;

            //Enable tag
            this.applied_filter.select_lesson_title = this.filter.lesson_list.find(x => x.id === this.$route.query.lesson).title;

            //Set breadcrumbs info
            this.setBreadcrumbInfo();
          }
        } else if (type === 'topic') {
          this.filter.topic_list = res.data;

          //Enable tag
          if (this.$route.query.topic > 0)
            this.applied_filter.select_topic_title = this.filter.topic_list.find(x => x.id === this.topic_val).title;
        }


      }).catch(err => {
        this.$toast.error(err);
      })
    },

    //Check user selected at least one filter
    enabledAppliedFilter() {
      if (this.applied_filter.select_base_title !== '' || this.applied_filter.select_section_title !== ''
        || this.applied_filter.select_lesson_title !== '' || this.applied_filter.select_topic_title !== ''
        || this.applied_filter.select_file_type_title !== ''
        || this.applied_filter.select_test_level_title !== ''
      )
        return true;
      else
        return false;
    },


    //Change base val option
    changeBaseVal() {
      this.lesson_val = 0;
      this.filter.lesson_list = [];

      //Reset related tags
      this.applied_filter.select_base_title = '';
      this.applied_filter.select_lesson_title = '';
      this.applied_filter.select_topic_title = '';
      //End reset related tags


      this.updateQueryParams();
      if (this.base_val > 0) {
        var params = {
          type: 'lesson',
          base_id: this.base_val
        }

        this.getFilterList(params, 'lesson');

        //Enable base title tag
        this.applied_filter.select_base_title = this.filter.base_list.find(x => x.id === this.base_val).title;
      } else {
        this.applied_filter.select_base_title = "";

      }
    },

    //Change lesson val option
    changeLessonVal() {
      this.topic_val = 0;
      this.filter.topic_list = [];

      //Reset related tags
      this.applied_filter.select_lesson_title = '';
      this.applied_filter.select_topic_title = '';
      //End reset related tags

      this.updateQueryParams();
      if (this.lesson_val > 0) {
        var params = {
          type: 'topic',
          lesson_id: this.lesson_val
        }

        this.getFilterList(params, 'topic');

        //Enable lesson title tag
        this.applied_filter.select_lesson_title = this.filter.lesson_list.find(x => x.id === this.lesson_val).title;
      } else {
        this.applied_filter.select_topic_title = "";

      }
    },


    //Change topic val option
    changeTopicVal() {
      //Reset related tags
      this.applied_filter.select_topic_title = '';
      //End reset related tags

      this.updateQueryParams();
      //Enable topic title tag

      if (this.topic_val > 0)
        this.applied_filter.select_topic_title = this.filter.topic_list.find(x => x.id === this.topic_val).title;
      else
        this.applied_filter.select_topic_title = "";


    },
    //Change topic val option

    //Change file type option
    changeFileTypeVal() {
      this.updateQueryParams();
      //Enable topic title tag

      if (this.file_type_val > 0)
        this.applied_filter.select_file_type_title = this.filter.file_type_list.find(x => x.id === this.file_type_val).title;
      else
        this.applied_filter.select_file_type_title = "";


    },

    //Update router query params
    updateQueryParams() {
      const query = {type: this.$route.query.type}
      if (this.section_val !== 0) {
        query.section = this.section_val
      }
      if (this.base_val !== 0) {
        query.base = this.base_val;
      }
      if (this.lesson_val !== 0) {
        query.lesson = this.lesson_val;
      }
      if (this.topic_val !== 0) {
        query.topic = this.topic_val;
      }
      if (this.file_type_val !== 0 && query.type === "test") {
        query.test_type = this.file_type_val;
      }
      if (this.test_level_val !== 0 && query.type === "test") {
        query.level = this.test_level_val;
      }
      if (this.word_checkbox_val === 1 && query.type === "test") {
        query.word = 1;
      }
      if (this.pdf_checkbox_val === 1 && query.type === "test") {
        query.pdf = 1;
      }
      if (this.free_checkbox_val === 1 && query.type === "test") {
        query.free = 1;
      }
      if (this.answer_checkbox_val === 1 && query.type === "test") {
        query.a_file = 1;
      }
      // handle more query parameters here ...
      this.$router.replace({query: query}).catch(err => {
        //Do noting
      })
    },

    //set breadcrumbs
    setBreadcrumbInfo() {
      this.breadcrumbs = [];

      //Type breadcrumb
      var active_tab = this.$route.query.type;
      var breadcrumb_item = {
        text: '',
        disabled: false,
        href: `/search?type=${active_tab}`,
      };
      if (active_tab === "test")
        breadcrumb_item.text = "Sample test"
      else if (active_tab === "learnfiles")
        breadcrumb_item.text = "Presentation"
      else if (active_tab === "question")
        breadcrumb_item.text = 'Q & A';
      else if (active_tab === "azmoon")
        breadcrumb_item.text = 'Online Exam';
      else if (active_tab === "dars")
        breadcrumb_item.text = 'Tutorial';
      else if (active_tab === "tutor")
        breadcrumb_item.text = 'Tutor';

      this.breadcrumbs.push(breadcrumb_item);

      //Grade section
      if (this.applied_filter.select_section_title){
        this.breadcrumbs.push(
          {
            text:this.applied_filter.select_section_title,
            disabled: false,
            href: `/search?type=${active_tab}&section=${this.section_val}`
          }
        );
      }

      //Base section
      if (this.applied_filter.select_base_title){
        this.breadcrumbs.push(
          {
            text:this.applied_filter.select_base_title,
            disabled: false,
            href: `/search?type=${active_tab}&section=${this.section_val}&base=${this.base_val}`
          }
        );
      }

      //Lesson section
      if (this.applied_filter.select_lesson_title){
        this.breadcrumbs.push(
          {
            text:this.applied_filter.select_lesson_title,
            disabled: false,
            href: `/search?type=${active_tab}&section=${this.section_val}&base=${this.base_val}&lesson=${this.lesson_val}`
          }
        );
      }





      //Emit to parent

      this.$emit('update:setBreadCrumbs', this.breadcrumbs);


    },

    //Get file type
    getFileType() {
      this.$axios.$get('/api/v1/types/list',
        {
          params: {
            type: this.$route.query.type ? 'test_type' : ''
          }
        })
        .then(res => {
          this.filter.file_type_list = res.data;

          if (this.$route.query.test_type > 0) {
            this.file_type_val = this.$route.query.test_type;
            this.applied_filter.select_file_type_title = this.filter.file_type_list.find(x => x.id === this.file_type_val).title;
          }
        }).catch(err => {
        this.$toast.error(err);
      })
    },

    //Test feature type
    changeTestFeature(type, val) {
      //Word option
      if (type === 'word')
        if (val === true)
          this.word_checkbox_val = 1;
        else
          this.word_checkbox_val = 0;

      //Pdf option
      if (type === 'pdf')
        if (val === true)
          this.pdf_checkbox_val = 1;
        else
          this.pdf_checkbox_val = 0;

      //Free option
      if (type === 'free')
        if (val === true)
          this.free_checkbox_val = 1;
        else
          this.free_checkbox_val = 0;


      //By answer option
      if (type === 'a_file')
        if (val === true)
          this.answer_checkbox_val = 1;
        else
          this.answer_checkbox_val = 0;


      this.updateQueryParams();


    }


  }
}
</script>

<style scoped>
.brand_filter p {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;

  /* identical to box height */
  text-align: right;

  color: rgba(0, 0, 0, 0.54);
}

</style>

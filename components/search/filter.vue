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
      chip4: true,
      scrollInvoked: 0,

      section_loading: false,
      section_val: this.$route.query.section ? this.$route.query.section : 0,


      base_val: 0,
      lesson_val: 0,


      applied_filter: {
        select_section_title: '',
        select_base_title: '',
        select_lesson_title: '',
      },

      filter: {
        section_list: [],
        base_list: [],
        lesson_list: [],
      }

    }
  },
  mounted() {
    var params = {
      type: 'section'
    };
    this.getFilterList(params, 'section');


  },
  watch: {
    section_val(val) {
      //Reset base filter
      this.base_val = 0;
      this.filter.base_list = [];
      this.filter.lesson_list = [];
      this.updateQueryParams();

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
    lesson_val(val) {
      this.updateQueryParams();
      if (val > 0) {

        // this.applied_filter.select_lesson_title = this.filter.lesson_list.find(x => x.id === val).title;

        var params = {
          type: 'lesson',
          base_id: val
        }

        // this.getFilterList(params, 'lesson');
      } else {
        this.applied_filter.select_lesson_title = "";

      }
    },
    product_title(val) {
      this.$emit('update:productTitle', val)
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
        var data={};
        if (type === 'section'){
          this.filter.section_list = res.data;

          //Initiate loading filter
          if (this.$route.query.section > 0) {
            data = {
              type: 'base',
              section_id: this.$route.query.section
            }
            this.getFilterList(data, 'base');
            this.base_val = this.$route.query.base;
          }
          //
        }
        else if (type === 'base'){
          this.filter.base_list = res.data;

          //Get lesson data
          if (this.$route.query.base > 0) {
            data = {
              type: 'lesson',
              base_id: this.$route.query.base
            }
            this.getFilterList(data, 'lesson');

            //Set lesson val
            this.lesson_val=this.$route.query.lesson;
          }
        }
        else if (type === 'lesson')
          this.filter.lesson_list = res.data;


      }).catch(err => {
        this.$toast.error(err);
      })
    },

    //Check user selected at least one filter
    enabledAppliedFilter() {
      if (this.applied_filter.select_base_title !== '' || this.applied_filter.select_section_title !== '')
        return true;
      else
        return false;
    },


    //Change base val option
    changeBaseVal(val){
      this.lesson_val = 0;
      this.filter.lesson_list = [];
      this.updateQueryParams();
      if (val > 0) {
        var params = {
          type: 'lesson',
          base_id: this.$route.query.base
        }

        this.getFilterList(params, 'lesson');
      } else {
        this.applied_filter.select_base_title = "";

      }
    },

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
      // handle more query parameters here ...
      this.$router.replace({query: query}).catch(err=>{
        //Do noting
      })
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

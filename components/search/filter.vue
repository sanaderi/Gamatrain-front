<template>
  <div>
    <!--Selected filter, user can disable any filter from here-->
    <div v-if="enabledAppliedFilter()">
      <p>Applied filter</p>
      <v-divider/>
      <v-chip
        v-if="applied_filter.select_section_title"
        class="ma-2"
        close
        label
        outlined
        @click:close="section_val = 0"
      >
        {{ applied_filter.select_section_title }}
      </v-chip>
      <v-chip
        v-if="applied_filter.select_base_title"
        class="ma-2"
        close
        label
        outlined
        @click:close="base_val = 0"
      >
        {{ applied_filter.select_base_title }}
      </v-chip>
    </div>
    <!--End select filter  -->
    <div>
      <p class="mt-5">Grade</p>
      <v-divider class="mb-3" />

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


      applied_filter: {
        select_section_title: '',
        select_base_title: '',
      },

      filter: {
        section_list: [],
        base_list: [],
      }

    }
  },
  beforeMount() {
    var params = {
      type: 'section'
    };
    this.getFilterList(params, 'section');

    if (this.$route.query.section>0){
      this.base_val=this.$route.query.base;
      this.getFilterList(params, 'base');
    }


  },
  mounted() {



    // if (this.section_val > 0)
    //   setTimeout(() => {
    //     this.operateBaseOnSection(this.section_val);
    //   }, 2000);

  },
  watch: {
    section_val(val) {
      if (val > 0) {
        this.$router.replace({query:{section:val}})

        this.applied_filter.select_section_title = this.filter.section_list.find(x => x.id === val).title;

        //Load base list
        var params = {
          type: 'base',
          section_id: val
        }
        this.getFilterList(params, 'base');

      } else {
        this.$router.replace({query:{}})

        this.applied_filter.select_section_title = "";

        //Reset base filter
        this.base_val = 0;
        this.filter.base_list = [];
      }


    },
    base_val(val) {
      this.$toast.success(val);
      if (val > 0) {
        this.$router.replace({query:{section:this.section_val,base:val}}).catch(error => {
          if (error.name != "NavigationDuplicated") {
            //Do none
          }
        });
        this.applied_filter.select_base_title = this.filter.base_list.find(x => x.id === val).title;
      } else{
        this.$router.replace({query:{section:this.section_val}})
        this.applied_filter.select_base_title = "";

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
        if (type === 'section')
          this.filter.section_list = res.data;
        else if (type === 'base')
          this.filter.base_list = res.data;


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

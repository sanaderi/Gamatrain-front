<template>
  <div>
    <p>Applied filter</p>
    <v-divider/>
    <div>
      <v-chip
        v-if="select_section_title"
        class="ma-2"
        close
        label
        outlined
        @click:close="select_section_title = null"
      >
        {{ select_section_title }}
      </v-chip>
      <v-chip
        v-if="select_base_title"
        class="ma-2"
        close
        label
        outlined
        @click:close="base_val = 0"
      >
        {{ select_base_title }}
      </v-chip>

      <div>
        <p class="mt-5">Grade</p>
        <v-divider class="mb-4"/>

        <v-container
          fluid
          id="scroll-target"
          style="max-height: 300px"
          class="overflow-y-auto"
        >
          <v-row
            v-scroll:#scroll-target="onScroll"
            align="center"
            justify="center"
            style="height: 200px;overflow-x: hidden"
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
        <v-divider class="mb-4"/>

        <v-container
          fluid
          id="scroll-target"
          style="max-height: 300px"
          class="overflow-y-auto"
        >
          <v-row
            v-scroll:#scroll-target="onScroll"
            align="center"
            justify="center"
            style="height: 100px"
          >
            <v-col cols="12" class="pt-0 pr-0 m-0" style="height: 100px;overflow-x: hidden">
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
      section_val: 0,
      select_section_title: '',

      base_val:0,
      select_base_title: '',


      filter: {
        section_list: [],
        base_list: [],
      }

    }
  },
  mounted() {
    var params = {
      type: 'section'
    };
    this.getFilterList(params, 'section');

    this.getProductBrandData();
    this.getProductCateData();
  },
  watch: {
    section_val(val) {
      this.$emit('update:sectionVal', val);
      if (val > 0) {
        this.select_section_title = this.filter.section_list.find(x => x.id === val).title;

        //Load base list
        var params={
          type:'base',
          section_id:val
        }
        this.getFilterList(params,'base');

      } else{
        this.select_section_title = "";
        this.filter.base_list=[];
      }


      this.$emit('update:sectionTitle', this.select_section_title);
    },
    base_val(val) {
      this.$emit('update:baseVal', val);
      if (val > 0) {
        this.select_base_title = this.filter.base_list.find(x => x.id === val).title;
      } else
        this.select_base_title = "";
      this.$emit('update:baseTitle', this.select_base_title);
    },
    product_title(val) {
      this.$emit('update:productTitle', val)
    },
    brand_keyword(val) {
      this.getProductBrandData();
    },
    cate_keyword(val) {
      this.getProductCateData();
    },


  },
  methods: {
    onScroll() {
      this.scrollInvoked++
    },

    getProductBrandData() {
      this.product_brand_loading = true;
      //Get brand list
      let product_brandApiURL = `/api/product_brand_list`;
      this.$axios.$post(product_brandApiURL,
        {
          "paginate_option": false,
          "keyword": this.brand_keyword
        }
      ).then(response => {
        this.product_brands = response;
        this.product_brand_loading = false;
        this.product_brand_val = parseInt(this.brandId);

      })
        .catch(e => {
          this.product_brand_loading = false;
        })
    },

    getProductCateData() {
      this.product_cate_loading = true;
      //Get category list
      let product_cateApiURL = `/api/category_list`;
      this.$axios.$post(product_cateApiURL,
        {
          "paginate_option": false,
          "keyword": this.cate_keyword
        }
      ).then(response => {
        this.product_categories = response;
        this.product_cate_loading = false;
        this.product_cate_val = parseInt(this.cateId);
      })
        .catch(e => {
          this.product_cate_loading = false;
        })
    },

    getFilterList(params, type) {
      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        if (type === 'section')
          this.filter.section_list = res.data;
        else if(type==='base')
          this.filter.base_list = res.data;
      }).catch(err => {
        this.$toast.error(err);
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

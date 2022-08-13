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
              <search-filter/>
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
              <Tabs/>
              <!-- sample-q-items-desktop -->
             <NuxtChild/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>

</template>


<script>
import Tabs from "@/components/common/tabs.vue";
import searchFilter from "@/components/search/filter";

export default {
  name: "searchPage",
  layout: 'search_layout',

  components: {Tabs,searchFilter},
  data(){
    return {
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

    }
  },
  mounted() {
  },
  methods:{
  }

}
</script>

<style scoped>

</style>

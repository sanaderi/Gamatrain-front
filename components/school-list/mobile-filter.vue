<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div id="mobile-school-filter">
          <div class="float-left w-70 mb-6">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              id="search-field"
              hide-details
              label="Search anything..."
              outlined
              v-model="filterForm.keyword"
              dense
              rounded
              autocomplete="off"
            >
              <template v-slot:append>
                <v-btn class="primary" :loading="searchLoading" id="search-btn" rounded>
                  Search
                </v-btn>
              </template>
            </v-text-field>
          </div>
          <div class="float-right" id="filterSection">
            <!-- Filter section -->
            <v-dialog
              v-model="filterDialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  fab
                  color="#F2F4F7"
                  v-bind="attrs"
                  v-on="on"
                  elevation="0"
                  class="mr-2"
                >
                  <v-icon> mdi-filter </v-icon>
                </v-btn>
              </template>
              <v-card id="filter-card">
                <v-toolbar color="#fff">
                  <v-toolbar-title class="gtext-h5">Filter</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn icon @click="filterDialog = false">
                      <v-icon color="#D0D5DD ">mdi-close-circle</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>

                <v-card-actions >
                  <v-btn class="text-transform-none cancel-btn" text @click="filterDialog = false">
                    Cancel
                  </v-btn>
                  <v-btn  class="primary text-transform-none apply-btn" rounded @click="filterDialog = false"> Apply filter </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- Sort section -->
            <v-bottom-sheet
              v-model="sortSheet"
              style="border-radius: 0rem 3.2rem 3.2rem 0rem"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn small fab color="#F2F4F7" elevation="0" v-bind="attrs" v-on="on">
                  <v-icon> mdi-filter-variant </v-icon>
                </v-btn>
              </template>
              <v-list id="sortSheetList">
                <v-list-item
                  v-for="item in sortList"
                  :key="item.id"
                  @click="updateFilter('sort', item.id)"
                >
                  <v-list-item-title class="gtext-t4">{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-bottom-sheet>
            <!-- End sort section -->
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "school-mobile-filter",
  data() {
    return {
      searchLoading: false,
      filterForm: {
        keyword: "",
      },
      sortSheet: false,
      sortList: [
        {
          id: 1,
          title: "Most score",
        },
        {
          id: 2,
          title: "Most active",
        },
        {
          id: 3,
          title: "Update date",
        },
        {
          id: 4,
          title: "Tuition fee",
        },
      ],

      filterDialog: false,
    };
  },
  methods: {
    updateFilter(type, value) {
      if (type == "curriculum") this.filterForm.curriculum = value;
      if (type == "sort") {
        this.filterForm.sort = value;
        this.sortSheet = false;
      }

      this.updateQueryParams();
    },

    //Update router query params
    updateQueryParams() {
      const query = {};
      if (this.filterForm.keyword != "") query.keyword = this.filterForm.keyword;

      if (this.filterForm.curriculum != "") {
        query.curriculum = this.filterForm.curriculum;
      }

      if (this.filterForm.sort != "") {
        query.sort = this.filterForm.sort;
      }

      if (this.filterForm.tuition_fee > 0) {
        query.tuition_fee = this.filterForm.tuition_fee;
      }

      if (this.filterForm.country > 0) {
        query.country = this.filterForm.country;
      }

      if (this.filterForm.state > 0) {
        query.state = this.filterForm.state;
      }

      if (this.filterForm.city > 0) {
        query.city = this.filterForm.city;
      }

      if (this.filterForm.school_type && this.filterForm.school_type.length > 0) {
        query.school_type = this.filterForm.school_type;
      }

      if (this.filterForm.religion && this.filterForm.religion.length > 0) {
        query.religion = this.filterForm.religion;
      }

      if (this.filterForm.boarding_type && this.filterForm.boarding_type.length > 0) {
        query.boarding_type = this.filterForm.boarding_type;
      }

      if (this.filterForm.coed_status && this.filterForm.coed_status.length > 0) {
        query.coed_status = this.filterForm.coed_status;
      }

      // Handle more query parameters here ...
      this.$router.replace({ query: query }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style>
#mobile-school-filter {
  width: 100%;
  justify-content: space-between;

  .v-text-field--rounded {
    .v-input__control {
      .v-input__slot {
        padding: 0 10px 0 24px;
        background: var(--White, #fff) !important;

        .v-input__append-inner {
          margin-top: 0.4rem;

          #search-btn {
            height: 3rem;

            .v-btn__content {
              color: black;
              text-transform: none;
              font-family: Inter;
              font-size: 1.4rem;
              font-style: normal;
              font-weight: 500;
              line-height: 2.2rem;
            }
          }
        }
      }
    }
  }
}
#sortSheetList {
  border-radius: 3.2rem 3.2rem 0 0rem;
}
.v-dialog__content {
  z-index: 1200 !important;
}

#filter-card{
    .v-card__actions{
        position: absolute;
        bottom: 0;
        text-align: center;

        .cancel-btn{
            width: 20vw;

        }
        .apply-btn{
            width: 60vw;
        }
    }
}
</style>

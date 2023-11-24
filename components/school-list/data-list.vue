<template>
  <div id="data-list">
    <v-container id="school-list-container">
      <div v-if="resultCount > 0">
        <v-card
          rounded
          v-for="item in schoolList"
          :key="item.id"
          class="list-item"
          :to="`/school/${item.id}/${$slugGenerator.convert(item.name)}`"
        >
          <v-card-text>
            <div class="item-info">
              <div class="main-data d-flex">
                <div>
                  <h2 class="gtext-t4 font-weight-semibold mb-4">
                    {{ item.name }}
                  </h2>

                  <!-- <v-chip class="primary">
              
             </v-chip> -->

                  <v-chip
                    v-if="item.school_type_title"
                    class="list-chip gtext-t5 font-weight-medium"
                    small
                  >
                    {{ item.school_type_title }}
                  </v-chip>

                  <!-- <v-chip class="primary">
              
             </v-chip>

             <v-chip class="primary">
              
             </v-chip> -->
                </div>
                <div class="item-img" v-if="!$parent.isExpanded">
                  <img :src="require('assets/images/default-school.png')" />
                </div>
              </div>
              <v-divider class="mb-3" />
              <div class="item-footer">
                <div class="float-left">
                  <v-btn :disabled="!item.location" icon>
                    <v-icon> mdi-map-marker </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.phone1" icon>
                    <v-icon> mdi-phone </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.address" icon>
                    <v-icon> mdi-email </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.site" icon>
                    <v-icon> mdi-web </v-icon>
                  </v-btn>
                </div>

                <div class="float-right d-flex mt-1">
                  <div class="rate-section gtext-t6 font-weight-semibold mr-1">
                    4.2
                    <v-icon color="primary"> mdi-star </v-icon>
                  </div>
                  <div class="gtext-t6 primary-gray-300">
                    Update:
                    <span class="primary-gray-600">{{
                      $moment(item.up_date).format("YYYY-MM-DD")
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item-img" v-if="$parent.isExpanded">
              <img
                class="float-right"
                :src="require('assets/images/default-school.png')"
              />
            </div>
          </v-card-text>
        </v-card>

        <v-card class="list-item" v-if="!$parent.allDataLoaded">
          <div class="item-info">
            <div class="main-data">
              <v-skeleton-loader
                type="card-heading, list-item-two-line"
              ></v-skeleton-loader>
            </div>
            <div></div>
          </div>
        </v-card>
      </div>
      <div v-else-if="resultCount == 0 && $parent.schoolLoading == false">
        <span class="gtext-t4"> Opps! no data found </span>
      </div>
      <div v-else>
        <v-card class="list-item" v-for="i in 5" :key="i">
          <div class="item-info">
            <div class="main-data">
              <v-skeleton-loader
                type="card-heading, list-item-two-line"
              ></v-skeleton-loader>
            </div>
            <div></div>
          </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "school-data-list",
  props: {
    schoolList: [],
    resultCount: 0,
  },
  data() {
    return {};
  },
};
</script>

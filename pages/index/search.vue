<template>
  <form @submit.prevent="submit">
    <v-row class="mx-0 align-center search-container">
      <p>جستجوی پیشرفته</p>
      <v-col cols="12" md="3" sm="12" class="search-item">
        <v-autocomplete
          class="grade-search"
          v-model="values1"
          :items="items1"
          chips
          dense
          outlined
          small-chips
          label="مقطع"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3" sm="12" class="search-item">
        <v-autocomplete
          class="grade-search"
          v-model="values2"
          :items="items2"
          chips
          dense
          outlined
          small-chips
          label="پایه"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3" sm="12" class="search-item">
        <v-autocomplete
          class="grade-search"
          v-model="values3"
          :items="items3"
          chips
          dense
          outlined
          small-chips
          label="کتاب درسی"
        ></v-autocomplete>
      </v-col>
      <v-col
        class="d-flex justify-md-center justify-end  search-item-button mr-10"
        cols="12"
        md="1"
        sm="12"

      >
        <v-btn large class="search-btn" depressed> Search </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  props: {
    items1: Array,
    items2: Array,
    items3: Array,
    values1: Array,
    values2: Array,
    values3: Array,
    value1: String,
    value2: String,
    value3: String,
  },
  data() {
    return {
      // items: ['همه', 'دبستان', 'متوسطه'],
      values: ["همه"],
      // value: null,
    };
  },
};
</script>

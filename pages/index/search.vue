<template>
  <form @submit.prevent="submit">
    <v-row class="mx-0 align-center search-container">
      <v-col cols="12" md="2" class="search-item">
        <p class="mb-2 font-weight-bold">مقطع</p>
        <v-autocomplete
          class="grade-search"
          v-model="values1"
          :items="items1"
          chips
          dense
          outlined
          small-chips
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="search-item">
        <p class="mb-2 font-weight-bold">پایه</p>
        <v-autocomplete
          class="grade-search"
          v-model="values2"
          :items="items2"
          chips
          dense
          outlined
          small-chips
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="search-item">
        <p class="mb-2 font-weight-bold">کتاب درسی</p>
        <v-autocomplete
          class="grade-search"
          v-model="values3"
          :items="items3"
          chips
          dense
          outlined
          small-chips
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex justify-md-center justify-end pb-0" cols="12" md="3" >
        <v-btn class="search-btn" depressed>
          جستجو
        </v-btn>
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
      values: ['همه'],
      // value: null,
    }
  }
}
</script>

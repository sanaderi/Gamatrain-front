<template>
  <form @submit.prevent="submit">
    <v-row class="align-center">
      <v-col cols="12" md="3">
        <p class="mb-2">مقطع</p>
        <v-autocomplete
          v-model="values"
          :items="items"
          chips
          dense
          outlined
          small-chips
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3">
        <p class="mb-2">پایه</p>
        <v-autocomplete
          v-model="values"
          :items="items"
          chips
          dense
          outlined
          small-chips
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3">
        <p class="mb-2">کتاب درسی</p>
        <v-autocomplete
          v-model="values"
          :items="items"
          chips
          dense
          outlined
          small-chips
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex justify-end" cols="12" md="3">
        <v-btn class="search-btn" depressed>
          جستجو
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  data() {
    return {
      items: ['همه', 'دبستان', 'متوسطه'],
      values: ['همه'],
      value: null,
    }
  }
}
</script>

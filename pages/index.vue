<template>
  <div class="home-page-content">
    <section class="banner-sec">
      <div class="banner"></div>
    </section>
    <section class="search-sec box">
      <form @submit.prevent="submit">
        <v-row class="align-center">
          <v-col md="2" cols="12">
            <p class="mb-2">مقطع</p>
            <v-autocomplete
              v-model="values"
              :items="items"
              dense
              chips
              small-chips
              solo
            ></v-autocomplete>
          </v-col>
          <v-col md="2" cols="12">
            <p class="mb-2">پایه</p>
            <v-autocomplete
              v-model="values"
              :items="items"
              dense
              chips
              small-chips
              solo
            ></v-autocomplete>
          </v-col>
          <v-col md="2" cols="12">
            <p class="mb-2">کتاب درسی</p>
            <v-autocomplete
              v-model="values"
              :items="items"
              dense
              chips
              small-chips
              solo
            ></v-autocomplete>
          </v-col>
          <v-col md="2" cols="12" class="d-flex justify-end">
            <v-btn depressed class="search-btn">
              جستجو
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </section>
    <section class="gradesList">
      <v-row>
        <v-col md="4" sm="2" cols="12">
          <template>
            <v-card
              class="mx-auto"
            >
              <v-card-title class="d-block">
                <h2 class="text-h4">
                  کلاس اول
                </h2>
                <p class="text-h6">فارسی، نگارش، ریاضی</p>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <div class="d-flex justify-space-between">
                  <div>
                    <span>نمونه سوال</span>
                  </div>
                  <div>
                    <span>1355</span>
                  </div>
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <div>
                  <span>بروزرسانی: </span>
                  <span>14 فروردین</span>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ['همه', 'دبستان', 'متوسطه'],
    values: ['همه'],
    value: null,
  }),
}
</script>

<template>
  <form @submit.prevent="submit">
    <v-row class="mx-0 align-center search-container">
      <p>Advanced search</p>
      <v-col cols="12" md="3" sm="12" class="search-item">
        <v-autocomplete
          class="grade-search"
          v-model="form.grade"
          :items="section_list"
          item-text="title"
          clearable
          item-value="id"
          dense
          outlined
          label="Grade level"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3" sm="12" class="search-item">
        <v-autocomplete
          class="grade-search"
          v-model="form.base"
          :items="base_list"
          item-text="title"
          item-value="id"
          clearable
          dense
          outlined
          label="Base"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3" sm="12" class="search-item">
        <v-autocomplete
          class="grade-search"
          v-model="form.lesson"
          :items="lesson_list"
          item-text="title"
          item-value="id"
          dense
          clearable
          outlined
          label="Lesson"
        ></v-autocomplete>
      </v-col>
      <v-col
        class="d-flex justify-md-center justify-end  search-item-button mr-10"
        cols="12"
        md="1"
        sm="12"

      >
        <v-btn class="search-btn" depressed> Search</v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {

  mounted() {
    this.getTypeList('section');
  },
  data() {
    return {
      form: {
        grade: '',
        base: '',
        lesson: '',
      },
      section_list: [],
      base_list: [],
      lesson_list: [],

    };
  },
  watch: {
    "form.grade"(val) {
      this.base_list = [];
      this.lesson_list = [];
      if (val)
        this.getTypeList('base', val);
    },
    "form.base"(val) {
      this.lesson_list = [];
      if (val)
        this.getTypeList('lesson', val);
    },
    "form.lesson"(val) {
      //
    }
  },
  methods: {
    getTypeList(type, parent = '') {
      var params = {
        type: type
      }
      if (type === 'base')
        params.section_id = parent;
      if (type === 'lesson') {
        params.base_id = parent;
      }


      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        if (type === 'section') {
          this.section_list = res.data;
        } else if (type === 'base') {
          this.base_list = res.data;

        } else if (type === 'lesson') {
          this.lesson_list = res.data;
        }

      }).catch(err => {
        this.$toast.error(err);
      })
    },

  }
};
</script>

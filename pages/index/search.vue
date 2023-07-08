<template>
    <v-container>
      <v-row class="mx-0 align-center search-container">
        <v-col cols="12" md="3" sm="12" class="search-item">
          <v-autocomplete
            class="grade-search"
            v-model="form.level"
            :items="section_list"
            item-text="title"
            clearable
            item-value="id"
            dense
            outlined
            label="Level"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="3" sm="12" class="search-item">
          <v-autocomplete
            class="grade-search"
            v-model="form.grade"
            :items="grade_list"
            item-text="title"
            item-value="id"
            clearable
            dense
            outlined
            label="Garde"
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
          class="d-flex justify-md-start justify-end  search-item-button "
          cols="12"
          md="3"
          sm="12"

        >
          <v-btn class="search-btn"
                 :to="`/search?type=test&section=${form.level}&base=${form.grade}&lesson=${form.lesson}&sortby=best`"
                 depressed> Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {

  mounted() {
    this.getTypeList('section');
  },
  data() {
    return {
      form: {
        level: '',
        grade: '',
        lesson: '',
      },
      section_list: [],
      grade_list: [],
      lesson_list: [],

    };
  },
  watch: {
    "form.level"(val) {
      this.grade_list = [];
      this.lesson_list = [];
      if (val)
        this.getTypeList('base', val);
    },
    "form.grade"(val) {
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
          this.grade_list = res.data;

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

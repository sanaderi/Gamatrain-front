<template>
  <v-row>
    <v-col cols="12" class="px-0 px-sm-2">
      <v-row>
        <v-col cols="12" class="pl-5">
          <span class="icon icong-test text-h3 teal--text"></span>
          <span class="text-h4 teal--text">
            Q & A submission form
          </span>
        </v-col>
      </v-row>
      <v-card class="mt-3">
        <v-card-text class="px-0 px-sm-8 px-md-4">
          <v-card-text>
            <v-card flat class="mt-3">
              <validation-observer ref="observer" v-slot="{invalid}">
                <form @submit.prevent="submitQuestion">
                  <v-row>
                    <v-col cols="12" md="3">
                      <validation-provider v-slot="{errors}" name="grade" role="required">
                        <v-autocomplete
                          dense
                          v-model="form.grade"
                          :items="section_list"
                          :error-messages="errors"
                          item-text="title"
                          item-value="id"
                          label="Grade"
                          outlined
                        />
                      </validation-provider>
                    </v-col>
                    <v-col cols="12" md="3">
                      <validation-provider v-slot="{errors}" name="base" role="required">
                        <v-autocomplete
                          dense
                          v-model="form.base"
                          :items="base_list"
                          item-value="id"
                          item-text="title"
                          :error-messages="errors"
                          label="Base"
                          outlined
                        />
                      </validation-provider>
                    </v-col>
                    <!--                    <v-col cols="12" md="4">-->
                    <!--                      <validation-provider v-slot="{errors}" name="field" role="required">-->
                    <!--                        <v-autocomplete-->
                    <!--                          dense-->
                    <!--                          v-model="form.field"-->
                    <!--                          :error-messages="errors"-->
                    <!--                          label="Field"-->
                    <!--                          outlined-->
                    <!--                        />-->
                    <!--                      </validation-provider>-->
                    <!--                    </v-col>-->
                    <v-col cols="12" md="3">
                      <validation-provider v-slot="{errors}" name="lesson" role="required">
                        <v-autocomplete
                          dense
                          :items="lesson_list"
                          item-value="id"
                          item-text="title"
                          v-model="form.lesson"
                          :error-messages="errors"
                          label="Lesson"
                          outlined
                        />
                      </validation-provider>
                    </v-col>
                    <v-col cols="12" md="3">
                      <validation-provider v-slot="{errors}" name="topic" role="required">
                        <v-autocomplete
                          dense
                          :items="topic_list"
                          item-value="id"
                          item-text="title"
                          v-model="form.topic"
                          :error-messages="errors"
                          label="Topic"
                          outlined
                        >
                          <template v-slot:item="data">
                            <p :class="data.item.season ? 'topic_season' : ''" class="py-2">
                              {{ data.item.title }}
                            </p>
                          </template>
                        </v-autocomplete>
                      </validation-provider>
                    </v-col>

                    <v-col cols="12" md="12">
                      <validation-provider v-slot="{errors}" name="title" role="required">
                        <v-text-field
                          dense
                          v-model="form.title"
                          :error-messages="errors"
                          label="Summary of the question"
                          outlined
                        />
                      </validation-provider>
                    </v-col>
                    <v-col cols="12" md="12">
                      <validation-provider v-slot="{errors}" name="describe" role="required">
                        <v-textarea
                          dense
                          v-model="form.describe"
                          :error-messages="errors"
                          label="Describe"
                          hint="You must enter at least 70 characters."
                          persistent-hint
                          placeholder="Full description of the question"
                          outlined
                        />
                      </validation-provider>
                    </v-col>
                    <v-col cols="12" md="3">
                      <validation-provider v-slot="{errors}" name="pdf_question_answer_file">
                        <v-file-input
                          dense
                          v-model="form.pdf_question_answer_file"
                          :error-messages="errors"
                          label="Attach file"
                          prepend-icon=""
                          color="red"
                          prepend-inner-icon="mdi-file"
                          append-icon="mdi-folder-open"
                          outlined
                        />
                      </validation-provider>
                    </v-col>




                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6" class="pb-0">
                      <v-btn type="submit" lg color="success" block>
                        Submit
                      </v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-btn lg outlined color="error" to="/user/question" block>
                        Discard
                      </v-btn>
                    </v-col>
                  </v-row>
                </form>
              </validation-observer>
            </v-card>
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import {ValidationObserver, ValidationProvider} from "vee-validate";
import TopicSelector from "@/components/form/topic-selector";

export default {
  layout: 'dashboard_layout',
  name: "add-question",
  data() {
    return {
      form: {
        grade: '',
        base: '',
        lesson: '',
        topic: '',
        test_type: '',
        answer_status: '',
        test_level: '',
        year: '',
        month: '',
        holding_level: '',
        state: '',
        area: '',
        school: ''
      },
      section_list: [],
      base_list: [],
      field_list: [],
      lesson_list: [],
      topic_list: [],
      test_type_list: [],
      answer_status_list: [
        {id: 0, title: "Has answer"},
        {id: 1, title: "Has key answer"},
        {id: 2, title: "Has descriptive answer"},
      ],
      test_level_list: [
        {
          id: '1',
          title: 'Simple'
        },
        {
          id: '2',
          title: 'Medium'
        },
        {
          id: '3',
          title: 'Hard'
        },
      ],
      year_list: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013],
      month_list: [
        {id: 1, title: "January"},
        {id: 2, title: "February"},
        {id: 3, title: "March"},
        {id: 4, title: "April"},
        {id: 5, title: "May"},
        {id: 6, title: "June"},
        {id: 7, title: "July"},
        {id: 8, title: "August"},
        {id: 9, title: "September"},
        {id: 10, title: "October"},
        {id: 11, title: "November"},
        {id: 12, title: "December"},
      ],
      holding_level_list: [
        {id: 1, title: "School"},
        {id: 2, title: "District"},
        {id: 3, title: "State"},
        {id: 4, title: "Country"},
      ],
      state_list: [],
      area_list: [],
      school_list: [],


    }
  },
  head() {
    return {
      title: 'Q & A submission form'
    }
  },
  components: {
    TopicSelector,
    ValidationProvider,
    ValidationObserver
  },
  mounted() {
    this.getTypeList('section');
    this.getTypeList('test_type')
    this.getTypeList('state')
  },
  watch: {
    "form.grade"(val) {
      this.getTypeList('base', val);
      this.getTypeList('school');
    },
    "form.base"(val) {
      this.getTypeList('lesson', val);
    },
    "form.lesson"(val) {
      this.getTypeList('topic', val);
    },
    "form.state"(val) {
      this.getTypeList('area', val);
    },
    "form.area"(val) {
      this.getTypeList('school');
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
      if (type === 'topic') {
        params.lesson_id = parent;
      }
      if (type === 'area') {
        params.state_id = parent;
      }

      if (type === 'school') {
        params.section_id = this.form.grade;
        params.area_id = this.form.area;
      }


      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        var data = {};
        if (type === 'section') {
          this.section_list = res.data;
        } else if (type === 'base') {
          this.base_list = res.data;

        } else if (type === 'lesson') {
          this.lesson_list = res.data;

        } else if (type === 'topic') {
          this.topic_list = res.data;
        } else if (type === 'test_type') {
          this.test_type_list = res.data;
        } else if (type === 'state') {
          this.state_list = res.data;
        } else if (type === 'area') {
          this.area_list = res.data;
        } else if (type === 'school') {
          this.school_list = res.data;
        }


      }).catch(err => {
        this.$toast.error(err);
      })
    },


    submitQuestion() {
      this.$toast.success("hi");
    },

    selectTopic(event) {
      this.form.topic = event;
    }
  }

}
</script>

<style>
.submission-notice {
  line-height: 2rem;
  background-color: #FFEFE5 !important;
}

.submission-notice .v-alert__icon.v-icon {
  color: white !important;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #FF6600;
}

.notice_item {
  font-size: 1.4rem;
  line-height: 2.2rem;
  list-style-type: none;
  color: black;
  padding-left: 0 !important;
}

.notice_item li {
  margin-bottom: 1rem;
}

.notice_item li:before {
  font-family: "Font Awesome 5 Free";
  font-size: 2rem;
  color: #FFC700FF;
  content: "\f0a4";
  font-weight: 900;
}

.topic_season {
  font-weight: bolder !important;
  color: blue !important;
}
</style>

<template>
  <v-row>
    <v-col cols="12" class="px-0 px-sm-2">
      <v-row>
        <v-col cols="12" class="pl-5">
          <span class="icon icong-test text-h3 teal--text"></span>
          <span class="text-h4 teal--text">
            Test submission form
          </span>
        </v-col>
      </v-row>
      <v-card class="mt-3">
          <v-card-text class="px-0 px-sm-8 px-md-4">
            <v-card-text>
              <v-card >
                <v-card-text>
                  <v-alert
                    icon="mdi-alert-octagon-outline"
                    class=" submission-notice"
                  >
                    <p>
                      Based on Gamma's new approach, only sample questions are reviewed that the test and the answer sheet
                      are
                      combined in one file. So that the test questions are placed at the beginning of the file and the
                      answer sheet is at the
                      end of it. Also, the answer sheet is only the answers to the questions and does not repeat the text
                      of the questions. Avoid in the
                      answer sheet section. It is obvious that if the files are combined, there is no need to add a file
                      for the answer sheet section in
                      the form of sending a sample question.
                    </p>
                  </v-alert>
                  <ul class="notice_item">
                    <li>
                      Before registering and sending sample questions and educational content, read the following guide
                      and if you do not have
                      a suitable template for the exam page layout, use the templates suggested by Gama.
                    </li>
                    <li>
                      Only register sample questions that are the result of your own design. Also, sample questions that
                      have word files and
                      explanatory answers are available on the site at higher prices.
                    </li>
                    <li>
                      The presence of any watermark or ID on the files, copying of other people's files and sending
                      duplicate files are not allowed,
                      and if such cases are observed, the user will be subject to deduction of the expert's fee.
                    </li>
                    <li>
                      If you plan to publish a series of serial tests on the site, collect all the tests in one file and
                      register the same file on the site.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
              <v-card flat class="mt-3">
                <validation-observer ref="observer" v-slot="{invalid}">
                  <form @submit.prevent="submitQuestion">
                    <v-row>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="grade" rules="required">
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
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="base" rules="required">
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
                      <!--                      <validation-provider v-slot="{errors}" name="field" rules="required">-->
                      <!--                        <v-autocomplete-->
                      <!--                          dense-->
                      <!--                          v-model="form.field"-->
                      <!--                          :error-messages="errors"-->
                      <!--                          label="Field"-->
                      <!--                          outlined-->
                      <!--                        />-->
                      <!--                      </validation-provider>-->
                      <!--                    </v-col>-->
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="lesson" rules="required">
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
                      <v-col cols="12" md="12">
                        <validation-provider v-slot="{errors}" name="topic" rules="required">
                          <topic-selector :topic-list="topic_list" @selectTopic="selectTopic"/>
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="test_type" rules="required">
                          <v-autocomplete
                            dense
                            :items="test_type_list"
                            item-value="id"
                            item-text="title"
                            v-model="form.test_type"
                            :error-messages="errors"
                            label="Test type"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="answer_status" rules="required">
                          <v-autocomplete
                            dense
                            :items="answer_status_list"
                            item-value="id"
                            item-text="title"
                            v-model="form.answer_status"
                            :error-messages="errors"
                            label="Answer status"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="test_level" rules="required">
                          <v-autocomplete
                            dense
                            :items="test_level_list"
                            item-value="id"
                            item-text="title"
                            v-model="form.test_level"
                            :error-messages="errors"
                            label="Level"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="year" role="required">
                          <v-autocomplete
                            dense
                            :items="year_list"
                            v-model="form.year"
                            :error-messages="errors"
                            label="Year"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="month" role="required">
                          <v-autocomplete
                            dense
                            :items="month_list"
                            v-model="form.month"
                            item-text="title"
                            item-value="id"
                            :error-messages="errors"
                            label="Month"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="holding_level" role="required">
                          <v-autocomplete
                            dense
                            :items="holding_level_list"
                            v-model="form.holding_level"
                            item-text="title"
                            item-value="id"
                            :error-messages="errors"
                            label="Holding level"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="state" role="required">
                          <v-autocomplete
                            dense
                            :items="state_list"
                            v-model="form.state"
                            item-text="title"
                            item-value="id"
                            :error-messages="errors"
                            label="State"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="area" role="required">
                          <v-autocomplete
                            dense
                            :items="area_list"
                            v-model="form.area"
                            item-text="title"
                            item-value="id"
                            :error-messages="errors"
                            label="Area"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4" v-if="form.grade && form.area">
                        <validation-provider v-slot="{errors}" name="school" role="required">
                          <v-autocomplete
                            dense
                            :items="school_list"
                            v-model="form.school"
                            item-text="title"
                            item-value="id"
                            :error-messages="errors"
                            label="School"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="12">
                        <validation-provider v-slot="{errors}" name="title" role="required">
                          <v-text-field
                            dense
                            v-model="form.title"
                            :error-messages="errors"
                            label="Title"
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
                            placeholder="Write a brief description about the files to help the user make an informed choice"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="pdf_question_answer_file">
                          <v-file-input
                            dense
                            v-model="form.pdf_question_answer_file"
                            :error-messages="errors"
                            label="Pdf question & answer file"
                            :prepend-icon="false"
                            color="red"
                            prepend-inner-icon="mdi-file-pdf-box"
                            append-icon="mdi-folder-open"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="4">
                        <validation-provider v-slot="{errors}" name="word_question_answer_file">
                          <v-file-input
                            dense
                            v-model="form.word_question_answer_file"
                            :error-messages="errors"
                            label="Word question & answer file"
                            :prepend-icon="false"
                            color="blue"
                            prepend-inner-icon="mdi-file-word-outline"
                            append-icon="mdi-folder-open"
                            outlined
                          />
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" md="12">
                        <validation-provider v-slot="{errors}" name="word_question_answer_file">
                          <v-checkbox
                            dense
                            v-model="form.free_available"
                            :error-messages="errors"
                            label="I would like the file to be freely available to others."
                          />
                        </validation-provider>
                      </v-col>

                      <v-col cols="12" md="6" class="pb-0">
                        <v-btn type="submit" lg color="success" block>
                          Submit
                        </v-btn>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-btn lg outlined color="error" to="/user/test" block>
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
  name: "add-test",
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
      title: 'Test submission form'
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

      if (type === 'school'){
        params.section_id=this.form.grade;
        params.area_id=this.form.area;
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

    selectTopic(event){
      this.form.topic=event;
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

<template>
  <v-container class="test-maker">
    <v-stepper
      v-model="test_step"
      vertical
    >
      <v-stepper-step
        :complete="test_step > 1"
        step="1"
        color="teal"
      >
        <p>Header</p>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card flat class="mt-3 pb-10">
          <validation-observer ref="observer" v-slot="{invalid}">
            <form @submit.prevent="submitQuestion">
              <v-row>
                <v-col cols="12" md="4">
                  <validation-provider v-slot="{errors}" name="level" rules="required">
                    <v-autocomplete
                      dense
                      v-model="form.section"
                      :items="level_list"
                      :error-messages="errors"
                      item-text="title"
                      item-value="id"
                      label="Level"
                      outlined
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="12" md="4">
                  <validation-provider v-slot="{errors}" name="grade" rules="required">
                    <v-autocomplete
                      dense
                      v-model="form.base"
                      :items="grade_list"
                      item-value="id"
                      item-text="title"
                      :error-messages="errors"
                      label="Grade"
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
                      v-model="form.type"
                      :error-messages="errors"
                      label="Test type"
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
                      v-model="form.level"
                      :error-messages="errors"
                      label="Level"
                      outlined
                    />
                  </validation-provider>
                </v-col>

                <v-col cols="12" md="4"
                >
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
                  <validation-provider v-slot="{errors}" name="test_duration" role="required">
                    <v-text-field
                      dense
                      v-model="form.duration"
                      item-text="title"
                      type="number"
                      min="1"
                      item-value="id"
                      :error-messages="errors"
                      label="Test duration"
                      outlined
                    />
                  </validation-provider>
                </v-col>

                <v-col cols="12" md="4"
                       v-if="form.holding_level===1 || form.holding_level===2 || form.holding_level===3">
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
                </v-col>

                <v-col cols="12" md="4" v-if="form.holding_level===1 || form.holding_level===2">
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
                </v-col>
                <v-col cols="12" md="4" v-if="form.level && form.area && form.holding_level===1">
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


                <v-col cols="12" md="4">
                  <v-checkbox
                    dense
                    v-model="form.negativePoint"
                    :error-messages="errors"
                    label="Negative point"
                  />
                </v-col>


                <v-col cols="12" md="4">
                  <v-checkbox
                    dense
                    v-model="form.holdingTime"
                    label="Time of holding"
                  />

                </v-col>

                <v-col cols="12" md="12" v-show="form.holdingTime">
                  <v-date-picker
                    color="teal"
                    v-model="teaching_date"
                    full-width
                  ></v-date-picker>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  v-show="form.holdingTime"
                >
                  <v-menu
                    ref="menu"
                    v-model="timepicker_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="teaching_time"
                    transition="scale-transition"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="teaching_time"
                        label="Start time"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        outlined
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="timepicker_menu"
                      v-model="teaching_time"
                      full-width
                      format="24hr"
                      @click:minute="$refs.menu.save(teaching_time)"
                    ></v-time-picker>
                  </v-menu>
                </v-col>


                <v-col cols="12">
                  <v-row>
                    <v-col cols="12" md="6" class="pb-0">
                      <v-btn type="submit"
                             :loading="submit_loading"
                             :disabled="invalid"
                             lg color="teal" class="white--text" block>
                        Continue
                      </v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-btn lg outlined color="error" to="/user/dashboard" block>
                        Discard
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>


              </v-row>
            </form>
          </validation-observer>
        </v-card>

      </v-stepper-content>

      <v-stepper-step
        :complete="test_step > 2"
        step="2"
        color="teal"
      >
        <p>Tests</p>
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="test_step = 3"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="test_step > 3"
        color="teal"
        step="3"
      >
        Publish
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
      </v-stepper-content>

    </v-stepper>
  </v-container>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import TopicSelector from "@/components/form/topic-selector";
import {min} from "vee-validate/dist/rules";


export default {
  layout: "test-maker-layout",
  name: "test-maker",
  head() {
    return {
      title: 'Create online exam'
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    TopicSelector
  },
  data() {
    return {
      test_step: 1,
      form: {
        section: '',
        base: '',
        lesson: '',
        topics: '',
        type: '',
        level: '',
        holdingTime: false,
        state: '',
        area: '',
        school: '',
        duration: 3,
        startDate: 0,
        title: ''
      },
      teaching_time: '',
      teaching_time_secounds: 0,
      teaching_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      teaching_date_time: '',

      timepicker_menu: false,

      level_list: [],
      grade_list: [],
      field_list: [],
      lesson_list: [],
      topic_list: [],
      test_type_list: [],
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
      state_list: [],
      area_list: [],
      school_list: [],
      holding_level_list: [
        {id: 1, title: "School"},
        {id: 2, title: "District"},
        {id: 3, title: "State"},
        {id: 4, title: "Country"},
      ],

      submit_loading: false
    }
  },
  mounted() {
    this.getTypeList('section');
    this.getTypeList('test_type')
    this.getTypeList('state')
  },
  watch: {
    "teaching_date"(val) {//Convert date to secounds
      this.form.startDate = this.teaching_time_secounds;
      this.teaching_date_time = (this.$moment(val).format('x') / 1000);
      this.form.startDate = this.teaching_date_time + this.teaching_time_secounds;
    },
    "teaching_time"(val) {//Convert hour and minute to seconds
      var val_split = val.split(':');
      var hour = val_split[0] * 3600;
      var minute = val_split[1] * 60;
      var final_time = (hour + minute);

      this.teaching_time_secounds = final_time;
      this.form.startDate = (this.teaching_date_time + this.teaching_time_secounds);
    },
    "form.section"(val) {
      this.getTypeList('base', val);
      if (this.form.area)
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
      if (this.form.section)
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
        params.section_id = this.form.level;
        params.area_id = this.form.area;
      }


      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        var data = {};
        if (type === 'section') {
          this.level_list = res.data;
        } else if (type === 'base') {
          this.grade_list = res.data;

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
    selectTopic(event) {
      this.form.topics = event;
    },
    submitQuestion() {
      this.submit_loading = true;
      const querystring = require('querystring');
      this.$axios.$post('/api/v1/exams', querystring.stringify(this.form))
        .then(response => {
          this.$toast.success("Created successfully");
          this.test_step = 2;
        }).catch(error => {
        this.$toast.error(error.response.data.message);
      }).finally(() => {
        this.submit_loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>

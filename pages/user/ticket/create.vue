<template>
  <v-row>
    <v-col cols="12" class="px-0 px-sm-2">
      <v-row>
        <v-col cols="12" class="pl-5 text-h4 teal--text">
          <span class="fa-solid fa-envelope  "></span>
          <span>
           New message
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
                    <v-col cols="12" md="6">
                      <validation-provider v-slot="{errors}" name="subject" rules="required">
                        <v-autocomplete
                          dense
                          v-model="form.subject"
                          :items="subject_list"
                          :error-messages="errors"
                          item-text="title"
                          item-value="id"
                          label="Subject"
                          outlined
                        />
                      </validation-provider>
                    </v-col>
                    <v-col cols="12" md="6">
                      <validation-provider v-slot="{errors}" name="title" rules="required">
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
                      <validation-provider v-slot="{errors}" name="text" rules="required">
                        <v-textarea
                          dense
                          v-model="form.text"
                          :error-messages="errors"
                          label="Message text"
                          outlined
                        />
                      </validation-provider>
                      <nuxt-link to="/formula-help">
                        <strong   class="pointer teal--text text-h6">
                          <span class="fa-solid fa-link"/>
                          Formula writing guide
                        </strong>
                      </nuxt-link>
                    </v-col>
                    <v-col cols="12" md="3">
                      <validation-provider v-slot="{errors}" name="attach_file" rules="required">
                        <v-file-input
                          dense
                          v-model="form.attach_file"
                          :error-messages="errors"
                          multiple
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
                      <v-btn type="submit" lg color="success" :disabled="invalid" block>
                        Submit
                      </v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-btn lg outlined color="error" to="/user/ticket" block>
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
        subject: '',
        title: '',
        text: ''
      },
      subject_list: [],

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
    this.getTypeList('ticket_type');
  },
  methods: {
    getTypeList(type, parent = '') {
      var params = {
        type: type
      }



      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        this.subject_list=res.data;

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

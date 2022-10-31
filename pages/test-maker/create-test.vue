<template>
  <v-container id="create-test">
    <v-card flat class="mt-3 pb-10 mb-16">
      <validation-observer ref="observer" v-slot="{invalid}">
        <form @submit.prevent="submitQuestion">
          <v-row>
            <v-col cols="12" md="4">
              <validation-provider v-slot="{errors}" name="level" rules="required">
                <v-autocomplete
                  dense
                  v-model="form.level"
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
                  v-model="form.grade"
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
            <v-col cols="12" md="4">
              <validation-provider v-slot="{errors}" name="lesson" rules="required">
                <v-autocomplete
                  dense
                  :items="topic_list"
                  item-value="id"
                  item-text="title"
                  v-model="form.topic"
                  :error-messages="errors"
                  label="Topic"
                  outlined
                />
              </validation-provider>
            </v-col>


            <v-col cols="12" md="4">
              <validation-provider v-slot="{errors}" name="source" rules="required">
                <v-text-field
                  dense
                  v-model="form.source"
                  :error-messages="errors"
                  label="Source"
                  outlined
                />
              </validation-provider>
            </v-col>


            <v-col cols="12" md="4">
              <validation-provider v-slot="{errors}" name="txt_direction" rules="required">
                <v-autocomplete
                  dense
                  :items="txt_direction_list"
                  item-value="value"
                  item-text="title"
                  v-model="form.txt_direction"
                  :error-messages="errors"
                  label="Text direction"
                  outlined
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" md="6" id="test-maker-question">
              <p>Questions</p>
              <client-only placeholder="loading...">
                <ckeditor-nuxt  v-model="contentHolder1" :config="editorConfig"/>
              </client-only>
            </v-col>
            <v-col cols="12" md="6">

              <v-row >
                <v-col cols="1">
                  <p class="answer_label">Options:</p>
                </v-col>
                <v-col cols="10" class="d-flex align-center justify-center" >
                <p class="mr-3">Option type:</p>
                  <v-radio-group v-model="answer_type" row>
                    <v-radio label="Text" value="text" class="mr-8"/>

                    <v-radio label="Photo" value="photo" class="ml-8"/>
                </v-radio-group>
                </v-col>

              </v-row>
              <v-radio-group v-model="correct_answer">
                <v-row>
                  <v-col cols="1">
                    <v-radio value="1"></v-radio>
                    <span class="answer_label">A</span>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='text'">
                    <client-only placeholder="loading..." >
                      <ckeditor-nuxt v-model="contentHolder2" :config="editorConfig"/>
                    </client-only>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='photo'">
                    <v-file-input
                      dense
                      v-model="answer"
                      :error-messages="errors"
                      label="Answer A file"
                      :prepend-icon="false"
                      color="red"
                      style="max-width: 400px"
                      prepend-inner-icon="mdi-file-pdf-box"
                      append-icon="mdi-folder-open"
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1">
                    <v-radio value="3"></v-radio>
                    <span class="answer_label">B</span>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='text'">
                    <client-only placeholder="loading..." >
                      <ckeditor-nuxt v-model="contentHolder2" :config="editorConfig"/>
                    </client-only>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='photo'">
                    <v-file-input
                      dense
                      v-model="answer"
                      :error-messages="errors"
                      label="Answer B file"
                      :prepend-icon="false"
                      color="red"
                      style="max-width: 400px"
                      prepend-inner-icon="mdi-file-pdf-box"
                      append-icon="mdi-folder-open"
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1">
                    <v-radio value="4"></v-radio>
                    <span class="answer_label">C</span>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='text'">
                    <client-only placeholder="loading...">
                      <ckeditor-nuxt v-model="contentHolder2" :config="editorConfig"/>
                    </client-only>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='photo'">
                    <v-file-input
                      dense
                      v-model="answer"
                      :error-messages="errors"
                      label="Answer C file"
                      :prepend-icon="false"
                      color="red"
                      style="max-width: 400px"
                      prepend-inner-icon="mdi-file-pdf-box"
                      append-icon="mdi-folder-open"
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1">
                    <v-radio value="2"></v-radio>
                    <span class="answer_label">D</span>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='text'">
                    <client-only placeholder="loading..." >
                      <ckeditor-nuxt v-model="contentHolder2" :config="editorConfig"/>
                    </client-only>
                  </v-col>
                  <v-col cols="11" v-show="answer_type==='photo'">
                    <v-file-input
                      dense
                      v-model="answer"
                      :error-messages="errors"
                      label="Answer D file"
                      :prepend-icon="false"
                      color="red"
                      style="max-width: 400px"
                      prepend-inner-icon="mdi-file-pdf-box"
                      append-icon="mdi-folder-open"
                      outlined
                    />
                  </v-col>
                </v-row>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" id="test-maker-answer">
              <p>Descriptive answer</p>
              <client-only placeholder="loading..." >
                <ckeditor-nuxt v-model="descriptive_answer" :config="editorConfig"/>
              </client-only>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12" md="6" class="pb-0">
                  <v-btn type="submit" lg color="teal" class="white--text" block>
                    Create
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

  </v-container>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import TopicSelector from "@/components/form/topic-selector";


export default {
  layout: "test-maker-layout",
  name: "test-maker",
  head() {
    return {
      title: 'Create online exam',
      correct_answer: 1,
      script: [
        //MathType to Latex
        // {
        //   type: 'text/javascript',
        //   src: '/MathType.js'
        // },
        // {
        //   type: 'text/javascript',
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=MML_HTMLorMML',
        //   async: true,
        // }
        //End MathType to Latex
      ]
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    TopicSelector,
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  data() {
    return {
      test_step: 1,
      answer_type:'text',
      editorConfig: {
        plugins: [
          'Autoformat',
          'Essentials',
          'Alignment',
          'Bold',
          'Underline',
          'PasteFromOffice',
          'Paragraph',
          'WordCount',
        ],
      },

      contentHolder1: '',
      contentHolder2: '',

      form: {
        level: '',
        grade: '',
        lesson: '',
        topic: '',
        txt_direction: 'ltr',
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      },
      timepicker_menu: false,

      level_list: [],
      grade_list: [],
      field_list: [],
      lesson_list: [],
      topic_list: [],
      txt_direction_list: [
        {
          value: 'ltr',
          title: 'LTR'
        }, {
          value: 'rtl',
          title: 'RTL'
        },
      ]

    }
  },
  mounted() {
    this.getTypeList('section');
    this.getTypeList('test_type')
    this.getTypeList('state');
  },
  watch: {
    "form.level"(val) {
      this.getTypeList('base', val);
    },
    "form.grade"(val) {
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


    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ["\(", "\)"]],
            displayMath: [['$$', '$$'], ["\[", "\]"]],
            processEscapes: true,
            processEnvironments: true
          },
          // Center justify equations in code and markdown cells. Elsewhere
          // we use CSS to left justify single line equations in code cells.
          displayAlign: 'center',
          "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}},
            linebreaks: {automatic: true}
          }
        });
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, this.$refs.mathJaxEl]);
      }
    }


  }
}
</script>

<style scoped>

</style>

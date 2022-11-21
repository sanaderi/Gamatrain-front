<template>
  <v-container class="test-maker">
    <v-card>
      <v-card-text>
        <v-row class="text-center">
          <v-col cols="4">
            <p>Remaining time:
              <v-chip label color="teal" dark>
                {{ this.hhmmss(remainTime) }}
              </v-chip>
            </p>
          </v-col>
          <v-col cols="4">
            <p>Unanswered questions:
              <v-chip label color="teal" dark>
                {{ contentData.tests.length - answerData.length }}
              </v-chip>
            </p>
          </v-col>
          <v-col cols="4">
            <a :href="nextPin ? `#item-${nextPin}` : ''" @click="updateNextPin()">Pined question:
              <v-chip label color="teal" dark>
                {{pinQuestionsArr.length}}
              </v-chip>
            </a>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>


    <v-card class="test-list overflow-y-auto" height="80vh"

    >
      <v-card-text>
        <v-row>
          <v-col
            :id="`item-${item.id}`"
            cols="12" v-show="contentData.tests.length>0"
                 v-for="item in contentData.tests"
          >
            <div id="test-question"
                 ref="mathJaxEl"
                 v-html="item.question"/>
            <img :src="item.q_file"/>

            <v-radio-group @change="selectAnswer(item.id,$event)">
              <v-radio value="1">
                <template slot="label">
                  <div class="answer">
                    <span>1)</span>
                    <span
                      ref="mathJaxEl"
                      v-html="item.answer_a"></span>
                  </div>
                </template>
              </v-radio>
              <v-radio value="2">
                <template slot="label">
                  <div class="answer">
                    <span>2)</span>
                    <span
                      ref="mathJaxEl"
                      v-html="item.answer_b"></span>
                  </div>
                </template>
              </v-radio>
              <v-radio value="3">
                <template slot="label">
                  <div class="answer ">
                    <span>3)</span>
                    <span
                      ref="mathJaxEl"
                      v-html="item.answer_c"></span>
                  </div>
                </template>
              </v-radio>
              <v-radio value="4">
                <template slot="label">
                  <div class="answer">
                    <span>4)</span>
                    <span
                      ref="mathJaxEl"
                      v-html="item.answer_d"/>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
            <v-row>
              <v-col cols="6">
                <v-btn icon fab x-small @click="eraseTest(item.id)">
                  <v-icon>
                    mdi-eraser
                  </v-icon>
                </v-btn>
                <v-btn icon fab :color="pinQuestionsArr.find(x=>x===item.id) ? 'teal' : ''"
                       x-small @click="pinQuestion(item.id)">
                  <v-icon>
                    mdi-pin
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="mt-3"/>
          </v-col>
          <v-col v-show="!contentData.exam.tests.length" cols="12" class="text-center">
            <p>
              Oops! no data found
            </p>
          </v-col>
        </v-row>
        <v-row class="mb-16">
          <v-col cols="12" md="6" class="pb-0">
            <v-btn @click="endExam()"
                   :loading="submit_loading"
                   lg color="teal" class="white--text" block>
              Send answers
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn lg outlined color="error" to="/user" block>
              Discard
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "exam-start",
  layout: "test-maker-layout",
  head() {
    return {
      title: 'Create online exam',
      script: [
        {src: `${process.env.FILE_BASE_URL}/assets/packages/MathJax/MathJax.js?config=TeX-MML-AM_CHTML`}
      ],
    }
  },
  async asyncData({params, $axios}) {
    // This could also be an action dispatch
    const content = await $axios.$get(`/api/v1/exams/start/${params.id}`);
    var contentData = [];

    //Check data exist
    if (content.status === 1) {
      contentData = content.data;
    }

    return {contentData};
  },
  data() {
    return {
      contentData: [],
      submit_loading: false,
      answerData: [],
      answerForm: [],
      remainTime: 0,
      pinQuestionsArr:[],
      nextPin:'',
    }
  },
  mounted() {
    this.remainTime = this.contentData.exam.azmoon_time * 60;
    this.countDownTimer();
    this.renderMathJax();

  },
  methods: {
    selectAnswer(question_id, answer) {
      this.answerData.push(`${question_id}:${answer}`);

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
        MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, this.$refs.mathJaxEl]);


      }
    },
    endExam() {
      this.submit_loading = true;
      const querystring = require('querystring');
      this.$axios.$post(`/api/v1/exams/end/${this.contentData.exam.id}`,
        querystring.stringify({
          startID: this.contentData.startID,
          answers: JSON.stringify(this.answerData)
        })
        , {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
        .then(response => {
          console.log(response);
        }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.submit_loading = false;
      })
    },


    //Convert form data from multipart to urlencode
    urlencodeFormData(fd) {
      var s = '';

      for (var pair of fd.entries()) {
        if (typeof pair[1] == 'string') {
          s += (s ? '&' : '') + this.encode(pair[0]) + '=' + this.encode(pair[1]);
        }
      }
      return s;
    },

    encode(s) {
      return encodeURIComponent(s).replace(/%20/g, '+');
    },


    countDownTimer() {
      if (this.remainTime > 0) {
        setTimeout(() => {
          this.remainTime -= 1
          this.countDownTimer()
        }, 1000)
      } else {
        this.endExam();
      }
    },


    //Convert seconds to readable HH:ii:ss format
    hhmmss(secs) {
      var minutes = Math.floor(secs / 60);
      secs = secs % 60;
      var hours = Math.floor(minutes / 60)
      minutes = minutes % 60;
      if (hours)
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
      else
        return `${this.pad(minutes)}:${this.pad(secs)}`;
    },
    pad(num) {
      return ("0" + num).slice(-2);
    },
    //End convert seconds to readable HH:ii:ss format


    pinQuestion(question_id){
      this.pinQuestionsArr.push(question_id);

      //Init next pin for first time
      if (this.pinQuestionsArr.length===1)
        this.nextPin=question_id;
    },
    updateNextPin(){
      if(this.pinQuestionsArr.length){
        var index=this.pinQuestionsArr.findIndex(x=>x===this.nextPin);
        if ((index+1)===this.pinQuestionsArr.length)
          this.nextPin=this.pinQuestionsArr[0];
        else
          this.nextPin=this.pinQuestionsArr[index+1];
      }
    },
    eraseTest(question_id){
      var index=this.contentData.tests.findIndex(x=>x.id===question_id);
      this.contentData.tests.splice(index,1);
    }
  }

}
</script>

<style scoped>

</style>

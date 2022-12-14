<template>
  <v-container class="test-maker">
    <v-container>
      <v-row class="mt-4">
        <v-col cols="12" md="12">
        <span class="text-h4 teal--text">
            <span class="fa-solid fa-file" style="font-size: 2rem!important;"/>
            {{ contentData.exam.title }} Report card
        </span>
        </v-col>
      </v-row>
    </v-container>
    <v-card class="mb-16">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-simple-table class="exams_table">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left text-h5">
                      Participant
                    </th>
                    <th class="text-center text-h5">
                      <i class="fa-regular fa-circle-play fa-xl d-block d-md-none"></i>
                      <span class="d-none d-md-block">
                       Start time
                    </span>
                    </th>
                    <th class="text-center text-h5">
                      <i class="fa-regular fa-clock fa-xl d-block d-md-none"></i>
                      <span class="d-none d-md-block">
                       Test duration
                    </span>
                    </th>
                    <th class="text-center text-h5">
                      <i class="fa-regular fa-circle-stop fa-xl d-block d-md-none"></i>
                      <span class="d-none d-md-block">
                       Response time
                    </span>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>{{ contentData.user.first_name }} {{ contentData.user.last_name }}</td>
                    <td class="text-center">{{ contentData.userData.subdate }}</td>
                    <td class="text-center">{{ contentData.exam.azmoon_time }} min</td>
                    <td class="text-center">{{ contentData.userData.submit_time }} Seconds</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>

          <v-row class="mt-8">
            <v-col class="d-none d-md-block" md="12">
              <span class="mr-2">
                 <i class="fa-solid fa-circle-check fa-lg green--text "></i>
                 : Correct answers
              </span>
              <span class="mr-2 my-1">
                 <i class="fa-regular fa-times-circle fa-lg red--text "></i>
                 : Wrong answer
              </span>
              <span class="mr-2 my-1">
                 <i class="fa-regular fa-circle-check fa-lg green--text "></i>
                 : Correct option
              </span>
              <span class="mr-2 my-1">
                 <i class="fa-regular fa-circle fa-lg "></i>
                 : No answer
              </span>
            </v-col>
            <v-col cols="6" class="d-block d-md-none">
               <span class="mr-2">
                 <i class="fa-solid fa-circle-check fa-lg green--text "></i>
                 : Correct answers
              </span>
            </v-col>
            <v-col cols="6" class="d-block d-md-none">
               <span class="mr-2 my-1">
                 <i class="fa-regular fa-times-circle fa-lg red--text "></i>
                 : Wrong answer
              </span>
            </v-col>
            <v-col cols="6" class="d-block d-md-none">
               <span class="mr-2 my-1">
                 <i class="fa-regular fa-circle-check fa-lg green--text "></i>
                 : Correct option
              </span>
            </v-col>
            <v-col cols="6" class="d-block d-md-none">
               <span class="mr-2 my-1">
                 <i class="fa-regular fa-circle fa-lg "></i>
                 : No answer
              </span>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <v-simple-table class="exams_table">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left text-h5">
                      #
                    </th>
                    <th class="text-center text-h5">
                      1
                    </th>
                    <th class="text-center text-h5">
                      2
                    </th>
                    <th class="text-center text-h5">
                      3
                    </th>
                    <th class="text-center text-h5">
                      4
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,key) in contentData.result">
                    <td>{{ key + 1 }}</td>
                    <td class="text-center">
                      <i v-if="item.true_answer==1 && item.user_answer==1"
                         class="fa-solid fa-circle-check fa-lg green--text"></i>
                      <i v-else-if="item.true_answer!=1 && item.user_answer==1"
                         class="fa-regular fa-times-circle fa-lg red--text "></i>
                      <i v-else-if="item.true_answer==1 && (!item.user_answer || item.user_answer!=1)"
                         class="fa-regular fa-circle-check fa-lg green--text "></i>
                      <i v-else class="fa-regular fa-circle fa-lg "></i>

                    </td>
                    <td class="text-center">
                      <i v-if="item.true_answer==2 && item.user_answer==2"
                         class="fa-solid fa-circle-check fa-lg green--text "></i>
                      <i v-else-if="item.true_answer!=2 && item.user_answer==2"
                         class="fa-regular fa-times-circle fa-lg red--text "></i>
                      <i v-else-if="item.true_answer==2 && (!item.user_answer || item.user_answer!=2)"
                         class="fa-regular fa-circle-check fa-lg green--text "></i>
                      <i v-else class="fa-regular fa-circle fa-lg "></i>
                    </td>
                    <td class="text-center">
                      <i v-if="item.true_answer==3 && item.user_answer==3"
                         class="fa-solid fa-circle-check fa-lg green--text "></i>
                      <i v-else-if="item.true_answer!=3 && item.user_answer==3"
                         class="fa-regular fa-times-circle fa-lg red--text "></i>
                      <i v-else-if="item.true_answer==3 && (!item.user_answer || item.user_answer!=3)"
                         class="fa-regular fa-circle-check fa-lg green--text "></i>
                      <i v-else class="fa-regular fa-circle fa-lg "></i>
                    </td>
                    <td class="text-center">
                      <i v-if="item.true_answer==4 && item.user_answer==4"
                         class="fa-solid fa-circle-check fa-lg green--text "></i>
                      <i v-else-if="item.true_answer!=2 && item.user_answer==4"
                         class="fa-regular fa-times-circle fa-lg red--text "></i>
                      <i v-else-if="item.true_answer==4 && (!item.user_answer || item.user_answer!=4)"
                         class="fa-regular fa-circle-check fa-lg green--text "></i>
                      <i v-else class="fa-regular fa-circle fa-lg "></i>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col cols="12" md="8">
              <v-row>
                <v-col cols="12">
                  <v-simple-table class="exams_table">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left text-h5">
                          Lesson
                        </th>
                        <th class="text-center text-h5">
                          Count
                        </th>
                        <th class="text-center text-h5">
                          <i class="fa-solid fa-circle-check  green--text "></i>
                        </th>
                        <th class="text-center text-h5">
                          <i class="fa-solid fa-times-circle  red--text "></i>
                        </th>
                        <th class="text-center text-h5">
                          <i class="fa-regular fa-circle "></i>
                        </th>
                        <th class="text-center text-h5">
                          %
                        </th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in contentData.answerStats.lessons">
                        <td>{{ item.title }}</td>
                        <td class="text-center">{{ item.num }}</td>
                        <td class="text-center">{{ item.true }}</td>
                        <td class="text-center">{{ item.false }}</td>
                        <td class="text-center">{{ item.noanswer }}</td>
                        <td class="text-center">{{ item.percent }}</td>
                      </tr>
                      </tbody>
                      <tfoot>
                      <tr bgcolor="#E5FBF7">
                        <td>Total</td>
                        <td class="text-center">
                          {{ contentData.answerStats.total.num }}
                        </td>
                        <td class="text-center">
                          {{ contentData.answerStats.total.true }}
                        </td>
                        <td class="text-center">
                          {{ contentData.answerStats.total.false }}
                        </td>
                        <td class="text-center">
                          {{ contentData.answerStats.total.noAnswer }}
                        </td>
                        <td class="text-center">
                          {{ contentData.answerStats.total.percent }}
                        </td>

                      </tr>
                      </tfoot>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-simple-table class="exams_table">
                    <template v-slot:default>
                      <tbody>
                      <tr>
                        <td>
                          <i class="fa-solid fa-circle-check fa-lg green--text "></i>&nbsp;
                          Correct answers:
                        </td>
                        <td class="text-center">{{ contentData.answerStats.total.true }}</td>
                      </tr>
                      <tr>
                        <td>
                          <i class="fa-regular fa-times-circle fa-lg red--text"></i>&nbsp;
                          Wrong answers:
                        </td>
                        <td class="text-center">{{ contentData.answerStats.total.false }}</td>
                      </tr>
                      <tr>
                        <td>
                          <i class="fa-regular fa-circle fa-lg "></i>&nbsp;
                          No answer:
                        </td>
                        <td class="text-center">{{ contentData.answerStats.total.noAnswer }}</td>
                      </tr>
                      <tr>
                        <td>
                          Rank in country:
                        </td>
                        <td class="text-center" v-if="contentData.rank &&
                           contentData.rank.total">
                          <strong>
                            {{ contentData.rank.total.user }}
                          </strong> of {{ contentData.rank.total.total }} participants
                        </td>
                        <td v-else class="text-center">-</td>
                      </tr>
                      <tr>
                        <td>
                          Rank in state:
                        </td>
                        <td class="text-center"
                            v-if="contentData.rank &&
                           contentData.rank.state"
                        >
                          <strong
                          >{{ contentData.rank.state.user }}</strong> of {{ contentData.rank.state.total }} participants
                        </td>
                        <td class="text-center" v-else>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Rank in area:
                        </td>
                        <td class="text-center"
                            v-if="contentData.rank
                               && contentData.rank.area"
                        >
                          <strong>
                            {{ contentData.rank.area.user }}</strong> of {{ contentData.rank.area.total }} participants
                        </td>
                        <td v-else class="text-center">
                          -
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                  <v-btn block color="error"
                         @click="startDownload"
                         :loading="download_loading"
                         class="mt-6">
                    Download PDF file with key |
                    {{ contentData.price.price > 0 ? '$' + contentData.price.price : 'Free' }}
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <pie-chart :chart-data="chartData"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>


  </v-container>
</template>

<script>
import PieChart from "@/components/chart/PieChart";

export default {
  name: "exam-result",
  components: {PieChart},
  layout: "test-maker-layout",
  head() {
    return {
      title: 'Online exam result',
    }
  },
  async asyncData({params, $axios}) {
    // This could also be an action dispatch
    const content = await $axios.$get(`/api/v1/exams/result/${params.id}`);
    var contentData = [];

    //Check data exist
    if (content.status === 1) {
      contentData = content.data;
    }

    let chartData = {
      labels: [' Correct answers', ' Wrong answers', ' No answer'],
      datasets: [
        {
          borderColor: '#e1e2e3',
          backgroundColor: ['#4CAF50', '#F44336', '#FFFFFF'],
          data: [contentData.answerStats.total.true, contentData.answerStats.total.false,
            contentData.answerStats.total.noAnswer]
        }
      ]
    };

    return {contentData, chartData};
  },
  data() {
    return {
      contentData: [],
      chartData: {},
      download_loading: false
    }
  },
  mounted() {

  },
  methods: {

    //Download file
    startDownload() {
      this.download_loading = true;
      this.$axios.$get(`/api/v1/exams/download/${this.contentData.exam.id}`)
        .then(response => {
          var FileSaver = require('file-saver');
          FileSaver.saveAs(response.data.url, response.data.name);
        }).catch(err => {
        if (err.response.status == 400) {
          if (err.response.data.status == 0 && err.response.data.error == "creditNotEnough") {
            this.$toast.info("No enough credit");
          }
        } else if (err.response.status == 403) {
          this.$router.push({query: {auth_form: 'login'}});
        }
        console.log(err);
      }).finally(() => {
        this.download_loading = false;
      })
    }
    //End download file
  }

}
</script>

<style scoped>

</style>

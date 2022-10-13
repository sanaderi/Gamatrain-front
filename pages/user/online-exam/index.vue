<template>
  <div>
    <v-col cols="12" class="px-0 px-sm-2">
      <v-row>
        <v-col cols="12" class="pl-5">
          <span class="icon icong-qa text-h3 teal--text"></span>
          <span class="text-h4 teal--text">
            Participated tests
          </span>
        </v-col>
      </v-row>
      <v-card class="mt-3">
        <v-card-text class="px-sm-8 px-md-4">
          <v-row>
            <v-col cols="12" class="px-0 px-sm-4 px-md-4">
              <v-simple-table class="exams_table">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left text-h5">
                      #
                    </th>
                    <th class="text-center text-h5">
                      Test
                    </th>
                    <th class="text-center text-h5">
                      Lesson
                    </th>
                    <th class="text-center text-h5">
                      Date
                    </th>
                    <th class="text-center text-h5">
                      Status
                    </th>
                    <th class="text-center text-h5">
                      Report card
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    v-show="exam_list.length>0"
                    v-for="item in exam_list"
                    :key="item.id"
                  >
                    <td></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr v-show="exam_list.length===0">
                    <td colspan="8">
                      <p>Opps! no data found</p>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  layout: "dashboard_layout",
  name: "question-manage",
  // async asyncData({params,$axios}) {
  //   const examData=await $axios.$get('/api/v1/exams');
  //   return {examData};
  // },
  head(){
    return{
     title:'Q & A manage'
    }
  },
  data() {
    return {
      exam_list: [],
    }
  },
  mounted() {
    console.log("Exam list:"+this.exam_list.length);
  }

}
</script>

<style scoped>
p{
  font-size: 1.4rem;
}
</style>

<template>
  <v-container class="test-maker">
   <v-container>
     <v-row class="mt-4">
       <v-col cols="12">
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
             <v-col cols="12">
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
             <v-col cols="12">
              <span class="mr-2">
                 <i class="fa-solid fa-circle-check fa-lg green--text "></i>
                 : Correct answer
              </span>
               <span class="mr-2">
                 <i class="fa-regular fa-times-circle fa-lg red--text "></i>
                 : Wrong answer
              </span>
               <span class="mr-2">
                 <i class="fa-regular fa-circle-check fa-lg green--text "></i>
                 : Correct option
              </span>
               <span class="mr-2">
                 <i class="fa-regular fa-circle fa-lg "></i>
                 : No answer
              </span>
             </v-col>
           </v-row>

           <v-row>
             <v-col cols="4">
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
                     <td>{{ key+1 }}</td>
                     <td class="text-center">
                       <i v-if="item.true_answer==1 && item.user_answer==1"
                          class="fa-solid fa-circle-check fa-lg green--text "></i>
                       <i v-else-if="item.true_answer==1 && (!item.user_answer)"
                          class="fa-regular fa-circle-check fa-lg green--text "></i>
                       <i v-else class="fa-regular fa-circle fa-lg "></i>
                     </td>
                     <td class="text-center">
                       <i v-if="item.true_answer==2 && item.user_answer==2"
                          class="fa-solid fa-circle-check fa-lg green--text "></i>
                       <i v-else-if="item.true_answer==2 && (!item.user_answer)"
                          class="fa-regular fa-circle-check fa-lg green--text "></i>
                       <i v-else class="fa-regular fa-circle fa-lg "></i>
                     </td>
                     <td class="text-center">
                       <i v-if="item.true_answer==3 && item.user_answer==3"
                          class="fa-solid fa-circle-check fa-lg green--text "></i>
                       <i v-else-if="item.true_answer==3 && (!item.user_answer)"
                          class="fa-regular fa-circle-check fa-lg green--text "></i>
                       <i v-else class="fa-regular fa-circle fa-lg "></i>
                     </td>
                     <td class="text-center">
                       <i v-if="item.true_answer==4 && item.user_answer==4"
                          class="fa-solid fa-circle-check fa-lg green--text "></i>
                       <i v-else-if="item.true_answer==4 && (!item.user_answer)"
                          class="fa-regular fa-circle-check fa-lg green--text "></i>
                       <i v-else class="fa-regular fa-circle fa-lg "></i>
                     </td>
                   </tr>
                   </tbody>
                 </template>
               </v-simple-table>
             </v-col>
             <v-col cols="8"></v-col>
           </v-row>
         </v-container>
       </v-card-text>
     </v-card>


  </v-container>
</template>

<script>
export default {
  name: "exam-result",
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

    return {contentData};
  },
  data() {
    return {
      contentData: [],
    }
  },
  mounted() {

  },
  methods: {}

}
</script>

<style scoped>

</style>

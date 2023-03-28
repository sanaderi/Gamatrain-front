<template>
  <!--Content type-->
  <v-row class="create_content_section">
    <v-col cols="6" md="3"
           class="px-2"
           v-for="(item,index) in button_list" :class="`${item.class}`">
      <v-card outlined :disabled="$auth.user.group_id==='6' && button_list[index].class!=='question_answer'">
        <v-card-text class="px-0 px-md-4">
          <v-row >
            <v-col cols="6" class="text-left">
              <v-btn class="icon_btn" fab x-large :to="`${item.manage_link}`">
                <span :class="`icon ${item.icon} group-icon`"></span>
              </v-btn>

            </v-col>
            <v-col cols="6" class="text-right counter">
              <question-statistics ref="question-statistics" v-if="button_list[index].class==='question_answer'"/>
              <span v-else>
                {{item.count}}
              </span>
            </v-col>
            <v-col cols="12" class="title py-0">
              {{item.title}}
            </v-col>
            <v-col cols="12">
              <v-btn class="icon_link" block :to="`${item.link}`" outlined>
                <i class="fa-solid fa-plus-circle px-1 icon  fa-xl"></i> New
              </v-btn>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <!--End content type-->
</template>

<script>
import QuestionStatistics from "@/components/dashboard/question-statistics";
export default {
  name: "create-content-button",
  components: {QuestionStatistics},
  data(){
    return{
      stats:[],
      button_list:[
        {
          class:'sample_exam',
          title:'Paper',
          count:0,
          link:'/user/paper/create',
          manage_link:'/user/paper',
          icon:'icong-test',
        },{
          class:'training_content',
          title:'Multimedia',
          count:0,
          link:'/user/multimedia/create',
          manage_link:'/user/multimedia',
          icon:'icong-learnfiles',
        },{
          class:'question_answer',
          title:'Q & A',
          count:0,
          link:'/user/question/create',
          manage_link:'/user/question',
          icon:'icong-qa',
        },{
          class:'online_exam',
          title:'Online exam',
          count:0,
          link:'/test-maker/create',
          manage_link:'/test-maker',
          icon:'icong-azmoon',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>

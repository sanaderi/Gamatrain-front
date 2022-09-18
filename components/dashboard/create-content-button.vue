<template>
  <!--Content type-->
  <v-row class="create_content_section">
    <v-col cols="6" md="3" v-for="item in button_list" :class="`${item.class}`">
      <v-card>
        <v-text>
          <v-row class="pa-6">
            <v-col cols="6" class="text-left">
              <v-btn class="icon_btn" fab x-large>
                <span :class="`icon ${item.icon} group-icon`"></span>
              </v-btn>

            </v-col>
            <v-col cols="6" class="text-right counter">{{item.count}}</v-col>
            <v-col cols="12" class="title">
              {{item.title}}
            </v-col>
            <v-col cols="12">
              <v-btn class="icon_link" block :to="`${item.link}`">
                <i class="fa-solid fa-plus-circle px-1 icon  fa-xl"></i> New
              </v-btn>
            </v-col>
          </v-row>

        </v-text>
      </v-card>
    </v-col>
  </v-row>
  <!--End content type-->
</template>

<script>
export default {
  name: "create-content-button",
  data(){
    return{
      button_list:[
        {
          class:'sample_exam',
          title:'Sample exam',
          count:18,
          link:'/test/add',
          icon:'icong-test',
        },{
          class:'training_content',
          title:'Training content',
          count:20,
          link:'/training_content/add',
          icon:'icong-learnfiles',
        },{
          class:'question_answer',
          title:'Q & A',
          count:19,
          link:'/question/add',
          icon:'icong-qa',
        },{
          class:'online_exam',
          title:'Online exam',
          count:25,
          link:'/online_exam/add',
          icon:'icong-azmoon',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <v-col cols="12" class="px-0 px-sm-2">
      <v-row>
        <v-col cols="12" class="pl-5">
          <span class="icon icong-test text-h3 teal--text"></span>
          <span class="text-h4 teal--text">
            Multimedia
          </span>
        </v-col>
      </v-row>
      <v-card class="mt-3">
        <v-card-title class="text-h4">
          <v-row>
            <v-col cols="12" class="text-left">
              <v-btn to="/user/multimedia/create" color="teal" class="white--text">
                New multimedia
              </v-btn>
              <v-btn @click="filter_block=!filter_block" color="orange" outlined class="white--text">
                Filter
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="px-sm-8 px-md-4">
          <v-row v-show="filter_block">
            <v-col cols="12" md="3">
              <v-autocomplete
                dense
                v-model="form.level"
                :items="level_list"
                item-text="title"
                item-value="id"
                label="Level"
                outlined
              />
            </v-col>
            <v-col cols="12" md="3">
              <v-autocomplete
                dense
                v-model="form.grade"
                :items="grade_list"
                item-value="id"
                item-text="title"
                label="Grade"
                outlined
              />
            </v-col>
            <v-col cols="12" md="3">
              <v-autocomplete
                dense
                :items="lesson_list"
                item-value="id"
                item-text="title"
                v-model="form.lesson"
                label="Lesson"
                outlined
              />
            </v-col>
            <v-col cols="12" md="3">
              <v-autocomplete
                dense
                :items="status_list"
                item-value="id"
                item-text="title"
                v-model="form.status"
                label="Status"
                outlined
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="px-0 px-sm-4 px-md-4">
              <v-simple-table class="exams_table">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left text-h5">
                      Budgeting
                    </th>
                    <th class="text-center  text-h5">
                      Code
                    </th>
                    <th class="text-center text-h5">
                      Title
                    </th>
                    <th class="text-center text-h5">
                      Score
                    </th>
                    <th class="text-center text-h5">
                      Download
                    </th>
                    <th class="text-center text-h5">
                      Date
                    </th>
                    <th class="text-center text-h5">
                      Status
                    </th>
                    <th class="text-center text-h5">
                      Actions
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
  name: "test-manage",
  // async asyncData({params,$axios}) {
  //   const examData=await $axios.$get('/api/v1/exams');
  //   return {examData};
  // },
  data() {
    return {
      filter_block:false,
      form: {
        level: '',
        grade: '',
        lesson: '',
      },
      exam_list: [],
      level_list:[],
      grade_list:[],
      lesson_list:[],
      status_list:[
        {id:'',title:'All'},
        {id:0,title:'Not reviewed'},
        {id:1,title:'Confirmed'},
        {id:2,title:'Reference to type unit'},
        {id:3,title:'Has message'},
        {id:4,title:'Inactive'},
        {id:5,title:'Deleted (admin)'},
        {id:6,title:'Edited'},
      ]
    }
  },
  head() {
    return {
      title: 'Multimedia manage'
    }
  },
  watch: {
    "form.level"(val) {
      this.getTypeList('base', val);
    },
    "form.grade"(val) {
      this.getTypeList('lesson', val);
    },
    "form.lesson"(val) {
     //
    }
  },
  mounted() {
    this.getTypeList('section');
  },
  methods:{
    getTypeList(type, parent = '') {
      var params = {
        type: type
      }
      if (type === 'base')
        params.section_id = parent;
      if (type === 'lesson') {
        params.base_id = parent;
      }



      this.$axios.$get('/api/v1/types/list', {
        params
      }).then(res => {
        if (type === 'section') {
          this.level_list = res.data;
        } else if (type === 'base') {
          this.grade_list = res.data;

        } else if (type === 'lesson') {
          this.lesson_list = res.data;
        }

      }).catch(err => {
        this.$toast.error(err);
      })
    },
  }

}
</script>

<style scoped>
p{
  font-size: 1.4rem;
}
</style>

<template>
  <v-stepper v-model="e6" vertical>
   <span class="" v-for="(item,key) in lessonTree.topics">
     <v-stepper-step
       :step="key" @click="stepperClicked(item.tutorials,key)" color="#008B8B" class="pointer">
       {{ item.title }}
     </v-stepper-step>
     <v-stepper-content class="pa-3" v-if="item.tutorials.length>1" :step="key">
       <ul style="list-style-type: none;padding-left: 0">
         <li v-for="tutorial in item.tutorials"
             class="pointer mb-1" @click="openLink(tutorial.id,tutorial.title)">
             <!-- <i class="fa-regular fa-window-minimize ml-2"></i> -->
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  >{{ tutorial.title.substr(1, 40) }}...
                  </span>
              </template>
              <span>{{tutorial.title}}</span>
            </v-tooltip>
         </li>

       </ul>
     </v-stepper-content>
     <v-stepper-content v-else :step="key"></v-stepper-content>
   </span>
  </v-stepper>
</template>

<script>
export default {
  props: ['lessonTree'],
  data() {
    return {
      e6: 1,

    }
  },
  methods: {
    openLink(id, title) {
      this.$router.push({
        path: `/tutorial-details/${id}/${title}`
      })
    },
    stepperClicked(item,key) {
      if (item.length===1){
        this.$router.push({
          path: `/tutorial-details/${item[0].id}/${item[0].title}`
        })
      }else {
        this.e6=key;
      }
    }
  }
}
</script>

<style>
.v-stepper__content {
  border-left: 1px solid #e1e2e3;
}
</style>

<template>
  <v-stepper v-model="activeMenu" vertical>
   <span class=""  v-for="(item,key) in lessonTree">
     <v-stepper-step
       :step="(key+1)" @click="stepperClicked(item.tutorials,(key+1))" color="#008B8B" class="pointer">
       {{ item.title }}
     </v-stepper-step>
     <v-stepper-content class="pa-3" v-if="item.tutorials.length>1" :step="(key+1)">
       <ul style="list-style-type: none;padding-left: 0">
         <li v-for="tutorial in item.tutorials.slice().reverse()"
             class="pointer mb-1" @click="openLink(tutorial.id,tutorial.title)">
             <!-- <i class="fa-regular fa-window-minimize ml-2"></i> -->
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    :class="$route.params.id==tutorial.id ? 'teal--text' : ''"
                    v-bind="attrs"
                    v-on="on"
                  >{{ tutorial.title.split(':')[1].substr(1, 45) }}...
                  </span>
              </template>
              <span>{{tutorial.title}}</span>
            </v-tooltip>
         </li>

       </ul>
     </v-stepper-content>
     <v-stepper-content v-else :step="(key+1)"></v-stepper-content>
   </span>
  </v-stepper>
</template>

<script>
export default {
  props: ['lessonTree','activeMenu'],
  name:'tutorial-menu-component',
  data() {
    return {
      activeMenu: 1,
      main_season_key:1

    }
  },
  methods: {
    openLink(id, title) {
      this.$router.push({
        path: `/tutorials/${id}/${title}`
      })
    },
    stepperClicked(item,key) {
      if (item.length===1){
        this.$router.push({
          path: `/tutorials/${item[0].id}/${item[0].title}`
        })
      }else {
        this.activeMenu=key;
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

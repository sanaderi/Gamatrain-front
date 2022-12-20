<template>
  <v-stepper v-model="activeMenu" vertical>
   <span class="" v-for="(item,key) in lessonTree">
     <v-stepper-step
       :step="(key+1)" @click="stepperClicked(item.chapters,(key+1))" color="#008B8B" class="pointer">
       {{ item.title }}
     </v-stepper-step>
     <v-stepper-content class="pa-3" v-if="item.chapters && item.chapters.length>1" :step="(key+1)">
       <ul style="list-style-type: none;padding-left: 0">
         <li v-for="chapter in item.chapters"
             class="pointer mb-1" @click="openLink(chapter.id,chapter.title,chapter.tutorials)">
              <i class="fa-regular fa-window-minimize ml-2"></i>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    :class="enableActiveClass(chapter,key)"
                    v-bind="attrs"
                    v-on="on"
                  >{{ chapter.title.length > 28 ? chapter.title.substr(0, 25) + ' ...' : chapter.title }}
                  </span>
              </template>
              <span>{{ chapter.title }}</span>
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
  props: ['lessonTree'],
  name: 'tutorial-menu-component',
  data() {
    return {
      activeMenu: 1,
      main_season_key: 1,
      syncMenuRoute: false,
    }
  },
  methods: {
    openLink(id, title, tutorials) {
      if (tutorials.length == 1)
        this.$router.push({
          path: `/tutorials/${tutorials[0].id}/${title}`
        })
    },
    stepperClicked(item, key) {
      this.syncMenuRoute = true;//Disable enable active menu

      if (item.length === 1) {
        this.$router.push({
          path: `/tutorials/${item[0].id}/${item[0].title}`
        })
      } else {
        this.activeMenu = key;
      }
    },
    enableActiveClass(chapter, key) {
      if (this.syncMenuRoute == false && chapter.tutorials.length == 1 &&
        this.$route.params.id == chapter.tutorials[0].id) {
        this.activeMenu = Number(key) + 1;
        return 'teal--text';
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

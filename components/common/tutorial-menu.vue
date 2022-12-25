<template>
  <div class="topic_menu">
    <p class="font-weight-bold align-center">
      <v-icon color="teal">mdi-bookmark-multiple</v-icon>
      &nbsp;{{ lessonTree.title }}
    </p>
    <v-treeview
      :items="lessonTree.list.filter(x=>(x.tutorials && x.tutorials.length>0) || (x.chapters && x.chapters.length>0))"
      active-class="selected_topic_itm"
      color="teal"
      open-on-click
      open-all
      :active="activeMenu"
      item-key="id"
      item-children="chapters"

    >
      <template v-slot:prepend="{ item }" >
        <v-icon
          class="teal--text"
          small
          v-text="`mdi-${item.chapters ? 'circle' : 'circle-outline'}`"
        ></v-icon>
      </template>
      <template v-slot:label="{ item }" >
        <!--If tutorials length is one is a link-->
        <nuxt-link
          v-if="item.tutorials && item.tutorials.length==1"
          :to="`/tutorials/${item.tutorials[0].id}/${item.title}`" class="v-treeview-node__label">
          {{item.title}}
          <span class="d-none">
            {{item.tutorials[0].id==$route.params.id ? activeMenu=[item.id] : ''}}
          </span>
        </nuxt-link>
        <div v-else>
          {{item.title}}
        </div>
      </template>
    </v-treeview>
<!--    <v-stepper v-model="activeMenu" vertical>-->
<!--   <span class="" v-for="(item,key) in lessonTree">-->
<!--     <v-stepper-step-->
<!--       :step="(key+1)" @click="stepperClicked(item.chapters,(key+1))" color="#008B8B" class="pointer">-->
<!--       {{ item.title }}-->
<!--     </v-stepper-step>-->
<!--     <v-stepper-content class="pa-3" v-if="item.chapters && item.chapters.length>1" :step="(key+1)">-->
<!--       <ul style="list-style-type: none;padding-left: 0">-->
<!--         <li v-for="chapter in item.chapters"-->
<!--             class="pointer mb-1" @click="openLink(chapter.id,chapter.title,chapter.tutorials)">-->
<!--              <i class="fa-regular fa-window-minimize ml-2"></i>-->
<!--            <v-tooltip top>-->
<!--                <template v-slot:activator="{ on, attrs }">-->
<!--                  <span-->
<!--                    :class="enableActiveClass(chapter,key)"-->
<!--                    v-bind="attrs"-->
<!--                    v-on="on"-->
<!--                  >{{ chapter.title.length > 28 ? chapter.title.substr(0, 25) + ' ...' : chapter.title }}-->
<!--                  </span>-->
<!--              </template>-->
<!--              <span>{{ chapter.title }}</span>-->
<!--            </v-tooltip>-->
<!--         </li>-->
<!--       </ul>-->
<!--     </v-stepper-content>-->
<!--     <v-stepper-content v-else :step="(key+1)"></v-stepper-content>-->
<!--   </span>-->
<!--    </v-stepper>-->
  </div>

</template>

<script>
export default {
  props: ['lessonTree'],
  name: 'tutorial-menu-component',
  data() {
    return {
      activeMenu: [],
      main_season_key: 1,
      syncMenuRoute: false,


      items: [
        {
          id: 1,
          name: 'Vuetify Human Resources',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      search: null,
      caseSensitive: false,
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

.topic_menu .v-icon.v-icon.v-icon--link {
  display: none;
}

.topic_menu .selected_topic_itm {
  background: teal !important;
  color: #ffffff !important;
}
.topic_menu .selected_topic_itm i{
  color: #ffffff !important;
}
</style>

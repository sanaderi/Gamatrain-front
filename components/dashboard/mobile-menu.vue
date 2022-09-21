<template>
  <!--Dashboard mobile menu-->
  <v-row class="d-block d-md-none">
    <v-col cols="12" class="px-0 pb-0 mb-0">
      <v-tabs
        background-color="#fff"
         icons-and-text
        centered
        v-model="active_tab"
        active-class="tab_actived"
        class="fixed-tabs-bar"
      >
        <v-tab
          @click="openLink(item)"
          v-for="item in items">

          <span>{{ item.title }}</span>
          <v-btn icon >
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-btn>

        </v-tab>

      </v-tabs>
    </v-col>

    <v-bottom-sheet v-model="sheet">

      <v-list>
        <v-list-item
          :to="sub_item.link"
          v-for="sub_item in subList"
          :key="sub_item.title"
          @click="sheet = false"
        >
         <v-list-item-icon>
           <v-icon>{{sub_item.icon}}</v-icon>
         </v-list-item-icon>
          <v-list-item-title class="text-h6">{{ sub_item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </v-row>
  <!--End dashboard mobile menu-->
</template>

<script>
export default {
  name: "dashboard-mobile-menu",
  data(){
    return{
      active_tab:1,
      items: [
        {title: 'Add', icon: 'mdi-plus-circle-outline', link: '/'},
        {title: 'Online exam', icon: 'mdi-laptop', link: '/'},
        {title: 'Financial', icon: 'mdi-credit-card-outline', link: '/'},
        {title: 'Messages', icon: 'mdi-email-outline', link: '/'},
        {
          title: 'Profile',
          icon: 'mdi-account-outline',
          link: '',
          subMenuList: [
            {title: "Edit profile", link: "",icon:'mdi-account-outline'},
            {title: "Identity confirmation", link: "",icon:'mdi-account-outline'},
            {title: "Edit password", link: "/dashboard/edit-pass",icon:'mdi-key'},
            {title: "Setting", link: "/dashboard/setting",icon:'mdi-account-outline'},
          ],
        },
        {title: 'Notification', icon: 'mdi-bell-outline', link: '/'},

      ],
      sheet:false,
      subList: [

      ],

    }
  },
  methods:{
    openLink(item){
      if(!item.subMenuList)
        this.$router.push({path:item.link});
      else{
        this.subList=item.subMenuList;
        this.sheet=true;
      }
    }
  }
}
</script>

<style>

.v-slide-group__prev,.v-slide-group__next {
  display: none !important;
}


.fixed-tabs-bar {
  /*position: -webkit-sticky!important;*/
  position: fixed!important;
  bottom: 0!important;
  z-index: 2!important;
  border-top:0.1rem solid #e1e2e3;
}

.tab_actived{
  border-bottom: 4px solid white!important;
  background-color:rgba(33, 186, 69, 0.1) ;
  color:#21ba45!important;
}
.tab_actived i{
  color: #21ba45!important;
}

</style>

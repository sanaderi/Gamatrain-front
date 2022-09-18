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
          v-for="item in items">

          <span>{{ item.title }}</span>
          <v-btn icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-btn>

        </v-tab>

      </v-tabs>
    </v-col>
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
        {title: 'Add', icon: 'mdi-plus-circle-outline'},
        {title: 'Online exam', icon: 'mdi-laptop'},
        {title: 'Financial', icon: 'mdi-credit-card-outline'},
        {title: 'Messages', icon: 'mdi-email-outline'},
        {title: 'Profile', icon: 'mdi-account-outline'},
        {title: 'Notification', icon: 'mdi-bell-outline'},
      ],

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

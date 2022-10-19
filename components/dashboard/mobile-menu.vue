<template>
  <!--Dashboard mobile menu-->
  <v-row class="d-block d-md-none mobile_dashboard_menu">
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
          <v-btn icon>
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
            <v-icon>{{ sub_item.icon }}</v-icon>
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
  data() {
    return {
      active_tab: 0,
      items: [
        {
          title: 'Add',
          icon: 'mdi-plus-circle-outline',
          link: '',
          machine_name: 'add_content'

        },
        {title: 'Online exam', icon: 'mdi-laptop', link: '/'},
        {
          title: 'Financial',
          icon: 'mdi-credit-card-outline',
          subMenuList: [
            {title: "Charge wallet", icon: 'mdi-credit-card-plus-outline', link: "/user/charge-wallet"},
            {title: "Participation link", icon: 'mdi-link', link: "/user/participation-link"},
            {title: "Payment report", icon: 'mdi-chart-line', link: "/user/payment-report"},
          ],
        },
        {title: 'Messages', icon: 'mdi-email-outline', link: '/user/ticket'},
        {
          title: 'Profile',
          icon: 'mdi-account-outline',
          link: '',
          subMenuList: [
            {title: "Edit profile", link: "/user/profile", icon: 'mdi-account-outline'},
            {title: "Identity confirmation", link: "/user/identity-confirmation", icon: ' mdi-card-account-details'},
            {title: "Edit password", link: "/user/edit-pass", icon: 'mdi-key'},
            {title: "Setting", link: "/user/setting", icon: 'mdi-account-cog-outline'},
          ],
        },
        // {title: 'Notification', icon: 'mdi-bell-outline', link: '/'},

      ],
      sheet: false,
      subList: [],

    }
  },
  beforeMount() {
    var index = this.items.findIndex(x => x.machine_name === 'add_content');

    if (this.$auth.user.group_id === '5')
      this.items[index].subMenuList = [
        {title: "Exam Paper", link: "/user/exam-paper", icon: 'icong-test', icon_type: 'custom'},
        {title: "Presentation", link: "/user/presentation", icon: 'icong-learnfiles', icon_type: 'custom'},
        {title: "Q & A", link: "/user/question", icon: 'icong-qa', icon_type: 'custom'}
      ];
    else
      this.items[index].subMenuList = [
        {title: "Q & A's", link: "/user/question", icon: 'icong-qa', icon_type: 'custom'},
        {title: "Online exam's", link: "/user/online-exam", icon: 'icong-azmoon', icon_type: 'custom'}
      ];
  },
  methods: {
    openLink(item) {
      if (!item.subMenuList)
        this.$router.push({path: item.link});
      else {
        this.subList = item.subMenuList;
        this.sheet = true;
      }
    }
  }
}
</script>

<style>

.mobile_dashboard_menu .v-slide-group__prev, .v-slide-group__next {
  display: none !important;
}

.mobile_dashboard_menu .v-tabs-slider {
  display: none !important;
}


.fixed-tabs-bar {
  /*position: -webkit-sticky!important;*/
  position: fixed !important;
  bottom: 0 !important;
  z-index: 2 !important;
  border-top: 0.1rem solid #e1e2e3;
}

.tab_actived {
  border-bottom: 4px solid white !important;
  background-color: rgba(33, 186, 69, 0.1);
  color: #21ba45 !important;
}

.tab_actived i {
  color: #21ba45 !important;
}

</style>

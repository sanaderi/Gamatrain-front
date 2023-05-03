<template>
  <v-list dense>
    <div
      v-for="(item, side) in items"
      :key="item.title"
    >
      <v-list-item
        v-show="!item.subMenuList"
        link
        :to="item.link"
      >
        <v-list-item-icon class="mr-2">
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        v-show="item.subMenuList"
        active-class="menu_group_active"
        :key="item.title"
        no-action
        :value="false"
      >
        <template v-slot:activator>
          <v-list-item-icon class="mr-2">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title" class="py-2"></v-list-item-title>
        </template>

        <v-list-item
          class="pl-7 "
          active-class="menu_active"
          v-for="(subMenuItem, side) in item.subMenuList"
          :to="subMenuItem.link"
          :disabled="subMenuItem.status"
          :key="side.title"
        >
          <v-list-item-content class="py-2">
            <v-list-item-title v-text="subMenuItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      items: [
        {
          title: 'Contents',
          icon: 'mdi-plus-circle-outline',
          machine_name: 'add_content',
          subMenuList: [
            {title: "Paper", link: "/user/paper", icon: 'icong-test', icon_type: 'custom',status:(this.$auth.user.group_id === '5' ? false : true)},
            {title: "Multimedia", link: "/user/multimedia", icon: 'icong-test', icon_type: 'custom',status:(this.$auth.user.group_id === '5' ? false : true)},
            {title: "Q & A", link: "/user/question", icon: 'icong-test', icon_type: 'custom'}
          ]
        },
        {
          title: 'Online Exam',
          icon: 'mdi-laptop',
          subMenuList: [
            {title: "Results", link: "/exam/results", icon: 'icong-test', icon_type: 'custom',status:(this.$auth.user.group_id === '5' ? true : false)},
            {title: "Exam maker", link: "/test-maker", icon: 'icong-test', icon_type: 'custom'},
          ]
        },
        {
          title: 'Financial',
          icon: 'mdi-credit-card-outline',
          subMenuList: [
            {title: "Charge wallet", link: "/user/charge-wallet"},
            {title: "Payments", link: "/user/payments"},
            {title: "Payment report", link: "/user/payment-report"},
          ],

        },
        {title: 'Messages', icon: 'mdi-email-outline',link:'/user/ticket'},
        {
          title: 'Profile',
          icon: 'mdi-account-outline',
          link: '',
          subMenuList: [
            {title: "Edit profile", link: "/user/profile"},
            {title: "Identity confirmation", link: "/user/identity-confirmation"},
            {title: "Edit password", link: "/user/edit-pass"},
            {title: "Setting", link: "/user/setting"},
          ],
        },
        // {title: 'Notification', icon: 'mdi-bell-outline'},
      ],
    }
  },
  beforeMount() {
  }
}
</script>

<style scoped>

</style>

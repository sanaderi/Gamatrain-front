<template>
  <v-list dense>
    <div
      v-for="(item, side) in items"
      :key="item.title"
    >
      <v-list-item
        v-show="!item.subMenuList"
        link
      >
        <v-list-item-icon>
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
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title" class="py-2"></v-list-item-title>
        </template>

        <v-list-item
          class="pl-7 "
          active-class="menu_active"
          v-for="(subMenuItem, side) in item.subMenuList"
          :to="subMenuItem.link"
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
        {title: 'Add', icon: 'mdi-plus-circle-outline', machine_name: 'add_content'},
        {title: 'Online exam', icon: 'mdi-laptop'},
        {title: 'Financial', icon: 'mdi-credit-card-outline'},
        {title: 'Messages', icon: 'mdi-email-outline'},
        {
          title: 'Profile',
          icon: 'mdi-account-outline',
          link: '',
          subMenuList: [
            {title: "Edit profile", link: ""},
            {title: "Identity confirmation", link: ""},
            {title: "Edit password", link: "/user/edit-pass"},
            {title: "Setting", link: "/user/setting"},
          ],
        },
        {title: 'Notification', icon: 'mdi-bell-outline'},
      ],
    }
  },
  beforeMount() {
    var index = this.items.findIndex(x => x.machine_name === 'add_content');

    if (this.$auth.user.group_id === '5')
      this.items[index].subMenuList = [
        {title: "Test", link: "/user/test", icon: 'icong-test', icon_type: 'custom'},
        {title: "Training content", link: "/user/training-content", icon: 'icong-test', icon_type: 'custom'},
        {title: "Q & A", link: "/user/question", icon: 'icong-test', icon_type: 'custom'}
      ];
    else
      this.items[index].subMenuList = [
        {title: "Q & A's", link: "/user/question", icon: 'icong-test', icon_type: 'custom'},
        {title: "Online exam's", link: "/user/online_exam", icon: 'icong-test', icon_type: 'custom'}
      ];
  }
}
</script>

<style scoped>

</style>

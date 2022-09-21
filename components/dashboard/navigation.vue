<template>
  <v-list dense>
    <div
      v-for="(item, side) in items"
      :key="item.title"
    >
      <v-list-item

        v-if="!item.subMenuList"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        v-else
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
        {title: 'Add', icon: 'mdi-plus-circle-outline'},
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
            {title: "Edit password", link: "/dashboard/edit-pass"},
            {title: "Setting", link: "/dashboard/setting"},
          ],
        },
        {title: 'Notification', icon: 'mdi-bell-outline'},
      ],
    }
  }
}
</script>

<style scoped>

</style>

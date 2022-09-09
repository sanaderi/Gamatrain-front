<template>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
        {title: 'Profile', icon: 'mdi-account-outline'},
        {title: 'Notification', icon: 'mdi-bell-outline'},
      ],
    }
  }
}
</script>

<style scoped>

</style>

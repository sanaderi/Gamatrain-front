<template>
  <v-menu
    transition="slide-x-transition"
    offset-y
    min-width="150"
  >
    <template v-slot:activator="{ on, attrs }">
      <div
        v-bind="attrs" v-on="on"
        class="notice-btn   align-center mr-3 ml-5
                        "
      >
        <v-chip x-small
                v-show="notifications.length"
                color="red"
                text-color="white"
                class="px-1 ">
          {{ notifications.length }}
        </v-chip>
        <v-icon
          size="28"
          class="topbar-bell"
        >
          mdi-bell-outline
        </v-icon>

      </div>
    </template>
    <v-card
      height="400"
      width="256"
      class="mx-auto"
    >
      <v-list-item>
        <v-row class="fill-height">
          <v-col cols="auto" class="align-self-center">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Notifications
              </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col cols="auto" class="align-self-center ml-auto">
            <v-btn small outlined color="red"
                   v-show="notifications.length"
                   :loading="loading.mark_read_all"
                   @click="markAllRead()"
            >
              Mark All AS Read
            </v-btn>
          </v-col>
        </v-row>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav

      >
        <v-list-item
          v-if="notifications.length"
          v-for="item in notifications"
          @click="openNotification(item.id)"
        >
          <v-list-item-icon class="mr-2">
            <v-icon color="rgb(255, 193, 7)" large>
              mdi-email
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>
              <div v-html="item.body"/>
              <div>{{ item.subdate }}</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="mt-5 mx-auto">
            There are no new notifications
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-card>
  </v-menu>
</template>
<script>
export default {
  name: 'notification-component',
  data() {
    return {
      notifications: [],
      getNoticeCalled: 0,//Flag for prevent repeat call getNotifications
      loading:{
        mark_read_all:false
      }

    }
  },
  mounted() {
    this.getNotifications();
  },
  methods: {
    async getNotifications() {
      //Get notifications
      await this.$axios.$get('/api/v1/notifications/unreads')
        .then(response => {
          this.notifications = response.data.list;
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.getNoticeCalled++;
        });
      //End get notifications
    },

    openNotification(id) {
      this.$axios.$get(`/api/v1/notifications/read/${id}`)
        .then(response => {
          if (response.status) {
            this.$router.push({path: response.data.url.replace(/^https?:\/\/[^/]+/, '/user')});
            if (this.getNoticeCalled > 0)
              this.getNotifications();
          }
        }).catch(err => {
        console.log(err);
      })
    },

    async markAllRead() {
      this.loading.mark_read_all=true;
      this.$axios.$get('/api/v1/notifications/readall')
        .then(response => {
            this.getNotifications();
        }).catch(err => {
         this.$toast.error("An error occurred");
      }).finally(()=>{
        this.loading.mark_read_all=false;
      });
    }
  }
}
</script>

<style scoped>
.notice-btn {
  position: relative;
}

.notice-btn .v-chip {
  position: absolute;
  top: 0rem;
  right: 1.8rem;
}
</style>

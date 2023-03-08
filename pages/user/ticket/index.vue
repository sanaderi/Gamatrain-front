<template>
<div>
  <v-card  class="ticket_list" >
    <v-card-text>
      <v-tabs
        class="mb-3"
        v-model="ticket_tab"
        background-color="transparent"
        color="teal"
        grow
      >
        <v-tab
          v-for="item in tab_items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-row>
        <v-col cols="12">
          <v-text-field
            filled
            v-model="user_direct"
            height="40"
            outlined
            shaped
            readonly
            dense
          >
            <template slot="append">
              <v-btn icon class="pointer" color="teal" @click="copyUrl">
                <v-icon class="search-icon pb-2">mdi-content-copy</v-icon>
              </v-btn>

            </template>
          </v-text-field>
        </v-col>
      </v-row>


      <!--Message list-->
      <v-card max-height="500" class="overflow-y-auto"
              @scroll="onScroll"
              ref="ticketList"
              flat>
        <v-card-text>
          <v-row
            ref="ticketListContent"
            align="center"
            class="spacer mt-6 "
            no-gutters
            v-for="(message,index) in messages"
          >
            <v-col
              cols="3"
              sm="2"
              md="1"
              class="text-center"
            >
              <nuxt-link :to="`/direct/${message.username}`">
                <v-avatar
                  size="56px"
                >
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  <v-icon
                    v-else
                    large
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </nuxt-link>
            </v-col>
            <v-col cols="5" sm="6" md="5">
              <p>
                <nuxt-link :to="`/direct/${message.username}`">
                  <strong  v-html="message.name"></strong>
                </nuxt-link>
                <span class="d-none d-md-inline">
              <i class="fa fa-calendar-alt ml-2"/>
              June,15 2022</span>
                <span class="d-none d-md-inline ml-2 font-weight-regular">2:59PM</span>
              </p>
              <p class="mt-2 text-h5">
                {{message.body}}
              </p>
              <p class="d-md-none mt-2">
                <i class="fa fa-calendar-alt"/>
                June,15 2022</p>
            </v-col>


            <v-col
              class="text-no-wrap text-right"
              cols="4"
              md="6"
            >
              <v-chip
                v-if="message.unread"
                color="teal"
                class="ml-0 mr-2 white--text"
                small
              >
                {{ message.unread }}
              </v-chip>
              <v-chip small class="font-weight-bold d-none d-md-inline-flex" text-color="teal" label v-html="message.title"
                      color="teal lighten-4"></v-chip>
            </v-col>

            <v-col cols="12">
              <v-divider class="mt-2" v-show="messages.length!==index+1"/>
            </v-col>

          </v-row>
        </v-card-text>
      </v-card>

    </v-card-text>




  </v-card>
  <div class="mt-8">
    <v-row>
      <v-col cols="12" class="text-right">
        <div class="new_msg_btn"  >
          <v-btn to="/user/ticket/create" x-large color="teal" class="white--text">
            <fa class="fa fa-comment-alt fa-2xl mr-2"/>
            New
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</div>
</template>

<script>
export default {
  layout: "dashboard_layout",
  name: "ticket-list",
  data(){
    return{
      ticket_tab:0,
      tab_items:[
        'All messages',
        'Unread',
        'General',
        'Sent',
        'Received',
        'Block list'
      ],
      messages: [],
      user_direct:`gamatrain.com/direct/${this.$auth.username}`,


      //Paginate section
      page_loading: false,
      page: 1,
      all_tickets_loaded: false,
      timer: null
      //End paginate section
    }
  },
  head() {
    return {
      title: 'Ticket manage'
    }
  },
  mounted() {
    this.getMsgList();
    // this.scroll();
  },
  methods:{
    getMsgList() {
      if (!this.all_tickets_loaded) {
        this.page_loading = true;
        this.$axios.$get('/api/v1/tickets',
          {
            params: {
              perpage: 15,
              page: this.page,
            }
          }).then(response => {
          this.messages.push(...response.data.list);

          if (response.data.list.length === 0)//For terminate auto load request
            this.all_tickets_loaded = true;
        }).catch(err => {
          console.log(err);
        }).finally(() => {
            this.page_loading = false;
          }
        )
      }
    },
    copyUrl() {
      navigator.clipboard.writeText(this.user_direct);
      this.$toast.success('Copied');

    },

    onScroll() {
      var scrollPosition = this.$refs.ticketList.$el.scrollTop;
      let contentHeight = this.$refs.ticketListContent.clientHeight;

      //Avoid the number of requests
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      console.log(scrollPosition);
      console.log(contentHeight);

      if (scrollPosition > (contentHeight - 5000) && this.all_tickets_loaded === false)
        this.timer = setTimeout(() => {
          // this.loading.message_list = true;
          this.page++;
          this.getMsgList();
        }, 800);
    },



  }
}
</script>

<style >
.ticket_list .v-tab{
  font-size: 1.2rem!important;
}

.ticket_list span,p,strong{
font-size: 1.4rem;
}

.new_msg_btn{
 position: relative;
}

.new_msg_btn::before {
  content:"";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 12px solid  transparent!important;
  border-right: 10px solid transparent!important;
  bottom: -15px;
  right: 10px;
  z-index: 1;
  border-top: 20px solid #009688;
  background-color: transparent!important;

}

</style>

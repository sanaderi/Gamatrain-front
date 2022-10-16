<template>
  <div>
    <v-card class="ticket_list">
      <v-card-text>
        <!--Message list-->
        <v-row
          align="center"
          class="spacer "
          no-gutters
        >
          <v-col
            cols="2"
            sm="2"
            md="1"
            class="text-center avatar_container"
          >
            <v-avatar
              size="54px"
              class="pa-4 msg_avatar"

            >
              <img
                v-if="message.avatar"
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              >
            </v-avatar>
            <div class="status_sign"></div>

          </v-col>
          <v-col cols="5" sm="6" md="5">
            <p>
              <nuxt-link :to="`/direct/${message.username}`">
                <strong class="text-h6" v-html="message.name"></strong>
              </nuxt-link>
            </p>

          </v-col>


          <v-col
            class=" text-right"
            cols="5"
            md="6"
          >
            <v-btn color="teal" outlined small>
              Class reserve
            </v-btn>
            <v-btn icon color="red" @click="black_list_dialog=true" small>
              <v-icon>
                mdi-account-cancel
              </v-icon>
            </v-btn>
          </v-col>


        </v-row>


        <!--Message box-->
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
            class="pa-0">
            <div>
              <v-card
                flat
                id="scroll-target"

              >
                <v-card-title>
                  Sadeq Naderi
                </v-card-title>
                <v-card-text style="max-height: 400px"
                             class="overflow-y-auto overflow-x-hidden px-0 px-md-2">

                  <v-row
                    v-scroll:#scroll-target="onScroll"
                    align="center"
                    justify="center"
                    ref="scrollWrapper"
                  >
                    <v-col cols="12" class="px-0 px-md-2">
                      <v-timeline dense>
                        <v-timeline-item
                          color="teal"
                          small
                          fill-dot
                        >
                          <v-card
                            color="teal"
                          >

                            <v-card-text class="white--text text-h6">
                              Hi how are you>
                            </v-card-text>
                            <v-card-actions class="white--text">
                              2022 Jul
                            </v-card-actions>
                          </v-card>
                        </v-timeline-item>
                        <v-timeline-item
                          small
                          fill-dot
                        >
                          <v-card
                          >

                            <v-card-text class="text-h6">
                              Thanks. fine u?
                            </v-card-text>
                            <v-card-actions>
                              2022 Oct
                            </v-card-actions>
                          </v-card>
                        </v-timeline-item>
                      </v-timeline>
                    </v-col>

                  </v-row>
                </v-card-text>
              </v-card>

            </div>


            <div>
              <v-text-field class=" mt-3 mb-1"
                            v-model="message_to_send"
                            placeholder="Type your message and press enter"
                            hide-details
                            :loading="submit_loading"
                            v-on:keydown.enter="submitMessage"
                            outlined
              >
                <template slot="prepend-inner">
                  <v-btn icon @click="emoji_box=!emoji_box">
                    <v-icon class="search-icon pb-2">mdi-emoticon</v-icon>
                  </v-btn>
                </template>
                <template slot="append">
                  <v-btn icon @click="sendMsg">
                    <v-icon class="search-icon pb-2" color="blue">mdi-send-outline</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
              <v-emoji-picker v-show="emoji_box" @select="selectEmoji"/>
            </div>


          </v-col>
        </v-row>
        <!--End message box-->
      </v-card-text>
    </v-card>


    <!--Black list dialog-->
    <v-dialog
      v-model="black_list_dialog"
      max-width="340"

    >
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to add to black list John Dolores?
        </v-card-title>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <v-btn
                color="red"
                block
                outlined
                @click="black_list_dialog = false"
              >
                Cancel
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                color="red"
                class="white--text"
                block
                @click="black_list_dialog = false"
              >
                Block
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--End black list dialog-->
  </div>
</template>

<script>
export default {
  layout: "dashboard_layout",
  name: "user-direct",
  data() {
    return {
      message: {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Gama!',
        color: "teal",
        username: "@john"
      },
      message_to_send: '',
      submit_loading: false,
      emoji_box: false,
      black_list_dialog: false
    }
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop
    },
    selectEmoji(emoji) {
      this.message_to_send = this.message_to_send + emoji.data;
    },
    sendMsg() {
      this.emoji_box = false;
      this.$toast.success("Hi");
    }
  }
}
</script>

<style scoped>
.msg_avatar {
  border: 2px solid red;
}

.avatar_container {
  position: relative;
}

.status_sign {
  position: absolute;
  content: '';
  width: 10px;
  right: 10px;
  bottom: 2px;
  border-radius: 10px;
  height: 10px;
  background-color: red;
}

</style>

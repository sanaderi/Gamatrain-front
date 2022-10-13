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
            cols="3"
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

            <p class="d-md-none mt-2">
              <i class="fa fa-calendar-alt"/>
              June,15 2022</p>
          </v-col>


          <v-col
            class="text-no-wrap text-right"
            cols="4"
            md="6"
          >
            <v-btn color="teal" outlined small>
              Class reservation
            </v-btn>
          </v-col>


        </v-row>

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
                               class="overflow-y-auto overflow-x-hidden">

                    <v-row
                      v-scroll:#scroll-target="onScroll"
                      align="center"
                      justify="center"
                      ref="scrollWrapper"
                    >
                      <v-col cols="12">
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
                                <v-card-actions >
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
                </v-text-field>
              </div>


            </v-col>
        </v-row>
      </v-card-text>


    </v-card>
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
    }
  },
  methods:{
    onScroll(e) {
      this.offsetTop = e.target.scrollTop
    },
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

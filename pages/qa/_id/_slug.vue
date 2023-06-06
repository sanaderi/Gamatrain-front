<template>
  <div>
    <div class="qa-details-content">
      <!-- Start : Category -->
      <category/>
      <!-- End:Category -->

      <!--  Start: breadcrumb  -->
      <section>
        <v-container class="py-0 mb-4">
          <div style="overflow-x:auto!important; ">
            <div style="min-width: max-content">
              <div class=" mt-0 py-0 header-path">
                <breadcrumb :breads="breads"/>
              </div>
            </div>
          </div>
        </v-container>
      </section>
      <!--  End: breadcrumb  -->

      <!--  Start: detail  -->
      <section>
        <v-container class="py-0">
          <div class="detail my-md-8">
            <v-row>
              <v-col cols="12" md="9" class="px-0 pt-0 px-sm-3 pt-sm-3">
                <!--Question section-->
                <v-row>
                  <v-col cols="12" class="px-0 pt-0 px-sm-3 pt-sm-3">
                    <v-row class="fill-height">
                      <!--Score action-->
                      <v-col cols="1" class="pr-0  d-none d-md-block">
                        <v-card flat color="#F5F5F5" class="d-flex fill-height text-center" min-height="200">
                          <v-row>
                            <v-col cols="12">
                              <v-btn icon x-large
                                     @click="submitScore('question',contentData.id,'plus')"
                              >
                                <v-icon size="88">
                                  mdi-menu-up
                                </v-icon>
                              </v-btn>
                              <p class="text-h4">
                                {{ contentData.score }}
                              </p>
                              <v-btn icon x-large
                                     @click="submitScore('question',contentData.id,'minus')"
                              >
                                <v-icon size="88">
                                  mdi-menu-down
                                </v-icon>
                              </v-btn>
                              <v-btn icon width="100%">
                                <v-icon>
                                  mdi-bookmark
                                </v-icon>
                              </v-btn>
                              <v-btn icon width="100%"
                              @click="openCrashReportDialog(contentData.id,'question')"
                              >
                                <v-icon>
                                  mdi-alert-octagon-outline
                                </v-icon>
                              </v-btn>
                              <v-btn icon width="100%">
                                <v-icon>
                                  mdi-share-variant-outline
                                </v-icon>
                              </v-btn>
                            </v-col>
                            <v-col cols="12" align-self="end">
                              <v-btn icon class="mb-4" width="100%">
                                <v-icon>
                                  mdi-reply
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-col>
                      <!--End score action-->

                      <v-col cols="12" md="11">
                        <v-card color="#F5F5F5" flat class="fill-height">
                          <v-card-text class="d-flex fill-height">
                            <v-row>
                              <v-col cols="12" class="px-0 px-sm-3">
                                <h1 class="text-h5 text-md-h4 font-weight-bold mb-2">
                                  {{ contentData.title }}
                                </h1>

                                <v-row>
                                  <v-col cols="10" class="pl-0 pl-sm-3">
                                    <div class="d-flex pb-0 pb-md-3">
                                      <nuxt-link to="/user/edit-profile">
                                        <img width="40" height="40"
                                             v-if="contentData.avatar" :src="contentData.avatar"/>
                                        <v-btn v-else width="40" height="40" class="d-flex" outlined fab x-large>
                                          <v-icon>
                                            mdi-account-outline
                                          </v-icon>
                                        </v-btn>
                                      </nuxt-link>
                                      <div class="pa-3 pt-0">
                                        <p class="text-h6 ">
                                          <strong v-if="contentData.name">
                                            {{ contentData.name }}
                                          </strong>
                                          <strong v-else>
                                            No name
                                          </strong>
                                        </p>
                                        <p class="text-h6">
                               <span class="orange--text">
                                 {{
                                   findStatic(contentData.user_).qNum
                                 }} Question{{ calcPluralNoun(findStatic(contentData.user_).qNum) }}
                               </span>
                                          |
                                          <span class="green--text">
                                 {{
                                              findStatic(contentData.user_).aNum
                                            }} Answer{{ calcPluralNoun(findStatic(contentData.user_).aNum) }}
                               </span>
                                          |
                                          <span class="blue--text">
                                 {{
                                              findStatic(contentData.user_).score
                                            }} Score{{ calcPluralNoun(findStatic(contentData.user_).score) }}
                               </span>
                                        </p>
                                      </div>
                                    </div>
                                  </v-col>

                                  <v-col cols="2" class="text-right">
                                    <v-btn :outlined="$vuetify.breakpoint.mdAndUp"
                                           :icon="$vuetify.breakpoint.xs"
                                           color="success"
                                           :to="`/direct/${contentData.ownerIdentity}`"
                                    >
                                      <v-icon class="mr-1">
                                        mdi-message-reply-text
                                      </v-icon>
                                      <span class="d-none d-md-inline">Chat</span>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                <p class="mt-2 text-h5" v-html="contentData.question.replace(/\n/g, '<br />')"/>
                              </v-col>

                              <v-col cols="12" class="px-0 pb-0 px-sm-3 pb-sm-3" align-self="end">
                                <v-row>
                                  <v-col cols="7" md="6" class="px-0 pb-0 px-sm-3 pb-sm-3">
                                    <div class="d-none d-md-block">
                                      <v-chip link class="mr-1">
                                        <nuxt-link :to="`/search?type=question&section=${contentData.section}`">
                                          {{ contentData.section_title }}
                                        </nuxt-link>
                                      </v-chip>
                                      <v-chip link class="mr-1">
                                        <nuxt-link
                                          :to="`/search?type=question&section=${contentData.section}&base=${contentData.base}`">
                                          {{ contentData.base_title }}
                                        </nuxt-link>
                                      </v-chip>
                                      <v-chip link class="ma-1">
                                        <nuxt-link
                                          :to="`/search?type=question&section=${contentData.section}&base=${contentData.base}&lesson=${contentData.lesson}`">
                                          {{ contentData.lesson_title }}
                                        </nuxt-link>
                                      </v-chip>
                                    </div>

                                    <div class="d-flex d-md-none">
                                      <!--Score action sm and xs-->
                                      <v-btn icon
                                             @click="submitScore('question',contentData.id,'plus')"
                                      >
                                        <v-icon size="40">
                                          mdi-menu-up
                                        </v-icon>
                                      </v-btn>
                                      <p class="pt-3">
                                        {{ contentData.score }}
                                      </p>
                                      <v-btn icon
                                             @click="submitScore('question',contentData.id,'minus')"
                                      >
                                        <v-icon size="40">
                                          mdi-menu-down
                                        </v-icon>
                                      </v-btn>
                                      <!--End score action sm and xs-->

                                      <p class="pt-3"> | </p>
                                      <v-btn icon>
                                        <v-icon size="20">
                                          mdi-reply
                                        </v-icon>
                                      </v-btn>
                                      <v-btn icon>
                                        <v-icon size="20">
                                          mdi-comment-plus
                                        </v-icon>
                                      </v-btn>
                                      <v-spacer/>
                                    </div>
                                  </v-col>
                                  <v-col cols="5" md="6" class="px-0 pb-0 text-right">
                                    <div class="d-none d-md-block">
                                      <v-spacer/>
                                      <v-btn text class="simple-btn">
                                        <v-icon class="mr-1">
                                          mdi-calendar-month
                                        </v-icon>
                                        {{ $moment(contentData.subdate).fromNow() }}
                                      </v-btn>
                                      <v-btn text class="simple-btn">
                                        <v-icon class="mr-1">
                                          mdi-clock-time-five-outline
                                        </v-icon>
                                        {{ $moment(contentData.subdate).format('HH:mm') }}
                                      </v-btn>
                                    </div>

                                    <div class="d-inline d-md-none px-0">
                                      <v-btn icon>
                                        <v-icon size="20">
                                          mdi-bookmark
                                        </v-icon>
                                      </v-btn>
                                      <v-btn icon
                                             @click="openCrashReportDialog(contentData.id,'question')"
                                      >
                                        <v-icon size="20">
                                          mdi-alert-octagon-outline
                                        </v-icon>
                                      </v-btn>
                                      <v-btn icon>
                                        <v-icon size="20">
                                          mdi-share-variant-outline
                                        </v-icon>
                                      </v-btn>
                                    </div>

                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                  </v-col>
                </v-row>
                <!--End question section-->


                <!--Reply section-->
                <v-row>
                  <v-col cols="3" md="2">
                    <h2 class="text-h5 text-md-h4">
                      {{ contentData.replies.list.lenght }}
                      <span v-if="contentData.replies.list.lenght>1">Answers</span>
                      <span v-else>Answer</span>
                    </h2>
                  </v-col>
                  <v-col cols="9" md="10">
                    <v-divider class="my-3"/>
                  </v-col>
                </v-row>

                <!--Answer section-->
                <v-row>
                  <v-col cols="12" class="px-0 pt-0 px-sm-3 pt-sm-3">
                    <v-row
                      v-for="answer in contentData.replies.list"
                      :key="answer.id"
                    >
                      <!--Score action-->
                      <v-col cols="1" class="pr-0 d-none d-md-block ">
                        <v-card flat color="#F5F5F5" class="mb-4 d-flex fill-height text-center" min-height="200">
                          <v-row>
                            <v-col cols="12">
                              <v-btn icon x-large
                                     @click="submitScore('reply',answer.id,'plus')"
                              >
                                <v-icon size="88">
                                  mdi-menu-up
                                </v-icon>
                              </v-btn>
                              <p class="text-h4">
                                {{ answer.score }}
                              </p>
                              <v-btn icon x-large
                                     @click="submitScore('reply',answer.id,'minus')"
                              >
                                <v-icon size="88">
                                  mdi-menu-down
                                </v-icon>
                              </v-btn>
                              <v-btn icon width="100%">
                                <v-icon>
                                  mdi-bookmark
                                </v-icon>
                              </v-btn>

                              <!--Select correct answer-->
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn icon width="100%"
                                         x-large
                                         v-bind="attrs" v-on="on"
                                         @click="selectCorrectAnswer(answer.id)"
                                         v-if="contentData.owner==true && answer.selected==0">
                                    <v-icon size="38" color="green">
                                      mdi-check
                                    </v-icon>
                                  </v-btn>
                                </template>
                                <span>Select correct answer</span>
                              </v-tooltip>

                              <!--Edit button-->
                              <v-btn icon width="100%"
                                     @click="openEditReplyDialog(answer.id,answer.answer)"
                                     v-if="answer.owner==true">
                                <v-icon>
                                  mdi-pencil
                                </v-icon>
                              </v-btn>


                              <!--Delete button -->
                              <v-btn icon width="100%"
                                     @click="openDeleteReplyConfirmDialog(answer.id)"
                                     v-if="answer.owner==true">
                                <v-icon>
                                  mdi-delete
                                </v-icon>
                              </v-btn>


                              <v-btn icon width="100%"
                                     @click="openCrashReportDialog(answer.id,'questionReply')"
                              >
                                <v-icon>
                                  mdi-alert-octagon-outline
                                </v-icon>
                              </v-btn>
                              <v-btn icon width="100%">
                                <v-icon>
                                  mdi-share-variant-outline
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-col>
                      <!--End score action-->

                      <v-col cols="12" md="11">
                        <v-card :color="answer.selected==1 ? '#5EFF8126' : '#F5F5F5'" flat class="fill-height">
                          <v-card-text class="d-flex fill-height">
                            <v-row>
                              <v-col cols="12" class="px-0 px-sm-3">
                                <v-row>
                                  <v-col cols="10" class="pl-0 pl-sm-3">
                                    <div class="d-flex pb-0">
                                      <nuxt-link to="/user/edit-profile">
                                        <img width="40" height="40"
                                             v-if="answer.avatar" :src="answer.avatar"/>
                                        <v-btn v-else width="47" height="47" class="d-flex" outlined fab x-large>
                                          <v-icon>
                                            mdi-account-outline
                                          </v-icon>
                                        </v-btn>
                                      </nuxt-link>
                                      <div class="pa-3 pt-0">
                                        <p class="text-h6 ">
                                          <strong v-if="answer.name">
                                            {{ answer.name }}
                                          </strong>
                                          <strong v-else>
                                            No name
                                          </strong>
                                        </p>
                                        <p class="text-h6">
                               <span class="orange--text">
                                 {{
                                   findStatic(answer.user_).qNum
                                 }} Question{{ calcPluralNoun(findStatic(answer.user_).qNum) }}
                               </span>
                                          |
                                          <span class="green--text">
                                 {{
                                              findStatic(answer.user_).aNum
                                            }} Answer{{ calcPluralNoun(findStatic(answer.user_).aNum) }}
                               </span>
                                          |
                                          <span class="blue--text">
                                  {{
                                              findStatic(answer.user_).score
                                            }} Score{{ calcPluralNoun(findStatic(answer.user_).score) }}
                               </span>
                                        </p>
                                      </div>
                                    </div>
                                  </v-col>
                                  <v-col cols="2" class="text-right">
                                    <v-btn :outlined="$vuetify.breakpoint.mdAndUp"
                                           :icon="$vuetify.breakpoint.xs"
                                           :to="`/direct/${answer.ownerIdentity}`"
                                           color="success">
                                      <v-icon class="mr-1">
                                        mdi-message-reply-text
                                      </v-icon>
                                      <span class="d-none d-md-inline">Chat</span>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-col>
                              <v-col cols="12">
                                <div>
                                  <p class="mt-2 text-h5" v-html="answer.answer.replace(/\n/g, '<br />')"/>
                                </div>
                              </v-col>


                              <v-col cols="12" class="px-0 pb-0 px-sm-3 pb-sm-3" align-self="end">
                                <v-row>
                                  <v-col cols="7" md="6" class="px-0 pb-0 px-sm-3 pb-sm-3">
                                    <v-btn text disabled
                                           plain class="pl-0 simple-btn d-none d-md-block">
                                      <v-icon class="mr-1">
                                        mdi-comment-plus
                                      </v-icon>
                                      Add comment
                                    </v-btn>
                                    <div class="d-flex d-md-none">
                                      <!--Score action sm and xs-->
                                      <v-btn icon @click="submitScore('reply',answer.id,'plus')">
                                        <v-icon size="40">
                                          mdi-menu-up
                                        </v-icon>
                                      </v-btn>
                                      <p class="pt-3">
                                        {{ answer.score }}
                                      </p>
                                      <v-btn icon
                                             @click="submitScore('reply',answer.id,'minus')"
                                      >
                                        <v-icon size="40">
                                          mdi-menu-down
                                        </v-icon>
                                      </v-btn>
                                      <!--End score action sm and xs-->

                                      <p class="pt-3"> | </p>
                                      <v-btn icon color="green"
                                      @click="selectCorrectAnswer(answer.id)"
                                             v-if="contentData.owner==true && answer.selected==0">
                                        <v-icon size="20">
                                          mdi-check
                                        </v-icon>
                                      </v-btn>
                                      <v-btn icon disabled>
                                        <v-icon size="20">
                                          mdi-comment-plus
                                        </v-icon>
                                      </v-btn>
                                      <v-btn icon
                                             @click="openEditReplyDialog(answer.id,answer.answer)"
                                             v-if="answer.owner==true">
                                        <v-icon size="20">
                                          mdi-pencil
                                        </v-icon>
                                      </v-btn>


                                      <!--Delete button -->
                                      <v-btn icon
                                             @click="openDeleteReplyConfirmDialog(answer.id)"
                                             v-if="answer.owner==true">
                                        <v-icon size="20">
                                          mdi-delete
                                        </v-icon>
                                      </v-btn>

                                      <v-spacer/>
                                    </div>
                                  </v-col>
                                  <v-col cols="5" md="6" class="px-0 pb-0 px-sm-3 pb-md-3 text-right d-flex">
                                    <v-spacer/>

                                    <div class="d-none d-md-block">
                                      <v-spacer/>
                                      <v-btn text class="simple-btn">
                                        <v-icon class="mr-1">
                                          mdi-calendar-month
                                        </v-icon>
                                        {{ $moment(answer.subdate).fromNow() }}
                                      </v-btn>
                                      <v-btn text class="simple-btn">
                                        <v-icon class="mr-1">
                                          mdi-clock-time-five-outline
                                        </v-icon>
                                        {{ $moment(answer.subdate).format('HH:mm') }}
                                      </v-btn>
                                    </div>

                                    <div class="d-inline d-md-none px-0">
                                      <v-btn icon
                                             @click="openCrashReportDialog(answer.id,'questionReply')"
                                      >
                                        <v-icon size="20">
                                          mdi-alert-octagon-outline
                                        </v-icon>
                                      </v-btn>
                                    </div>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <!--End answer section-->


                <!--Your answer-->
                <v-row>
                  <v-col cols="4" md="2">
                    <h2 class="text-h5 text-md-h4">
                      Your answer
                    </h2>
                  </v-col>
                  <v-col cols="8" md="10">
                    <v-divider class="my-3"/>
                  </v-col>
                </v-row>
                <v-card color="#F5F5F5" flat>
                  <v-card-text>
                    <validation-observer ref="observer" v-slot="{invalid}">
                      <form @submit.prevent="submitReply">
                        <v-row>
                          <v-col cols="12" class="px-0 px-sm-3">
                            <validation-provider
                              v-slot="{errors}"
                              name="your_answer"
                              rules="required|min:25">
                              <v-text-field
                                v-model="answer_form.answer"
                                outlined
                                :error-messages="errors"
                                background-color="#ffffff"
                                label="Your answer"
                              >
                                <template slot="append-outer">
                                  <v-btn icon large
                                         type="submit"
                                         :disabled="invalid"
                                         :loading="loading.reply_form"
                                         v-if="answer_form.answer">
                                    <v-icon>
                                      mdi-send
                                    </v-icon>
                                  </v-btn>
                                  <v-btn icon large disabled v-else>
                                    <v-icon>
                                      mdi-microphone
                                    </v-icon>
                                  </v-btn>
                                </template>
                                <template slot="prepend">
                                  <v-btn large icon @click="emoji_box=!emoji_box">
                                    <v-icon>
                                      mdi-emoticon-excited-outline
                                    </v-icon>
                                  </v-btn>
                                  <v-btn large icon disabled>
                                    <v-icon>
                                      mdi-paperclip
                                    </v-icon>
                                  </v-btn>
                                </template>
                              </v-text-field>
                            </validation-provider>
                            <v-emoji-picker v-show="emoji_box" @select="selectEmoji"/>
                          </v-col>
                        </v-row>
                      </form>
                    </validation-observer>
                  </v-card-text>
                </v-card>


              </v-col>
              <!--End your answer-->


              <!--Similar questions-->
              <v-col cols="3" class="d-none d-md-block">
                <v-card color="#F5F5F5" class="fill-height" flat>
                  <v-card-text>
                    <h2 class="text-h4 text-center">
                      Similar questions
                    </h2>
                    <v-divider style="width: 80%" class="my-3 mx-auto"/>
                    <p class="text-center">
                      Opps! not found
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <!--End similar questions-->
            </v-row>
          </div>
        </v-container>
      </section>
      <!--  End: detail  -->
    </div>

    <!--Edit dialog-->
    <v-dialog
      v-model="dialog.edit_reply_form"
      max-width="480"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit your reply
        </v-card-title>

        <v-card-text>
          <validation-observer ref="reply_observer" v-slot="{invalid}">
            <form @submit.prevent="updateReply">
              <v-row>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{errors}"
                    name="your_answer"
                    rules="required|min:25">
                    <v-text-field
                      v-model="edit_answer_form.answer"
                      outlined
                      :error-messages="errors"
                      background-color="#ffffff"
                      label="Your answer"
                    >
                      <template slot="append-outer">
                        <v-btn icon large
                               type="submit"
                               :disabled="invalid"
                               :loading="loading.edit_answer_form"
                               v-if="edit_answer_form.answer">
                          <v-icon>
                            mdi-send
                          </v-icon>
                        </v-btn>
                        <v-btn icon large disabled v-else>
                          <v-icon>
                            mdi-microphone
                          </v-icon>
                        </v-btn>
                      </template>
                      <template slot="prepend">
                        <v-btn large icon @click="edit_emoji_box=!edit_emoji_box">
                          <v-icon>
                            mdi-emoticon-excited-outline
                          </v-icon>
                        </v-btn>
                        <v-btn large icon disabled>
                          <v-icon>
                            mdi-paperclip
                          </v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                  </validation-provider>
                  <v-emoji-picker v-show="edit_emoji_box" @select="selectEmoji"/>
                </v-col>
              </v-row>
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--End edit dialog-->

    <!--Reply dialog-->
    <v-dialog
      v-model="dialog.delete_reply_form"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Are you sure?
        </v-card-title>

        <v-card-text>
          <p class="text-h6">
            If you are sure to delete, click Yes.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="dialog.delete_reply_form = false"
          >
            No
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            :loading="loading.delete_reply_form"
            @click="deleteReply()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--End Reply dialog-->

    <crash-report ref="crash_report"/>
  </div>
</template>
<script>
import Breadcrumb from "../../../components/widgets/breadcrumb";
import LastViews from "@/components/common/last-views";
import Category from "@/components/common/category";
import PreviewGallery from "@/components/details/preview-gallery";
import RelatedContent from "@/components/details/related-content";
import LatestTrainingContent from "@/components/details/latest-training-content";
import RelatedQa from "@/components/details/related-qa";
import RelatedOnlineExam from "@/components/details/related-online-exam";
import {ValidationProvider, ValidationObserver} from "vee-validate";
import CrashReport from "~/components/common/crash-report.vue";

export default {
  name: "qa-details",
  auth: false,
  components: {
    CrashReport,
    RelatedOnlineExam,
    RelatedQa,
    LatestTrainingContent,
    RelatedContent,
    PreviewGallery,
    Category,
    Breadcrumb,
    LastViews,
    ValidationProvider,
    ValidationObserver
  },
  head() {
    return {
      title: this.contentData.title
    }
  },
  async asyncData({params, $axios}) {
    // This could also be an action dispatch
    const content = await $axios.$get(`/api/v1/questions/${params.id}`);
    var contentData = [];
    //Check data exist
    if (content.status === 1) {
      contentData = content.data;
    }

    return {contentData};
  },
  mounted() {
    this.initBreadCrumb();
  },

  data: () => ({
    rating: 4.5,
    contentData: [],
    breads: [
      {
        text: 'Q & A',
        disabled: false,
        href: '/search?type=question',
      }
    ],
    answer_form: {
      answer: ''
    },
    edit_answer_form: {
      answer: ''
    },
    emoji_box: false,
    edit_emoji_box: false,

    loading: {
      reply_form: false,
      edit_reply_form: false,
      edit_answer_form: false,
      delete_reply_form: false,
    },

    dialog: {
      delete_reply_form: false,
      edit_reply_form: false,
    },

    //Delete section
    delete_reply_id: null
    //End delete section

  }),
  methods: {
    initBreadCrumb() {
      this.breads.push(
        {
          text: this.contentData.section_title,
          disabled: false,
          href: `/search?type=question&section=${this.contentData.section}`,
        },
        {
          text: this.contentData.base_title,
          disabled: false,
          href: `/search?type=question&section=${this.contentData.section}&base=${this.contentData.base}`,
        },
        {
          text: this.contentData.lesson_title,
          disabled: false,
          href: `/search?type=question&section=${this.contentData.section}&base=${this.contentData.base}&lesson=${this.contentData.lesson}`,
        },
      );
    },
    openAuthDialog(val) {
      this.$router.push({query: {auth_form: val}});
    },

    selectEmoji(emoji) {
      this.answer_form.answer = this.answer_form.answer + emoji.data;
    },
    findStatic(user_id) {
      if (this.contentData.scores)
        return this.contentData.scores[user_id];
      else
        return {aNum: 0, qNum: 0, score: 0};
    },
    calcPluralNoun(num) {
      if (num > 1)
        return "s";
    },

    submitReply() {
      this.loading.reply_form = true;
      const querystring = require('querystring');
      this.answer_form.id = this.$route.params.id;

      this.$axios.$post('/api/v1/questionReplies',
        querystring.stringify(this.answer_form),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      ).then(response => {
        this.reInit();
        this.answer_form.answer = '';
        this.$toast.success("Reply submit successfully");
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.loading.reply_form = false;
      })
    },
    updateReply() {
      this.loading.edit_reply_form = true;
      const querystring = require('querystring');

      this.$axios.$put(`/api/v1/questionReplies/${this.edit_reply_id}`,
        querystring.stringify(this.edit_answer_form),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      ).then(response => {
        this.reInit();
        this.dialog.edit_reply_form = false;
        this.edit_answer_form.answer = '';
        this.$toast.success("Reply updated successfully");
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.loading.reply_form = false;
      })
    },
    reInit() {//When form submit (answer, vote and etc)
      this.$axios.$get(`/api/v1/questions/${this.$route.params.id}`)
        .then(response => {
          this.contentData.replies.list = response.data.replies.list;
        }).catch(err => {
        console.log(err);
      });

    },

    openEditReplyDialog(item_id, answer) {
      this.edit_reply_id = item_id;
      this.edit_answer_form.answer = answer;
      this.dialog.edit_reply_form = true;
    },
    openDeleteReplyConfirmDialog(item_id) {
      this.delete_reply_id = item_id;
      this.dialog.delete_reply_form = true;
    },

    async deleteReply() {
      this.loading.delete_reply_form = true;
      await this.$axios.$delete(`/api/v1/questionReplies/${this.delete_reply_id}`,
      ).then(response => {
        this.delete_reply_id = null;
        this.dialog.delete_reply_form = false;

        this.$toast.success("Deleted successfully");

        this.reInit();
      })
        .catch(e => {
          this.delete_reply_id = null;
          this.deleteConfirmDialog = false;
        }).finally(() => {
          this.loading.delete_reply_form = false;
        })
    },


    async submitScore(content_type, id, type) {
      if (this.$auth.loggedIn) {
        var api = `/api/v1/questions/score/${id}/${type}`;
        if (content_type == 'reply')
          api = `/api/v1/questionReplies/score/${id}/${type}`;

        await this.$axios.$post(api)
          .then(response => {
            if (response.status == 1) {
              if (content_type == 'question')
                this.contentData.score = response.data.score;
              else {
                var index = this.contentData.replies.list.findIndex(x => x.id == id);
                this.contentData.replies.list[index].score = response.data.score;
              }

            }
          }).catch(err => {
            this.$toast.error("An error occurred");
          })

      } else {
        this.openAuthDialog('login');
      }
    },

    selectCorrectAnswer(id) {
      this.$axios.$post(`/api/v1/questionReplies/select/${id}`)
        .then(response => {
          this.$toast.success("Select successfully");
          window.scrollTo(0, 0);
          this.reInit();
        }).catch(err => {
        this.$toast.error("An error occured");
      })
    },


    //Crash report
    openCrashReportDialog(id,type){
      this.$refs.crash_report.dialog=true;
      this.$refs.crash_report.form.type=type;

      if (type=='questionReply')
        this.$refs.crash_report.form.id=id;
      else
        this.$refs.crash_report.form.id=this.$route.params.id;
    }
    //End crash report
  }
}
</script>

<style>

.qa-details-content .v-text-field--outlined .v-input__prepend-outer, .v-text-field--outlined .v-input__append-outer {
  margin-top: 6px !important;
}
</style>

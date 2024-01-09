<template>
  <v-container id="school-details">
    <v-row class="d-flex d-md-none">
      <div class="top-slide-container">
        <img
          id="schoolDetailsImg"
          :class="topSlideClass.image"
          @click="galleryDialog = true"
          src="/images/school-default.png"
          alt="School image"
        />
        <client-only>
          <l-map
            ref="schoolMap"
            :zoom="map.zoom"
            :min-zoom="map.minZoom"
            :center="map.center"
            :class="topSlideClass.map"
            id="schoolDetailsMap"
          >
            <l-tile-layer :url="map.url"></l-tile-layer>
            <l-marker
              @click="$router.push(`/school/1`)"
              :lat-lng="map.latLng"
              :icon="map.schoolIcon"
            ></l-marker>
          </l-map>
        </client-only>

        <client-only>
          <a-scene embedded id="schoolDetailsVr" :class="topSlideClass.tour">
            <a-sky src="/images/school-vr.png"></a-sky>
          </a-scene>
        </client-only>
      </div>
    </v-row>

    <v-row class="d-none d-md-flex">
      <v-col cols="12" md="4">
        <img
          @click="galleryDialog = true"
          class="pointer schoolDetailsImg"
          src="/images/school-default.png"
          alt="School image"
        />
      </v-col>
      <v-col cols="12" md="4">
        <client-only>
          <l-map
            ref="schoolMap"
            :zoom="map.zoom"
            :min-zoom="map.minZoom"
            :center="map.center"
            id="schoolDetailsMap"
          >
            <l-tile-layer :url="map.url"></l-tile-layer>
            <l-marker
              @click="$router.push(`/school/1`)"
              :lat-lng="map.latLng"
              :icon="map.schoolIcon"
            ></l-marker>
          </l-map>
        </client-only>
      </v-col>
      <v-col cols="12" md="4">
        <div>
          <client-only>
            <a-scene embedded id="schoolDetailsVr">
              <a-sky src="/images/school-vr.png"></a-sky>
            </a-scene>
          </client-only>
        </div>
      </v-col>
    </v-row>

    <!-- Data container -->
    <v-row class="data-container">
      <v-col cols="12">
        <v-row class="mt-6 d-flex d-md-none">
          <v-col cols="3" class="text-left d-block d-md-none">
            <div class="text-center">
              <div class="gtext-t6 primary-gray-400">Update:</div>
              <div class="gtext-t6 primary-gray-500">2023/11/23</div>
            </div>
          </v-col>
          <v-col cols="6" class="text-center d-block d-md-none">
            <v-btn-toggle
              style="order: 2"
              v-model="slideToggler"
              rounded
              active-class="bg-white"
              @change="changeSlide"
            >
              <v-btn small class="text-transform-none gtext-t5" value="image">
                Image
              </v-btn>
              <v-btn small class="text-transform-none gtext-t5" value="map">
                Map
              </v-btn>
              <v-btn small class="text-transform-none gtext-t5" value="tour">
                Tour
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="3" class="text-right d-block d-md-none">
            <div class="rate-section gtext-t4 font-weight-semibold ml-4">
              3.1
              <v-icon size="20" color="primary"> mdi-star </v-icon>
            </div>
          </v-col>
        </v-row>

        <!-- General data section -->
        <v-row>
          <v-col cols="11" md="8">
            <h1 class="gtext-h4 gtext-sm-h4 gtext-lg-h4">
              North Carolina School of Science and Mathematics
            </h1>
          </v-col>
          <v-col cols="1" md="4">
            <div class="float-right d-flex mt-1">
              <v-icon size="20" class="primary-gray-300">mdi-heart</v-icon>
              <div
                class="d-none d-md-block rate-section gtext-t4 font-weight-semibold ml-4"
              >
                3.1
                <v-icon size="20" color="primary"> mdi-star </v-icon>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="8">
            <div class="d-flex">
              <div>
                <v-chip class="list-chip gtext-t5 font-weight-medium" small>
                  Pre-K
                </v-chip>
                <v-chip class="list-chip gtext-t5 font-weight-medium" small>
                  Private
                </v-chip>
                <v-chip class="list-chip gtext-t5 font-weight-medium" small>
                  Online
                </v-chip>
                <v-chip class="list-chip gtext-t5 font-weight-medium" small>
                  Islamic
                </v-chip>
              </div>
              <v-spacer />

              <div class="gtext-t4 primary-blue-500">You enter</div>
            </div>

            <div class="d-flex mt-11 mb-9">
              <div class="gtext-h5 gtext-md-h5 primary-gray-600">
                Tuition fee
              </div>
              <v-spacer />
              <!-- <div class="gtext-t4 primary-blue-500">You enter</div> -->

              <div class="gtext-t2 font-weight-heavy primary-gray-800">
                <span class="gtext-t6">$</span>
                {{ "1200" | numberFormat }}
              </div>
            </div>
            <div class="d-flex">
              <div class="gtext-h5 primary-gray-600">
                <div class="mb-4">Facilities</div>
                <div>
                  <v-btn
                    class="bg-primary-gray-800 white--text"
                    height="56"
                    width="56"
                    @click="facilitiesDialog=true"
                  >
                    <v-icon size="24"> mdi-bus </v-icon>
                  </v-btn>
                  <v-btn
                    class="bg-primary-gray-800 white--text"
                    height="56"
                    width="56"
                    @click="facilitiesDialog=true"
                  >
                    <v-icon size="24"> mdi-food </v-icon>
                  </v-btn>
                  <v-btn
                    class="bg-primary-gray-800 white--text"
                    height="56"
                    width="56"
                    @click="facilitiesDialog=true"
                  >
                    <v-icon size="24"> mdi-basketball </v-icon>
                  </v-btn>
                  <v-btn
                    class="bg-primary-gray-800 white--text"
                    disabled
                    height="56"
                    width="56"
                    @click="facilitiesDialog=true"
                  >
                    <v-icon size="24"> mdi-wifi-arrow-down </v-icon>
                  </v-btn>
                </div>
              </div>
              <v-spacer />
              <div class="gtext-t4 primary-blue-500 align-self-center">
                You enter
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" id="main-info-section">
            <div class="d-flex info-itm ml-md-6">
              <div class="info-sign">
                <v-icon color="primary"> mdi-web </v-icon>
              </div>
              <div class="info-data">
                <a
                  :href="normalizeURL('www.schoolcitycenterstablesg.com')"
                  target="_blenk"
                >
                  www.schoolcitycenterstablesg.com
                </a>
              </div>
            </div>

            <div class="d-flex info-itm ml-md-6">
              <div class="info-sign">
                <v-icon color="primary"> mdi-email </v-icon>
              </div>
              <div class="info-data">
                <a href="mailto:info@schoolcitycenterstablesg.com">
                  info@schoolcitycenterstablesg.com
                </a>
              </div>
            </div>

            <div class="d-flex info-itm ml-md-6">
              <div class="info-sign">
                <v-icon color="primary"> mdi-phone </v-icon>
              </div>
              <div class="info-data">
                <a href="tel:+98 123 000 45 67"> +98 123 000 45 67 </a>
              </div>
            </div>

            <div class="d-flex info-itm ml-md-6">
              <div class="info-sign">
                <v-icon size="20" color="primary"> mdi-map-marker </v-icon>
              </div>
              <div class="info-data">20 Mine ST,Center,...,NH 033</div>
            </div>
          </v-col>
        </v-row>

        <!-- End general data section -->

        <!-- Users score -->
        <v-row class="mt-16">
          <v-col cols="12" md="4">
            <h3 class="gtext-h5 primary-gray-600 mb-15">Users score</h3>
            <div class="d-flex">
              <img
                src="/images/score.png"
                id="score-img"
                alt="Users score"
                class="mr-8"
              />
              <div class="mt-10">
                <div class="gtext-t6 primary-gray-400 mb-10">
                  Total comments
                  <span class="primary-gray-800 font-weight-heavy">650</span>
                </div>
                <div>
                  <v-rating
                    v-model="rating"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </div>
                <div class="gtext-t6 primary-gray-400">
                  Average score &nbsp;<span
                    class="primary-gray-900 gtext-t4 font-weight-medium"
                    >3.2</span
                  ><span>&nbsp;/&nbsp;5</span>
                </div>
              </div>
            </div>
            <div class="mt-10 mb-12">
              <v-btn
                block
                class="bg-primary-gray-800 white--text text-transform-none gtext-t4 font-weight-medium"
                rounded
                x-large
                @click="leaveCommentDialog = true"
                >Leave comment</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <ul id="score-results">
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Classes quality
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="15"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">Poor</div>
              </li>
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Education
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="70"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">Good</div>
              </li>
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  IT training
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="48"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">
                  Average
                </div>
              </li>
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Safe and happy
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="50"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">
                  Average
                </div>
              </li>
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Behavior
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="60"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">Good</div>
              </li>
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Tuition ratio
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="80"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">Good</div>
              </li>
              <li class="d-flex mb-4">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Facilities
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="90"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">Good</div>
              </li>
              <li class="d-flex">
                <div class="bullet"></div>
                <div class="gtext-t4 font-weight-medium score-title">
                  Artistic activities
                </div>
                <v-progress-linear
                  color="success"
                  rounded
                  value="10"
                  height="8"
                  class="mt-3"
                ></v-progress-linear>

                <div class="gtext-t4 font-weight-medium rate-title">Poor</div>
              </li>
            </ul>
          </v-col>
        </v-row>
        <!-- End users score -->

        <!-- Recent comments -->
        <v-row>
          <v-col cols="12">
            <h3 class="gtext-h5 primary-gray-600">Recent comments</h3>
          </v-col>
          <v-col cols="12" md="9">
            <v-card
              class="comment-card primary-gray-100 pt-4 mb-3"
              elevation="1"
            >
              <v-card-text>
                <div class="comment-card-header">
                  <div class="d-flex float-left">
                    <v-avatar size="60">
                      <img
                        class="profile-avatar"
                        src="/images/profile-pic-ex1.png"
                      />
                    </v-avatar>
                    <div class="ml-2">
                      <div class="gtext-t3 primary-gray-500">
                        Teacher, Blackven
                      </div>
                      <div class="gtext-t2 primary-gray-900">Salena Gomez</div>
                    </div>
                  </div>
                  <div class="float-right">
                    <v-rating
                      :value="2"
                      background-color="orange lighten-3"
                      color="orange"
                      half-increments
                      size="24"
                      readonly
                    ></v-rating>
                  </div>
                </div>
                <v-divider class="mb-5" />
                <div class="gtext-t2 primary-gray-700 mb-6">
                  “The vows and named is his origin myself any is making. Might
                  times was again. he have own produce.”
                </div>
                <div class="pb-8">
                  <div class="float-left">
                    <v-btn
                      class="bg-primary-gray-700 white--text mr-6"
                      fab
                      x-small
                    >
                      <v-icon size="14"> mdi-thumb-down </v-icon>
                    </v-btn>
                    <v-btn
                      class="bg-primary-gray-700 white--text mr-6"
                      fab
                      x-small
                    >
                      <v-icon size="14"> mdi-thumb-up </v-icon>
                    </v-btn>
                    <v-btn class="bg-primary-blue-500 white--text" fab x-small>
                      <v-icon size="14"> mdi-forum </v-icon>
                    </v-btn>
                  </div>
                  <div class="float-right gtext-t5">2023/11/23</div>
                </div>
              </v-card-text>
            </v-card>
            <v-card
              class="comment-card primary-gray-100 pt-4 mb-3"
              elevation="1"
            >
              <v-card-text>
                <div class="comment-card-header">
                  <div class="d-flex float-left">
                    <v-avatar size="60">
                      <img
                        class="profile-avatar"
                        src="/images/profile-pic-ex2.jpeg"
                      />
                    </v-avatar>
                    <div class="ml-2">
                      <div class="gtext-t3 primary-gray-500">
                        Teacher, Blackven
                      </div>
                      <div class="gtext-t2 primary-gray-900">Salena Gomez</div>
                    </div>
                  </div>
                  <div class="float-right">
                    <v-rating
                      :value="3.4"
                      background-color="orange lighten-3"
                      color="orange"
                      half-increments
                      size="24"
                      readonly
                    ></v-rating>
                  </div>
                </div>
                <v-divider class="mb-5" />
                <div class="gtext-t2 primary-gray-700 mb-6">
                  “The vows and named is his origin myself any is making. Might
                  times was again. he have own produce.”
                </div>
                <div class="pb-8">
                  <div class="float-left">
                    <v-btn
                      class="bg-primary-gray-700 white--text mr-6"
                      fab
                      x-small
                    >
                      <v-icon size="14"> mdi-thumb-down </v-icon>
                    </v-btn>
                    <v-btn
                      class="bg-primary-gray-700 white--text mr-6"
                      fab
                      x-small
                    >
                      <v-icon size="14"> mdi-thumb-up </v-icon>
                    </v-btn>
                    <v-btn class="bg-primary-blue-500 white--text" fab x-small>
                      <v-icon size="14"> mdi-forum </v-icon>
                    </v-btn>
                  </div>
                  <div class="float-right gtext-t5">2023/11/23</div>
                </div>
              </v-card-text>
            </v-card>

            <div class="text-center mt-14">
              <v-btn
                rounded
                class="text-transform-none gtext-t4 font-weight-medium"
                color="white"
                x-large
                >Load more</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="3" class="d-none d-md-block pl-15">
            <div id="advert-section">
              <div class="vertical-text">Advertising</div>
            </div>
          </v-col>
        </v-row>
        <!-- End recent comments -->

        <!-- Similar schools -->
        <v-row id="similar-schools">
          <v-col cols="12">
            <h3 class="gtext-h5 primary-gray-600">Similar schools</h3>
          </v-col>
          <v-col cols="12">
            <v-slide-group
              class="slider py-sm-4"
              :show-arrows="$vuetify.breakpoint.lgAndUp"
            >
              <!-- <div class="d-flex" v-if="isLoading">
                <v-slide-item v-for="i in 10" :key="i">
                  <v-skeleton-loader
                    class="mx-auto slide-loading"
                    type="card"
                  ></v-skeleton-loader>
                </v-slide-item>
              </div> -->

              <v-slide-item>
                <v-card rounded class="list-item" :to="`/school/`">
                  <v-card-text>
                    <div class="item-info">
                      <div class="main-data">
                        <div class="float-left">
                          <h2 class="gtext-t4 font-weight-semibold mb-4">
                            School name School nament
                          </h2>

                          <!-- <v-chip class="primary">
              
             </v-chip> -->

                          <v-chip
                            class="list-chip gtext-t5 font-weight-medium"
                            small
                          >
                            Pre-K
                          </v-chip>

                          <!-- <v-chip class="primary">
              
             </v-chip>

             <v-chip class="primary">
              
             </v-chip> -->
                        </div>
                        <div class="item-img float-right">
                          <img
                            :src="require('assets/images/default-school.png')"
                          />
                        </div>
                      </div>
                      <v-divider class="mb-3" />
                      <div class="item-footer">
                        <div class="float-left">
                          <v-btn icon>
                            <v-icon> mdi-map-marker </v-icon>
                          </v-btn>

                          <!-- <v-btn :disabled="!item.location" icon>
                    <v-icon> mdi-map-marker </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.phone1" icon>
                    <v-icon> mdi-phone </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.address" icon>
                    <v-icon> mdi-email </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.site" icon>
                    <v-icon> mdi-web </v-icon>
                  </v-btn> -->
                        </div>

                        <div class="float-right d-flex mt-1">
                          <div
                            class="rate-section gtext-t6 font-weight-semibold mr-1"
                          >
                            <!-- {{ item.score }} -->
                            4
                            <v-icon color="primary"> mdi-star </v-icon>
                          </div>
                          <div class="gtext-t6 primary-gray-300">
                            Update:
                            <span class="primary-gray-600">
                              2023/11/23
                              <!-- {{$moment(item.up_date).format("YYYY-MM-DD")}} -->
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-slide-item>
              <v-slide-item>
                <v-card rounded class="list-item" :to="`/school/`">
                  <v-card-text>
                    <div class="item-info">
                      <div class="main-data">
                        <div class="float-left">
                          <h2 class="gtext-t4 font-weight-semibold mb-4">
                            School name School nament
                          </h2>

                          <!-- <v-chip class="primary">
              
             </v-chip> -->

                          <v-chip
                            class="list-chip gtext-t5 font-weight-medium"
                            small
                          >
                            Pre-K
                          </v-chip>

                          <!-- <v-chip class="primary">
              
             </v-chip>

             <v-chip class="primary">
              
             </v-chip> -->
                        </div>
                        <div class="item-img float-right">
                          <img
                            :src="require('assets/images/default-school.png')"
                          />
                        </div>
                      </div>
                      <v-divider class="mb-3" />
                      <div class="item-footer">
                        <div class="float-left">
                          <v-btn icon>
                            <v-icon> mdi-map-marker </v-icon>
                          </v-btn>

                          <!-- <v-btn :disabled="!item.location" icon>
                    <v-icon> mdi-map-marker </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.phone1" icon>
                    <v-icon> mdi-phone </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.address" icon>
                    <v-icon> mdi-email </v-icon>
                  </v-btn>
                  <v-btn :disabled="!item.site" icon>
                    <v-icon> mdi-web </v-icon>
                  </v-btn> -->
                        </div>

                        <div class="float-right d-flex mt-1">
                          <div
                            class="rate-section gtext-t6 font-weight-semibold mr-1"
                          >
                            <!-- {{ item.score }} -->
                            4
                            <v-icon color="primary"> mdi-star </v-icon>
                          </div>
                          <div class="gtext-t6 primary-gray-300">
                            Update:
                            <span class="primary-gray-600">
                              2023/11/23
                              <!-- {{$moment(item.up_date).format("YYYY-MM-DD")}} -->
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
        <!-- End similar schools -->
      </v-col>
    </v-row>
    <!-- End data container -->

    <!-- Leave comment dialog -->
    <v-dialog
      transition="dialog-bottom-transition"
      v-model="leaveCommentDialog"
      :fullscreen="$vuetify.breakpoint.xs"
      max-width="924"
      style="z-index: 20001"
    >
      <v-card>
        <v-card-text class="py-6 py-md-8 px-6 px-md-12">
          <div class="d-flex">
            <div class="gtext-h5 priamry-gray-700">Leave a comment</div>
            <v-spacer></v-spacer>
            <v-btn icon
              ><v-icon size="20" @click="leaveCommentDialog = false"
                >mdi-close</v-icon
              ></v-btn
            >
          </div>
          <v-divider class="mb-12 mt-4" />
          <v-row>
            <v-col cols="12" md="6">
              <ul id="score-form">
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Classes quality
                  </div>
                  <v-rating
                    v-model="commentForm.classes_quality"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Education
                  </div>
                  <v-rating
                    v-model="commentForm.education"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    IT training
                  </div>
                  <v-rating
                    v-model="commentForm.it_training"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Safe and happy
                  </div>
                  <v-rating
                    v-model="commentForm.safe_and_happy"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Behavior
                  </div>
                  <v-rating
                    v-model="commentForm.behavior"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Tuition ratio
                  </div>
                  <v-rating
                    v-model="commentForm.tuition_ratio"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex mb-4">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Facilities
                  </div>
                  <v-rating
                    v-model="commentForm.facilities"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
                <li class="d-flex">
                  <div class="bullet"></div>
                  <div
                    class="gtext-t4 font-weight-medium primary-gray-700 score-title"
                  >
                    Artistic activities
                  </div>
                  <v-rating
                    v-model="commentForm.artistic_activities"
                    background-color="orange lighten-3"
                    color="orange"
                    half-increments
                    hover
                    size="24"
                  ></v-rating>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                placeholder="Type your comment"
                v-model="commentForm.comment"
                outlined
                :rows="$vuetify.breakpoint.xs ? 10 : 22"
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-13">
          <v-btn
            class="primary black--text text-transform-none gtext-t4 font-weight-medium"
            rounded
            width="100%"
            max-width="400"
            x-large
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End leave comment dialog -->

    <!-- Gallery dialog -->
    <v-dialog
      transition="dialog-bottom-transition"
      v-model="galleryDialog"
      :fullscreen="$vuetify.breakpoint.xs"
      max-width="720"
      style="z-index: 20001"
    >
      <v-card>
        <v-card-text class="py-6 py-md-8 px-6 px-md-8">
          <div class="d-flex">
            <div class="gtext-h5 priamry-gray-700">School images</div>
            <v-spacer></v-spacer>
            <v-btn icon
              ><v-icon size="20" @click="galleryDialog = false"
                >mdi-close</v-icon
              ></v-btn
            >
          </div>
          <v-divider class="mb-12 mt-4" />
          <v-row>
            <v-col cols="12" md="7">
              <img
                class="schoolDetailsImg"
                src="/images/school-default.png"
                alt="School image"
              />
              <div class="text-center gtext-t5 font-weight-heavy mt-6">
                3/<span class="gray--text">12</span>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <v-row>
                <v-col cols="4" class="pl-0">
                  <img
                    class="schoolThumbImg"
                    src="/images/school-default.png"
                    alt="School image"
                  />
                </v-col>
                <v-col cols="4" class="pl-0">
                  <img
                    class="schoolThumbImg"
                    src="/images/school-default.png"
                    alt="School image"
                  />
                </v-col>
                <v-col cols="4" class="pl-0">
                  <img
                    class="schoolThumbImg"
                    src="/images/school-default.png"
                    alt="School image"
                  />
                </v-col>
                <v-col cols="4" class="pl-0">
                  <img
                    class="schoolThumbImg"
                    src="/images/school-default.png"
                    alt="School image"
                  />
                </v-col>
                <v-col
                  cols="4"
                  align="center"
                  justify="center"
                  class="fill-height"
                >
                  <v-btn color="primary" fab depressed>
                    <v-icon size="48"> mdi-plus </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-13">
          <v-btn
            class="primary black--text text-transform-none gtext-t4 font-weight-medium"
            rounded
            width="100%"
            max-width="400"
            x-large
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End gallery dialog -->

    <!-- Select facilites dialog -->
    <v-dialog
      transition="dialog-bottom-transition"
      v-model="facilitiesDialog"
      :fullscreen="$vuetify.breakpoint.xs"
      max-width="720"
      style="z-index: 20001"
    >
      <v-card>
        <v-card-text class="py-6 py-md-8 px-6 px-md-8">
          <div class="d-flex">
            <div class="gtext-h5 priamry-gray-700">Facilities</div>
            <v-spacer></v-spacer>
            <v-btn icon
              ><v-icon size="20" @click="facilitiesDialog = false"
                >mdi-close</v-icon
              ></v-btn
            >
          </div>
          <v-divider class="mb-12 mt-4" />
          <v-row>
            <v-col cols="12" md="6">
              <v-btn
                class="bg-primary-gray-800 white--text"
                height="56"
                width="56"
              >
                <v-icon size="24"> mdi-bus </v-icon>
              </v-btn>
              <span class="gtext-t4 ml-4 font-weight-medium">School bus</span>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                class="bg-primary-gray-800 white--text"
                height="56"
                width="56"
              >
                <v-icon size="24"> mdi-food </v-icon>
              </v-btn>
              <span class="gtext-t4 ml-4 font-weight-medium">Restaurant</span>

            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                class="bg-primary-gray-800 white--text"
                height="56"
                width="56"
              >
                <v-icon size="24"> mdi-coffee </v-icon>
              </v-btn>
              <span class="gtext-t4 ml-4 font-weight-medium">Coffee Shop</span>

            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                class="bg-primary-gray-800 white--text"
                height="56"
                width="56"
              >
                <v-icon size="24"> mdi-basketball </v-icon>
              </v-btn>
              <span class="gtext-t4 ml-4 font-weight-medium">Gym</span>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                class="bg-primary-gray-800 white--text"
                disabled
                height="56"
                width="56"
              >
                <v-icon size="24"> mdi-wifi-arrow-down </v-icon>
              </v-btn>
              <span class="gtext-t4 ml-4 font-weight-medium">Wifi</span>
            </v-col>
            <v-col cols="12" md="6"> </v-col>
            <v-col cols="12" md="6"> </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center pb-13">
          <v-btn
            class="primary black--text text-transform-none gtext-t4 font-weight-medium"
            rounded
            width="100%"
            max-width="400"
            x-large
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End select facilites dialog -->
  </v-container>
</template>

<script>
export default {
  name: "school-details",
  auth: false,
  data() {
    return {
      map: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        zoom: 10,
        minZoom: 2,
        center: [39.90063873634048, -83.44667778604482], // Initial map center coordinates
        latLng: [39.90063873634048, -83.44667778604482],
        object: null,
        boundingBox: {},
        schoolIcon: null,
      },
      rating: 3.5,
      slideToggler: "map",
      topSlideClass: {
        image: "center-image",
        map: "under-image-left",
        tour: "under-image-right",
      },
      leaveCommentDialog: false,
      galleryDialog: false,
      facilitiesDialog: false,

      commentForm: {
        classes_quality: 0,
      },
    };
  },
  mounted() {
    this.map.schoolIcon = L.icon({
      iconUrl: "/images/school-marker.png", // Replace with school marker icon
      iconSize: [64, 64], // Adjust the size as needed
      iconAnchor: [16, 32], // Adjust the anchor point as needed
    });
  },
  methods: {
    normalizeURL(url) {
      // Check if the URL starts with 'http://' or 'https://'
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        // If not, assume it's 'http://'
        return "http://" + url;
      }
      // If it already has a protocol, leave it as is
      return url;
    },
    changeSlide() {
      if (this.slideToggler == "map") {
        this.topSlideClass.image = "under-image-left";
        this.topSlideClass.map = "center-image";
        this.topSlideClass.tour = "under-image-right";
      } else if (this.slideToggler == "image") {
        this.topSlideClass.image = "center-image";
        this.topSlideClass.map = "under-image-right";
        this.topSlideClass.tour = "under-image-left";
      } else if (this.slideToggler == "tour") {
        this.topSlideClass.image = "";
        this.topSlideClass.map = "under-image-left";
        this.topSlideClass.tour = "center-image";
      }

      const rootElement = this.$el;

      // Finding an element with a specific class
      const targetElement = rootElement.querySelector(".center-image");

      // Manipulating the found element (for example, changing its color)
      // if (targetElement) {
      //   targetElement.style.opacity = "1";
      // }
    },
  },
};
</script>

<style scoped>
.top-slide-container {
  position: fixed;
  margin-top: 5.4rem;
  margin-bottom: 2rem;
  width: 100vw;
  height: 26.4rem;
  max-height: 26.4rem;
  overflow: hidden;
  z-index: 0;
}

.data-container {
  position: relative;
  z-index: 1;
  margin-top: 30rem;
  background: #fff;
  border-top-left-radius: 3.2rem;
  border-top-right-radius: 3.2rem;
}

.center-image {
  position: absolute;
  top: 0;
  left: 0 !important;
  margin: auto;
  z-index: 2;
  right: 0 !important;
  width: 80% !important;
  max-height: 26.4rem;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.under-image-left,
.under-image-right {
  position: absolute;
  top: 0;
  max-height: 26.4rem;
}

.under-image-left {
  left: -50%;
  z-index: 1;
}

.under-image-right {
  right: -50%;
  z-index: 1;
}

.schoolDetailsImg {
  height: 28.1rem;
  max-height: 28.1rem;
  width: 100%;
  border-radius: 0.6rem;
}

.schoolThumbImg {
  width: 100%;
  height: 6.4247rem;
  max-height: 6.4247rem;
  border-radius: 0.4rem;
}

#schoolDetailsVr {
  height: 28.1rem;
  max-height: 28.1rem;
  width: 100%;
}

#schoolDetailsVr .a-canvas {
  border-radius: 0.6rem !important;
}
#schoolDetailsMap {
  border-radius: 0.6rem;
  height: 28.1rem;
  max-height: 28.1rem;
  width: 100%;
}

.list-chip {
  background: var(--primary-warning-50, #fffaeb) !important;
  color: var(--primary-yellow-gama-500, #ffb600) !important;
}

#main-info-section {
  .info-itm {
    margin-bottom: 0.8rem;
    .info-sign {
      width: 5.6rem;
      min-width: 5.6rem;
      height: 5.6rem;
      border-radius: 0.6rem;
      border: 1px solid var(--Primary-Yellow-Gama-50, #fff8ed);
      background: #fff;
      box-shadow: 2px 6px 24px 0px rgba(16, 24, 40, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info-data {
      width: 100%;
      height: 5.6rem;
      border-radius: 0.6rem;
      border: 1px solid var(--Primary-Yellow-Gama-50, #fff8ed);
      background: var(--White, #fff);
      box-shadow: 2px 6px 24px 0px rgba(16, 24, 40, 0.05);
      display: flex;
      justify-content: left;
      padding: 1.5rem 1.6rem 1.5rem 1.6rem;
      align-items: center;
      margin-left: 0.4rem;
    }
  }
}

#score-img {
  width: 16rem;
  height: 16rem;
}
#score-results {
  .score-title {
    width: 20rem;
    margin-right: 1rem;
  }
  .rate-title {
    width: 14rem;
    text-align: right;
  }

  .bullet {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background: #12b76a;
    margin-top: 1.2rem;
    margin-right: 0.8rem;
  }
}

#score-form {
  padding: 0;
  .score-title {
    width: 15rem;
    margin-right: 1rem;
  }

  .bullet {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background: #ffb600;
    margin-top: 1.2rem;
    margin-right: 0.8rem;
  }
}

.comment-card {
  .comment-card-header {
    height: 8rem;
  }
}

#advert-section {
  width: 100%;
  height: 84.4rem;
  float: right;
  flex-shrink: 0;
  border-radius: 0.6rem;
  background: var(--Primary-Grey-100, #f2f4f7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-text {
  transform: rotate(-90deg);
  color: var(--Primary-Grey-500, #667085);
  text-align: center;
  font-family: Inter;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 9.6rem; /* 192% */
  letter-spacing: 1.95rem;
}

#similar-schools {
  .list-item {
    height: 15rem;
    margin-bottom: 2rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    .item-info {
      .main-data {
        height: 8rem;

        .item-img img {
          width: 10.7rem;
          height: 8.1rem;
          flex-shrink: 0;
          border-radius: 0.4rem;
        }
      }
    }
  }
}

@media (min-width: 1264px) {
  .data-container {
    margin-top: 1rem;
  }
}
</style>

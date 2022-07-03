<template>
  <v-stepper v-model="e6" vertical class="stepper">
    <v-stepper-step :complete="e6 > 1" step="1" @click="e6 = 1" color="#008B8B" class="stepper-1">
      Select an app

    </v-stepper-step>
    <v-stepper-content step="1">
      <v-row>
        <v-col cols="12" v-for="item in timelines" :key="item.value">
          <nuxt-link id="lesson-name" to="" class="stepper-item">
            <!-- <i class="fa-regular fa-window-minimize ml-2"></i> -->
            {{ item.lessonName }}
          </nuxt-link>
        </v-col>
      </v-row>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" @click="e6 = 2" color="#008B8B" class="stepper-2">
      Configure analytics for this app
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-row>
        <v-col cols="12" v-for="item in timelines" :key="item.value">
          <nuxt-link id="lesson-name" to="" class="stepper-item">
            <!-- <i class="fa-regular fa-window-minimize ml-2"></i> -->
            {{ item.lessonName }}
          </nuxt-link>
        </v-col>
      </v-row>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" @click="e6 = 3" color="#008B8B" class="stepper-3">
      Select an ad format and name ad unit
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-row>
        <v-col cols="12" v-for="item in timelines" :key="item.value">
          <nuxt-link id="lesson-name" to="" class="stepper-item">
            <!-- <i class="fa-regular fa-window-minimize ml-2"></i> -->
            {{ item.lessonName }}
          </nuxt-link>
        </v-col>
      </v-row>
    </v-stepper-content>

    <v-stepper-step step="4" @click="e6 = 4" color="#008B8B" class="stepper-4">
      View setup instructions
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-row>
        <v-col cols="12" v-for="item in timelines" :key="item.value">
          <nuxt-link id="lesson-name" to="" class="stepper-item">
            <!-- <i class="fa-regular fa-window-minimize ml-2"></i> -->
            {{ item.lessonName }}
          </nuxt-link>
        </v-col>
      </v-row>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      timelines: [
        {
          lessonName: " Speech 1 :Nerve tissue cells",
        },
        {
          lessonName: "Speech 2 : Nervous system structure",
        }
      ]

    }
  },
}
</script>
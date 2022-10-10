<template>
  <v-card
    flat
    style="border: 1px solid rgba(0, 0, 0, 0.42)"
    id="scroll-target"
    class="overflow-y-auto filter-container"
  >
    <v-card-title>
      <p class="text-h5">Topics </p>
    </v-card-title>
    <v-card-text cols="12" v-if="topicList.length===0">
      <p class="text-h5">Please first select lesson</p>
    </v-card-text>
    <v-card-text v-else="topicList">
      <v-row
        align="center"
        justify="center"
        style="height: 210px;overflow-x: hidden"
      >
        <v-col cols="12" >
          <v-checkbox v-for="item in topicList"
                      v-model="topic"

                      :value="item.id"
                      hide-details="true"
                      multiple
                      class="small"
          >
            <template v-slot:label>
              <span :class="item.season ? 'topic_season' : ''">{{ item.title }}</span>
            </template>
          </v-checkbox>
        </v-col>


      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['topicList'],
  name: "topic-selector",
  data() {
    return {
      topic: '',
    }
  },
  watch: {
    topic(val) {
      this.$emit('selectTopic', val)
    }
  },

}
</script>

<style scoped>
.topic_season {
  font-weight: bolder !important;
  color: blue !important;
}
</style>

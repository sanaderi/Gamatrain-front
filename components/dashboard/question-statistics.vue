<template>
  <div class="d-inline-flex">
    <div class="px-3 text-center ">
      <v-btn
        color="#FF9800"
        dark
        fab
      >
                               <span class="font-weight-bold">
                                 11
                               </span>
      </v-btn>
      <p class="text-h6 mt-1">
        Your question
      </p>
    </div>
    <div class="px-3 text-center">
      <v-btn
        color="#E2CA31"
        dark
        fab
      >
                               <span class="font-weight-bold">
                                 8
                               </span>
      </v-btn>
      <p class="text-h6 mt-1">
        Received answer
      </p>
    </div>
    <div class="px-3 text-center">
      <v-btn
        color="#00D2AE"
        dark
        fab
      >
        <span class="font-weight-bold">21</span>
      </v-btn>
      <p class="text-h6 mt-1 font-weight-bold">
        Send answer
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "question-statistics"
}
</script>

<style scoped>

</style>

<template>
  <div class="d-inline-flex ">
    <div class="pl-0 pr-8 text-center ">
       <span class="icon icong-qa group-icon white--text"></span>

      <p class="text-h6 mt-1 white--text">
        Q & A
      </p>

    </div>
    <div class="px-3 text-center question-section">
      <v-btn
        color="#FF9800"
        dark
        fab
      >
           <span class="font-weight-bold">
                       11
          </span>
      </v-btn>


      <p class="text-h6 mt-1 white--text">
        Question's
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
      <p class="text-h6 mt-1 white--text" >
        Inbox
      </p>
    </div>
    <div class="px-3 text-center question-section">
      <v-btn
        color="#00D2AE"
        dark
        fab
      >
        <span class="font-weight-bold white--text">21</span>
      </v-btn>
      <p class="text-h6 mt-1 font-weight-bold white--text">
        Outbox
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


.group-icon{
  font-size: 5rem;
}
</style>

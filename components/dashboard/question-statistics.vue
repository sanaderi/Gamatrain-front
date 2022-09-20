<template>
  <div class="d-inline-flex " >
    <v-carousel height="60" hide-delimiters cycle :show-arrows="false">
      <v-carousel-item>
        <div class="px-3 text-center question-section">
          <v-btn
            color="#FF9800"
            dark
            fab
            x-small
          >
           <span class="counter">
               {{statistics.question && statistics.question.total ? statistics.question.total : 0}}
          </span>
          </v-btn>


          <p class="text-h6 mt-1 ">
            Question's
          </p>

        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="px-3 text-center">
          <v-btn
            color="#E2CA31"
            dark
            x-small
            fab
          >
        <span class="counter">
          {{statistics.question && statistics.question.unreadReplies ? statistics.question.unreadReplies : 0}}
        </span>
          </v-btn>
          <p class="text-h6 mt-1 " >
            Inbox
          </p>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="px-3 text-center question-section">
          <v-btn
            color="#00D2AE"
            dark
            x-small
            fab
          >
        <span class="counter">
             {{statistics.questionReply && statistics.questionReply.total ? statistics.questionReply.total : 0}}
        </span>
          </v-btn>
          <p class="text-h6 mt-1 font-weight-bold ">
            Outbox
          </p>

        </div>
      </v-carousel-item>
    </v-carousel>

<!--    <div class="pl-0 pr-8 text-center ">-->
<!--       <span class="icon icong-qa group-icon white&#45;&#45;text"></span>-->

<!--      <p class="text-h6 mt-1 white&#45;&#45;text">-->
<!--        Q & A-->
<!--      </p>-->

<!--    </div>-->
<!--    <div class="px-3 text-center question-section">-->
<!--      <v-btn-->
<!--        color="#FF9800"-->
<!--        dark-->
<!--        fab-->
<!--      >-->
<!--           <span class="font-weight-bold">-->
<!--               {{statistics.question && statistics.question.total ? statistics.question.total : 0}}-->
<!--          </span>-->
<!--      </v-btn>-->


<!--      <p class="text-h6 mt-1 white&#45;&#45;text">-->
<!--        Question's-->
<!--      </p>-->

<!--    </div>-->
<!--    <div class="px-3 text-center">-->
<!--      <v-btn-->
<!--        color="#E2CA31"-->
<!--        dark-->
<!--        fab-->
<!--      >-->
<!--        <span class="font-weight-bold">-->
<!--          {{statistics.question && statistics.question.unreadReplies ? statistics.question.unreadReplies : 0}}-->
<!--        </span>-->
<!--      </v-btn>-->
<!--      <p class="text-h6 mt-1 white&#45;&#45;text" >-->
<!--        Inbox-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="px-3 text-center question-section">-->
<!--      <v-btn-->
<!--        color="#00D2AE"-->
<!--        dark-->
<!--        fab-->
<!--      >-->
<!--        <span class="font-weight-bold white&#45;&#45;text">-->
<!--             {{statistics.questionReply && statistics.questionReply.total ? statistics.questionReply.total : 0}}-->
<!--        </span>-->
<!--      </v-btn>-->
<!--      <p class="text-h6 mt-1 font-weight-bold white&#45;&#45;text">-->
<!--        Outbox-->
<!--      </p>-->

<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "question-statistics",
  data(){
    return{
      statistics:''
    }
  }
}
</script>

<style scoped>


.group-icon{
  font-size: 5rem;
}

.counter{
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 30px;
}
</style>

<template>
  <v-container class="pb-10 mb-16">
    <create-test-form/>
  </v-container>
</template>

<script>
import CreateTestForm from "@/components/test-maker/create-test-form";

export default {
  layout: "test-maker-layout",
  name: "test-maker",
  head() {
    return {
      title: 'New Exam',
      correct_answer: 1,
      script: [
        //MathType to Latex
        // {
        //   type: 'text/javascript',
        //   src: '/MathType.js'
        // },
        // {
        //   type: 'text/javascript',
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=MML_HTMLorMML',
        //   async: true,
        // }
        //End MathType to Latex
      ]
    }
  },
  components: {
    CreateTestForm,
  },

}
</script>

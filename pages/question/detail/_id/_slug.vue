// Tmp file for fix search console problem

<template>
  <div>Tmp file for fix search console problem : redirect to new address</div>
</template>

<script>
export default {
  auth: false,

  async asyncData({ redirect,params }) {
    console.warn("hh");
    redirect(301,`/qa/${params.id}/${params.slug}`);
  },
};
</script>

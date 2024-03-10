// Tmp file for fix search console problem

<template>
  <div>Tmp file for fix search console problem : redirect to new address</div>
</template>

<script>

export default {
  auth: false,

  async asyncData({ redirect,params }) {
    redirect(301,`/tutorial/${params.id}/${params.slug}`);
  },
};
</script>

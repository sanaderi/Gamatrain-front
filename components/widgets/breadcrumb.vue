<template>
  <div class="breadcrumbs-container">
    <v-breadcrumbs :items="breads" >
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script>
export default {
  props: {
    breads: Array
  }
}
</script>


<style>
.breadcrumbs-container{
  background: #F5F5F5!important;
  border-radius: 8px;
}
</style>

<template>
  <div class="">
    <v-breadcrumbs :items="breads">
      <template v-slot:divider>
        <v-icon>mdi-chevron-left</v-icon>
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

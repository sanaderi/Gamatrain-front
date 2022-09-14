<template>
  <!--  Start:  Search and logo in header  -->
  <v-text-field
    class="grade-search"
    filled
    height="40"
    outlined
    dense
    label="Search..."
  >
    <templete slot="prepend-inner">
      <v-btn icon>
        <v-icon class="search-icon pb-2">mdi-magnify</v-icon>
      </v-btn>

    </templete>
  </v-text-field>
  <!--  End:  Search and logo in header  -->
</template>

<script>
export default {
  name: "search-box"
}
</script>

<style>
.v-text-field__details{
  display: none!important;
}
</style>

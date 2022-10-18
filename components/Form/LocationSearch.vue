<template>
  <v-autocomplete
    v-if="render"
    class="locationField"
    v-model="selectedItem"
    :loading="loading"
    :items="items"
    item-text="display_name"
    item-value="location"
    :search-input.sync="search"
    :label="label"
    @keydown="toggleSearch(true)"
    :solo="solo"
    outlined>
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          Search for
          <strong> {{ label }}</strong>
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: "LocationField",
  data() {
    return {
      search      : '',
      selectedItem: '',
      items       : [],
      loading     : false,
      timer       : null,
      waitTime    : 750,
      searchToggle: false,
      render      : true
    }
  },
  props  : ['label', 'solo'],
  methods: {
    async searchLocation(search) {
      this.loading       = true;
      let searchLocation = await this.$axios.post('/api/search_location', {
        keyword: search
      });
      if (searchLocation.status === 200) {
        this.items = [];
        for (let i = 0; i < searchLocation.data.length; i++) {
          this.items[i]                 = {};
          this.items[i]['display_name'] = searchLocation.data[i].display_name.substr(0, 38) +
            (searchLocation.data[i].display_name.length > 38 ? '...' : '');
          this.items[i]['location']     = [searchLocation.data[i].lat, searchLocation.data[i].lon];
        }
        this.loading = false;
      }
    },
    toggleSearch(val) {
      this.searchToggle = val;
    },
    addAndSetItem(location) {

      this.items = [];

      let item             = {};
      item['display_name'] = location.locationName.substr(0, 38) + (location.locationName.length > 38 ? '...' : '');
      item['location']     = [location.lat + '', location.lng + ''];

      this.items[this.items.length] = item;
      this.selectedItem             = this.items[this.items.length - 1].location;

      // refresh the autocomplete
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });

    }
  },
  mounted() {
    this.timer = setTimeout(() => {
    }, this.waitTime);
  },
  watch: {
    search(val) {
      if (val && this.searchToggle) {

        // Clear timer
        clearTimeout(this.timer);

        // Set Timer
        this.timer = setTimeout(() => {
          val !== this.selectedItem && this.searchLocation(val);
        }, this.waitTime);

      }
    },
    selectedItem(val) {
      val && this.searchToggle && this.$emit('locationSelected', val);
    }
  }
}
</script>

<style scoped>

</style>

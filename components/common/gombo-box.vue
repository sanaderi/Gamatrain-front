<template>
  <div class="gombo-box">
    <v-text-field
      @click="getList()"
      :label="label"
      rounded
      readonly
      outlined
      hide-details
      append-icon="mdi-menu-down"
      v-model="inputText"
      :dense="dense"
    ></v-text-field>

    <v-overlay v-if="sheet" @click="sheet = false"> </v-overlay>
    <v-card light class="gombo-box-list" v-if="sheet">
      <v-row>
        <v-col cols="12">
          <div class="px-5 mt-4">
            <v-list v-if="items.length">
              <v-subheader class="gtext-h5">{{ label }}</v-subheader>
              <v-text-field
                prepend-inner-icon="mdi-magnify"
                id="search-field"
                hide-details
                label="Search anything..."
                dense
                outlined
                v-model="keyword"
                rounded
                autocomplete="off"
              >
                <template v-slot:append>
                  <v-btn
                    large
                    class="primary"
                    :loading="searchLoading"
                    id="search-btn"
                    rounded
                  >
                    Search
                  </v-btn>
                </template>
              </v-text-field>
              <div class="data-list">
                <v-list-item
                  class="pointer"
                  v-for="(item, index) in filteredItems"
                  :key="index"
                >
                  <v-list-item-title
                    class="gtext-t5"
                    @click="setValue(item[itemValue], item[itemTitle])"
                    >{{ item[itemTitle] }}</v-list-item-title
                  >
                </v-list-item>
              </div>
            </v-list>
            <div v-else class="text-center pt-8">
              <v-progress-circular
                indeterminate
                :width="3"
                color="primary"
              ></v-progress-circular>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    label: "",
    items: [],
    value: String,
    itemTitle: {
      type: String,
      default: "title",
    },
    itemValue: {
      type: String,
      default: "id",
    },
  },
  name: "gomboBox",
  mounted() {},
  data() {
    return {
      sheet: false,
      dataLoading: true,
      keyword: "",
      inputText: "",
      dense:false
    };
  },
  watch: {
    items: {
      immediate: true,
      handler(newValue) {
        if (newValue.length > 0) {
          const foundObj = this.items.find((x) => x[this.itemValue] == this.value);
          if (foundObj) this.inputText = foundObj[this.itemTitle];
          else this.inputText = "";
        }
      },
    },
  },
  methods: {
    getList() {
      this.sheet = true;
    },
    setValue(val, title) {
      this.$emit("input", val);
      this.$emit("change", val); // Emit custom change event
      this.inputText = title;
      this.sheet = false;
    },
    filterItem() {},
  },
  computed: {
    filteredItems() {
      const filterTextLower = this.keyword.toLowerCase().trim();

      return this.items.filter((item) =>
        item[this.itemTitle].toLowerCase().includes(filterTextLower)
      );
    },
  },
};
</script>

<style>
.gombo-box .gombo-box-list {
  border-radius: 3.2rem 3.2rem 0rem 0rem;
  height: 40rem;
  position: fixed;
  z-index: 1800;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 2px -6px 24px 0px rgba(16, 24, 40, 0.05);
}

.gombo-box .gombo-box-list .data-list {
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 2rem;
  height: 30rem;
  text-align: left;
}

.gombo-box .v-text-field--rounded {
  .v-input__control {
    .v-input__slot {
      padding: 0 10px 0 24px;
      background: var(--White, #fff) !important;

      .v-input__append-inner {
        margin:auto !important;
        padding-right: 1rem;

        #search-btn {
          height: 3rem !important;

          .v-btn__content {
            color: black;
            text-transform: none;
            font-family: Inter;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 500;
            line-height: 2.2rem;
          }
        }
      }
    }
  }
}
</style>

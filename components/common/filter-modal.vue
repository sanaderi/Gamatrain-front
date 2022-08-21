<template>
</template>
<script>
export default {
  name: "filter-modal",
  data() {
    return {
      scroll: 0,
      widgets: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.testScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.testScroll);
  },
  methods: {
  },
}
</script>

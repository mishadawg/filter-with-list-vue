<template>
  <button @click="showMoreItems">Show more</button>
</template>
<script>
export default {
  name: "ShowMoreTrigger",
  methods: {
    showMoreItems() {
      this.$store.commit("showMoreItems");
    },
  },
};
</script>

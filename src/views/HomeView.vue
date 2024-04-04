<template>
  <div class="container">
    <Filter />
    <ListPosts :users="this.$store.getters.data" />
    <ShowMoreTrigger />
  </div>
</template>

<script>
import Filter from "@/components/Filter";
import ListPosts from "@/components/ListPosts";
import ShowMoreTrigger from "@/components/ShowMoreTrigger";

export default {
  name: "HomeView",
  components: {
    Filter,
    ListPosts,
    ShowMoreTrigger,
  },
  mounted: function () {
    this.$store.dispatch("getDataFromServer");
  },
};
</script>

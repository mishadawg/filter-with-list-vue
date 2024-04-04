<template>
  <div class="container">
    <Filter />
    <ListUsers :users="this.$store.getters.data" />
    <ShowMoreTrigger />
  </div>
</template>

<script>
import Filter from "@/components/Filter";
import ListUsers from "@/components/ListUsers";
import ShowMoreTrigger from "@/components/ShowMoreTrigger";

export default {
  name: "HomeView",
  components: {
    Filter,
    ListUsers,
    ShowMoreTrigger,
  },
  mounted: function () {
    this.$store.commit("getData");
  },
};
</script>

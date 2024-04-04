<template>
  <div class="home">
    <Filter />
    <ListUsers />
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
};
</script>

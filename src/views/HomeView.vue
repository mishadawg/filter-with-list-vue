<template>
  <div class="container">
    <Filter />
    <ListPosts :users="listPostsData" />
    <ShowMoreTrigger v-if="itemsToShow < listPostsData?.length" />
    <Paggination />
  </div>
</template>

<script>
import Filter from "@/components/Filter";
import ListPosts from "@/components/ListPosts";
import ShowMoreTrigger from "@/components/ShowMoreTrigger";
import Paggination from "@/components/Paggination";
import methodsAndCompsForData from "@/mixins/methodsAndCompsForData";

export default {
  name: "HomeView",
  mixins: [methodsAndCompsForData],
  components: {
    Filter,
    ListPosts,
    ShowMoreTrigger,
    Paggination,
  },
  mounted: function () {
    this.$store.dispatch("getDataFromServer");
  },
};
</script>

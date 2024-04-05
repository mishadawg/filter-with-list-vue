<template>
  <div class="container">
    <Filter />
    <ListPosts :users="listPostsData" />
    <ShowMoreTrigger v-if="showMoreTriggerHandler" />
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
  computed: {
    showMoreTriggerHandler: function () {
      let summ =
        this.$store.getters.currentPageInfo.pageStart + this.itemsToShow;
      if (summ > this.listPostsData?.length) {
        return false;
      }
      return true;
    },
  },
};
</script>

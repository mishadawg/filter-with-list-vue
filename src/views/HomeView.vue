<template>
  <div class="container">
    <Filter />
    <ListPosts :users="listPostsData" />
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
  computed: {
    listPostsData: function () {
      if (
        this.$store.getters.filter?.title.lenght > 0 ||
        this.$store.getters.filter?.category
      ) {
        let filteredData = this.$store.getters.data.filter(
          (item) =>
            item?.category.value == this.$store.getters.filter?.category ||
            item?.title == this.$store.getters.filter?.title
        );
        return filteredData;
      } else {
        return this.$store.getters.data;
      }
    },
  },
  mounted: function () {
    this.$store.dispatch("getDataFromServer");
  },
};
</script>

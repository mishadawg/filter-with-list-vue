<template>
  <div class="container">
    <Filter />
    <ListPosts :users="listPostsData" />
    <ShowMoreTrigger v-if="itemsToShow < listPostsData?.length" />
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
  methods: {
    getFilterData(data) {
      if (
        this.$store.getters.filter?.title &&
        !this.$store.getters.filter?.category
      ) {
        return data.filter((el) =>
          el.title.includes(this.$store.getters.filter?.title)
        );
      }
      if (
        !this.$store.getters.filter?.title &&
        this.$store.getters.filter?.category
      ) {
        return data.filter(
          (el) => el.category.value === this.$store.getters.filter?.category
        );
      }
      return data.filter(
        (el) =>
          el.title.includes(this.$store.getters.filter?.title) &&
          el.category.value === this.$store.getters.filter?.category
      );
    },
  },
  computed: {
    filterComp: function () {
      return (
        !!this.$store.getters.filter?.category ||
        !!this.$store.getters.filter?.title
      );
    },
    listPostsData: function () {
      return !this.filterComp
        ? this.$store.getters.data
        : this.getFilterData(this.$store.getters.data);
    },
    itemsToShow: function () {
      return this.$store.getters.itemsToShow;
    },
  },
  mounted: function () {
    this.$store.dispatch("getDataFromServer");
  },
};
</script>

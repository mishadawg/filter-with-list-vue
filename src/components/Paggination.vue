<template>
  <ul class="paggination">
    <li>
      <button @click="setPage(currentPage - 1)" :disabled="currentPage === 1">
        Prev
      </button>
    </li>
    <li v-for="(page, index) in totalPage" :key="index">
      <button :disabled="currentPage === page" @click="setPage(page)">
        {{ page }}
      </button>
    </li>
    <li>
      <button
        @click="setPage(currentPage + 1)"
        :disabled="currentPage === totalPage"
      >
        Next
      </button>
    </li>
  </ul>
</template>
<script>
import methodsAndCompsForData from "@/mixins/methodsAndCompsForData";

export default {
  name: "Paggination",
  mixins: [methodsAndCompsForData],
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currentPage = idx;
      this.$store.commit("setPage", {
        currentPage: this.currentPage,
        pageStart: this.pageStart,
      });
    },
  },
  computed: {
    storedCurrentPage: function () {
      return this.$store.getters.currentPageInfo.currentPage;
    },
    pageStart: function () {
      return (this.currentPage - 1) * this.itemsToShow;
    },
    totalPage: function () {
      let result = Math.ceil(this.listPostsData?.length / this.itemsToShow);
      let stockCount = 3;
      return result ? result : stockCount;
    },
  },
  watch: {
    storedCurrentPage: function (newVal) {
      this.currentPage = newVal;
    },
  },
};
</script>
<style lang="scss" scoped>
.paggination {
  display: flex;
  justify-content: center;
  gap: 4px;
  list-style: none;
}
</style>

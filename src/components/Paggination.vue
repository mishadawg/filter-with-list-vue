<template>
  <!-- <div>currPage > {{ currPage }}</div>
  <div>pageStart > {{ pageStart }}</div>
  <div>listPostsData > {{ listPostsData?.length }}</div> -->
  <ul class="paggination">
    <li>
      <button @click="setPage(currPage - 1)" :disabled="currPage === 1">
        Prev
      </button>
    </li>
    <li v-for="(page, index) in totalPage" :key="index">
      <button :disabled="currPage === page" @click="setPage(page)">
        {{ page }}
      </button>
    </li>
    <li>
      <button @click="setPage(currPage + 1)" :disabled="currPage === totalPage">
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
      currPage: 1,
    };
  },
  methods: {
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
  },
  computed: {
    // filteredRows: function () {
    //   var filter_name = this.filter_name.toLowerCase();
    //   return this.filter_name.trim() !== ""
    //     ? this.rows.filter(function (d) {
    //         return d.name.toLowerCase().indexOf(filter_name) > -1;
    //       })
    //     : this.rows;
    // },
    pageStart: function () {
      return (this.currPage - 1) * this.itemsToShow;
    },
    totalPage: function () {
      let result = Math.ceil(this.listPostsData?.length / this.itemsToShow);
      let stockCount = 3;
      return result ? result : stockCount;
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

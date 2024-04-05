<template>
  <div class="list-users">
    <p class="list-users-count">Counts items to show: {{ itemsToShow }}</p>
    <div class="list-users-container">
      <template v-if="itemsToShow">
        <PostCard
          v-for="(user, index) in itemsToShow"
          :key="index"
          :user="slicedUserComp[index]"
        />
      </template>
      <template v-else> Нет данных. </template>
    </div>
  </div>
</template>
<script>
import PostCard from "@/components/PostCard";

export default {
  name: "ListPosts",
  props: {
    users: {
      type: Array,
    },
  },
  components: {
    PostCard,
  },
  computed: {
    slicedUserComp: function () {
      let result = this?.users.slice(
        this.$store.getters.currentPageInfo.pageStart,
        this.$store.getters.currentPageInfo.pageStart +
          this.$store.getters.itemsToShow
      );
      return result ? result : null;
    },
    itemsToShow: function () {
      let summ =
        this.$store.getters.itemsToShow +
        this.$store.getters.currentPageInfo.pageStart;
      if (this.$store.getters.itemsToShow < this.users?.length) {
        if (summ > this.users?.length) {
          return (
            this.users?.length - this.$store.getters.currentPageInfo.pageStart
          );
        } else {
          return this.$store.getters.itemsToShow;
        }
      } else {
        return this.users?.length;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.list-users {
  &-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 25px;
    margin-bottom: 14px;
  }
  &-count {
    text-align: left;
    margin-bottom: 14px;
  }
}
</style>

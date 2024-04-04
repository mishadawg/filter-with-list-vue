<template>
  <div class="list-users">
    <p>Counts items to show: {{ itemsToShow }}</p>
    <div class="list-users-container">
      <template v-if="users">
        <PostCard
          v-for="(user, index) in itemsToShow"
          :key="index"
          :user="users[index]"
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
    itemsToShow: function () {
      return this.$store.getters.itemsToShow;
    },
  },
  watch: {
    itemsToShow: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.$nextTick(() => {
            console.log(newVal + "update counter of visible items");
          });
        }
      },
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
  }
}
</style>

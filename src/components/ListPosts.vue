<template>
  <div class="list-users">
    <p class="list-users-count">
      Counts items to show:
      {{ itemsToShow < users?.length ? itemsToShow : users?.length }}
    </p>
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

<template>
  <div class="list-users">
    <div class="list-users-container">
      <template v-if="users">
        <PostCard v-for="(user, index) in users" :key="index" :user="user" />
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

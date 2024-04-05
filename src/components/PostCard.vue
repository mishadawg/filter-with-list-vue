<template>
  <div class="user-card">
    <p>{{ user?.category.name }}</p>
    <p class="user-card-title">{{ user?.title }}</p>
    <p class="user-card-text">{{ user?.body }}</p>
  </div>
</template>
<script>
export default {
  name: "PostCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/vars";

.user-card {
  max-width: $stock-block-max-width;
  width: 100%;
  border-radius: $stock-block-border-radius;
  text-align: left;
  border: 1px solid black;
  padding: 16px;
  &-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 14px;
  }
}
</style>

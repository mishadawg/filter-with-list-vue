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
.user-card {
  // var css
  max-width: 416px;
  width: 100%;
  border-radius: 6px;
  text-align: left;
  border: 1px solid;
  // var css
  // border-color: aqua;
  padding: 16px;
  &-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 14px;
  }
}
</style>

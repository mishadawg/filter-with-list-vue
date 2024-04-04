<template>
  <div class="user-card">
    <p class="user-card-name">{{ user.title }}</p>
    <p class="user-card-text">{{ user.body }}</p>
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
  max-width: 390px;
  width: 100%;
  border-radius: 6px;
  text-align: left;
}
</style>

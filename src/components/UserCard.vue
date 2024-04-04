<template>
  <div class="user-card">
    <p class="user-card-name">{{ user.name }}</p>
    <a class="user-card-link" :href="'mailto:' + user.email">{{
      user.email
    }}</a>
    <a class="user-card-link" :href="'telto:' + user.phone">{{ user.phone }}</a>
  </div>
</template>
<script>
export default {
  name: "UserCard",
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
  a {
    display: block;
  }
}
</style>

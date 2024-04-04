<template>
  <div class="filter">
    <div class="filter-input">
      <input type="text" v-model="text" />
    </div>
    <div class="filter-input">
      <select v-model="select">
        <option value="active">All</option>
        <option value="active">Active</option>
        <option value="blocked">Blocked</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "Filter",
  data() {
    return {
      text: "",
      select: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.filter {
  display: flex;
  align-items: center;
  gap: 16px 25px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
</style>

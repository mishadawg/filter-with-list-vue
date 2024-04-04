<template>
  <div class="filter">
    <div class="filter-input">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" v-model="title" />
    </div>
    <div class="filter-input">
      <label for="category">Category:</label>
      <select name="category" id="category" v-model="category">
        <option value="active">All</option>
        <option value="active">Sport</option>
        <option value="blocked">Movies</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "Filter",
  data() {
    return {
      title: "",
      category: null,
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
  margin: 16px 0px;
  &-input {
    // var css
    max-width: 416px;
    width: 100%;
    input,
    select {
      width: 100%;
      // var css
      min-height: 30px;
    }
  }
}
</style>

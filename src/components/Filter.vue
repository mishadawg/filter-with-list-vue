<template>
  <div class="filter">
    <div class="filter-input">
      <label for="title">Title: {{ filter.title }}</label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="filter.title"
        @change="handlerFilter"
      />
    </div>
    <div class="filter-input">
      <label for="category">Category: {{ filter.category }}</label>
      <select
        name="category"
        id="category"
        v-model="filter.category"
        @change="handlerFilter"
      >
        <option
          v-for="(categoryItem, index) in categories"
          :key="index"
          :value="categoryItem.value"
        >
          {{ categoryItem.name }}
        </option>
      </select>
    </div>
    <div class="filter-input">
      <label>Clear</label>
      <button @click="clearFilters">X</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Filter",
  data() {
    return {
      filter: {
        title: "",
        category: null,
      },
    };
  },
  methods: {
    clearFilters() {
      if (this.filter.title || this.filter.category) {
        this.filter.title = "";
        this.filter.category = null;
        this.handlerFilter();
      }
    },
    handlerFilter() {
      this.$store.commit("goFilter", this.filter);
    },
  },
  computed: {
    categories: function () {
      return [{ value: null, name: "All" }, ...this.$store.getters.categories];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/vars";

.filter {
  display: flex;
  align-items: center;
  gap: 16px 25px;
  flex-wrap: wrap;
  margin: 16px 0px;
  &-input {
    max-width: $stock-block-max-width;
    width: 100%;
    input,
    select {
      width: 100%;
      min-height: $stock-input-min-height;
    }
    button,
    label {
      display: block;
    }
    label {
      width: 100%;
      text-align: left;
    }
  }
}
</style>

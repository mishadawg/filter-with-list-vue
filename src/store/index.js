import { createStore } from "vuex";
import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

export default createStore({
  state() {
    return {
      _loaded: false,
      _data: null,
      _selected: null,
      _itemsToShow: 6,
    };
  },
  mutations: {
    getData(state) {
      axios.get(dataUrl).then((response) => {
        state._data = response.data;
        state._loaded = true;
      });
    },
    showMoreItems(state) {
      state._itemsToShow += 3;
      console.log(state._itemsToShow);
    },
  },
  getters: {
    loaded: (state) => state._loaded,
    data: (state) => state._data,
    selected: (state) => state._selected,
    itemsToShow: (state) => state._itemsToShow,
  },
});

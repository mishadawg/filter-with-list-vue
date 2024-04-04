import { createStore } from "vuex";
import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

export default createStore({
  state() {
    return {
      _loaded: false,
      _data: null,
      _selected: null,
    };
  },
  mutations: {
    getData(state) {
      axios.get(dataUrl).then((response) => {
        state._data = response.data;
        state._loaded = true;
      });
    },
  },
  getters: {
    loaded: (state) => state._loaded,
    data: (state) => state._data,
    selected: (state) => state._selected,
  },
});

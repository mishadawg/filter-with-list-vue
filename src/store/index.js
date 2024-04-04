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
      _categories: [
        { value: "sport", name: "Sport" },
        { value: "movies", name: "Movies" },
        { value: "games", name: "Games" },
      ],
    };
  },
  mutations: {
    mutateData(state, payload) {
      state._data = payload.map((item) => {
        item.category =
          state._categories[
            Math.floor(Math.random() * state._categories.length)
          ];
        return item;
      });
      state._loaded = true;
    },
    showMoreItems(state) {
      state._itemsToShow += 3;
    },
  },
  actions: {
    getDataFromServer(context) {
      axios.get(dataUrl).then((response) => {
        context.commit("mutateData", response.data);
      });
    },
  },
  getters: {
    loaded: (state) => state._loaded,
    data: (state) => state._data,
    categories: (state) => state._categories,
    itemsToShow: (state) => state._itemsToShow,
  },
});

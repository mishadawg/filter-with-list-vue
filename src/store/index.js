import { createStore } from "vuex";
import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

export default createStore({
  state() {
    return {
      _data: null,
      _itemsToShow: 6,
      _categories: [
        { value: "sport", name: "Sport" },
        { value: "movies", name: "Movies" },
        { value: "games", name: "Games" },
      ],
      _filter: null,
      _currentPageInfo: {
        currentPage: 1,
        pageStart: 0,
      },
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
    },
    showMoreItems(state) {
      state._itemsToShow += 3;
    },
    goFilter(state, payload) {
      state._filter = payload;
      state._currentPageInfo = {
        currentPage: 1,
        pageStart: 0,
      };
      state._itemsToShow = 6;
    },
    setPage(state, payload) {
      state._currentPageInfo = payload;
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
    data: (state) => state._data,
    categories: (state) => state._categories,
    itemsToShow: (state) => state._itemsToShow,
    filter: (state) => state._filter,
    currentPageInfo: (state) => state._currentPageInfo,
  },
});

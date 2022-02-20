import { createStore } from "vuex";
import layout from "./layout";

export default createStore({
  state: {
    catalog: [],
    cart: [],
    cover: []
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCart: (state) => [...state.cart],
    getCover: (state) => [...state.cover]
  },
  mutations: {
    setCatalog: (state, catalog) => {
      state.catalog = catalog;
    },
    setCart: (state, cart) => {
      state.cart = cart;
    },
    setCover: (state, cover) => {
      state.cover = cover;
    },
    addToCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id === id);
      state.cart.splice(idx, 1);
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch("/api/v1/catalog")
        .then((response) => response.json())
        .then((data) => {
          commit("setCatalog", data);
        });
    },
    loadCart({ commit }) {
      return fetch("/api/v1/cart")
        .then((response) => response.json())
        .then((data) => {
          commit("setCart", data);
        });
    },
    loadCover({ commit }) {
      return fetch("/api/v1/cover")
        .then((response) => response.json())
        .then((data) => {
          commit("setCover", data);
        });
    },
    addToCart({ commit }, product) {
      return fetch("/api/v1/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit("addToCart", product);
        });
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
        .then(() => {
          commit("removeFromCart", id);
        });
    }
  },
  modules: {
    layout
  }
});

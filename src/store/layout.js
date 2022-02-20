export default {
  state: {
    layout: "main-layout"
  },
  getters: {
    layout(state) {
      return state.layout;
    }
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    }
  }
};

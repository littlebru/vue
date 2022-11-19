import { createStore } from 'vuex'

export default createStore({
  /* eslint-disable */
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
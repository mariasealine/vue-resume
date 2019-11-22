import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLanguage: ['Eng', 'Sve']
  },
  mutations: {
    updateLanguage(state, payload) {
      state.currentLanguage = payload
    }
  },
  actions: {
    updateLanguage({commit}, payload) {
      commit('updateLanguage', payload)
    }
  }
});

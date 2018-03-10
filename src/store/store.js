import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as mutations from './mutations.js'

Vue.use(Vuex);

const myLocalStorage = {
  fetch() {
    const items = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        items.push(localStorage.key(i));
      }
    }
    return items;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: myLocalStorage.fetch()
  },
  getters: getters,
  mutations: mutations
});
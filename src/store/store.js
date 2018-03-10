import Vue from 'vue'
import Vuex from 'vuex'

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
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    removeOneItem(state, todoItem) { // todoItem { name: '', index: 0 }
      state.todoItems.splice(todoItem.index, 1);
      localStorage.removeItem(todoItem.name);
    },
    addOneItem(state, name) {
      state.todoItems.push(name);
      localStorage.setItem(name, name);
    },
    removeAllItem(state) {
      state.todoItems = [];
      localStorage.clear();
    }
  }
});
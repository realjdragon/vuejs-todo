const removeOneItem = (state, todoItem) => { // todoItem { name: '', index: 0 }
  state.todoItems.splice(todoItem.index, 1);
  localStorage.removeItem(todoItem.name);
};

const addOneItem = (state, name) => {
  state.todoItems.push(name);
  localStorage.setItem(name, name);
};

const removeAllItem = (state) => {
  state.todoItems = [];
  localStorage.clear();
};

export {removeOneItem, addOneItem, removeAllItem}
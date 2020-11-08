export default {
  state: {
    todos: [],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
      commit('del_todo', id);
    },
    updateTodo({ commit }, todo) {
      commit('update_todo', todo)
    }
  },
  mutations: {
    add_todo(state, todo) {
      todo !== '' ? state.todos.push(todo): null
    },
    del_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    update_todo(state, todo) {
      let i = state.todos.findIndex(el => el.id === todo.id)
      if (i !== -1) {
        state.todos[i] = todo
      }
    }
  },
};

export default {
  state: {
    todos: [
      {
        id: 1,
        name: 'One',
        done: false,
      },
      {
        id: 2,
        name: 'Second',
        done: false,
      },
      {
        id: 3,
        name: 'Three',
        done: false,
      },
    ],
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
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    del_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
  },
};

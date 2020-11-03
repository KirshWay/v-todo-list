<template>
  <div
    class="card"
    style="margin-bottom: 3%"
  >
    <div class="d-flex align-items-center">
      <input
        v-if="todo.done"
        type="checkbox"
        class="ml-3 checkbox"
        name="todo"
        checked
      >
      <input
        v-else
        type="checkbox"
        class="ml-3 checkbox"
        name="todo"
      >
      <h3
        v-if="!editing"
        class="ml-2 p-3"
      >
        {{ todo.text }}
      </h3>
      <input
        v-else
        :value="todoDescription"
        @change="todoChangeDescription"
        @keyup.enter="updateTodoElement(todo)"
        type="text"
        class="col form-control ml-2"
      >
    </div>
    <button
      class="remove"
      @click="deleteTodo(todo.id)"
    >
      Remove task
    </button>
    <button
      class="btn-warning"
      @click="updateTodoElement(todo)"
    >
      {{ editing ? 'Update todo' : 'Changed todo' }}
    </button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Todo",
  props: {
    todo: {}
  },
  data: () => {
    return {
      todoDescription: '',
      editing: false
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    todoChangeDescription(e) {
      this.todoDescription = e.target.value
    },
    updateTodoElement(todo) {
      this.editing = this.editing !== true
      if (this.editing) {
        this.todoDescription = todo.text
        this.updateTodo(todo)
      }
      else {
        todo.text = this.todoDescription
      }
    }
  },
}
</script>

<style scoped>
.checkbox {
  transform: scale(1.6);
  opacity: 0.9;
}
label {
  margin: 0;
  font-size: 23px;
}

.remove {
  color: #fff;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: #32c950;
  font-size: 30px;
}

.remove:hover {
  background: #2aa056;
}

.remove:active {
  background: #000;
}

.btn-warning {
  color: #000;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 30px;
}

.btn-warning:hover {
  background-color: #ba8d07;
}

.btn-warning:active {
  background-color: #000;
  color: #fff;
}
</style>
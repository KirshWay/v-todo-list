<template>
  <section class="d-flex flex-column">
    <div
      v-for="todo in todos"
      id="todo"
      :key="todo.id"
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
        />
        <input v-else type="checkbox" class="ml-3 checkbox" name="todo" />
        <label for="name" class="ml-2 p-3">
          {{ todo.name }}
        </label>
      </div>
      <button class="remove" @click="deleteTodo(todo.id)">
        Remove task
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ToDoS',
  props: ['todos'],
  methods: {
    ...mapActions(['deleteTodo']),
  },
};
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
</style>

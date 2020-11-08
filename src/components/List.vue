<template>
  <section
    class="todo-collection d-flex flex-column"
  >
    <div
      v-for="todo in allTodos"
      :key="todo.id"
    >
      <Todo
        :todo="todo"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Todo from "@/components/Todo";
export default {
  name: 'List',
  components: {
    Todo,
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
};
</script>

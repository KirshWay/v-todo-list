<template>
  <section class="d-flex flex-column">
    <div
      v-for="todo in allTodos"
      :key="todo.id"
    >
      <Todo :todo="todo" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Todo from "@/components/Todo";
export default {
  name: 'List',
  components: {
    Todo
  },
  data: () => {
    return {
      editing: false
    }
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
};
</script>

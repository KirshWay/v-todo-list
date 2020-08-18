<template>
  <div id="app">
    <Header @createToDo='createToDo'/>
    <div class="container mt-4">
      <ToDos :todos="todos" @removeToDo='removeToDo'/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ToDos from "./components/ToDos";

export default {
  name: 'App',
  components: {
    Header,
    ToDos
  },
  data: () => {
      return {
        todos : []
      }
  },
  methods: {
    createToDo: function(todo) {
      let todoOb = {
        id: Math.floor(Math.random() * 100000),
        name: todo,
        done:false
      }

      this.todos.push(todoOb)
    },
    removeToDo: function (id) {
      this.todos = this.todos.filter(todo => todo.id != id)
    }
  }
}
</script>

<style>
  body {
    background: #9da096;
    font-family: 'Muli', sans-serif;
  }
</style>

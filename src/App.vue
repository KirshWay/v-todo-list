<template>
  <div id="app">
    <!-- @createToDo="createToDo"  -->
    <Header />
    <div class="container mt-4">
      <!-- @removeToDo="removeToDo" -->
      <ToDos :todos="allTodos" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import ToDos from './components/ToDos';

export default {
  name: 'App',
  components: {
    Header,
    ToDos,
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
};
</script>

<style>
body {
  background: #9da096;
  font-family: 'Muli', sans-serif;
}
</style>

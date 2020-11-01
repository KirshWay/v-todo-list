<template>
  <div id="app">
    <Header />
    <div class="container mt-4">
      <ToDo :todos="allTodos" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import ToDo from './components/ToDo';

export default {
  name: 'App',
  components: {
    Header,
    ToDo,
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

<template>
  <div id="app">
    <Header />
    <div class="container mt-4">
      <List />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List';

export default {
  name: 'App',
  components: {
    Header,
    List,
  },
};
</script>

<style>
body {
  background: #9da096;
  font-family: 'Muli', sans-serif;
}
</style>

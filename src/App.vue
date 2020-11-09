<template>
  <div id="app">
    <Header />
    <div class="container mt-4">
      <Greeting v-if="allTodos.length === 0" />
      <List :all-todos="allTodos" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List';
import Greeting from "@/components/Greeting";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    Header,
    List,
    Greeting
  },
  computed: {
    ...mapGetters(['allTodos']),
  }
};
</script>

<style>
body {
  background: #9da096;
  font-family: 'Muli', sans-serif;
}

.message_greeting {
  animation: blink 2s infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

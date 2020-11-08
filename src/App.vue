<template>
  <div id="app">
    <Header @toggleWelcome="toggleWelcome" />
    <div class="container mt-4">
      <Greeting v-if="togglerGreeting" />
      <List />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List';
import Greeting from "@/components/Greeting";
export default {
  name: 'App',
  components: {
    Header,
    List,
    Greeting
  },
  data: () => ({
    togglerGreeting: true
  }),
  methods: {
    toggleWelcome(arg) {
      this.togglerGreeting = arg
    }
  },
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

<template>
  <header>
    <input
      v-model="inputValue"
      type="text"
      placeholder="Tap new task..."
      @keyup.enter="addTodoItem"
    >
    <button
      class="submit"
      @click="addTodoItem"
    >
      +
    </button>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  data: () => ({
      inputValue: '',
  }),
  methods: {
    ...mapActions(['addTodo']),
    addTodoItem() {
      if (this.inputValue !== '') {
        this.addTodo({
          id: Math.floor(Math.random() * 100000),
          text: this.inputValue,
          done: false,
        });
      }
      this.inputValue = '';
      this.$emit('toggleWelcome', false)
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  box-shadow: 0 3px 2px #969592;
}

input {
  flex: 1;
  box-sizing: border-box;
  height: 50px;
  text-indent: 15px;
  font-size: 20px;
}

.submit {
  height: 50px;
  width: 50px;
  color: #fff;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: #32c950;
  font-size: 30px;
}

.submit:hover {
  background: #2aa056;
}

.submit:active {
  background: #000;
}
</style>

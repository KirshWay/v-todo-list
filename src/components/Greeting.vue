<template>
  <h1 class="text-light text-center display-4">
    Create Your first Task...
  </h1>
</template>

<script>
export default {
name: "Greeting"
}
</script>

<style scoped>
h1 {
  animation: blink 2s infinite;
}

@keyframes blink {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
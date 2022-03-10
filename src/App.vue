<script setup>
// import HelloWorld from '@components/HelloWorld.vue'
import TodoList from '@components/demo/todoList.vue';

// console.log(import.meta.env)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <h1>Hello Vue 3 + Vite todoList</h1>
  <TodoList />

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

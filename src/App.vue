<script setup>
import HelloWorld from '@components/HelloWorld.vue'
import TodoList from '@/views/demo/todoList.vue';

// console.log(import.meta.env)
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <div class="routes">
      <router-link to="/">homePage</router-link>
      <router-link to="/demo/todo-list">todoList</router-link>
    </div>
    <router-view />

    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .routes {
    >a {
      margin-right: 20px;
    }
  }
}
</style>

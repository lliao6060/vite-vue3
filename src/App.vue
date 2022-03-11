<script setup>
  import HelloWorld from '@components/HelloWorld.vue'
  import TodoList from '@/views/demo/todoList.vue';

</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <div class="routes">
      <router-link to="/">index</router-link>
      <router-link to="/demo/todo-list">todoList</router-link>
      <router-link to="/demo/pinia">pinia</router-link>
    </div>
    
    <HelloWorld msg="Hello Vue 3 + Vite + vueRouter + pinia" />
    
    <router-view />
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

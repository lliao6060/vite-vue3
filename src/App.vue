<script setup>
import Breadcrumbs from '@components/Breadcrumbs.vue';
</script>

<template>
  <div id="app">
    <Breadcrumbs />
    <img alt="Vue logo" src="@/assets/logo.png" />

    <div class="routes">
      <router-link to="/index">index</router-link>
      <router-link to="/demo/todo-list">todoList</router-link>
      <router-link to="/demo/pinia">pinia</router-link>
    </div>
    
    <router-view />
  </div>

</template>

<style lang="scss">
@import 'scss-reset/_reset.scss';
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

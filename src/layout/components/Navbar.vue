<script setup>
</script>

<template>
  <nav class="navbar">
    <div class="routes">
      <router-link :to="{ name: 'Index' }">index</router-link>
      <router-link :to="{ name: 'TodoList' }">todoList</router-link>
      <router-link :to="{ name: 'Pinia' }">pinia</router-link>
      <router-link :to="{ name: 'NestedRoutesParent' }">nested routes</router-link>
      <router-link :to="{ name: 'News' }">news</router-link>
      <router-link :to="{ name: 'Components' }">Components</router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    .routes {
      padding: 10px 0;
      @include flex;
      >a {
        padding: 10px;
      }
    }
  }
</style>
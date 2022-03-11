<script setup>
</script>

<template>
  <p>this is parent route parent</p>
  <a 
    @click="$router.push({
      name: 'NestedRoutesChild'
    })"
    class="go-child-btn"
  >Go子路由</a>
  <router-view />
</template>

<style lang="scss" scoped>
  .go-child-btn {
    width: auto;
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid;
    cursor: pointer;
  }
</style>
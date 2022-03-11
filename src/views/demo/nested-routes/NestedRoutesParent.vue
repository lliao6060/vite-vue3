<script setup>
</script>

<template>
  <p>this is parent route parent</p>
  <a @click="$router.push({
    name: 'NestedRoutesChild'
  })">子路由</a>
  <router-view />
</template>

<style>

</style>
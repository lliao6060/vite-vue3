<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <img src="@/assets/logo.png">
  <img src="@images/maju.jpg">
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}
</style>

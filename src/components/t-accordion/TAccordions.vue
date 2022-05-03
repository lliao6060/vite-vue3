<template>
  <div class="t-accordions">
    <slot :activeIdx="activeIdx" :toggle="onToggleTab"></slot>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  const animating = ref(false)

  const activeIdx = ref(0)

  function onToggleTab(index) {
    if (animating.value) return
    animating.value = true
    if (activeIdx.value === index) {
      activeIdx.value = -1
    } else {
      activeIdx.value = index
    }
    setTimeout(() => {
      animating.value = false
    }, 500)
  }
</script>

<style lang="scss">
  .t-accordions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
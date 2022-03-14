<script setup>
import { useNewsStore } from '@/store/news.js'
import { mapState } from 'pinia';
import { computed } from 'vue';


const newsStore = useNewsStore()


computed(() => {
  return {
    ...mapState(newsStore, ['nowNews']),
  }
})
</script>

<template>
  <div>{{ newsStore.nowNews }}</div>
</template>

<style>

</style>
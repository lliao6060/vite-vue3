<script setup>
import { useNewsStore } from '@/store/module/News.js'
import { mapState } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const newsStore = useNewsStore()
const router = useRouter()

computed(() => {
  return {
    ...mapState(newsStore, ['nowNews']),
  }
})

const returnToNewsList = () => {
  if(!Object.keys(newsStore.nowNews).length) {
    router.push({
      name: 'News'
    })
  } else {
    return
  }
}

returnToNewsList()
</script>

<template>
  <div 
    @click="$router.back()"
    class="back-btn"
  >回上頁</div>
  <div>{{ newsStore.nowNews }}</div>
</template>

<style lang="scss">
  .back-btn {
    display: inline-block;
    border: 1px solid;
    margin: 10px 0;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>
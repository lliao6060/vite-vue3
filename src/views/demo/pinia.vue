<script setup>
  import { useDemoStore } from '@/store/main.js'
  import { storeToRefs, mapState } from 'pinia'
  import { computed } from 'vue';
  
  const demoStore = useDemoStore()
  //可以這樣拿(解構)
  // const { count, quantity, countTotal } = storeToRefs(demoStore)


  //也可以像是vuex一樣的拿法
  computed(() => {
    return {
      ...mapState(useDemoStore, ['count', 'quantity', 'countTotal']),
    }
  })

  //修改state中的數據
  const demoStoreChange = () => {
    demoStore.$patch(state => {
      state.count++
      state.quantity++
    })

    //邏輯較多時 可以寫在actions裡 直接調用
    // demoStore.countChange()
  }

  // console.log(import.meta.env)
</script>


<template>
  <p>count: {{ demoStore.count }}</p>
  <p>quantity: {{ demoStore.quantity }}</p>
  <p>count total: {{ demoStore.countTotal }}</p>

  <button @click="demoStoreChange">修改state數據</button>
</template>

<style>

</style>
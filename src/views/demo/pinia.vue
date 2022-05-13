<script setup name="Pinia">
  import { useGlobalStore } from '@/store/main.js'
  import { storeToRefs, mapState } from 'pinia'
  import { computed } from 'vue';
  
  const GlobalStore = useGlobalStore()
  //可以這樣拿(解構)
  // const { count, quantity, countTotal } = storeToRefs(GlobalStore)


  //也可以像是vuex一樣的拿法
  computed(() => {
    return {
      ...mapState(useGlobalStore, ['count', 'quantity', 'countTotal']),
    }
  })

  //修改state中的數據
  const GlobalStoreChange = () => {
    GlobalStore.$patch(state => {
      state.count++
      state.quantity++
    })

    //邏輯較多時 可以寫在actions裡 直接調用
    // GlobalStore.countChange()
  }

  // console.log(import.meta.env)
</script>


<template>
  <p>count: {{ GlobalStore.count }}</p>
  <p>quantity: {{ GlobalStore.quantity }}</p>
  <p>count total: {{ GlobalStore.countTotal }}</p>

  <button @click="GlobalStoreChange">修改state數據</button>
</template>

<style>

</style>
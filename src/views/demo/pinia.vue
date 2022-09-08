<script setup name="Pinia">
  import { useAppStore } from '@/store/app.js'

  const appStore = useAppStore()
  //可以這樣拿(解構)
  // const { count, quantity, countTotal } = storeToRefs(appStore)


  //也可以像是vuex一樣的拿法
  computed(() => {
    return {
      ...mapState(useAppStore, ['count', 'quantity', 'countTotal']),
    }
  })

  //修改state中的數據
  const appStoreChange = () => {
    appStore.$patch(state => {
      state.count++
      state.quantity++
    })

    //邏輯較多時 可以寫在actions裡 直接調用
    // appStore.countChange()
  }

  // console.log(import.meta.env)
</script>


<template>
  <div>
    <p>count: {{ appStore.count }}</p>
    <p>quantity: {{ appStore.quantity }}</p>
    <p>count total: {{ appStore.countTotal }}</p>

    <button @click="appStoreChange">修改state數據</button>
  </div>
</template>

<style>

</style>
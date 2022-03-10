<script setup>
import { useIndexStore } from '@/store'
import { storeToRefs, mapState } from 'pinia'
import { computed } from 'vue-demi';


import HelloWorld from '@components/HelloWorld.vue'
import TodoList from '@/views/demo/todoList.vue';

const indexStore = useIndexStore()
//可以這樣拿(解構)
// const { count, quantity, countTotal } = storeToRefs(indexStore)


//也可以像是vuex一樣的拿法
computed(() => {
  return {
    ...mapState(useIndexStore, ['count', 'quantity', 'countTotal']),
  }
})

//修改state中的數據
const indexStoreChange = () => {
  indexStore.$patch(state => {
    state.count++
    state.quantity++
  })

  //邏輯較多時 可以寫在actions裡 直接調用
  // indexStore.countChange()
}

// console.log(import.meta.env)
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <div class="routes">
      <router-link to="/">homePage</router-link>
      <router-link to="/demo/todo-list">todoList</router-link>
    </div>
    <router-view />

    <HelloWorld msg="Hello Vue 3 + Vite + vueRouter + pinia" />
    <p>count: {{ indexStore.count }}</p>
    <p>quantity: {{ indexStore.quantity }}</p>
    <p>count total: {{ indexStore.countTotal }}</p>

    <button @click="indexStoreChange">修改state數據</button>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .routes {
    >a {
      margin-right: 20px;
    }
  }
}
</style>

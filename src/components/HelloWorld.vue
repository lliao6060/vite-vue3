<script setup>
import { ref, toRef, onUpdated, reactive } from 'vue'

const add = () => {
  count.value ++
}

const userInfo = reactive({
  name: 'maju',
  age: 5
})

const userName = toRef(userInfo, 'name') //將響應物件裡的屬性抽離出來 使用

onUpdated(() => {
  console.log('toRef:', userName.value)
  console.log('元物件', userInfo.name)
})

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="foo"></div>
  <button type="button" @click="add">count is: {{ count }}</button>
  <p>{{ userName }}</p>
  <input v-model="userName"/>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}
.foo {}
</style>

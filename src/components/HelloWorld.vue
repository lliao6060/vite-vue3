<script setup>
import { ref } from 'vue'
import axios from 'axios'

defineProps({
  msg: String
})

let data = ref([])

const getData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  data.value = res.data
}
getData()

</script>

<template>
  <h1>{{ msg }}</h1>
  <br>
  <div>
    <h3>axios get api test</h3>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}
</style>

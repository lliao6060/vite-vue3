<script setup name="HelloWorld">
import { ref } from 'vue'
import axios from 'axios'

defineProps({
  msg: String
})

let data = ref([])
let title = ref('')

const getData = async () => {
  title.value = 'loading...'
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  data.value = res.data
  title.value = 'axios test';
}
getData()

</script>

<template>
  <h1>{{ msg }}</h1>
  <br>
  <div>
    <h3>{{ title }}</h3>
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

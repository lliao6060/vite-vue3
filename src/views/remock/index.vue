<script setup name="Remock">
import mockApi from '@/api/remock'

const apiData = ref([])

async function getApi() {
  const res = await mockApi.getTestData()
  const { data } = res
  if(data) {
    apiData.value = data
  }
}

onMounted(async () => {
  await getApi()
})
</script>

<template>
  <div>
    <p>{{ apiData }}</p>
  </div>
</template>

<style scoped>

</style>
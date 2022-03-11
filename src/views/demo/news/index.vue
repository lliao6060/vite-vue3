<script setup>
import { ref, onMounted } from "vue"

let newsIdList = ref([])
let newsSummary = ref([])
let newsDetail = ref({})


//概略預覽
const getSummary = async (id) => {
  const title = await axios.get(`/src/views/demo/news/all-news/news-${id}/title.txt`)
  newsSummary.value.push({
    time: id,
    title: title.data,
  })
}


//點進去後
const getNewsDetail = async (id) => {
  const title = await axios.get(`/src/views/demo/news/all-news/news-${id}/title.txt`)
  const content = await axios.get(`/src/views/demo/news/all-news/news-${id}/content.txt`)
  newsDetail.value.push({
    time: id,
    title: title.data,
    content: content.data
  })
}

const getNewsList = async () => {
  const res = await axios.get('/src/views/demo/news/news_open.txt')
  newsIdList = res.data

  for(let i = 0; i < newsIdList.length; i++) {
    await getSummary(newsIdList[i]);
  }
}
    //  vm.$router.push({
    //     name: 'Products',
    //     query: {
    //       category_id: categoryId,
    //     },
    //   });

onMounted(() => {
  getNewsList()
})
</script>

<template>
  <div>this is news</div>
  <p>{{ newsSummary }}</p>
</template>

<style>

</style>
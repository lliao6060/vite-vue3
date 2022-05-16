<script setup name="AllNews">
import { useRoute, useRouter } from 'vue-router';
import { useNewsStore } from '@/store/module/News.js'

const newsStore = useNewsStore()
const { updateNews } = newsStore

//router
const router = useRouter()
const route = useRoute()

let newsIdList = ref([])
let newsSummaryList = ref([])
let newsDetail = ref({})


//取得open list
const getNewsList = async () => {
  const res = await axios.get('/src/views/demo/news/news_open.txt')
  newsIdList = res.data

  for(let i = 0; i < newsIdList.length; i++) {
    await getSummary(newsIdList[i]);
  }
}

//概略預覽
const getSummary = async (id) => {
  const title = await axios.get(`/src/views/demo/news/all-news/news-${id}/title.txt`)
  newsSummaryList.value.push({
    time: id,
    title: title.data,
  })
}


//點進去後
const getNewsDetail = async (id) => {
  const title = await axios.get(`/src/views/demo/news/all-news/news-${id}/title.txt`)
  const content = await axios.get(`/src/views/demo/news/all-news/news-${id}/content.txt`)
  newsDetail.value = {
    time: id,
    title: title.data,
    content: content.data
  }

  updateNews(newsDetail.value)

  router.push({
    name: 'newsDetail',
    query: {
      postId: id
    },
  });
}

onMounted(() => {
  getNewsList()
})
</script>

<template>
  <div class="news"  v-show="$route.meta.showParent">
    <div class="news__panel">
      <ul class="news-list">
        <li 
          v-for="(news, i) in newsSummaryList"
          :key="`news.time-${i}`"
          @click="getNewsDetail(news.time)"
        >
          <div>
            {{ $common.ChangeDateFromYYYYMMMMDD(news.time) }} {{ news.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>

  <router-view />
</template>

<style lang="scss">
  .news {
    margin: 10px auto;
    &__panel {
      border: 1px solid;
      .news-list {
        >li {
          padding: 10px;
          cursor: pointer;
          &:not(:last-child) {
            border-bottom: 1px solid;
          }
        }
      }
    }
  }

</style>
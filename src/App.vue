<script setup name="App">
import { useRoute, useRouter } from 'vue-router';
import layoutVue from '@/layout/layout.vue';

const router = useRouter()
const route = useRoute()

// const initPage = () => {
//   router.push({
//     name: 'Index'
//   })
// }

const showParams = () => {
  console.log(route.path)
}


watch(route, () => {
  showParams()
})


// initPage()



</script>

<template>
  <div id="app" v-cloak>
    <navbar />
    <layout-vue />
    <Footer />
    <div 
      id="fix-landscape-window" 
      class="fullcover"
      v-if="showFixWindow"
    >
      <div class="fix-landscape-content-wrapper align-center">
        <p class="fix-landscape-content align-center fix-landscape-title">
          為維持最佳體驗<br>
          請將您的畫面轉為直向
        </p>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@import 'scss-reset/_reset.scss';
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  nav,
  footer {
    @include flex;
    height: $navHeight;
    background: lightblue;
  }

  footer {
    flex-shrink: 0;
  }
}
</style>

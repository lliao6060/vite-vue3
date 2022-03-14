<script setup>
import Breadcrumbs from '@components/Breadcrumbs.vue';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const initPage = () => {
  router.push({
    name: 'Index'
  })
}

const showParams = () => {
  console.log(route.path)
}


watch(route, () => {
  showParams()
})


initPage()



</script>

<template>
  <div id="app">
    <Breadcrumbs />
    <header>
      <div class="routes">
        <router-link to="/index">index</router-link>
        <router-link to="/demo/todo-list">todoList</router-link>
        <router-link to="/demo/pinia">pinia</router-link>
        <router-link to="/demo/nested-routes/parent">nested routes</router-link>
        <router-link to="/demo/news">news</router-link>
      </div>
    </header>
    
    <router-view />
  </div>

</template>

<style lang="scss">
@import 'scss-reset/_reset.scss';
#app {
  width: 100%;
  padding: 0 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  header {
    width: 100%;
    padding: 10px;
    border: 1px solid;
    @include flex;
    .routes {
      >a {
        margin-right: 20px;
        text-decoration: none;
        color: #222;
      }
    }
  }
}
</style>

<script setup name="Breadcrumbs">
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const breadcrumbList = ref([])
  const isHome = () => {
    return route.name === 'Index'
  }
  const getBreadcrumbs = () => {
    let matched = route.matched
    if (!isHome(matched[0])) {
      matched = [
        { path: '/', meta: { title: '首頁' } }
      ].concat(matched)
    }
    breadcrumbList.value = matched
  }

  watch(route, () => {
    getBreadcrumbs()
  })

  onMounted(() => {
    getBreadcrumbs()
  })

</script>

<template>
  <div class="breadcrumb">
    <ol class="breadcrumb__items">
      <li 
        v-for="(item, i) in breadcrumbList" 
        :key="i" 
      >
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
  .breadcrumb {
    width: 100%;
    margin-bottom: 10px;
    @include flex($justify-content: flex-start);
    &__items {
      @include flex;
      >li {
        color: #188f7e;
        >a {
          text-decoration: none;
          color: inherit;
        }
        &:not(:first-child) {
          padding-left: .5rem;
          &::before {
            content: '/';
            display: inline-block;
            padding-right: .5rem;
          }
        }
        &:last-child {
          font-weight: bold;
          color: #222;
        }
      }
    }
  }

</style>
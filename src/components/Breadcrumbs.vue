<script setup>
  import { onMounted, reactive, watch } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const state = reactive({
    list: []
  })

  onMounted(() => {
    let matched = route.matched
    state.list = matched
  })

  watch(() => route.matched, (nV) => {
    let matched = nV
    state.list = matched.map((crumb) => {
      const { name, path, meta } = crumb
      return {
        name,
        path,
        title: meta.title
      }
    })
  })

</script>

<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__items">
      <li         
        v-for="(crumb, i) in state.list" 
        :key="`crumb-${i}`"
        class="bread-item"
      >
        <template v-if="crumb.path === '/index'">
          <a>
            <router-link to="/index">首頁</router-link>
          </a>
        </template>
        <template v-else>
          <a class="bread-array">
            <router-link to="/index">首頁</router-link>
            <router-link :to="{ path: crumb.path }">&nbsp;{{ crumb.title }}</router-link>
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .breadcrumb {
    &__items {
      @include flex;
      >li {
        cursor: pointer;
        a {
          text-decoration: none;
          color: #222;
          font-weight: bold;
          &.bread-array {
            margin-right: 5px;
            >a {
              color: #188f7e;
              font-weight: 500;
              &:last-child {
                font-weight: bold;
                color: #222;
                &::before {
                  font-weight: 300;
                }
              }
              &:not(:first-child) {
                margin-left: 5px;
                &::before {
                  content: '>';
                }
              }
              &:not(:last-child) {
                &:hover {
                  opacity: 0.7;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
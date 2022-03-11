<script setup>
  import { computed, onMounted, reactive, watch } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const state = reactive({
    list: []
  })


  onMounted(() => {
    let matched = route.matched
    state.list = matched
  })

  watch(() => route.matched, (nV, oV) => {
    let matched = nV
    state.list = matched
  })
</script>

<template>
  <div>
    <ul>
      <li>
        <a 
          v-for="(item, i) in state.list" 
          :key="`item-${i}`"
        >
          <router-link :to="{ path: item.path }">
            <template v-if="item.path === '/index'">
              {{ item.meta.title }}
            </template>
            <template v-else>
              首頁 > {{ item.meta.title }}
            </template>
          </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
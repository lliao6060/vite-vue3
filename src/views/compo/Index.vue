<script setup>
  import { useGlobalStore } from '@/store/main.js'
  import { storeToRefs } from 'pinia'
  const globalStore = useGlobalStore()
  const { stopCount } = storeToRefs(globalStore)
</script>

<template>
  <div class="row compo-row">
    <div class="col">
      <h3>手風琴</h3>
      <t-accordion-example />
    </div>
    <div class="col">
      <h3>倒數計時</h3>
      <h4>計時結束了嗎 {{ stopCount }}</h4>
      距離跨年還有<count-down />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .compo-row {
    .col {
      margin: 10px auto;
      padding: 10px;
      border: 1px solid;
      &:not(:last-child) {
        border-right: none;
      }
    }
  }
</style>
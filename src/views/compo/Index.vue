<script setup>
  import { useGlobalStore } from '@/store/main.js'
  import { storeToRefs } from 'pinia'
  import { getImageUrl } from  '@/utils'
  const globalStore = useGlobalStore()
  const { stopCount } = storeToRefs(globalStore)
</script>

<template>
  <div class="row compo-row">
    <div class="col-6">
      <h3 class="rwd-sub-title">手風琴</h3>
      <t-accordion-example />
    </div>
    <div class="col-6">
      <h3 class="rwd-sub-title">倒數計時</h3>
      <h4>計時結束了嗎 {{ stopCount }}</h4>
      距離跨年還有<count-down />
    </div>
    <div class="col-6">
      <h3 class="rwd-sub-title">vue3-lazyload</h3>
      <img v-lazy="getImageUrl('maju.jpg')" />
      <!-- <img v-lazy="{
        src: mobileBannerlazyOptions.src, 
        lifecycle: mobileBannerlazyOptions.lifecycle,
        loading: mobileBannerlazyOptions.loading
      }">  -->
    </div>
    <div class="col-6">compo</div>
  </div>
</template>

<style lang="scss" scoped>
  .compo-row {
    >div {
      margin: 10px auto;
      padding: 10px;
      border: 1px solid;
      &:not(:last-child) {
        border-right: none;
      }
    }
  }
</style>
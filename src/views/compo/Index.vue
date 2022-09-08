<script setup name="Compo">
  import { useAppStore } from '@/store/app.js'
  import { storeToRefs } from 'pinia'
  import { getImageUrl } from  '@/utils'

  const appStore = useAppStore()
  const { stopCount } = storeToRefs(appStore)

  const longContentModalRef = ref(null)
  const lightboxModalRef = ref(null)

  function openLightbox(imgUrl) {
    if(imgUrl) {
      lightboxModalRef.value?.toggleModal(true, {
        imgUrl: imgUrl
      })
    }
  }
</script>

<template>
  <div class="d-grid compo-row">
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">手風琴</h3>
      <t-accordion-example />
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">倒數計時</h3>
      <h4>計時結束了嗎 {{ stopCount }}</h4>
      距離跨年還有<count-down />
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">vue3-lazyload</h3>
      <img v-lazy="getImageUrl('maju/maju.jpg')" />
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">swiper</h3>
      <Banner @on-image-click="openLightbox"/>
    </div>
    <div class="w-100 h-100">
      <button @click="longContentModalRef?.toggleModal(true)">點我開啟長內容彈窗</button>
    </div>
  </div>

  <BasicModal
    ref="longContentModalRef"
    :modal-type="'longContent'"
  />

  <BasicModal
    ref="lightboxModalRef"
    :modal-type="'lightbox'"
  />

</template>

<style lang="scss" scoped>
  .compo-row {
    gap: 10px 10px;
    grid-template-columns: repeat(2, 1fr);
    >div {
      min-height: 500px;
      margin: 10px auto;
      padding: 10px;
      border: 1px solid;
      overflow: hidden;
    }
    @include RWD($sm-md) {
      grid-template-columns: repeat(1, 1fr);
    }
  }


:deep(.modal__inner) {
  top: 60%;
  .ratio  {
    height: 100%;
  }
  @include min-width-RWD($xxl) {
    @include safe-modal($base: 63vmin);
    width: 68.605333vmin !important;
    max-height: 65vh;
  }

  @include RWD-min-with-max-width(1281, 1440) {
    width: 85.605333vmin !important;
  }

  @include RWD-min-with-max-width(1025, 1280) {
    width: 73.605333vmin !important;
    height: 65vmin;
  }
  @include RWD($lg) {
    top: 50%;
    @include safe-modal($base: 75vmin);
    max-width: 92vw;
    max-height: 40vh;
  }

  @include RWD($md-lg) {
    max-height: 50vh;
  }

  @include RWD($sm-md) {
    @include safe-modal($base: 95vmin);
    height: 130.08vmin !important;
  }

  @include RWD($smallest) {
    height: 150.08vmin !important;
  }
}
</style>
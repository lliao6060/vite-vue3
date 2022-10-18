<script setup name="Compo">
  import { useAppStore } from '@/store/app.js'
  import { getImageUrl } from  '@/utils'
  import Export from "@/plugins/export-excel";


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

  function onExcelExport() {
    const exportData = [
      {
        id: 1,
        name: '麻糬',
        age: 10
      },
      {
        id: 2,
        name: '羊羊',
        age: 8
      },
    ]
    let fields = {
      id: 'ID',
      name: '姓名',
      age: '年齡',
    };
    Export(exportData, fields, "測試導出");
}
</script>

<template>
  <div class="d-grid compo-row grid-cols-sm-1 grid-cols-md-2">
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">手風琴</h3>
      <div class="compo-item w-100 h-100">
        <t-accordion-example />
      </div>
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">倒數計時</h3>
      <div class="compo-item w-100 h-100">
        <h4>計時結束了嗎 {{ stopCount }}</h4>
        <span>距離跨年還有</span>
        <count-down />
      </div>
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">vue3-lazyload</h3>
      <div class="compo-item w-100 h-100">
        <img v-lazy="getImageUrl('maju/maju.jpg')" class="d-block w-100 h-100" />
      </div>
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">swiper with lightbox</h3>
      <div class="compo-item w-100 h-100">
        <Banner @on-image-click="openLightbox"/>
      </div>
    </div>
    <div
      class="w-100 h-100"
      @click="longContentModalRef?.toggleModal(true)"
    >
      <div class="compo-item w-100 h-100">
        <p class="align-center rwd-sub-title">點空白區域開啟長內容彈窗</p>
      </div>
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">一鍵導出excel</h3>
      <div class="compo-item w-100 h-100">
        <a
          href="#"
          @click.prevent="onExcelExport"
        >點我導出</a>
      </div>
    </div>
    <div class="w-100 h-100">
      <h3 class="rwd-sub-title">Icons</h3>
      <div class="compo-item w-100 h-100">
        <Icon name="ic:round-star-rate" size="30" />
        <Icon name="ri:moon-clear-line" size="30" />
        <Icon name="noto-v1:cat-with-wry-smile" size="30" />
        <Icon name="vscode-icons:file-type-vue" size="30" />
      </div>
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
    gap: 15px;
    // grid-template-columns: repeat(2, 1fr);
    >div {
      position: relative;
      min-height: 500px;
      margin: 10px auto;
      padding: 10px 0;
      border: 1px solid;
      overflow: hidden;
      >h3 {
        margin-bottom: 15px;
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid;
      }
      .compo-item {
        padding: 5px 10px;
        .t-accordions {
          max-width: 100% !important;
        }
      }
    }
  }
</style>
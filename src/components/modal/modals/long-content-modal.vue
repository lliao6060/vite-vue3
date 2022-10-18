<script setup name='LongContentModal'>
</script>

<template >
  <div class="long-modal-content">
    <div class="d-grid grid-rows-2 h-100">
      <div class="long-modal-header rows-parent">
        <div class="text-center header--title">
          <h2>
            標題
            <br>
            <span class="header-sub-title">副標題</span>
          </h2>
        </div>
        <div class="long-modal-depiction">
          敘述，到底是一種怎麽樣的存在。敘述的意義其實就隱藏在我們的生活中，所以說，經過上述討論，所謂敘述，關鍵是敘述需要如何寫。敘述因何而發生？其實敘述是非常值得我們深思的。
        </div>
      </div>
      <div class="long-modal-main-content rows-parent">
        <div>
          總結的來說，其實123是非常值得我們深思的。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。123因何而發生？你真的了解123嗎？巴爾扎克有講過一句名言，一個能思想的人，才真是一個力量無邊的人。這不禁令我深思。
        </div>
      </div>
      <div class="long-modal-footer rows-parent">
        <div class="footer">footer</div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.long-modal-content {
  padding: 0 15px;
  .rows-parent {
    >div {
      width: 100%;
      min-height: 40px;
      padding: 10px;
      color: gray;
      font-weight: bold;
      text-align: justify;
      line-height: 1.5;
      @include flex;
      &:not(:last-child) {
        border-bottom: 1px solid;
      }
      @include RWD($sm-md) {
        padding: 5px;
      }
    }
    &:not(:first-child) {
      border-top: 1px solid;
    }
    &.long-modal-header {
      .header--title {
        font-weight: bold;
        color: $dark;
        border-bottom: 1px solid;
        @include flex;
      }
    }
  }
}
</style>
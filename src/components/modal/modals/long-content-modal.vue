<script setup name='LongContentModal'>
</script>

<template >
  <div class="long-modal-content">
    <div class="d-grid grid-rows-3 h-100">
      <div class="d-grid h-100 header rows-parent">
        <div class="text-center header--title">
          <h2>
            標題
            <br>
            <span>副標題</span>
          </h2>
        </div>
        <div>這是一些敘述</div>
      </div>
      <div class="d-grid rows-parent">
        <div>內文1</div>
      </div>
      <div class="d-grid grid-rows-2 rows-parent">
        <div>
          總結的來說，其實123是非常值得我們深思的。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。123因何而發生？你真的了解123嗎？巴爾扎克有講過一句名言，一個能思想的人，才真是一個力量無邊的人。這不禁令我深思。我們都知道，只要有意義，那麽就必須慎重考慮。
        </div>
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
      min-height: 50px;
      font-size: clamp(18px, 3vw, 20px);
      line-height: 1.5;
      color: gray;
      font-weight: bold;
      @include flex;
      @include RWD($mini) {
        font-size: clamp(16px, 3vw, 18px);
      }
      // &:not(:last-child) {
      //   border-bottom: 1px solid;
      // }
    }
    &:not(:first-child) {
      border-top: 1px solid;
    }
    &.header {
      .header--title {
        font-size: clamp(25px, 3.75vw, 32px);
        font-weight: bold;
        color: $dark;
        border-bottom: 1px solid;
        @include flex;
        @include RWD($sm-md) {
          font-size: clamp(22px, 3.75vw, 25px);
        }
        @include RWD($mini) {
          font-size: clamp(18px, 3.75vw, 21px);
        }
      }
    }
    .footer {
      border-top: 1px solid;
    }
  }
}
</style>
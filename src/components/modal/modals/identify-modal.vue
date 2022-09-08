<script setup name='IdentifyModal'>
</script>

<template >
  <div class="identify-modal-content">
    <div class="d-grid grid-rows-2 h-100">
      <div class="d-grid grid-rows-2 h-100 identify-modal-header rows-parent">
        <div class="text-center identify-modal-header--title">
          <h2>
            菁英鬥陣盃 | 決賽隊伍網路票選活動
            <br>
            <span style="color: #820707">身分驗證</span>
          </h2>
        </div>
        <div class="do-identify-first-text">
          <h5>現在請想投票給你最喜歡的隊伍寶貴的一票之前，<br>先請進行身分驗證綁定：</h5>
        </div>
      </div>
      <div class="rows-parent phone-identify">
        <div class="identify-btn">
          <div class="d-flex">
            <label class="col-2 text-left">+886</label>
            <input placeholder="請輸入手機號碼" class="col py-1 px-1"/>
          </div>
        </div>
        <div class="identify-btn d-inline-block user-select-none active-scale">
          <div>送出</div>
        </div>
      </div>
      <div class="d-grid grid-rows-2 rows-parent">
        <div class="identify-info">
          <h5>
            此步驟用意為1人1票，以表示此為您最珍貴的一票唷!
            <br>
            （各類別可投一票，總計三票）
          </h5>
        </div>
        <div class="identify-btn">
          <h5 class="text-under">隱私權聲明</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.identify-modal-content {
  padding: 40px;
  padding-bottom: 10px;
  .rows-parent {
    >div {
      width: 100%;
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
    // &:not(:first-child) {
    //   border-top: 1px solid;
    // }

    .identify-info {
      border-bottom: 1px solid;
    }
    &.identify-modal-header {
      .identify-modal-header--title {
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
      .do-identify-first-text {
        margin-top: 8%;
      }
    }
    &.phone-identify {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      .identify-btn,
      .identify-info {
        --currentHeight: 55px;
        height:  var(--currentHeight);
        min-height: var(--currentHeight);
        @include flex;
        >div {
          width: 65%;
          padding: 3px 10px;
          height: var(--currentHeight);
          background: #F4F4F4;
          @include flex;
          @include RWD($lg) {
            width: 80%;
          }
          @include RWD($sm) {
            width: 100%;
          }
        }
        &:nth-of-type(2) {
          >div {
            color: $white;
            background: red;
          }
        }
        @include RWD($md-lg) {
          --currentHeight: 60px;
        }
        @include RWD($smallest) {
          --currentHeight: 45px;
        }
      }

      .identify-btn {
        margin-top: 2%;
        cursor: pointer;
      }
    }
  }
  @include RWD($sm-md) {
    padding: 25px 15px;
    padding-bottom: 5px;
  }
}
</style>
<script setup name='BasucModal'>
  import { fixTargetBody } from '@/utils'
  import { modalList } from './modal-components'

  const props = defineProps({
    modalType: {
      type: String,
      default: ''
    },
  })

  const bindProps = ref({})

  const showModal = ref(false)

  const currentModal = computed(() => {
    return modalList[props.modalType].component
  })

  function toggleModal(bool, prams) {
    showModal.value = bool;
    if(bool) {
      fixTargetBody('modal', 'open')
      if(prams?.imgUrl) {
        bindProps.value = {
          imageUrl: prams.imgUrl
        }
      }
    } else {
      fixTargetBody('modal', 'close')
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
  })

  defineExpose({
    toggleModal
  })

</script>

<template>
<div
  v-if="showModal"
  class="fullcover modal"
  id="modal"
  @click.stop.self="toggleModal(false)"
>
  <div
    class="modal__inner align-center vrwd"
    :class="modalType"
  >
    <div class="ratio ratio-16x9 align-content-center">
      <component
        :is="currentModal"
        v-bind="bindProps"
      ></component>
    </div>
    <div
      class="modal__inner--close-btn vrwd"
      @click="toggleModal(false)"
    >
      <span>&times;</span>
    </div>
  </div>
</div>
</template>

<style lang='scss' scoped>
.modal {
  position: fixed;
  width: 100%;
  background: rgba(#000, 0.7);
  z-index: 9999;
  &__inner {
    margin: auto;
    background: #fff;
    text-align: center;
    border-radius: 15px;
    @extend %inner-content;
    &--close-btn {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 44px;
      height: 44px;
      background: $white;
      border-radius: 20px;
      border: 1px solid #ddd;
      @include flex;
      cursor: pointer;
      z-index: 999;
      >span {
        margin-bottom: 10%;
        color: $dark;
      }
      @extend %sub-title;
      @include RWD($sm-md) {
        right: -15px;
        width: 40px;
        height: 40px;
      }
    }
    &:not(.longContent) {
      height: auto !important;
      @include RWD-min-with-max-width(1025, $xxl) {
        @include safe-modal($base: 50vmin);
      }
      @include RWD($lg) {
        @include safe-modal($base: 80vmin);
      }
    }
    &.longContent {
      .ratio  {
        height: 100%;
      }
      @include min-width-RWD($xxl) {
        @include safe-modal($base: 40vmin);
        height: 80vmin !important;
      }

      @include RWD-min-with-max-width(1025, 1599) {
        @include safe-modal($base: 50vmin);
        height: 65vmin !important;
      }
      @include RWD($lg) {
        @include safe-modal($base: 50vmin);
      }

      @include RWD($md-lg) {
        @include safe-modal($base: 58vmin);
      }

      @include RWD($sm-md) {
        @include safe-modal($base: 78vmin);
      }

      @include RWD($mini) {
        top: 55%;
        @include safe-modal($base: 80vmin);
      }
    }
  }
}

</style>
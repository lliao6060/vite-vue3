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
      bindProps.value = {
        imageUrl: prams.imgUrl
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
  <div class="modal__inner align-center">
    <div class="ratio ratio-16x9 align-content-center">
      <component
        :is="currentModal"
        v-bind="bindProps"
      ></component>
    </div>
    <div
      class="modal__inner--close-btn rwd-big-title"
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
    &--close-btn {
      position: absolute;
      top: -20px;
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
      @include RWD($sm-md) {
        top: -25px;
        right: -15px;
        width: 40px;
        height: 40px;
      }
    }
    @include min-width-RWD(1025) {
      @include safe-modal($base: 70vmin);
    }
    @include RWD($lg) {
      width: 90%;
    }
  }
}

</style>
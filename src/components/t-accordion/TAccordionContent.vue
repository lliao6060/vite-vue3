<template>
  <div 
    class="t-accordion-content hide-scrollbar" 
    :class="[active ? 't-accordion--expand' : 't-accordion--collapse']"
    :style="`--expand-height: ${contentHeight}`"
  >
    <div ref="contentRef" class="t-accordion-content__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    watch
  } from 'vue'

  const contentRef = ref(null)
  const contentHeight = ref(9999)

  const props = defineProps({
    active: {
      type: Boolean
    }
  })

  watch(() => props.active, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        contentHeight.value = contentRef.value.offsetHeight+ 'px'
      }, 400)
    }
  })
</script>

<style lang="scss">
  .t-accordion-content {
    display: flex;
    overflow-y: scroll;

    &.t-accordion--expand {
      min-height: 50px;
      max-height: var(--expand-height);
      transition: all 0.3s ease-in-out;
    }

    &.t-accordion--collapse {
      max-height: 0;
      transition: all 0.3s ease-in-out;
    }

    &__wrapper {
      flex: 1 1 auto;
      padding: 12px;
      padding-top: 0;
    }
  }
</style>
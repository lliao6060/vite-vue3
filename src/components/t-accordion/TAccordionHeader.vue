<template>
  <div :class="['t-accordion-header', { 't-accordion-header--active': active }]">
    <div class="t-accordion-header--title ">
      <slot name="title">title</slot>
      <span :class="['t-accordion-header__icon', { rotated: active }]">
        <slot name="arrow">v</slot>
      </span>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    active: {
      type: Boolean
    }
  })
</script>

<style lang="scss">
  .t-accordion-header {
    position: relative;
    display: flex;
    width: 100%;
    padding: 12px 18px;
    user-select: none;
    text-align: left;
    align-items: center;
    transition: all 300ms;
    min-height: 48px;
    box-sizing: border-box;
    cursor: pointer;
    &--title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--active {
      min-height: 64px;
    }

    .t-accordion-header__icon {
      position: absolute;
      right: 15px;
      opacity: 0.5;
      margin-left: auto;
      transition: transform 300ms;
      z-index: 1;

      &.rotated {
        transform: rotate(-180deg);
      }
    }
  }
</style>
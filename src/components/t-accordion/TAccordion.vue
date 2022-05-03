<template>
  <div class="t-accordion-item">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .t-accordion-item {
    position: relative;
    flex: 1 0 100%;
    max-width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.38);
  }
</style>
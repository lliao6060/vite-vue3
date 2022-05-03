<script setup>
</script>

<template>
  <div class="default-layout container full">
    <Breadcrumbs />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .default-layout {
    flex: auto;
    position: relative;
    padding: 10px 12px;
    margin-top: $navHeight;
    border: 1px solid;
    main {
      padding: 10px 0;
    }
  }
</style>
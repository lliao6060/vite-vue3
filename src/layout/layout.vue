<script setup name="Layout">
import { mobileDevice } from '@/utils'
</script>

<template>
  <div class="default-layout container full">
    <Breadcrumbs />
    <main :class="{'vrwd' : mobileDevice}">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .default-layout {
    flex: auto;
    position: relative;
    width: 80%;
    margin: auto;
    padding: 10px 0;
    margin-top: $navHeight;
    main {
      padding: 10px 0;
      @include RWD($lg) {
        --maju-vrwd: 11.2;
      }
      @include RWD($md-lg) {
        --maju-vrwd: 15;
      }
      @include RWD($sm-md) {
        --maju-vrwd: 25;
      }
    }
    @include RWD($lg) {
      width: 95%;
      padding: auto;
    }
  }
</style>
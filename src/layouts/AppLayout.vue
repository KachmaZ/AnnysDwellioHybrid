<template>
  <div class="app-layout">
    <AppHeader class="app-layout__header" />

    <main class="app-layout__main">
      <slot></slot>
    </main>

    <AppFooter class="app-layout__footer" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<style scoped lang="scss">
.app-layout {
  max-width: 1720px;
  min-height: 100vh;

  margin: 0 auto 30px;
  position: relative;
  padding-top: 110px;
  padding-bottom: 477px;

  &__header {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
  }
}
</style>

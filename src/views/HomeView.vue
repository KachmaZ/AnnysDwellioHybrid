<template>
  <div class="home">
    <div class="home-filters">
      <h1 class="home-filters__title h1">Найди своё идеальное место для жизни</h1>
      <HomeFiltersPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeFiltersPanel from '@/components/HomeFiltersPanel.vue'
</script>

<style scoped lang="scss">
.home-filters {
  width: 100%;

  padding: 177px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  background-image: url(../assets/img/main-bg.png);
  background-size: cover;
  background-position: center;

  border-radius: 40px;

  &__title {
    color: $white;
  }
}
</style>

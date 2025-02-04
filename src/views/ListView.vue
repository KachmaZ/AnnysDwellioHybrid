<template>
  <div class="list-page--filters">
    <UpperFiltersPanel />
  </div>
  <div class="list-page--title">
    <ApartsListTitle
      v-model="currentContent"
      :first-option="ApartsList"
      :second-option="ApartsMap"
    />
  </div>
  <div class="list-page--content">
    <component :is="currentContent" />
  </div>
</template>

<script setup lang="ts">
import ApartsList from '@/components/ApartsList.vue'
import ApartsListTitle from '@/components/ApartsListTitle.vue'
import ApartsMap from '@/components/ApartsMap.vue'
import UpperFiltersPanel from '@/components/UpperFiltersPanel.vue'
import { shallowRef } from 'vue'

const currentContent = shallowRef(ApartsList)
</script>

<style scoped lang="scss">
.list-page {
  &--title,
  &--filters {
    margin-bottom: 30px;
  }
  &__no-aparts {
    height: 70vh;
    display: flex;
    justify-content: center;
  }
  &__aparts-grid {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    justify-items: center;
  }
}
</style>

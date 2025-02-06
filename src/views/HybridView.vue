<template>
  <div class="hybrid-page--filters">
    <UpperFiltersPanel />
  </div>
  <div class="hybrid-page--title">
    <ApartsListTitle
      v-model="currentContent"
      :first-option="ApartsList"
      :second-option="ApartsMap"
    />
  </div>
  <div class="hybrid-page--content">
    <div class="list"><ApartsList /></div>
    <div class="map"><ApartsMap class="map__hybrid" /></div>
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
.hybrid-page {
  &--title,
  &--filters {
    margin-bottom: 30px;
  }
  &--content {
    display: flex;
    gap: 30px;
    .list,
    .map {
      width: 50%;
      position: relative;

      &__hybrid {
        position: sticky;
        top: 20px;
      }
    }
  }
}
</style>

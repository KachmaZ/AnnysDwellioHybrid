<template>
  <div class="aparts-list">
    <div v-if="getFilteredAparts.length === 0" class="aparts-list__no-aparts h2">
      Не найдено подходящих объявлений
    </div>
    <div v-else class="aparts-list__aparts-grid">
      <ApartCard
        v-for="apart in getFilteredAparts"
        :key="apart.title"
        :apart="apart"
        @click="cardClickHandler(apart.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ApartCard from './ApartCard.vue'
import router from '@/router'
import { useApartsStore } from '@/stores/apartsStore'
import { storeToRefs } from 'pinia'

const { getFilteredAparts } = storeToRefs(useApartsStore())
const cardClickHandler = async (id: number) => {
  await router.push({ name: 'apartPage', params: { id } })
}
</script>

<style scoped lang="scss">
.aparts-list {
  &__no-aparts {
    height: 70vh;
    display: flex;
    justify-content: center;
  }
  &__aparts-grid {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    justify-items: center;
  }
}
</style>

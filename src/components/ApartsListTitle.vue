<template>
  <div class="aparts-list-title">
    <div class="aparts-list-title__text">
      <h3 class="h3">Снять однокомнатную квартиру до 50 000 рублей в Санкт-Петербурге</h3>
      <div class="aparts-list-title__text--count-n-actions">
        <span class="text-20">{{ getFilteredAparts.length }} объявлений</span>
        <span class="text-20 colored">
          <img :src="lineSpacingIcon" alt="ico" />
          Лучший выбор
        </span>
        <span class="text-20 colored">
          <img :src="searchIcon" alt="ico" srcset="" />
          Сохранить поиск
        </span>
      </div>
    </div>
    <div class="aparts-list-title__switch">
      <UIButtonSwitch
        v-model="model"
        first-text="Список"
        second-text="Карта"
        :first-option="props.firstOption"
        :second-option="props.secondOption"
        style="display: none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApartsStore } from '@/stores/apartsStore'
import { storeToRefs } from 'pinia'

import lineSpacingIcon from '@/assets/img/icons/lineSpacing.svg'
import searchIcon from '@/assets/img/icons/search.svg'
import UIButtonSwitch from './UIKit/UIButtonSwitch.vue'
import type { Component } from 'vue'

const model = defineModel()

const { getFilteredAparts } = storeToRefs(useApartsStore())

const props = defineProps<{
  firstOption: Component
  secondOption: Component
}>()
</script>

<style scoped lang="scss">
.aparts-list-title {
  display: flex;
  justify-content: space-between;
  &__text {
    &--count-n-actions {
      margin-top: 15px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
}

.colored {
  display: flex;
  align-items: center;
  gap: 4px;
  color: $primary;
}
</style>

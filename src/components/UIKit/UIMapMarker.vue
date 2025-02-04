<template>
  <div class="ui-map-marker" @click="showCard()">
    <div class="ui-map-marker__point"></div>
    <div class="ui-map-marker__price-wrapper">
      <div class="ui-map-marker__price">{{ apart.price }}₽</div>
    </div>
    <div :class="['ui-map-marker__card', isCardOpened ? 'selected' : '']">
      <ApartsMapCard :apart="apart" v-model:is-card-opened="isCardOpened" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApartType } from '@/entities/apart'
import ApartsMapCard from '../ApartsMapCard.vue'
import { ref } from 'vue'

defineProps<{
  apart: ApartType
}>()

const isCardOpened = ref(false)

const showCard = () => {
  isCardOpened.value = true
}
</script>

<style scoped lang="scss">
.ui-map-marker {
  height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: $primary;
  border-radius: 10px;

  cursor: pointer;

  &__point {
    width: 20px;
    height: 20px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    border: 1px solid $primary;
    border-radius: 50%;

    background-color: $white;

    &::after {
      content: '';
      width: 14px;
      height: 14px;
      background-color: $primary;
      border-radius: 50%;
    }
  }

  &__price-wrapper {
    height: 100%;
    max-width: 0;
    margin-left: -12px;

    position: relative;
    overflow: hidden;

    transition: max-width 250ms ease-in;
  }

  &__price {
    height: 100%;
    padding: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: $primary;
    color: $white;
    border-radius: 10px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__card {
    top: 0;
    left: 26px;
    position: absolute;
    display: none;

    &.selected {
      display: block;
    }
  }

  &:hover {
    .ui-map-marker {
      &__price-wrapper {
        max-width: 200px;
      }
    }
  }
}
</style>

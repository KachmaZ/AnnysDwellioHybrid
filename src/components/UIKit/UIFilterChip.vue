<template>
  <div :class="['ui-filter-chip', 'text-20', checked ? 'selected' : '']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { UIFilterChipProps } from './types'

defineProps<UIFilterChipProps>()
</script>

<style scoped lang="scss">
.ui-filter-chip {
  width: fit-content;
  height: 50px;

  padding: 0 30px;

  display: flex;
  align-items: center;

  border-radius: 50px;

  color: $primary;
  background-color: white;
  border: 2px solid $primary;

  &:hover {
    background-color: $light-hover;
  }

  &:active {
    background-color: $light-pressed;
  }

  &.selected {
    color: white;
    background-color: $primary;
    border: none;

    &:hover {
      background-color: $hover;
    }
    &:active {
      background-color: $pressed;
    }
  }
}
</style>

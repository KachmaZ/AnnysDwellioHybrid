<template>
  <button :class="['ui-button-icon', `ui-button-icon--${variant}`]" v-bind="{ ...props }">
    <img v-if="icon" :src="icon" alt="icon" />
  </button>
</template>

<script setup lang="ts">
import type { UIButtonProps } from './types.ts'

const props = defineProps<UIButtonProps>()
</script>

<style scoped lang="scss">
.ui-button-icon {
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;

  img {
    color: inherit;
  }

  &--primary {
    background-color: $primary;
    color: $white;

    &:hover {
      background-color: $hover;
    }

    &:active {
      background-color: $pressed;
    }
  }

  &--secondary {
    background-color: transparent;
    color: $primary;
    border: 1px solid $primary;

    &:hover {
      border-color: $hover;
      background-color: $light-hover;
      color: $hover;
    }

    &:active {
      border-color: $pressed;
      background-color: $light-pressed;
      color: $pressed;
    }
  }

  &--tertiary {
    background-color: transparent;
    color: $primary;

    &:hover {
      background-color: $light-hover;
      color: $hover;
    }

    &:active {
      background-color: $light-pressed;
      color: $pressed;
    }
  }
}
</style>

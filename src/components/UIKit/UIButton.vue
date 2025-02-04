<template>
  <button :class="['ui-button', `ui-button--${variant}`]" v-bind="{ ...props }">
    <img v-if="icon" :src="icon" alt="icon" />
    <span class="text-20"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { UIButtonProps } from './types.ts'

const props = defineProps<UIButtonProps>()
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 12px 40px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
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

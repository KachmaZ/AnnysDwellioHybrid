<template>
  <div :class="['ui-input', `ui-input--${variant}`]">
    <input v-model="model" v-bind="{ ...props }" type="text" class="text-20" />
  </div>
</template>

<script setup lang="ts">
import type { UIInputProps } from './types'

const model = defineModel()

const props = defineProps<UIInputProps>()
</script>

<style scoped lang="scss">
.ui-input {
  input {
    height: 50px;
    width: 100%;

    padding: 0 20px;

    border-radius: 25px;
    border: none;

    background-color: $light-hover;

    &:hover {
      background-color: $light-pressed;
    }

    &:focus {
      border: 1px solid $outline;
      outline: none;

      background-color: $white;
    }
  }

  &--price {
    width: 155px;
  }
}
</style>

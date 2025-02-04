<template>
  <button class="ui-button-mark text-20" v-bind="{ ...props }" :style="getPadding">
    <slot></slot>
    <div v-if="markValue" class="ui-button-mark__mark">{{ markValue }}</div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { UIButtonMarkProps } from './types'

const props = defineProps<UIButtonMarkProps>()

const getPadding = computed(() => {
  if (props.markValue) {
    return { padding: '0 10px 0 24px' }
  } else {
    return { padding: '0 40px' }
  }
})
</script>

<style scoped lang="scss">
.ui-button-mark {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px 0 24px;

  border-radius: 30px;
  border: 2px solid $primary;

  background-color: $white;
  color: $primary;

  &__mark {
    width: 36px;
    height: 36px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background-color: $primary;
    color: $white;
  }

  &:hover {
    background-color: $light-hover;
    border-color: $hover;

    &__mark {
      background-color: $hover;
      color: $light-hover;
    }
  }

  &:active {
    background-color: $light-pressed;
    border-color: $pressed;

    &__mark {
      background-color: $pressed;
      color: $light-pressed;
    }
  }
}
</style>

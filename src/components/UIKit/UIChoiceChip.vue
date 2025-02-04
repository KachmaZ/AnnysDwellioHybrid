<template>
  <div class="ui-choice-chip">
    <label :for="props.id" class="text-20" @click.prevent>
      <slot></slot>
      <input type="checkbox" v-bind="{ ...props }" />
    </label>
  </div>
</template>

<script setup lang="ts">
import type { UIChoiceChipProps } from './types'

const props = defineProps<UIChoiceChipProps>()
</script>

<style scoped lang="scss">
.ui-choice-chip {
  height: 36px;
  width: fit-content;
  min-width: 36px;

  position: relative;

  display: flex;
  align-items: center;

  background-color: $white;
  color: $black;

  border-radius: 18px;
  &:hover {
    background-color: $light-hover;
  }

  &:active {
    background-color: $primary;
    color: $white;
  }

  &:has(input:checked) {
    background-color: $hover;
    color: $white;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    appearance: none;
  }

  label {
    display: block;
    width: 100%;
    height: 100%;
    padding: 13px;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

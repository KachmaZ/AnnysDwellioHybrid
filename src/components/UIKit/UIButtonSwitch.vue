<template>
  <div class="ui-button-switch">
    <button
      :class="['ui-button-switch__first', currentActive === 0 ? 'active' : '']"
      @click="firstClickHandler"
    >
      <span class="text-20">{{ firstText }}</span>
    </button>
    <button
      :class="['ui-button-switch__second', currentActive === 1 ? 'active' : '']"
      @click="secondClickHandler"
    >
      <span class="text-20">{{ secondText }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue'

const props = defineProps<{
  firstText: string
  secondText: string
  firstOption: Component
  secondOption: Component
}>()

const model = defineModel()

const currentActive = ref(0)

const firstClickHandler = () => {
  model.value = props.firstOption
  currentActive.value = 0
}

const secondClickHandler = () => {
  model.value = props.secondOption
  currentActive.value = 1
}
</script>

<style scoped lang="scss">
.ui-button-switch {
  width: 270px;
  height: 56px;
  padding: 5px;
  display: flex;
  justify-content: space-between;

  border-radius: 28px;
  background-color: $light-hover;

  button {
    width: 130px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    border: none;

    background-color: $light-hover;

    &.active {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>

<template>
  <div class="ui-range-input text-20">
    c <input class="text-20" type="number" v-model="min" /> по
    <input class="text-20" type="number" v-model="max" />
  </div>
</template>

<script setup lang="ts">
const min = defineModel('min')
const max = defineModel('max')
</script>

<style scoped lang="scss">
.ui-range-input {
  height: 50px;
  width: fit-content;
  padding: 0 28px;
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: $light-hover;
  border-radius: 25px;

  input,
  input:focus,
  input:active {
    width: 72px;
    border: none;
    background-color: inherit;
  }
}
</style>

<template>
  <div class="ui-select">
    <VueSelect class="text-20" v-model="model" :options="props.options" :clearable="false" />
  </div>
</template>

<script setup lang="ts">
import VueSelect from 'vue-select'
const model = defineModel()

const props = defineProps<{
  options: string[]
}>()
</script>

<style lang="scss">
.ui-select {
  min-width: 180px;
  height: 50px;
  .vs__dropdown-toggle {
    padding: 0 24px !important;
    height: 100%;
    border: 1px solid $primary;
    border-radius: 30px;
  }

  .v-select {
    height: 100%;
  }
}
</style>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
  <ModalWindow v-if="isOpened" />
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import ModalWindow from './components/ModalWindow/ModalWindow.vue'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useModalStore } from './stores/modalStore'

const { isOpened } = storeToRefs(useModalStore())
</script>

<style scoped lang="scss"></style>

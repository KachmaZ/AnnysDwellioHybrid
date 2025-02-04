<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <component :is="currentContent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { storeToRefs } from 'pinia'
const modalStore = useModalStore()
const { currentContent } = storeToRefs(modalStore)
const { closeModal } = modalStore
</script>

<style scoped lang="scss">
.modal {
  &-overlay {
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #0000009b;
  }

  min-width: 900px;
  min-height: 260px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 40px;
}
</style>

import { defineStore } from 'pinia'
import { ref, type Component } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpened = ref<boolean>(false)
  const currentContent = ref<Component | null>(null)

  const openModal = (content: Component) => {
    currentContent.value = content
    isOpened.value = true
  }

  const closeModal = () => {
    currentContent.value = null
    isOpened.value = false
  }

  return {
    isOpened,
    currentContent,
    openModal,
    closeModal,
  }
})

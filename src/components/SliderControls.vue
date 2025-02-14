<template>
  <UIButtonIcon :icon="icon" variant="tertiary" :class="direction" @click="clickHandler()" />
</template>

<script setup lang="ts">
import UIButtonIcon from './UIKit/UIButtonIcon.vue'
import { useSwiper } from 'swiper/vue'

const props = defineProps<{
  icon: string
  direction: 'left' | 'right'
}>()

const swiper = useSwiper()

const clickHandler = () => {
  if (props.direction === 'left') {
    swiper.value.slidePrev()
  } else {
    swiper.value.slideNext()
  }
}
</script>

<style scoped lang="scss">
.left,
.right {
  position: absolute;
  bottom: 40px;
  z-index: 1;

  &.left {
    left: 45px;
  }

  &.right {
    right: 45px;
  }
}
</style>

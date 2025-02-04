<template>
  <div class="call-agree">
    <img :src="callAgreeImg" alt="call" />
    <div class="call-agree__content">
      <h5 class="h5">Ожидайте, с вами скоро свяжется специалист по недвижимости</h5>
      <UIButton variant="primary" @click="() => closeModal()">Хорошо</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIButton from '@/components/UIKit/UIButton.vue'
import callAgreeImg from '@/assets/img/callAgree.png'
import { useModalStore } from '@/stores/modalStore'

const { closeModal } = useModalStore()
</script>

<style scoped lang="scss">
.call-agree {
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    width: 510px;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>

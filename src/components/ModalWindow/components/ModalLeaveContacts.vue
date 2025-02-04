<template>
  <div class="leave-contacts">
    <img :src="callImg" alt="call" />
    <div class="leave-contacts__form">
      <div class="leave-contacts__seller">
        <h5 class="h5">Кравченко Елена Ильинична</h5>
        <span class="text-20">+7 (999) 653-24-89</span>
      </div>
      <div class="leave-contacts__client">
        <span class="text-20">или оставьте номер, и мы вам перезвоним в течении 5 минут</span>
        <UIInput variant="text" placeholder="Ваше имя" />
        <UIInput variant="text" placeholder="+7 (XXX) XXX-XX-XX" />
      </div>
      <UIButton variant="primary" @click="() => openModal(ModalCallsAgree)">Позвоните мне</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import callImg from '@/assets/img/call.png'
import UIButton from '@/components/UIKit/UIButton.vue'
import UIInput from '@/components/UIKit/UIInput.vue'
import { useModalStore } from '@/stores/modalStore'
import ModalCallsAgree from './ModalCallsAgree.vue'

const { openModal } = useModalStore()
</script>

<style scoped lang="scss">
.leave-contacts {
  width: 1070px;
  height: 475px;

  display: flex;
  justify-content: space-between;

  &__form {
    margin: 60px;
    display: flex;
    flex-direction: column;
  }

  &__seller {
    margin-bottom: 40px;
  }
  &__client {
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

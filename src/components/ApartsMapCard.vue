<template>
  <div class="aparts-map-card" @click="cardClickHandler(apart.id)">
    <img :src="imageUrl" alt="" class="aparts-map-card__img" />
    <div class="aparts-map-card__info">
      <div class="price">
        <h4 class="h4 value">{{ apart.price }}₽</h4>
        <span class="text-20 desc">В месяц</span>
      </div>
      <div class="location">
        <h6 class="h6">{{ apart.title }}</h6>
        <div class="location__address">
          <img :src="markerSrc" alt="marker" />
          <span class="text-20">{{ apart.address }}</span>
        </div>
        <div class="location__subway">
          <span class="text-20"><img :src="subwaySrc" alt="subway" /> {{ apart.metro }}</span>
          <span class="text-20">
            <img v-if="apart.walkingDistance" :src="pedestrianSrc" alt="pedestrian" />
            <img v-else :src="transportSrc" alt="transport" />
            {{ apart.metroDistance }} мин
          </span>
        </div>
      </div>
      <div class="controls">
        <UIButton variant="primary" @click.stop="() => openModal(ModalLeaveContacts)"
          >Связаться</UIButton
        >
        <UIButtonIcon variant="secondary" @click.stop :icon="heartSrc"></UIButtonIcon>
      </div>
    </div>
    <div class="aparts-map-card__close" @click.stop="closeCard()">
      <img :src="crossSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UIButton from './UIKit/UIButton.vue'
import UIButtonIcon from './UIKit/UIButtonIcon.vue'
import ModalLeaveContacts from './ModalWindow/components/ModalLeaveContacts.vue'
import markerSrc from '@/assets/img/icons/marker.svg'
import subwaySrc from '@/assets/img/icons/subway.svg'
import pedestrianSrc from '@/assets/img/icons/pedestrian.svg'
import transportSrc from '@/assets/img/icons/transport.svg'
import heartSrc from '@/assets/img/icons/heart.svg'
import crossSrc from '@/assets/img/icons/cross.svg'
import type { ApartType } from '@/entities/apart'
import { computed } from 'vue'
import { useModalStore } from '@/stores/modalStore'
import router from '@/router'

const isCardOpened = defineModel<boolean>('isCardOpened')

const props = defineProps<{
  apart: ApartType
}>()

const { openModal } = useModalStore()

const imageUrl = computed(
  () => new URL(`../assets/img/aparts/${props.apart.images[0]}`, import.meta.url).href,
)

const closeCard = () => {
  isCardOpened.value = false
}

const cardClickHandler = async (id: number) => {
  await router.push({ name: 'apartPage', params: { id } })
}
</script>

<style scoped lang="scss">
.aparts-map-card {
  width: 650px;
  height: 232px;

  position: relative;

  display: flex;
  gap: 20px;

  background-color: white;
  border-radius: 40px;
  overflow: hidden;

  &__img {
    width: 232px;
    height: 232px;
  }

  &__info {
    padding: 20px;
    .price {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 12px;

      .desc {
        color: $grey-50;
      }
    }

    .location {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      &__address {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      &__subway {
        display: flex;
        gap: 10px;

        span {
          display: flex;
          align-items: center;
          gap: 5px;

          &:last-child {
            color: $primary;
          }
        }
      }
    }

    .controls {
      display: flex;
      gap: 10px;
    }
  }

  &__close {
    width: 24px;
    height: 24px;

    position: absolute;
    top: 25px;
    right: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    &:hover {
      background-color: $light-hover;
    }
  }
}
</style>

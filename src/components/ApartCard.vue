<template>
  <div class="apart-card">
    <img class="apart-card__img" :src="imageUrl" alt="" />
    <div class="apart-card__content">
      <div class="apart-card__content--price">
        <div class="price">
          <h4 class="h4 value">{{ apart.price }}₽</h4>
          <span class="text-20 desc">В месяц</span>
        </div>
        <div class="tags">
          <div class="text-label">Залог</div>
          <div class="text-label">Комиссия {{ apart.agentComission }}%</div>
          <div class="text-label">Цена без КУ</div>
        </div>
      </div>

      <div class="apart-card__content--info">
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
      </div>
      <div class="apart-card__content--controls">
        <UIButton variant="primary" @click.stop="() => openModal(ModalLeaveContacts)"
          >Связаться</UIButton
        >
        <UIButtonIcon variant="secondary" @click.stop :icon="heartSrc"></UIButtonIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApartType } from '@/entities/apart'
import UIButton from './UIKit/UIButton.vue'
import UIButtonIcon from './UIKit/UIButtonIcon.vue'
import markerSrc from '@/assets/img/icons/marker.svg'
import subwaySrc from '@/assets/img/icons/subway.svg'
import pedestrianSrc from '@/assets/img/icons/pedestrian.svg'
import transportSrc from '@/assets/img/icons/transport.svg'
import heartSrc from '@/assets/img/icons/heart.svg'
import { computed } from 'vue'
import { useModalStore } from '@/stores/modalStore'
import ModalLeaveContacts from './ModalWindow/components/ModalLeaveContacts.vue'

const props = defineProps<{
  apart: ApartType
}>()

const imageUrl = computed(
  () => new URL(`../assets/img/aparts/${props.apart.images[0]}`, import.meta.url).href,
)

const { openModal } = useModalStore()
</script>

<style scoped lang="scss">
.apart-card {
  width: 408px;
  height: 582px;

  display: flex;
  flex-direction: column;

  border-radius: 40px;
  box-shadow: 2px 6px 12px 0px rgba(29, 35, 55, 0.2);
  overflow: hidden;
  &__img {
    height: 268px;
    width: 100%;
  }

  &__content {
    width: 100%;
    height: 100%;

    padding: 25px 20px 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--price {
      .price {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 12px;

        .desc {
          color: $grey-50;
        }
      }
      .tags {
        display: flex;
        gap: 5px;

        border-radius: 12px;

        div {
          height: 24px;
          padding: 0 12px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 12px;
          background-color: $light-hover;
        }
      }
    }

    &--info {
      .location {
        display: flex;
        flex-direction: column;
        gap: 12px;

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
    }

    &--controls {
      display: flex;
      gap: 10px;
    }
  }
}
</style>

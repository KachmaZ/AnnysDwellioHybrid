<template>
  <div class="apart-page">
    <div class="apart-page__image">
      <Swiper :slides-per-view="'auto'" :space-between="50">
        <SwiperSlide v-for="imageUrl in images" :key="imageUrl">
          <img :src="imageUrl" alt=""
        /></SwiperSlide>

        <SliderControls :icon="leftChevronSrc" direction="left" />
        <SliderControls :icon="rightChevronSrc" direction="right" />
      </Swiper>
    </div>
    <div class="apart-page__main-info">
      <div class="head">
        <h1 class="h1 head__title">{{ apart.title }}</h1>
        <span class="text-20 head__desc">10 часов назад, 1026 просмотров</span>
      </div>
      <div class="location">
        <div class="location__address">
          <img :src="markerSrc" alt="marker" />
          <span class="text-20">{{ apart.city }}, {{ apart.address }}</span>
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
      <div class="price">
        <h3 class="h3">{{ apart.price }}₽ в месяц</h3>
        <div class="text-20">
          <span>Залог</span><span>{{ apart.deposit }}₽</span>
        </div>
        <div class="text-20">
          <span>Комиссия агенту</span><span>{{ apart.agentComission }}%</span>
        </div>
        <div class="text-20"><span>Коммунальные услуги</span><span>Вся квитация</span></div>
      </div>
      <div class="controls">
        <UIButton variant="primary" @click="() => openModal(ModalLeaveContacts)"
          >Связаться</UIButton
        >
        <UIButton variant="secondary">Добавить в избранное</UIButton>
      </div>
    </div>
    <div class="apart-page__about-apart">
      <div class="info-card">
        <h2 class="h2">О квартире</h2>
        <div class="text-20">
          <span>Общая площадь</span><span>{{ apart.square }}м</span>
        </div>
        <div class="text-20"><span>Площадь кухни</span><span>12м²</span></div>
        <div class="text-20"><span>Санузел</span><span>1 совмещенный</span></div>
        <div class="text-20">
          <span>Этаж</span><span>{{ apart.floor }}/{{ apart.houseHeight }}</span>
        </div>
        <div class="text-20"><span>Вид из окон</span><span>Во двор</span></div>
        <div class="text-20">
          <span>Ремонт</span><span>{{ apart.renovation }}</span>
        </div>
        <div class="text-20">
          <span>Мебель</span><span>{{ apart.furniture ? 'Есть' : 'Нет' }}</span>
        </div>
        <div class="text-20">
          <span>Удобства</span><span>{{ apart.goods.join(', ') }}</span>
        </div>
        <div class="text-20">
          <span> {{ getPetsAndKidsStatus() }} </span>
        </div>
      </div>
    </div>
    <div class="apart-page__about-house">
      <div class="info-card">
        <h2 class="h2">О доме</h2>
        <div class="text-20">
          <span>Год постройки</span><span>{{ apart.houseBuildYear }}</span>
        </div>
        <div class="text-20">
          <span>Количество этажей</span><span>{{ apart.houseHeight }}</span>
        </div>
        <div class="text-20"><span>Лифт</span><span>Есть</span></div>
        <div class="text-20"><span>Тип дома</span><span>Кирпично-монолитный</span></div>
        <div class="text-20"><span>Тип перекрытий</span><span>Железобетонные</span></div>
        <div class="text-20"><span>Отопление</span><span>Центральное</span></div>
        <div class="text-20"><span>Газоснабжение</span><span>Центральное</span></div>
        <div class="text-20"><span>Парковка</span><span>Наземная</span></div>
        <div class="text-20">
          <span>Рядом</span><span>{{ apart.houseEnvironment.join(', ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper styles
import 'swiper/css'

import type { ApartType } from '@/entities/apart'
import router from '@/router'
import { useApartsStore } from '@/stores/apartsStore'
import { storeToRefs } from 'pinia'
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

import markerSrc from '@/assets/img/icons/marker.svg'
import subwaySrc from '@/assets/img/icons/subway.svg'
import pedestrianSrc from '@/assets/img/icons/pedestrian.svg'
import transportSrc from '@/assets/img/icons/transport.svg'
import leftChevronSrc from '@/assets/img/icons/chevronLeft.svg'
import rightChevronSrc from '@/assets/img/icons/chevronRight.svg'
import UIButton from '@/components/UIKit/UIButton.vue'
import { useModalStore } from '@/stores/modalStore'
import ModalLeaveContacts from '@/components/ModalWindow/components/ModalLeaveContacts.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import SliderControls from '@/components/SliderControls.vue'

const route = useRoute()

const apart = ref<ApartType>(<ApartType>{})

const images = computed<string[]>(() => {
  return apart.value.images.map((image) => {
    return new URL(`../assets/img/aparts/${image}`, import.meta.url).href
  }, [])
})

const { openModal } = useModalStore()

const getPetsAndKidsStatus = () => {
  if (apart.value.petsAndKids.includes('pets') && apart.value.petsAndKids.includes('kids')) {
    return 'Можно с животными и детьми'
  } else if (apart.value.petsAndKids.includes('pets')) {
    return 'Можно с животными'
  } else if (apart.value.petsAndKids.includes('kids')) {
    return 'Можно с детьми'
  } else {
    return 'Без животных и детей'
  }
}

onBeforeMount(() => {
  const { getApartById } = storeToRefs(useApartsStore())

  const currentApart = getApartById.value(Number(route.params.id))

  if (currentApart) {
    apart.value = { ...currentApart }
  } else {
    router.push({ name: 'apartsList' })
  }
})
</script>

<style scoped lang="scss">
.apart-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'image mainInfo'
    'aboutApart aboutHouse';
  column-gap: 30px;
  row-gap: 120px;

  &__image {
    grid-area: image;
    position: relative;

    .swiper {
      width: 100%;
      &-slide {
        // width: fit-content !important;
      }
    }

    img {
      width: 100%;
      height: 100%;

      border-radius: 40px;
    }

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
  }

  &__main-info {
    grid-area: mainInfo;

    display: flex;
    flex-direction: column;
    gap: 32px;

    .head {
      &__title {
        margin-bottom: 12px;
      }
      &__desc {
        color: $grey-50;
      }
    }

    .location {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__address {
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

    .price {
      width: 408px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      div {
        display: flex;
        justify-content: space-between;
      }
    }

    .controls {
      width: 408px;

      .ui-button {
        width: 100%;

        &:first-child {
          margin-bottom: 12px;
        }
      }
    }
  }

  &__about-apart {
    grid-area: aboutApart;
  }

  &__about-house {
    grid-area: aboutHouse;
  }
}

.info-card {
  width: 100%;
  height: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  border-radius: 40px;
  background-color: $light-hover;

  div {
    display: flex;
    justify-content: space-between;

    span {
      max-width: 50%;

      &:last-child {
        text-align: right;
      }
    }
  }
}
</style>

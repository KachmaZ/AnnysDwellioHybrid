<template>
  <div class="metro-filter">
    <div class="metro-filter__close" @click.stop="closeModal()">
      <img :src="crossSrc" />
    </div>
    <div class="metro-filter__lines">
      <div v-for="(line, index) in metroMap" class="line" :key="index">
        <div class="line__title">
          <input class="line__title--checkbox" type="checkbox" name="" id="" />
          <div class="line__title--mark" :style="{ backgroundColor: line.lineColor }"></div>
          <h6 class="h6 line__title--text">{{ line.lineName }}</h6>
        </div>
        <div class="line__stations">
          <div
            class="station"
            v-for="(station, index) in line.stations"
            :key="index"
            @click="() => addCheckValue('metro', station)"
          >
            <input type="checkbox" :checked="filterValues.metro.includes(station)" />
            <span class="text-20">{{ station }}</span>
          </div>
        </div>
      </div>
    </div>

    <UIButton class="metro-filter__save" variant="primary" @click.stop="closeModal()"
      >Сохранить</UIButton
    >
  </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from '@/stores/filtersStore'
import crossSrc from '@/assets/img/icons/cross.svg'
import UIButton from '@/components/UIKit/UIButton.vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'

type metroLine = {
  lineName: string
  lineColor: string
  stations: string[]
}

const { closeModal } = useModalStore()

const metroMap: metroLine[] = [
  {
    lineName: 'Кировско-Выборгская линия',
    lineColor: '#F03D2F',
    stations: [
      'Гражданский проспект',
      'Академическая',
      'Политехническая',
      'Площадь Мужества',
      'Лесная',
      'Выборгская',
      'Площадь Ленина',
      'Чернышевская',
      'Площадь Восстания',
      'Владимирская',
      'Пушкинская',
      'Технологический институт',
      'Балтийская',
    ],
  },
  {
    lineName: 'Московско-Петроградская линия',
    lineColor: '#1AA8F7',
    stations: [
      'Парнас',
      'Проспект Просвещения',
      'Озерки',
      'Удельная',
      'Пионерская',
      'Чёрная речка',
      'Петроградская',
      'Горьковская',
      'Невский проспект',
      'Сенная площадь',
      'Технологический институт',
      'Фрунзенская',
      'Московские ворота',
      'Электросила',
      'Парк победы',
      'Московская',
      'Звёздная',
      'Купчино',
    ],
  },
  {
    lineName: 'Невско-Василеостровская линия',
    lineColor: '#23A12C',
    stations: [
      'Беговая',
      'Зенит',
      'Приморская',
      'Василеостровская',
      'Гостиный двор',
      'Маяковская',
      'Площадь Александра Невского',
      'Елизаровская',
      'Ломоносовская',
      'Пролетарская',
      'Обухово',
      'Рыбацкое',
    ],
  },
]

const filterStore = useFiltersStore()
const { filterValues } = storeToRefs(filterStore)
const { addCheckValue } = filterStore
</script>

<style scoped lang="scss">
.metro-filter {
  width: 1450px;
  height: 665px;
  position: relative;

  padding: 80px 50px 80px 100px;

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &__close {
    width: 24px;
    height: 24px;

    position: absolute;
    top: 40px;
    right: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    &:hover {
      background-color: $light-hover;
    }
  }

  &__lines {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;

    overflow-y: scroll;

    .line {
      display: flex;
      flex-direction: column;

      &__title {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        white-space: nowrap;

        &--mark {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          border-radius: 50%;
        }
      }

      &__stations {
        margin-left: 32px;
      }
    }
  }

  &__save {
    position: absolute;
    bottom: 30px;
    right: 50px;
  }
}
</style>

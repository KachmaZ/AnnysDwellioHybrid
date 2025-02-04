<template>
  <div class="modal-filters">
    <div class="modal-filters__wrapper" @scroll.stop>
      <div class="modal-filters__apart">
        <h5 class="h5">Квартира</h5>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Мебель</span>
          <div class="item__inputs">
            <UIFilterChip :checked="filterValues['furniture'] === true" @click="setFurniture(true)"
              >Есть</UIFilterChip
            >
            <UIFilterChip
              :checked="filterValues['furniture'] === false"
              @click="setFurniture(false)"
              >Нет</UIFilterChip
            >
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Этаж</span>
          <div class="item__inputs">
            <UIRangeInput v-model:min="filterValues.floorMin" v-model:max="filterValues.floorMax" />
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Ремонт</span>
          <div class="item__inputs">
            <UIFilterChip
              v-for="(renoOption, index) in renoOptions"
              :key="index"
              :checked="filterValues['renovation'].includes(renoOption)"
              @click="addCheckValue('renovation', renoOption)"
              >{{ renoOption }}</UIFilterChip
            >
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Дети и животные</span>
          <div class="item__inputs">
            <UIFilterChip
              :checked="filterValues['petsAndKids'].includes('pets')"
              @click="addCheckValue('petsAndKids', 'pets')"
              >Можно с животными</UIFilterChip
            >
            <UIFilterChip
              :checked="filterValues['petsAndKids'].includes('kids')"
              @click="addCheckValue('petsAndKids', 'kids')"
              >Можно с детьми</UIFilterChip
            >
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Удобства</span>
          <div class="item__inputs">
            <UIFilterChip
              v-for="(goodOption, index) in goodsOptions"
              :key="index"
              :checked="filterValues['goods'].includes(goodOption)"
              @click="addCheckValue('goods', goodOption)"
              >{{ goodOption }}</UIFilterChip
            >
          </div>
        </div>
      </div>
      <div class="modal-filters__house">
        <h5 class="h5">Дом</h5>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Год постройки</span>
          <div class="item__inputs">
            <UIRangeInput
              v-model:min="filterValues.houseBuildYearMin"
              v-model:max="filterValues.houseBuildYearMax"
            />
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Этажей в доме</span>
          <div class="item__inputs">
            <UIRangeInput
              v-model:min="filterValues.houseHeightMin"
              v-model:max="filterValues.houseHeightMax"
            />
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Тип дома</span>
          <div class="item__inputs">
            <UIFilterChip :checked="false">Кирпичный</UIFilterChip>
            <UIFilterChip :checked="false">Монолитный</UIFilterChip>
            <UIFilterChip :checked="false">Панельный</UIFilterChip>
            <UIFilterChip :checked="false">Кирпично-монолитный</UIFilterChip>
            <UIFilterChip :checked="false">Блочный</UIFilterChip>
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Парковка</span>
          <div class="item__inputs">
            <UIFilterChip :checked="false">Закрытая</UIFilterChip>
            <UIFilterChip :checked="false">Подземная</UIFilterChip>
            <UIFilterChip :checked="false">Открытая</UIFilterChip>
          </div>
        </div>
      </div>

      <div class="modal-filters__env">
        <h5 class="h5">Расположение</h5>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Время до метро</span>
          <div class="item__inputs">
            <UIFilterChip
              v-for="metroDistanceOption in metroDistanceOptions"
              :key="metroDistanceOption"
              :checked="filterValues.metroDistance === metroDistanceOption"
              @click="setMetroDistance(metroDistanceOption)"
              >до {{ metroDistanceOption }} мин</UIFilterChip
            >
          </div>
        </div>
        <div class="modal-filters__item">
          <span class="text-20 item__title">Рядом</span>
          <div class="item__inputs">
            <UIFilterChip
              v-for="houseEnvOption in houseEnvOptions"
              :key="houseEnvOption"
              :checked="filterValues['houseEnvironment'].includes(houseEnvOption)"
              @click="addCheckValue('houseEnvironment', houseEnvOption)"
              >{{ houseEnvOption }}</UIFilterChip
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIFilterChip from '@/components/UIKit/UIFilterChip.vue'
import UIRangeInput from '@/components/UIKit/UIRangeInput.vue'
import { useFiltersStore } from '@/stores/filtersStore'
import { storeToRefs } from 'pinia'

const filtersStore = useFiltersStore()
const { addCheckValue } = filtersStore
const { filterValues } = storeToRefs(filtersStore)

const renoOptions = ['Дизайнерский', 'Современный', 'Евро', 'Косметический', 'Требует ремонта']
const goodsOptions = [
  'Стиральная машина',
  'Холодильник',
  'Телевизор',
  'Посудомоечная машина',
  'Кондиционер',
  'Wi-Fi',
]
const houseEnvOptions = ['Парк', 'Водоём', 'ТЦ', 'Фитнес', 'Аэропорт', 'Вокзал']
const metroDistanceOptions = [5, 10, 15, 20, 30]
const setFurniture = (newValue: boolean) => {
  if (filterValues.value['furniture'] === newValue) {
    filterValues.value['furniture'] = null
  } else {
    filterValues.value['furniture'] = newValue
  }
}

const setMetroDistance = (newValue: number) => {
  if (filterValues.value['metroDistance'] === newValue) {
    filterValues.value['metroDistance'] = null
  } else {
    filterValues.value['metroDistance'] = newValue
  }
}
</script>

<style scoped lang="scss">
.modal-filters {
  width: 1720px;
  height: 825px;
  padding: 70px 78px 130px;
  &__apart,
  &__house,
  &__env {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 43px;
  }

  &__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 70px;
    overflow-y: scroll;
  }

  &__item {
    display: flex;
    align-items: center;
    .item {
      &__title {
        width: 170px;
        margin-right: 12px;
      }
      &__inputs {
        display: flex;
        gap: 10px;
      }
    }
  }
}
</style>

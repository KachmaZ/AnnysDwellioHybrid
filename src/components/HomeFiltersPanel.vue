<template>
  <div class="home-filter">
    <div class="home-filter__wrapper">
      <div class="home-filter__row">
        <UISelect
          class="apart-type-select"
          :options="apartOptions"
          v-model="filterValues.apartType"
        />
        <div class="home-filter__rooms">
          <UIChoiceChip
            variant="primary"
            id="0"
            @click="() => addCheckValue('rooms', '0')"
            :checked="(filterValues.rooms as string[]).includes('0')"
            >Студия</UIChoiceChip
          >
          <UIChoiceChip
            :checked="(filterValues.rooms as string[]).includes('1')"
            variant="primary"
            name="rooms"
            id="1"
            @click="addCheckValue('rooms', '1')"
            >1</UIChoiceChip
          >
          <UIChoiceChip
            v-model="filterValues.rooms"
            variant="primary"
            name="rooms"
            id="2"
            @click="addCheckValue('rooms', '2')"
            :checked="(filterValues.rooms as string[]).includes('2')"
            >2</UIChoiceChip
          >
          <UIChoiceChip
            v-model="filterValues.rooms"
            variant="primary"
            name="rooms"
            id="3"
            @click="addCheckValue('rooms', '3')"
            :checked="(filterValues.rooms as string[]).includes('3')"
            >3</UIChoiceChip
          >
          <UIChoiceChip
            v-model="filterValues.rooms"
            variant="primary"
            name="rooms"
            id="4"
            @click="addCheckValue('rooms', '4')"
            :checked="(filterValues.rooms as string[]).includes('4')"
            >4+</UIChoiceChip
          >
        </div>
        <div
          class=""
          style="display: inline-flex; align-items: center; gap: 10px; white-space: nowrap"
        >
          Цена от
          <UIInput v-model="filterValues.priceMin" type="number" variant="price" />
          до
          <UIInput v-model="filterValues.priceMax" type="number" variant="price" />
        </div>
      </div>
      <div class="home-filter__row">
        <UISelect class="city-select" :options="cityOptions" v-model="filterValues.city" />
        <UIButtonMark :mark-value="filterValues.metro.length" @click="openModal(ModalMetroFilter)">
          Метро
        </UIButtonMark>
        <UIButtonMark>Район</UIButtonMark>
        <UIInput variant="search" :placeholder="'Адрес, ЖК'" style="width: 100%" />
      </div>
    </div>
    <div class="home-filter__controls">
      <UIButton variant="primary" @click="router.push({ name: 'hybridPage' })">Найти</UIButton>
      <UIButton v-show="false" variant="secondary" @click="router.push({ name: 'map' })"
        >На карте</UIButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import UIButton from './UIKit/UIButton.vue'
import UIButtonMark from './UIKit/UIButtonMark.vue'
import UIChoiceChip from './UIKit/UIChoiceChip.vue'
import UIInput from './UIKit/UIInput.vue'
import UISelect from './UIKit/UISelect.vue'
import ModalMetroFilter from './ModalWindow/components/ModalMetroFilter.vue'
import { useFiltersStore } from '@/stores/filtersStore'
import router from '@/router'
import { useModalStore } from '@/stores/modalStore'

const { filterValues } = storeToRefs(useFiltersStore())
const { openModal } = useModalStore()

const apartOptions = ['Квартира', 'Комната', 'Апартаменты', 'Дом', 'Таунхауз']
const cityOptions = ['Санкт-Петербург', 'Москва']

const addCheckValue = (filterField: string, newValue: string) => {
  if (filterValues.value[filterField]) {
    if (filterValues.value[filterField].includes(newValue)) {
      filterValues.value[filterField] = [
        ...filterValues.value[filterField].filter((el: string) => el !== newValue),
      ]
    } else {
      filterValues.value[filterField] = [...filterValues.value[filterField], newValue]
    }
  } else {
    console.warn('Filter field not found: ', filterField)
  }
}
</script>

<style scoped lang="scss">
.home-filter {
  width: 1310px;
  padding: 50px 50px 70px;

  display: flex;
  justify-content: space-between;
  gap: 70px;

  background-color: $white;

  border-radius: 30px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .apart-type-select {
      min-width: 200px;
    }

    .city-select {
      min-width: 270px;
    }
  }

  &__rooms {
    padding: 7px 16px;

    display: flex;
    gap: 4px;

    border: 2px solid $primary;
    border-radius: 25px;
  }

  &__controls {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

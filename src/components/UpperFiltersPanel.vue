<template>
  <div class="upper-filter">
    <UIButton variant="secondary" :icon="filterIcon" @click="() => openModal(ModalFilters)">
      Фильтры
    </UIButton>
    <UISelect :options="apartOptions" v-model="filterValues.apartType" style="min-width: 205px" />
    <div class="upper-filter__rooms">
      <UIChoiceChip
        v-model="filterValues.rooms"
        variant="primary"
        name="rooms"
        id="0"
        @click.stop="addCheckValue('rooms', '0')"
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
    <div class="" style="display: flex; align-items: center; gap: 10px; white-space: nowrap">
      Цена от
      <UIInput v-model="filterValues.priceMin" type="number" variant="price" />
      до
      <UIInput v-model="filterValues.priceMax" type="number" variant="price" />
    </div>
    <UIButtonMark :mark-value="filterValues.metro.length" @click="openModal(ModalMetroFilter)"
      >Метро</UIButtonMark
    >
    <UIButtonMark>Район</UIButtonMark>
    <UIInput variant="search" type="text" :placeholder="'Адрес, ЖК'" />
  </div>
</template>

<script setup lang="ts">
import UIButton from './UIKit/UIButton.vue'
import UISelect from './UIKit/UISelect.vue'
import UIChoiceChip from './UIKit/UIChoiceChip.vue'
import UIInput from './UIKit/UIInput.vue'
import UIButtonMark from './UIKit/UIButtonMark.vue'
import filterIcon from '@/assets/img/icons/filter.svg'

import { useFiltersStore } from '@/stores/filtersStore'

import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
import ModalFilters from './ModalWindow/components/ModalFilters.vue'
import ModalMetroFilter from './ModalWindow/components/ModalMetroFilter.vue'

const { filterValues } = storeToRefs(useFiltersStore())
const { openModal } = useModalStore()

const apartOptions = ['Квартира', 'Комната', 'Апартаменты', 'Дом', 'Таунхауз']
const addCheckValue = (filterField: string, newValue: string) => {
  if (filterValues.value[filterField] && typeof filterValues.value[filterField] === 'object') {
    if (filterValues.value[filterField].includes(newValue)) {
      filterValues.value[filterField] = filterValues.value[filterField].filter(
        (el: string) => el !== newValue,
      )
    } else {
      filterValues.value[filterField] = [...filterValues.value[filterField], newValue]
    }
  } else {
    console.warn('Filter field not found: ', filterField)
  }
}
</script>

<style scoped lang="scss">
.upper-filter {
  height: 50px;
  display: flex;
  justify-content: space-between;
  gap: 12px;

  &__rooms {
    padding: 7px 16px;

    display: flex;
    gap: 4px;

    border: 2px solid $primary;
    border-radius: 25px;
  }
}
</style>

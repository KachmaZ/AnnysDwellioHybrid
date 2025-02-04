import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import mockAparts from '@/data/aparts.json'
import type { ApartType } from '@/entities/apart'
import { useFiltersStore } from './filtersStore'

export const useApartsStore = defineStore('aparts', () => {
  const { applyFilters } = useFiltersStore()

  const aparts = ref<ApartType[]>(mockAparts)

  const getFilteredAparts = computed<ApartType[]>(() => applyFilters(aparts.value))

  const getApartById = computed(() => (id: number) => {
    return aparts.value.find((apart) => apart.id === id)
  })

  return { getFilteredAparts, getApartById }
})

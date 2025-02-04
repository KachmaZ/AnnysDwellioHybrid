import type { ApartType } from '@/entities/apart'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type FilterType = {
  field: string
  filterField?: string
  type: 'equals' | 'greater' | 'less' | 'in' | 'allIn'
}

export const useFiltersStore = defineStore('filters', () => {
  const filterValues = ref<Record<string, any>>({
    apartType: 'Квартира',
    city: 'Санкт-Петербург',
    rooms: [],
    metro: [],
    metroDistance: null,
    renovation: [],
    priceMin: null,
    priceMax: null,
    furniture: null,
    floorMin: null,
    floorMax: null,
    petsAndKids: [],
    goods: [],
    houseBuildYearMin: null,
    houseBuildYearMax: null,
    houseHeightMin: null,
    houseHeightMax: null,
    houseEnvironment: [],
  })

  const currentFilters = ref<Record<string, FilterType>>({
    apartType: {
      field: 'apartType',
      type: 'equals',
    },
    city: {
      field: 'city',
      type: 'equals',
    },
    rooms: {
      field: 'rooms',
      type: 'in',
    },
    metro: {
      field: 'metro',
      type: 'in',
    },
    metroDistance: {
      field: 'metroDistance',
      filterField: 'metroDistance',
      type: 'less',
    },
    priceMin: {
      field: 'price',
      filterField: 'priceMin',
      type: 'greater',
    },
    priceMax: {
      field: 'price',
      filterField: 'priceMax',
      type: 'less',
    },
    furniture: {
      field: 'furniture',
      type: 'equals',
    },
    floorMin: {
      field: 'floor',
      filterField: 'floorMin',
      type: 'greater',
    },
    floorMax: {
      field: 'floor',
      filterField: 'floorMax',
      type: 'less',
    },
    renovation: {
      field: 'renovation',
      type: 'in',
    },
    petsAndKids: {
      field: 'petsAndKids',
      type: 'allIn',
    },
    goods: {
      field: 'goods',
      type: 'allIn',
    },
    houseBuildYearMin: {
      field: 'houseBuildYear',
      filterField: 'houseBuildYearMin',
      type: 'greater',
    },
    houseBuildYearMax: {
      field: 'houseBuildYear',
      filterField: 'houseBuildYearMax',
      type: 'less',
    },
    houseHeightMin: {
      field: 'houseHeight',
      filterField: 'houseHeightMin',
      type: 'greater',
    },
    houseHeighMax: {
      field: 'houseHeight',
      filterField: 'houseHeightMax',
      type: 'less',
    },
    houseEnvironment: {
      field: 'houseEnvironment',
      type: 'allIn',
    },
  })

  const applyFilters = (apartsList: ApartType[]) => {
    let result: ApartType[] = [...apartsList]
    for (const currentFilter of Object.values(currentFilters.value)) {
      if (currentFilter.type === 'equals') {
        if (filterValues.value[currentFilter.field] !== null) {
          result = result.filter(
            (apart) =>
              apart[currentFilter.field as keyof ApartType] ===
              filterValues.value[currentFilter.field],
          )
        }
      }
      if (currentFilter.type === 'greater') {
        if (filterValues.value[currentFilter.filterField] !== null) {
          result = result.filter(
            (apart) =>
              Number(apart[currentFilter.field as keyof ApartType]) >=
              Number(filterValues.value[currentFilter.filterField]),
          )
        }
      }
      if (currentFilter.type === 'less') {
        if (filterValues.value[currentFilter.filterField] !== null) {
          result = result.filter(
            (apart) =>
              Number(apart[currentFilter.field as keyof ApartType]) <=
              Number(filterValues.value[currentFilter.filterField]),
          )
        }
      }
      if (currentFilter.type === 'in') {
        if ((filterValues.value[currentFilter.field] as string[]).length > 0) {
          result = result.filter((apart) => {
            return (filterValues.value[currentFilter.field] as string[]).includes(
              apart[currentFilter.field as keyof ApartType].toString(),
            )
          })
        }
      }
      if (currentFilter.type === 'allIn') {
        if ((filterValues.value[currentFilter.field] as string[]).length > 0) {
          result = result.filter((apart) =>
            (filterValues.value[currentFilter.field] as string[]).every((filterValue) =>
              (apart[currentFilter.field as keyof ApartType] as string[]).includes(filterValue),
            ),
          )
        }
      }
    }
    return result
  }

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

  return {
    currentFilters,
    filterValues,
    // getFilterValue,
    addCheckValue,
    applyFilters,
  }
})

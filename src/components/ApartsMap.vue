<template>
  <div>
    <YandexMap
      :settings="{
        location: {
          center: [30.3141, 59.9386],
          zoom: 9,
        },
      }"
      width="100%"
      height="640px"
      style="border-radius: 40px; overflow: hidden"
    >
      <YandexMapDefaultSchemeLayer />
      <YandexMapDefaultFeaturesLayer />
      <YandexMapMarker
        v-for="apart in getFilteredAparts"
        :key="apart.title"
        :settings="{
          coordinates: [apart.longitude, apart.latitude],
        }"
      >
        <UIMapMarker :apart="apart" />
      </YandexMapMarker>
    </YandexMap>
  </div>
</template>

<script setup lang="ts">
import UIMapMarker from '@/components/UIKit/UIMapMarker.vue'
import { useApartsStore } from '@/stores/apartsStore'
import { storeToRefs } from 'pinia'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

const { getFilteredAparts } = storeToRefs(useApartsStore())

// const markerClickHandler = async (id: number) => {
//   await router.push({ name: 'apartPage', params: { id } })
// }
</script>

<style scoped></style>

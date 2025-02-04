<template>
  <header>
    <div class="header-wrapper">
      <div class="header__nav">
        <RouterLink class="text-20" :to="{ name: 'home' }"
          ><img :src="logoSrc" alt="Logo"
        /></RouterLink>
        <RouterLink class="text-20 header__nav-link" :to="{ name: 'inProgress' }"
          >Покупка</RouterLink
        >
        <RouterLink class="text-20 header__nav-link" :to="{ name: 'apartsList' }"
          >Аренда</RouterLink
        >
        <RouterLink class="text-20 header__nav-link" :to="{ name: 'inProgress' }"
          >Продажа</RouterLink
        >
        <RouterLink class="text-20 header__nav-link" :to="{ name: 'inProgress' }"
          >Ипотека</RouterLink
        >
        <RouterLink class="text-20 header__nav-link" :to="{ name: 'inProgress' }"
          >Риелторы</RouterLink
        >
        <RouterLink class="text-20 header__nav-link" :to="{ name: 'inProgress' }">Блог</RouterLink>
      </div>

      <div class="header__controls">
        <UIButton variant="secondary" :icon="plusIcon">Разместить объявление</UIButton>
        <UIButtonIcon variant="secondary" :icon="searchIcon"></UIButtonIcon>
        <UIButtonIcon variant="secondary" :icon="heartIcon"></UIButtonIcon>
        <UIButton variant="secondary">Личный кабинет</UIButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import UIButton from '@/components/UIKit/UIButton.vue'
import UIButtonIcon from '@/components/UIKit/UIButtonIcon.vue'
import logoSrc from '@/assets/img/logo.svg'
import plusIcon from '@/assets/img/icons/plus.svg'
import heartIcon from '@/assets/img/icons/heart.svg'
import searchIcon from '@/assets/img/icons/search.svg'
</script>

<style scoped lang="scss">
.header {
  &-wrapper {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    display: flex;
    gap: 50px;

    &-link {
      text-decoration: none;
      color: $black;

      &:hover {
        border-bottom: 2px solid $primary;
      }

      &:focus,
      &.router-link-exact-active {
        border-bottom: 2px solid $hover;
        color: $primary;
      }
    }
  }

  &__controls {
    display: flex;
    gap: 12px;
  }
}
</style>

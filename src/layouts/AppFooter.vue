<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-column">
        <img :src="logoSrc" alt="logo" width="192" />
        <span class="text-20">Dwellio — надежный помощник в поиске жилья.</span>
        <span class="text-20" :style="{ marginBottom: 27 + 'px' }"
          >Поддержка доступна круглосуточно:</span
        >
        <span class="text-20">+7 (999) 999-99-99</span>
        <span class="text-20">support@dwellio.com</span>
        <span class="text-20">г. Москва, ул. Примерная, д. 1</span>
      </div>
      <div class="footer-column">
        <h6 class="h6">Недвижимость</h6>
        <span class="text-20">Квартиры</span>
        <span class="text-20">Дома и участки</span>
        <span class="text-20">Новостройки</span>
        <span class="text-20">Покупка</span>
        <span class="text-20">Аренда</span>
        <span class="text-20">Продажа</span>
      </div>
      <div class="footer-column">
        <h6 class="h6">Услуги</h6>
        <span class="text-20">Расчёт ипотеки</span>
        <span class="text-20">Подбор недвижимости</span>
        <span class="text-20">Проверка недвижимости</span>
        <span class="text-20">Аналитика</span>
        <span class="text-20">Риелторы</span>
        <span class="text-20">Страхование</span>
      </div>
      <div class="footer-column">
        <h6 class="h6">О компании</h6>
        <span class="text-20">О компании</span>
        <span class="text-20">Специалисты по недвижимости</span>
        <span class="text-20">Карьера</span>
        <span class="text-20">Партнёрам</span>
        <span class="text-20">Блог</span>
        <span class="text-20">Правовая информация</span>
      </div>
    </div>
    <div class="footer-icons">
      <UIButtonIcon variant="primary" :icon="tgIcon"></UIButtonIcon>
      <UIButtonIcon variant="primary" :icon="vcruIcon"></UIButtonIcon>
      <UIButtonIcon variant="primary" :icon="dzenIcon"></UIButtonIcon>
    </div>
    <div class="footer-copyright">
      <div class="">© 2024 Dwellio. Все права защищены.</div>
      <div class="footer-copyright__docs">
        <span>Условия предоставления услуг</span>
        <span>Политика конфиденциальности</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logoSrc from '@/assets/img/logo.svg'
import tgIcon from '@/assets/img/icons/tg.svg'
import vcruIcon from '@/assets/img/icons/vcru.svg'
import dzenIcon from '@/assets/img/icons/dzen.svg'
import UIButtonIcon from '@/components/UIKit/UIButtonIcon.vue'
</script>

<style scoped lang="scss">
.footer {
  &-wrapper {
    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;
  }

  &-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-icons {
    display: flex;
    gap: 24px;
    margin-bottom: 50px;
  }

  &-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: $grey-50;

    &__docs {
      display: flex;
      gap: 119px;
    }
  }
}
</style>

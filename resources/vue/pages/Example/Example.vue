<script lang="ts" setup>
import { useI18n, SUPPORT_LOCALES, changeLanguage } from '@/plugins/vueI18n';

const { t } = useI18n();

function handleChangeLanguage(event: Event) {
  changeLanguage((event.target as HTMLSelectElement).value);
}
</script>

<template>
  <select name="" @change="handleChangeLanguage">
    <option v-for="locale in SUPPORT_LOCALES" :key="locale" :value="locale">{{ locale }}</option>
  </select>
  <div class="example">{{ t('exampleText') }}</div>
  <BaseButton>Example global component</BaseButton>
</template>

<style scoped src="./Example.scss" lang="scss"></style>

<script lang="ts" setup>
import { useI18n } from '@/plugins/vueI18n';
const { t } = useI18n();
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__title">{{ t('view.notFound.pageTitle') }}</h1>
    <router-link class="not-found__back" to="/home">{{ t('view.notFound.goBackHome') }}</router-link>
  </div>
</template>

<style lang="scss" src="./NotFound.scss" scoped />

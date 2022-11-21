<script setup lang="ts">
import Breadcrumb from '@/components/BaseBreadcrumb';
import { BreadcrumbItem } from '@/types/local';
import LayoutHeaderNavbar from './LayoutHeaderNavbar.vue';
import { changeLanguage, SUPPORT_LOCALES } from '@/plugins/vueI18n';
import { useStore } from '@/store';

defineProps<{ breadcrumbs: Array<BreadcrumbItem> }>();
const store = useStore();
function showSidebar() {
  store.dispatch('setSidebarFlag', true);
}

function updateLocale(event: Event) {
  changeLanguage((event.target as HTMLSelectElement).value);
}
</script>

<template>
  <header class="header">
    <span class="header__hamburger-menu" @click="showSidebar">
      <i class="fas fa-bars"></i>
    </span>
    <Breadcrumb v-if="breadcrumbs" :items="breadcrumbs" />
    <select class="ms-auto" @input="updateLocale">
      <option v-for="locale in SUPPORT_LOCALES" :key="locale" :value="locale">{{ locale }}</option>
    </select>
    <LayoutHeaderNavbar />
  </header>
</template>

<style lang="scss" scoped src="./LayoutHeader.scss"></style>

<template>
  <header class="header">
    <Breadcrumb v-if="breadcrumbs" :items="breadcrumbs" />
    <HeaderNavbar />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from '@/components/BaseBreadcrumb';
import { BreadcrumbItem } from '@/types/local';
import HeaderNavbar from './LayoutHeaderNavbar.vue';

export default defineComponent({
  components: { Breadcrumb, HeaderNavbar },
  props: {
    breadcrumbs: {
      type: Array<BreadcrumbItem>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

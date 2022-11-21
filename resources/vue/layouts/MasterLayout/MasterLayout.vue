<template>
  <LayoutSidebar></LayoutSidebar>
  <section class="main-content" :class="masterLayoutClass">
    <LayoutHeader :breadcrumbs="breadcrumbs"></LayoutHeader>
    <section class="container">
      <slot></slot>
    </section>
    <LayoutFooter></LayoutFooter>
  </section>
  <Loading></Loading>
</template>
<script lang="ts" setup>
import './MasterLayout.scss';

import LayoutHeader from '../LayoutHeader';
import LayoutFooter from '../LayoutFooter';
import LayoutSidebar from '../LayoutSidebar';
import { BreadcrumbItem } from '@/types/local';
import Loading from '../Loading';

defineProps<{
  breadcrumbs: Array<BreadcrumbItem>;
  masterLayoutClass?: {
    text: string;
  };
}>();
</script>

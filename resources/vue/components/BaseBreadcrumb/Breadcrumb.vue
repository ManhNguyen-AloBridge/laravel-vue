<template>
  <ul class="breadcrumb p-0 m-0 d-flex">
    <li v-for="(item, key) in items" :key="key" class="breadcrumb__item">
      <router-link v-if="item.route && key < items.length - 1" :to="item.route">{{ item.text }}</router-link>
      <template v-else>
        {{ item.text }}
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import './Breadcrumb.scss';

import { defineComponent } from 'vue';
import { BreadcrumbItem } from '@/types/local';

export default defineComponent({
  props: {
    items: {
      type: Array<BreadcrumbItem>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

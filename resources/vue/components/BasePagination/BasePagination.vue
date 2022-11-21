<script lang="ts">
import './BasePagination.scss';

import { defineComponent } from 'vue';
import BasePaginationItem from './BasePaginationItem.vue';

export default defineComponent({
  components: { BasePaginationItem },
  props: {
    length: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    return {};
  },
  methods: {
    handleGoToPage(page: number) {
      if (page <= 0 || page > this.length) {
        return;
      }

      this.$emit('update:modelValue', page);
    },
  },
});
</script>

<template>
  <ul class="pagination">
    <BasePaginationItem :disabled="modelValue <= 1" :prev="true" @click="handleGoToPage(modelValue - 1)" />
    <BasePaginationItem v-for="n in length" :key="n" :active="modelValue === n" :label="n" @click="handleGoToPage(n)" />
    <BasePaginationItem :disabled="modelValue >= length" :next="true" @click="handleGoToPage(modelValue + 1)" />
  </ul>
</template>

<style scoped></style>

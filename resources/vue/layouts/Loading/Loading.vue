<template>
  <div
    class="loading"
    :class="{
      '--show': loadingFlag,
    }"
  >
    <div class="loading__container">
      <div class="loading__ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './Loading.scss';

import { computed } from 'vue';
import { useStore } from '@/store';

const store = useStore();
const loadingFlag = computed(() => store.state.loadingFlag);
</script>

<style scoped></style>

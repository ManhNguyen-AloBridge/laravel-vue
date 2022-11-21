<template>
  <div ref="gWindow" class="window">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import './BaseWindow.scss';

import { ref, onMounted, watch } from 'vue';

const props = defineProps<{
  modelValue: string | number;
}>();
const gWindow = ref();

function activeMenuItem(target: HTMLElement) {
  target.classList.add('--show');
  setTimeout(() => {
    target.classList.add('--active');
  }, 0);
}

function inactiveCurrentActiveItem() {
  const currentActiveItem = gWindow.value?.querySelector(`.window__item.--active`);
  currentActiveItem?.classList.remove('--show');
  currentActiveItem?.classList.remove('--active');
}

watch(
  () => props.modelValue,
  (value: string | number) => {
    const windowElement = gWindow.value as HTMLDivElement;
    const windowItem = windowElement.querySelector(`.window__item[data-target="${value}"]`) as HTMLElement;
    if (windowItem) {
      inactiveCurrentActiveItem();
      activeMenuItem(windowItem);
    }
  },
);

onMounted(() => {
  const windowElement = gWindow.value as HTMLDivElement;
  const windowItem = windowElement.querySelector(`.window__item[data-target="${props.modelValue}"]`);
  if (windowItem) {
    activeMenuItem(windowItem as HTMLElement);
  }
});
</script>

<style scoped></style>

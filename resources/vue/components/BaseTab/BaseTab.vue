<template>
  <div ref="tabMenu" class="tab" @click="handleClickItem">
    <div ref="slider" class="tab__active-slider --init"></div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import './BaseTab.scss';

import { ref, onMounted } from 'vue';

const props = defineProps<{
  modelValue: string | number;
}>();
const emit = defineEmits(['update:modelValue']);

const tabMenu = ref();
const slider = ref();

function handleClickItem(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.classList.contains('--active')) {
    return;
  }

  // eslint-disable-next-line vue/require-explicit-emits
  emit('update:modelValue', target.getAttribute('data-target')); // using mixin
  inactiveCurrentMenuItem();
  activeMenuItem(target);
  updateActiveSlider(target);
}

function activeMenuItem(target: HTMLElement) {
  target.classList.add('--active');
}

function inactiveCurrentMenuItem() {
  const activeTabMenuItem = getCurrentActiveItem();
  activeTabMenuItem?.classList.remove('--active');
}

function getCurrentActiveItem(): HTMLElement | null {
  return tabMenu.value?.querySelector(`.tab__item.--active`);
}

function updateActiveSlider(menuItem: HTMLElement) {
  const sliderElement = slider.value as HTMLDivElement;
  sliderElement.style.left = menuItem.offsetLeft + 'px';
  sliderElement.style.width = menuItem.clientWidth + 'px';
}

onMounted(() => {
  const tabMenuElement = tabMenu.value as HTMLDivElement;

  const tabMenuItem = tabMenuElement.querySelector(
    `span.tab__item[data-target="${props.modelValue}"]`,
  ) as HTMLSpanElement;
  if (tabMenuItem) {
    activeMenuItem(tabMenuItem);
    updateActiveSlider(tabMenuItem);
  }
  setTimeout(() => {
    (slider.value as HTMLDivElement).classList.remove('--init');
  }, 200);
});

window.onresize = () => {
  const currentActiveItem = getCurrentActiveItem();
  if (currentActiveItem) {
    updateActiveSlider(currentActiveItem);
  }
};
</script>

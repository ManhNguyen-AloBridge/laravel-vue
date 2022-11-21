<script setup lang="ts">
import { computed, ref } from 'vue';
import './BaseSelectSearch.scss';

type Option = {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  disabled?: boolean;
};

interface Props {
  options: Array<Option>;
  modelValue: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  labelKey: string;
  valueKey: string;
}
const props = withDefaults(defineProps<Props>(), {
  labelKey: 'title',
  valueKey: 'id',
});
const emit = defineEmits(['update:modelValue']);
const searchKey = ref('');
const selectedLabel = ref('');
const showOptionFlg = ref(false);
const select = ref();
const optionList = ref();

const filteredOptions = computed(() => {
  if (!searchKey.value) {
    return props.options;
  }

  return props.options?.filter((option: Option) => option.label.toLowerCase().includes(searchKey.value.toLowerCase()));
});

function handleSelect(option: Option) {
  selectedLabel.value = option[props.labelKey];
  hideOptionList();
  emit('update:modelValue', option.value, option);
}

function handleClickOutsideOptionList(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('select2__rendered')) {
    return;
  }
  hideOptionList();
}

function hideOptionList() {
  showOptionFlg.value = false;
}

function toggleOptionList() {
  if (showOptionFlg.value) {
    hideOptionList();
    return;
  }

  showOptionList();
}

function showOptionList() {
  showOptionFlg.value = true;

  const { x } = (select.value as HTMLElement).getClientRects()[0];
  const positionClass = x - window.innerHeight > 400 ? '--bottom' : '--top';
  (optionList.value as HTMLElement).classList.replace('--bottom', positionClass);
  (optionList.value as HTMLElement).classList.replace('--top', positionClass);
}
</script>

<template>
  <div
    ref="select"
    class="select2"
    :class="{
      '--open': showOptionFlg,
    }"
  >
    <span class="select2__rendered" @click.prevent="toggleOptionList">{{ selectedLabel }}</span>
    <div v-click-outside="handleClickOutsideOptionList" class="select2__option-box">
      <input v-model.trim="searchKey" class="select2__search" />
      <ul ref="optionList" class="select2__options">
        <template v-if="filteredOptions.length > 0">
          <li
            v-for="option in filteredOptions"
            :key="option.value"
            class="select2__option"
            :class="{
              '--selected': option.value === modelValue,
            }"
            @click="handleSelect(option)"
          >
            {{ option.label }}
          </li>
        </template>
        <li v-else class="select2__option">There is no result</li>
      </ul>
    </div>
  </div>
</template>

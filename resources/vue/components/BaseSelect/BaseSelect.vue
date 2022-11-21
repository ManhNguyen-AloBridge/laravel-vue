<script lang="ts">
import './BaseSelect.scss';
import { defineComponent } from 'vue';

type ItemObject = {
  [key: string]: number | string;
};

type Item = any | ItemObject;

export default defineComponent({
  props: {
    items: {
      type: Array<Item>,
    },
    labelKey: {
      type: String,
      default: 'title',
    },
    valueKey: {
      type: String,
      default: 'id',
    },
    modelValue: {
      type: [Number, String],
      required: false,
    },
    nullOptionTitle: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    getValue(item: Item) {
      if (typeof item === 'object') {
        return item[this.valueKey ?? 'id'];
      }

      return item;
    },
    getTitle(item: Item) {
      if (typeof item === 'object') {
        return item[this.labelKey ?? 'title'];
      }

      return item;
    },
    updateInput(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<template>
  <select class="select" :value="modelValue" @input="updateInput">
    <slot>
      <option v-if="nullOptionTitle" value="">{{ nullOptionTitle }}</option>
      <option v-for="(item, key) in items" :key="key" :value="getValue(item)">{{ getTitle(item) }}</option>
    </slot>
  </select>
</template>

<style scoped></style>

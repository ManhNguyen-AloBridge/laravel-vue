<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: String,
    labelClass: String,
    rowClass: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
  methods: {
    handleUpdate(...args: any[]) {
      this.$emit('update:modelValue', ...args);
    },
  },
});
</script>

<template>
  <div class="form__row" :class="rowClass">
    <BaseLabel v-if="label" :class="labelClass">{{ label }}</BaseLabel>
    <slot>
      <BaseInput
        v-bind="$attrs"
        :model-value="modelValue"
        :placeholder="placeholder || label"
        @update:modelValue="handleUpdate"
      />
    </slot>
  </div>
</template>

<style scoped></style>

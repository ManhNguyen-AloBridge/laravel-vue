<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
    },
    groupClass: String,
    label: String,
    placeholder: String,
    error: String,
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
  <div class="form__group" :class="groupClass">
    <BaseLabel v-if="label">{{ label }}</BaseLabel>
    <slot>
      <BaseInput
        v-bind="$attrs"
        :model-value="modelValue"
        :placeholder="placeholder || label"
        @update:modelValue="handleUpdate"
      />
    </slot>
    <BaseError :value="error" />
  </div>
</template>

<style scoped></style>

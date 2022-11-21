<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    size: {
      type: String,
      default: 'md',
      validator(value: string) {
        return ['md', 'sm', 'lg'].includes(value.toLowerCase());
      },
    },
    modelValue: [String, Number],
  },
  emits: ['update:modelValue'],
  setup() {
    return {};
  },
  computed: {
    classes() {
      return {
        form__input: true,
        [`--${this.size}`]: true,
      };
    },
  },
  methods: {
    updateInput(event: Event) {
      if (this.$attrs.disabled || this.$attrs.readonly) return;

      this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<template>
  <input :class="classes" type="text" :value="modelValue" @input="updateInput" />
</template>

<style scoped></style>

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
  },
  setup() {
    return {};
  },
  computed: {
    classes() {
      return {
        form__textarea: true,
        [`--${this.size}`]: true,
      };
    },
  },
});
</script>

<template>
  <textarea :class="classes" type="text"></textarea>
</template>

<style scoped></style>

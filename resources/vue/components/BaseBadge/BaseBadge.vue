<script lang="ts">
import './BaseBadge.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(value: string) {
        return ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].includes(
          value.toLowerCase(),
        );
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value: string) {
        return ['xs', 'sm', 'md', 'lg', 'x-lg'].includes(value.toLowerCase());
      },
    },
  },
  computed: {
    classes() {
      return {
        [`--${this.size}`]: true,
        [`--${this.color}`]: true,
      };
    },
  },
});
</script>

<template>
  <span class="badge" :class="classes"><slot></slot></span>
</template>

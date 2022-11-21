<template>
  <RouterLink v-if="isLink" :class="classes" :to="to"><slot></slot></RouterLink>
  <button v-else :class="classes">
    <slot> </slot>
  </button>
</template>

<script lang="ts">
import './BaseButton.scss';
import { Route } from '@/types/local';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
      validator(value: string) {
        return ['xs', 'sm', 'md', 'lg', 'x-lg'].includes(value.toLowerCase());
      },
    },
    variant: {
      type: String,
      default: 'fill',
      validator(value: string) {
        return ['outline', 'fill', 'plain-text'].includes(value.toLowerCase());
      },
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    onlyIcon: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    to: {
      type: Object as () => Route,
    },
  },
  setup() {
    return {};
  },
  computed: {
    classes() {
      const colorValue = `--${this.variant === 'fill' ? '' : this.variant + '-'}${this.color}`;

      return {
        btn: true,
        [`--${this.size}`]: !!this.size,
        '--active': this.active,
        'w-100': this.fullWidth,
        [colorValue]: true,
        '--only-icon': this.onlyIcon,
      };
    },
  },
});
</script>

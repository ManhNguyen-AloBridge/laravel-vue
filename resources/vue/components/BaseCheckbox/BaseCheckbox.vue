<template>
  <div class="checkbox" :class="classes">
    <input v-bind="$attrs" :id="id" class="checkbox__input" type="checkbox" />
    <label class="checkbox__label" :for="id"><slot></slot></label>
  </div>
</template>

<script lang="ts">
import './BaseCheckbox.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
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
    id: {
      type: String,
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
    },
  },
  setup() {
    return {};
  },
  computed: {
    classes() {
      return {
        [`--${this.color}`]: true,
        '--switch': this.isSwitch,
        [this.class ?? '']: true,
      };
    },
  },
});
</script>

<style scoped></style>

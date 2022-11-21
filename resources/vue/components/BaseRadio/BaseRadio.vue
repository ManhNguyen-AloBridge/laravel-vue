<script lang="ts">
import './BaseRadio.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: String,
    name: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: 'primary',
      validator(value: string) {
        return ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].includes(
          value.toLowerCase(),
        );
      },
    },
  },
  setup() {
    return {};
  },
  computed: {
    classes() {
      return {
        radio: true,
        [`--${this.color}`]: true,
        [`${this.$attrs.class}`]: !!this.$attrs.class,
      };
    },
  },
});
</script>

<template>
  <div class="radio" :class="classes">
    <input :id="id" class="radio__input" :name="name" type="radio" />
    <label class="radio__label" for="id"><slot></slot></label>
  </div>
</template>
<style scoped></style>

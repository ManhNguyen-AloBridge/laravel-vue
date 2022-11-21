<template>
  <div class="window__item" :data-target="value">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

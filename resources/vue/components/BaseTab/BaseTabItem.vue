<template>
  <span aria-selected="true" class="tab__item" :data-target="value" role="tab" tabindex="0">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

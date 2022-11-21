<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    next: {
      type: Boolean,
      default: false,
    },
    prev: {
      type: Boolean,
      default: false,
    },
    label: [String, Number],
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
  computed: {
    classes() {
      return {
        pagination__item: true,
        '--active': this.active,
      };
    },
  },
});
</script>

<template>
  <li :class="classes">
    <a class="pagination__link" :class="{ '--disabled': disabled }" href="javascript:;">
      {{ prev || next ? null : label }}
      <i v-if="prev" class="fa fa-angle-left"></i>
      <i v-if="next" class="fa fa-angle-right"></i>
    </a>
  </li>
</template>

<style scoped></style>

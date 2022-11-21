<script lang="ts">
import './BaseTag.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true,
    },
    input: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputAttrs() {
      return { ...this.$attrs, class: '', type: 'hidden', value: this.$attrs.value ?? this.title };
    },
  },
});
</script>

<template>
  <div class="tag" :class="$attrs.class">
    <span class="tag__content">{{ title }}</span>
    <input v-if="input" v-bind="inputAttrs" />
    <span class="tag__remove-icon">×</span>
  </div>
</template>

<style scoped></style>

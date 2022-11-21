<script lang="ts">
import './BaseCard.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    headerClass: String,
    bodyClass: String,
    content: String,
    header: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
  methods: {
    hasSlot(slotName: string) {
      return this.$slots[slotName];
    },
  },
});
</script>

<template>
  <div class="card">
    <div v-if="header" class="card__header">
      <h5 v-if="title" class="card__label">{{ title }}</h5>
      <slot name="header"> </slot>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
  </div>
</template>

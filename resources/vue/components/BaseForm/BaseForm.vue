<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import './BaseForm.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

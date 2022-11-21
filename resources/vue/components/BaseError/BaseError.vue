<template>
  <span v-if="value" class="validate-error">{{ value }}</span>
</template>

<script setup lang="ts">
import './BaseError.scss';

defineProps<{
  value?: string;
}>();
</script>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<style></style>

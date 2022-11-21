<!-- https://flatpickr.js.org/examples/ -->
<template>
  <flat-pickr v-model="date" class="form__input" :config="config" :disabled="disabled"></flat-pickr>
  <BaseError :error="error" />
</template>

<script lang="ts">
import './BaseDatePicker.scss';

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    altFormat: {
      type: String,
    },
    altInput: Boolean,
    dateFormat: {
      type: String,
      default: 'Y-m-d',
    },
    enableTime: Boolean,
    noCalendar: Boolean,
    time24hr: Boolean,
    value: String,
    onChange: Function,
    error: String,
    disabled:Boolean
  },
  setup() {
    return {};
  },
  data() {
    return {
      date: null,
    };
  },
  computed: {
    config() {
      return {
        wrap: true,
        altFormat: this.altFormat,
        altInput: this.altInput,
        dateFormat: this.dateFormat,
        enableTime: this.enableTime,
        noCalendar: this.noCalendar,
        time_24hr: this.time24hr,
      };
    },
  },
  watch: {
    value(newValue, oldValue) {
      this.date = newValue;
    },
  },
  methods: {
    // onChange() {
    // }
  },
});
</script>

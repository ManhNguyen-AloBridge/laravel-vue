<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      showPasswordFlag: false,
    };
  },
  methods: {
    handleUpdate(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<template>
  <div class="password-input">
    <BaseInput
      v-bind="$attrs"
      :type="showPasswordFlag ? 'text' : 'password'"
      :value="modelValue"
      @input="handleUpdate"
    />
    <span class="password-input__toggle" @click="showPasswordFlag = !showPasswordFlag">
      <i v-show="showPasswordFlag" class="fa fa-eye"></i>
      <i v-show="!showPasswordFlag" class="fa fa-eye-slash"></i>
    </span>
  </div>
</template>

<style scoped lang="scss" src="./BasePasswordInput.scss"></style>

<template>
  <div ref="modal" class="modal">
    <div class="modal__overlay">
      <div v-click-outside="onClickOutside" class="modal__dialog">
        <slot>
          <div class="modal__header">
            <slot name="header">
              <h5 class="modal__title">{{ title }}</h5>
            </slot>
          </div>
          <div class="modal__body">
            <slot name="body"></slot>
          </div>
          <div class="modal__footer">
            <slot name="footer"> </slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';
import './BaseModal.scss';

const props = defineProps({
  title: String,
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const modal = ref();

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.body.classList.add('modal-open');
      document.body.style.paddingRight = window.innerHeight < document.body.clientHeight ? '15px' : '0px';
      modal.value.classList.add('--display');
      modal.value.classList.add('--show');
    } else {
      modal.value.classList.remove('--show');
      setTimeout(() => {
        document.body.style.paddingRight = '';
        document.body.classList.remove('modal-open');
        modal.value.classList.remove('--display');
      }, 300);
    }
  },
);

function onClickOutside(event: MouseEvent) {
  if (props.modelValue && (event.target as HTMLElement)?.closest('.modal')) {
    closeModal();
  }
}

function closeModal() {
  emit('update:modelValue', false);
}

onUnmounted(() => {
  document.body.style.paddingRight = '';
  document.body.classList.remove('modal-open');
});
</script>

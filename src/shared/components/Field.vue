<template>
  <div class="field">
    <slot />
    <div v-if="meta.touched || meta.dirty" class="field__error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import { provide } from 'vue';

const { name } = defineProps<{
  name: string;
}>();

const { value, meta, errorMessage } = useField<string>(name);

provide('field', {
  value,
  name,
});
</script>

<style scoped lang="scss">
.field {
  position: relative;

  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    text-align: left;
    color: var(--error-color);
  }
}
</style>

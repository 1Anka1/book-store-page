<template>
  <div class="select">
    <Multiselect
      v-model="modelValue"
      :options="options"
      searchable
      track-by="value"
      label="label"
    />
  </div>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';

defineProps<{
  options:
    | { value: string; label: string }[]
    | ((query: string) => Promise<{ value: string; label: string }[]>);
}>();

const modelValue = defineModel<string | null>();
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped lang="scss">
.select {
  --ms-option-bg-selected: var(--primary-color);
  --ms-option-bg-selected-pointed: var(--primary-color);
  --ms-radius: 0;
  --ms-border-width: 0;

  width: 100%;
  min-width: 200px;
}
</style>

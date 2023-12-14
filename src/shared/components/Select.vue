<template>
  <div class="select">
    <Multiselect
      ref="multiselect"
      v-model="modelValue"
      :options="optionsToShow"
      searchable
      track-by="value"
      value-prop="value"
      label="label"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import { computed } from 'vue';
import { watch } from 'vue';

const { options } = defineProps<{
  options:
    | { value: string; label: string }[]
    | ((query: string) => Promise<{ value: string; label: string }[]>);
}>();

const multiselect = ref<InstanceType<typeof Multiselect>>();
const search = computed(() => multiselect.value?.search || '');

const localOptions = ref<{ value: string; label: string }[]>([]);
const optionsToShow = computed(() =>
  localOptions.value.filter((option) =>
    option.label.toLowerCase().includes(multiselect.value!.search.toLowerCase()),
  ),
);

watch(
  search,
  async () => {
    if (typeof options === 'function') {
      localOptions.value = await options(search.value);
    } else {
      localOptions.value = [...options];
    }
  },
  {
    immediate: true,
  },
);

const modelValue = defineModel<string | null>();
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped lang="scss">
:deep(.multiselect) {
  .multiselect-wrapper {
    padding: 12px 20px;
  }
}

.select {
  --ms-option-bg-selected: var(--primary-color);
  --ms-option-bg-selected-pointed: var(--primary-color);
  --ms-radius: 0;
  --ms-border-width: 0;

  width: 100%;
  min-width: 200px;
}
</style>

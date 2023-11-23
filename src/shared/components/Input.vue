<template>
  <div class="input">
    <input
      v-model="modelValue"
      :type="type"
      :name="field?.name"
      class="input__field"
      :placeholder="placeholder"
      @keydown.enter="$emit('enter')"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, type Ref } from 'vue';

defineEmits<{
  enter: [];
}>();

defineProps<{
  type?: 'email' | 'text' | 'password';
  placeholder?: string;
}>();

const field = inject<{ value: Ref<string>; name: string }>('field');

const isFocused = ref(false);

const modelValue = defineModel<string>();

// TODO: add handler from parent when email changed

const onInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement;

  modelValue.value = value;
  if (field) {
    field.value.value = value;
  }
};
</script>

<style scoped lang="scss">
.input {
  &__field {
    width: 100%;
    border: 0;
    padding: 12px 20px;
  }
}
</style>

<template>
  <div>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      @keydown.enter="$emit('enter')"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  enter: [];
}>();

defineProps<{
  type?: 'email' | 'text' | 'password';
  placeholder?: string;
}>();

const modelValue = defineModel<string>();
</script>

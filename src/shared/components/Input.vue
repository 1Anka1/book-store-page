<template>
  <input
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
    @keydown.enter="$emit('enter')"
  />
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

<style>
.form-control {
  width: 40%;
  border: 0px;
  padding: 12px 20px;
}
</style>

<template>
  <button
    type="button"
    class="button"
    :class="[
      {
        'button--outline': outline,
        [`button--${color}`]: color,
      },
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  click: [];
}>();

const { color = 'primary' } = defineProps<{
  outline?: boolean;
  color?: 'primary' | 'secondary';
}>();
</script>

<style scoped lang="scss">
.button {
  background-color: var(--primary-color);
  border: 1px solid transparent;
  padding: 10px 40px;
  color: var(--secondary-color);
  font-family: var(--secondary-font);
  cursor: pointer;
  transition: all 0.25s var(--timing-function);
  transition-property: background-color, border-color, color;

  &:hover {
    color: var(--primary-color);
    background: none;
    border-color: var(--primary-color);
  }

  &--outline {
    background: none;
    border-color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }
  }

  &--secondary {
    background-color: var(--secondary-color);
    color: var(--primary-text-color);

    &:hover {
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }
}
</style>

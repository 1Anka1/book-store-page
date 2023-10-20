<template>
  <div
    class="title"
    :class="[
      {
        'title--center': center,
        [`title--${color}`]: color,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  center?: boolean;
  color?: 'light' | 'blue';
}>();
</script>

<style scoped lang="scss">
.title {
  font-family: var(--secondary-font);
  color: var(--secondary-color);
  margin-bottom: 40px;
  font-size: 40px;
  padding-bottom: 10px;
  position: relative;

  &--center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &::after {
    position: absolute;
    display: block;
    content: '';
    top: 100%;
    background: var(--primary-color);
    width: 55px;
    height: 3px;
  }

  &--light {
    color: var(--primary-text-color);
  }

  &--blue {
    &::after {
      background: var(--secondary-color);
    }
  }
}
</style>

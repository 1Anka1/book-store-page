<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__wrapper">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  &__wrapper {
    background: #fff;
    padding: 20px;
  }
}
</style>

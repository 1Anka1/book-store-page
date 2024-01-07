<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__container-list">
        <svg class="icon" width="25" height="28">
          <use href="@/assets/images/sprite.svg#page"></use>
        </svg>
        <h1 class="caption--logo">Pages</h1>
      </div>
      <ul class="header__social-network-list">
        <li>
          <a class="social-network-link" href="#">
            <svg class="social-network-icon" width="18" Height="18">
              <use href="@/assets/images/sprite.svg#facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a class="social-network-link" href="#">
            <svg class="social-network-icon" width="18" Height="18">
              <use href="@/assets/images/sprite.svg#twitter"></use>
            </svg>
          </a>
        </li>
        <li>
          <a class="social-network-link" href="#">
            <svg class="social-network-icon" width="18" Height="18">
              <use href="@/assets/images/sprite.svg#linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
      <nav class="header__navigation" :class="{ 'header__navigation--opened': isMenuOpen }">
        <button class="header__close" @click="isMenuOpen = false">
          <span></span>
          <span></span>
        </button>
        <ul class="header__nav-list">
          <li>
            <a class="header__nav-link" href="#">Home</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">Pages</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">About</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">Services</a>
          </li>
          <li>
            <a class="header__nav-link" href="#">Contact</a>
          </li>
          <li v-if="!isMenuOpen" class="header__nav-list-badge">
            <a href="#">
              <svg class="header__basket-icon" width="18" height="17">
                <use href="@/assets/images/sprite.svg#basket"></use>
              </svg>
              <span class="header__badge">01</span>
            </a>
          </li>
        </ul>
      </nav>
      <Button class="header__button">Order Today</Button>
      <button class="header__burger" @click="isMenuOpen = true">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style lang="scss">
.header {
  background-color: var(--secondary-color);

  &__container {
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;

    @include breakpoint($screen-lg) {
      justify-content: unset;
    }
  }

  &__container-list {
    display: flex;
    margin-right: 25px;
  }

  &__social-network-list {
    display: none;
    justify-content: center;
    align-items: center;

    > li:not(:last-child) {
      margin-right: 10px;
    }

    @include breakpoint($screen-lg) {
      display: flex;
    }
  }

  &__navigation {
    margin-left: auto;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    width: var(--breakpoint-sm);
    transform: translateY(-100%);
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.4s var(--timing-function);

    @include breakpoint($screen-lg) {
      position: static;
      transform: none;
      background: none;
    }

    &--opened {
      transform: translateY(0);
    }
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    column-gap: 30px;

    @include breakpoint($screen-lg) {
      color: #fff;
      flex-direction: row;
    }
  }

  &__nav-list-badge {
    top: 10px;
    position: relative;
    display: inline-block;
  }

  &__nav-link {
    color: var(--primary-color);
    font-size: 17px;
    line-height: 22px;
    display: block;
    text-align: center;
    padding: 10px 0;
    transition: color 250ms var(--timing-function);

    @include breakpoint($screen-lg) {
      color: #fff;
    }

    &:hover {
      color: var(--primary-color);
    }
  }

  &__basket-icon {
    margin-right: 30px;
  }

  &__badge {
    position: absolute;
    top: -7px;
    right: 21px;
    background-color: var(--primary-color);
    color: var(--dark-color);
    border-radius: 50%;
    padding: 2px 4px;
    font: 800 8px/1.5 var(--primary-font);
  }

  &__button {
    display: none;

    @include breakpoint($screen-lg) {
      display: block;
    }
  }

  &__burger {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: none;
    border: 0;
    padding: 10px;
    width: 45px;
    height: 40px;

    @include breakpoint($screen-lg) {
      display: none;
    }

    span {
      background: var(--primary-color);
      height: 2px;
      width: 100%;
    }
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: none;
    border: 0;

    @include breakpoint($screen-lg) {
      display: none;
    }

    span {
      background: var(--dark-color);
      height: 2px;
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      transform-origin: center;
      transition: transform 0.4s var(--timing-function);

      &:first-child {
        transform: translateY(-50%) rotate(45deg);
      }

      &:last-child {
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
}
</style>

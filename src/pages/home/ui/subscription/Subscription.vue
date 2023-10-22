<template>
  <section class="subscription section">
    <div class="subscription__container container">
      <div class="subscription__wrapper">
        <Title center color="blue">Read a free chapter</Title>
        <p class="subscription__description">
          Making this the first true value generator on the Internet. It of over 200 Latin words,
          combined with a handful.
        </p>
        <div class="subscription__input-group">
          <Input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Your Email"
            aria-label="Your Email"
            aria-describedby="button-addon2"
            @enter="subscribe"
          />
          <Button color="secondary" @click="subscribe">Subscribe</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const subscribe = () => {
  console.log(email.value);
};
</script>

<style lang="scss">
.subscription {
  &__wrapper {
    background-color: var(--primary-color);
    text-align: center;
    color: var(--secondary-color);
    padding: 100px;
  }

  &__description {
    width: 500px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  &__input-group {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>

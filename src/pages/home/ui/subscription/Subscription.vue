<template>
  <section class="subscription section">
    <div class="subscription__container container">
      <div class="subscription__wrapper">
        <Title center color="blue">Read a free chapter</Title>
        <p class="subscription__description">
          Making this the first true value generator on the Internet. It of over 200 Latin words,
          combined with a handful.
        </p>
        <div class="subscription__subscription-wrapper">
          <form class="subscription__input-group" @submit.prevent="onSubmit">
            <Field name="email">
              <Input type="email" placeholder="Your Email" />
            </Field>
            <Button type="submit" color="secondary">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';

const { handleSubmit } = useForm({
  initialValues: {
    email: '',
  },
  validationSchema: yup.object({
    email: yup.string().email().required().label('Email'),
  }),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
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

  &__subscription-wrapper {
    display: flex;
    justify-content: center;
  }

  &__input-group {
    display: flex;
    max-width: 500px;
    gap: 10px;
  }
}
</style>

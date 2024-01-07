<template>
  <section class="testimonial section">
    <div class="testimonial__container container">
      <div>
        <Title>What Readers Say About the Book</Title>
        <p class="testimonial__book-description">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
        </p>
        <div class="testimonial__rating">(4.8/5)</div>
        <p>Overall Customer Ratings</p>
      </div>
      <div class="testimonial__block">
        <div v-show="isLoading">Loading...</div>
        <div class="testimonial__grid-container">
          <div
            v-for="testimonial in testimonialsStore.testimonialsReaders"
            :key="testimonial.id"
            class="testimonial__user-review"
          >
            <div class="testimonial__user">
              <img
                class="testimonial__user-photo"
                :src="testimonial.avatar"
                width="85"
                height="85"
                alt="User Photo"
              />
              <h3 class="testimonial__user-name">
                {{ testimonial.first_name }} {{ testimonial.last_name }}
              </h3>
            </div>
            <h3 class="testimonial__comment">“Awesome Impact”</h3>
            <p class="testimonial__review">
              All the Lorem Ipsum generators on the Internet tend to repeat willings predefined
              chunks value.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useTestimonialsStore } from '@/stores/useTestimonialsStore';

const testimonialsStore = useTestimonialsStore();

const isLoading = ref(false);

const fetchTestimonials = async () => {
  isLoading.value = true;
  await testimonialsStore.fetchTestimonials();
  isLoading.value = false;
};

onBeforeMount(fetchTestimonials);
</script>

<style lang="scss">
.testimonial {
  &__container {
    @include breakpoint($screen-lg) {
      display: grid;
      gap: 110px;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  &__book-description {
    margin-bottom: 30px;
  }

  &__rating {
    display: block;
    padding-left: 25px;
    position: relative;
    font: 700 20px/1.5 var(--secondary-font);
    color: var(--secondary-color);
    margin-bottom: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      background-color: var(--primary-color);
      border-radius: 50%;
    }
  }

  .testimonial__grid-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;

    @include breakpoint($screen-md) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
  }

  &__user-photo {
    border-radius: 50%;
  }

  &__user-review {
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-color);
  }

  &__review {
    color: var(--light-color);
  }

  &__user {
    display: grid;
    place-items: center;
    grid-template-columns: 100px auto;
    gap: 5px;
    margin-bottom: 20px;
  }

  &__user-name {
    font: 700 18px var(--secondary-font);
    color: var(--primary-text-color);
  }

  &__comment {
    color: var(--primary-text-color);
    font: 700 15px/1.5 var(--secondary-font);
    margin: 10px 0;
  }
}
</style>

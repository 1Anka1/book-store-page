import { ofetch } from 'ofetch';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface Testimonial {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const useTestimonialsStore = defineStore('testimonials', () => {
  const testimonials = ref<Testimonial[]>([]);
  const testimonialsReaders = computed(() => testimonials.value.slice(0, 3));

  const fetchTestimonials = async () => {
    const res = await ofetch<{
      data: Testimonial[];
      page: number;
      per_page: number;
      support: {
        url: string;
        text: string;
      };
      total: number;
      total_pages: number;
    }>('https://reqres.in/api/users?page=2');

    testimonials.value = res.data;
  };

  return {
    testimonials,
    testimonialsReaders,
    fetchTestimonials,
  };
});

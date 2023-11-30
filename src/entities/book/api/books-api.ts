import { ofetch } from 'ofetch';
import type { BookResponse } from '..';

export const booksApi = {
  searchBooks: async (query: string) => {
    const data = await ofetch<BookResponse>(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`,
    );

    return data.items;
  },
};

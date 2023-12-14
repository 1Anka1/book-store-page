import { booksApi } from '../api/books-api';

export const useBook = () => {
  const searchBooks = async (query: string) => {
    return booksApi.searchBooks(query);
  };

  const searchBooksToSelect = async (query: string) => {
    if (query === '') {
      return [];
    }

    const books = await searchBooks(query);

    return (
      books?.map((book) => ({
        label: book.volumeInfo.title,
        value: book.id,
      })) ?? []
    );
  };

  return { searchBooks, searchBooksToSelect };
};

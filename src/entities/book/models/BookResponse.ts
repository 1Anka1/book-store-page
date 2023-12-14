import type { Book } from './Book';

export interface BookResponse {
  kind: string;
  totalItems: number;
  items?: Book[];
}

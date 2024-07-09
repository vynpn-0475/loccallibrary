import { Book } from '../entity/Book.entity';
import { AppDataSource } from '../config/data-source';

const bookRepository = AppDataSource.getRepository(Book);

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async getIndexDataBook() {
      return await this.bookRepository.count();
  }
}

export const getBooks = async () => {
  return bookRepository.find({
      order: { title: 'ASC' },
      relations: ['author', 'genres'],
  });
}

export const getBookById = async (bookId: number) => {
  return await bookRepository.findOne({ where: { id: bookId }, relations: ['author', 'genres', 'bookInstances'] });
};

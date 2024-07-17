import { AppDataSource } from '../config/data-source';
import { Book } from '../entity/Book.entity';

export class BookService {
    private bookRepository = AppDataSource.getRepository(Book);

    async getIndexData() {
        const numBooks = await this.bookRepository.count();
        return {
            numBooks
        };
    }
}

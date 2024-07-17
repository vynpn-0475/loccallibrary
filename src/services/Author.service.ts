import { AppDataSource } from '../config/data-source';
import { Author } from '../entity/Author.entity';

export class AuthorService {
    private authorRepository = AppDataSource.getRepository(Author);

    async getIndexData() {
        const numAuthors = await this.authorRepository.count();
        return {
            numAuthors
        };
    }
}

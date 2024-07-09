import { AppDataSource } from '../config/data-source';
import { Author } from '../entity/Author.entity';

const authorRepository = AppDataSource.getRepository(Author);

export class AuthorService {
  private authorRepository = AppDataSource.getRepository(Author);

  async getIndexDataAuthor() {
    return await this.authorRepository.count();
  }
}

export const getAuthors = async () => {
  return authorRepository.find({
      order: { family_name: 'ASC' },
  });
};

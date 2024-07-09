import { AppDataSource } from '../config/data-source';
import { Genre } from '../entity/Genre.entity';

export class GenreService {
    private genreRepository = AppDataSource.getRepository(Genre);

    async getIndexData() {
        const numGenres = await this.genreRepository.count();
        return {
            numGenres
        };
    }
}

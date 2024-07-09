import { AppDataSource } from '../config/data-source';
import { BookInstance } from '../entity/BookInstance.entity';
import { BookInstanceStatus } from '../enums/BookInstanceStatus';

export class BookInstanceService {
    private bookInstanceRepository = AppDataSource.getRepository(BookInstance);

    async getIndexData() {
        const numBookInstances = await this.bookInstanceRepository.count();
        const availableBookInstancesResult = await this.bookInstanceRepository.findAndCount({
            where: { status: BookInstanceStatus.Available }
        });

        return {
            numBookInstances,
            availableBookInstances: availableBookInstancesResult[1]
        };
    }
}

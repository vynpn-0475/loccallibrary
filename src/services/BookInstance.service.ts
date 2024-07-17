import { BookInstance } from '../entity/BookInstance.entity';
import { AppDataSource } from '../config/data-source';
import { BookInstanceStatus } from '@src/enums/BookInstanceStatus';

const bookInstanceRepository = AppDataSource.getRepository(BookInstance);

export class BookInstanceService {
  private bookInstanceRepository = AppDataSource.getRepository(BookInstance)
  async getIndexDataBookInstances() {
    return this.bookInstanceRepository.count()
  }
  async getIndexDataAvailableBookInstances() {
    return this.bookInstanceRepository.count({ where: { status: BookInstanceStatus.Available } })
  }
}

export const getBookInstances = async () => {
  return bookInstanceRepository.find({
      relations: ['book'],
  });
};

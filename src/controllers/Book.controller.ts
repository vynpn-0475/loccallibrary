import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import i18next, { TFunction } from 'i18next';
import { AuthorService } from '@src/services/Author.service';
import { BookService, getBooks } from '@src/services/Book.service';
import { BookInstanceService } from '@src/services/BookInstance.service';
import { GenreService } from '@src/services/Genre.service';
import expressAsyncHandler from 'express-async-handler';

const authorService = new AuthorService();
const bookService = new BookService();
const bookInstanceService = new BookInstanceService();
const genreService = new GenreService();

export const index = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const [numBooks, numBookInstances, availableBookInstances, numAuthors, numGenres] = await Promise.all([
      bookService.getIndexDataBook(),
      bookInstanceService.getIndexDataBookInstances(),
      bookInstanceService.getIndexDataAvailableBookInstances(),
      authorService.getIndexDataAuthor(),
      genreService.getIndexDataGenre()
    ])
    res.render('index', {
      title: 'Local Library',
      numBooks: numBooks,
      numBookInstances: numBookInstances,
      numAvailableBookInstances: availableBookInstances,
      numAuthors: numAuthors,
      numGenres: numGenres
    })
  })

export const bookList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await getBooks();
        res.render('books/index', { books, title: req.t('list.book') });
    } catch (error) {
        req.flash('error_msg', req.t('notlist.failedToFetchBooks'));
        res.redirect('/error');
    }
});

export const bookDetail = (req: Request, res: Response): void => {
    const bookId = req.params.id;
    res.send(`NOT IMPLEMENTED: Book detail: ${bookId}`);
};

export const bookCreate = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: Book create');
};

export const bookDelete = (req: Request, res: Response): void => {
    const bookId = req.params.id;
    res.send(`NOT IMPLEMENTED: Book delete: ${bookId}`);
};

export const bookUpdate = (req: Request, res: Response): void => {
    const bookId = req.params.id;
    res.send(`NOT IMPLEMENTED: Book update: ${bookId}`);
};

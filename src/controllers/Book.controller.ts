import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { AuthorService } from '@src/services/Author.service';
import { BookService, getBooks, getBookById } from '@src/services/Book.service';
import { BookInstanceService } from '@src/services/BookInstance.service';
import { GenreService } from '@src/services/Genre.service';
import { BookInstanceStatus } from '@src/enums/BookInstanceStatus';

const authorService = new AuthorService();
const bookService = new BookService();
const bookInstanceService = new BookInstanceService();
const genreService = new GenreService();

async function validateAndFetchBook(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        req.flash('error_msg', req.t('notlist.invalidBookId'));
        return res.redirect('/error');
    }
    const book = await getBookById(id);
    if (book === null) {
        req.flash('error_msg', req.t('notlist.bookNotFound'));
        return res.redirect('/error');
    }
    return book;
}

export const index = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const [numBooks, numBookInstances, availableBookInstances, numAuthors, numGenres] = await Promise.all([
        bookService.getIndexDataBook(),
        bookInstanceService.getIndexDataBookInstances(),
        bookInstanceService.getIndexDataAvailableBookInstances(),
        authorService.getIndexDataAuthor(),
        genreService.getIndexDataGenre()
    ]);
    res.render('index', {
        title: 'Local Library',
        numBooks,
        numBookInstances,
        numAvailableBookInstances: availableBookInstances,
        numAuthors,
        numGenres
    });
});

export const bookList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await getBooks();
        res.render('books/index', { books, title: req.t('list.book') });
    } catch (error) {
        req.flash('error_msg', req.t('notlist.failedToFetchBooks'));
        res.redirect('/error');
    }
});

export const bookDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const book = await validateAndFetchBook(req, res, next);
    if (book) {
        res.render('books/detail', {
            title: req.t('detail.bookDetail'),
            book,
            bookInstances: book?.bookInstances,
            bookGenres: book?.genres,
            BookInstanceStatus
        });
    }
});

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

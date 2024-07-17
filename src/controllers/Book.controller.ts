import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import i18next from 'i18next';
import { AuthorService } from '@src/services/Author.service';
import { BookService } from '@src/services/Book.service';
import { BookInstanceService } from '@src/services/BookInstance.service';
import { GenreService } from '@src/services/Genre.service';

const authorService = new AuthorService();
const bookService = new BookService();
const bookInstanceService = new BookInstanceService();
const genreService = new GenreService();

export const index = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const [
        { numAuthors },
        { numBooks },
        { numBookInstances, availableBookInstances },
        { numGenres }
    ] = await Promise.all([
        authorService.getIndexData(),
        bookService.getIndexData(),
        bookInstanceService.getIndexData(),
        genreService.getIndexData()
    ]);

    res.render('index', {
        book_count: numBooks,
        book_instance_count: numBookInstances,
        book_instance_available_count: availableBookInstances,
        author_count: numAuthors,
        genre_count: numGenres,
        t: i18next.t.bind(i18next)
    });
});

export const bookList = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: Book list');
};

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

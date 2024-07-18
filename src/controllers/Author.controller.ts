import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getAuthorById, getAuthors } from '../services/Author.service';

async function validateAndFetchAuthor(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        req.flash('error_msg', req.t('notlist.invalidAuthorId'));
        return res.redirect('/error');
    }
    const author = await getAuthorById(id);
    if (author === null) {
        req.flash('error_msg', req.t('notlist.authorNotFound'));
        return res.redirect('/error');
    }
    return author;
}

export const authorList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await getAuthors();
        res.render('authors/index', { authors, title: req.t('list.author') });
    } catch (error) {
        req.flash('error_msg', req.t('notlist.failedToFetchAuthors'));
        res.redirect('/error'); 
    }
});

export const authorDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const author = await validateAndFetchAuthor(req, res, next);
    if (author) {
        res.render('authors/detail', {
            title: req.t('detail.authorDetail'),
            author,
            author_books: author?.books,
        });
    }
});

export const authorCreate = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: Author create');
};

export const authorDelete = (req: Request, res: Response): void => {
    const authorId = req.params.id;
    res.send(`NOT IMPLEMENTED: Author delete: ${authorId}`);
};

export const authorUpdate = (req: Request, res: Response): void => {
    const authorId = req.params.id;
    res.send(`NOT IMPLEMENTED: Author update: ${authorId}`);
};

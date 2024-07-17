import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getAuthors } from '../services/Author.service';

export const authorList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await getAuthors();
        res.render('authors/index', { authors, title: req.t('list.author') });
    } catch (error) {
        req.flash('error_msg', req.t('notlist.failedToFetchAuthors'));
        res.redirect('/error'); 
    }
});


export const authorDetail = (req: Request, res: Response): void => {
    const authorId = req.params.id;
    res.send(`NOT IMPLEMENTED: Author detail: ${authorId}`);
};

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

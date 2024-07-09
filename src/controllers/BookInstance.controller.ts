import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getBookInstanceById, getBookInstances } from '../services/BookInstance.service';
import { BookInstanceStatus } from '@src/enums/BookInstanceStatus';

async function validateAndFetchBookInstance(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        req.flash('error_msg', req.t('notlist.invalidBookInstanceId'));
        return res.redirect('/error');
    }
    const bookInstance = await getBookInstanceById(id);
    if (bookInstance === null) {
        req.flash('error_msg', req.t('notlist.bookInstanceNotFound'));
        return res.redirect('/error');
    }
    return bookInstance;
}

export const bookInstanceList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const instances = await getBookInstances();
        res.render('book-instances/index', { instances, title: req.t('list.bookinstance') });
    } catch (error) {
        req.flash('error_msg', req.t('notlist.failedToFetchBookInstances'));
        res.redirect('/error');
    }
});

export const bookInstanceDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const bookInstance = await validateAndFetchBookInstance(req, res, next);
    if (bookInstance) {
        res.render('book-instances/detail', {
            title: req.t('detail.bookinstanceDetail'),
            bookinstance: bookInstance,
            BookInstanceStatus,
        });
    }
});

export const bookInstanceCreate = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: BookInstance create');
};

export const bookInstanceDelete = (req: Request, res: Response): void => {
    const bookInstanceId = req.params.id;
    res.send(`NOT IMPLEMENTED: BookInstance delete: ${bookInstanceId}`);
};

export const bookInstanceUpdate = (req: Request, res: Response): void => {
    const bookInstanceId = req.params.id;
    res.send(`NOT IMPLEMENTED: BookInstance update: ${bookInstanceId}`);
};

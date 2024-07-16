import { Request, Response } from 'express';

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

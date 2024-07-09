import { Request, Response } from 'express';

export const authorList = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: Author list');
};

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

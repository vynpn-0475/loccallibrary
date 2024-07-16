import { Request, Response } from 'express';

export const bookInstanceList = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: BookInstance list');
};

export const bookInstanceDetail = (req: Request, res: Response): void => {
    const bookInstanceId = req.params.id;
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${bookInstanceId}`);
};

export const bookInstanceCreate = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: BookInstanceInstance create');
};

export const bookInstanceDelete = (req: Request, res: Response): void => {
    const bookInstanceId = req.params.id;
    res.send(`NOT IMPLEMENTED: BookInstance delete: ${bookInstanceId}`);
};

export const bookInstanceUpdate = (req: Request, res: Response): void => {
    const bookInstanceId = req.params.id;
    res.send(`NOT IMPLEMENTED: BookInstance update: ${bookInstanceId}`);
};

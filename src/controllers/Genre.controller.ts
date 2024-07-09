import { Request, Response } from 'express';

export const genreList = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: Genre list');
};

export const genreDetail = (req: Request, res: Response): void => {
    const genreId = req.params.id;
    res.send(`NOT IMPLEMENTED: Genre detail: ${genreId}`);
};

export const genreCreate = (req: Request, res: Response): void => {
    res.send('NOT IMPLEMENTED: Genre create');
};

export const genreDelete = (req: Request, res: Response): void => {
    const genreId = req.params.id;
    res.send(`NOT IMPLEMENTED: Genre delete: ${genreId}`);
};

export const genreUpdate = (req: Request, res: Response): void => {
    const genreId = req.params.id;
    res.send(`NOT IMPLEMENTED: Genre update: ${genreId}`);
};

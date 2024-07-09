import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getGenres } from '../services/Genre.service';

export const genreList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
      const genres = await getGenres();
      res.render('genres/index', { genres, title: req.t('list.genre') });
  } catch (error) {
      req.flash('error_msg', req.t('notlist.failedToFetchGenres'));
      res.redirect('/error');
  }
});

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

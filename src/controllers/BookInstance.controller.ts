import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getBookInstances } from '../services/BookInstance.service';

export const bookInstanceList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
      const instances = await getBookInstances();
      res.render('book-instances/index', { instances, title: req.t('list.bookinstance') });
  } catch (error) {
      req.flash('error_msg', req.t('notlist.failedToFetchBookInstances'));
      res.redirect('/error');
  }
});

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

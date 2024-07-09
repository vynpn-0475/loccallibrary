import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { getGenreById, getGenres } from '../services/Genre.service';

async function validateAndFetchGenre(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        req.flash('error_msg', req.t('notlist.invalidGenreId'));
        return res.redirect('/error');
    }
    const genre = await getGenreById(id);
    if (genre === null) {
        req.flash('error_msg', req.t('notlist.genreNotFound'));
        return res.redirect('/error');
    }
    return genre;
}

export const genreList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const genres = await getGenres();
        res.render('genres/index', { genres, title: req.t('list.genre') });
    } catch (error) {
        req.flash('error_msg', req.t('notlist.failedToFetchGenres'));
        res.redirect('/error');
    }
});

export const genreDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const genre = await validateAndFetchGenre(req, res, next);
    if (genre) {
        res.render('genres/detail', {
            title: req.t('detail.genreDetail'),
            genre: genre,
            genre_books: genre?.books,
        });
    }
});

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

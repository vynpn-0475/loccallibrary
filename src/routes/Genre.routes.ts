import { Router } from 'express';
import { genreList, genreDetail, genreCreate, genreDelete, genreUpdate } from '../controllers/Genre.controller';

const router = Router();

// GET request for list of all Genre items.
router.get('/genres', genreList);

// GET request for one Genre.
router.get('/genre/:id', genreDetail);

// POST request for creating Genre.
router.post('/genre/create', genreCreate);

// POST request to delete Genre.
router.post('/genre/delete/:id', genreDelete);

// POST request to update Genre.
router.post('/genre/update/:id', genreUpdate);

export default router;

import { Router } from 'express';
import { genreList, genreDetail, genreCreate, genreDelete, genreUpdate } from '../controllers/Genre.controller';

const router = Router();

// GET request for list of all Genre items.
router.get('/', genreList);

// GET request for one Genre.
router.get('/:id', genreDetail);

// POST request for creating Genre.
router.post('/create', genreCreate);

// POST request to delete Genre.
router.post('/delete/:id', genreDelete);

// POST request to update Genre.
router.post('/update/:id', genreUpdate);

export default router;

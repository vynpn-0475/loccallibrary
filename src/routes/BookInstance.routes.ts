import { Router } from 'express';
import { bookInstanceList, bookInstanceDetail, bookInstanceCreate, bookInstanceDelete, bookInstanceUpdate } from '../controllers/BookInstance.controller';

const router = Router();

// GET request for list of all BookInstance items.
router.get('/', bookInstanceList);

// GET request for one BookInstance.
router.get('/:id', bookInstanceDetail);

// POST request for creating BookInstance.
router.post('/create', bookInstanceCreate);

// POST request to delete BookInstance.
router.post('/delete/:id', bookInstanceDelete);

// POST request to update BookInstance.
router.post('/update/:id', bookInstanceUpdate);

export default router;

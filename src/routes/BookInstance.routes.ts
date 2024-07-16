import { Router } from 'express';
import { bookInstanceList, bookInstanceDetail, bookInstanceCreate, bookInstanceDelete, bookInstanceUpdate } from '../controllers/BookInstance.controller';

const router = Router();

// GET request for list of all BookInstance items.
router.get('/bookinstances', bookInstanceList);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookInstanceDetail);

// POST request for creating BookInstance.
router.post('/bookinstance/create', bookInstanceCreate);

// POST request to delete BookInstance.
router.post('/bookinstance/delete/:id', bookInstanceDelete);

// POST request to update BookInstance.
router.post('/bookinstance/update/:id', bookInstanceUpdate);

export default router;

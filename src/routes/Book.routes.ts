import { Router } from 'express';
import { bookList, bookDetail, bookCreate, bookDelete, bookUpdate } from '../controllers/Book.controller';

const router = Router();

// GET request for list of all Book items.
router.get('/books', bookList);

// GET request for one Book.
router.get('/book/:id', bookDetail);

// POST request for creating Book.
router.post('/book/create', bookCreate);

// POST request to delete Book.
router.post('/book/delete/:id', bookDelete);

// POST request to update Book.
router.post('/book/update/:id', bookUpdate);

export default router;

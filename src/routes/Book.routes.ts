import { Router } from 'express';
import { bookList, bookDetail } from '../controllers/Book.controller';

const router = Router();

// GET request for list of all Book items.
router.get('/', bookList);

// GET request for one Book.
router.get('/:id', bookDetail);

export default router;

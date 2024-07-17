import { Router } from 'express';
import { bookList} from '../controllers/Book.controller';

const router = Router();

router.get('/', bookList);

export default router;

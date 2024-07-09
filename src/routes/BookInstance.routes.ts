import {Router} from 'express';
import { bookInstanceList } from '../controllers/BookInstance.controller';

const router = Router();

router.get('/', bookInstanceList);

export default router;

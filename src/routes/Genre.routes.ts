import {Router} from 'express';
import { genreList } from '../controllers/Genre.controller';

const router = Router();

router.get('/', genreList);

export default router;

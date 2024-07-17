import {Router} from 'express';
import { authorList } from '../controllers/Author.controller';

const router = Router();

router.get('/', authorList);

export default router;

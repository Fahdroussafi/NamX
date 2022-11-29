import { Router } from 'express';
import { getTypes, createType } from '../controllers/typeController';

const router = Router();
// const { checkToken } = require('../middleware/adminMiddleware');

router.get('/get-all-types',  getTypes);
router.post('/create-type',  createType);

export { router as TypeRoutes };

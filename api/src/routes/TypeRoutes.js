import { Router } from 'express';
import {
  getTypes,
  createType,
  getTypeById,
} from '../controllers/typeController';

const router = Router();
// const { checkToken } = require('../middleware/adminMiddleware');

router.get('/get-all-types', getTypes);
router.post('/create-type', createType);
router.get('/get-type-by-id/:id', getTypeById);

export { router as TypeRoutes };

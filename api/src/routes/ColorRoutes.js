import { Router } from 'express';
import {
  getColors,
  createColor,
  updateColor,
  deleteColor,
} from '../controllers/colorController';

const router = Router();
const { checkToken } = require('../middleware/adminMiddleware');

// router.get('/get-all-colors', checkToken, getColors);
router.post('/create-color', checkToken, createColor);
// router.put('/update-color/:color_id', checkToken, updateColor);
// router.delete('/delete-color/:color_id', checkToken, deleteColor);

export { router as ColorRoutes };

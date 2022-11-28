import { Router } from 'express';
import {
  getDetails,
  createDetails,
  changeDetailsStatus,
} from '../controllers/detailsController';

const router = Router();
const { checkToken } = require('../middleware/adminMiddleware');

router.get('/get-all-details', checkToken, getDetails);
router.post('/create-details', checkToken, createDetails);
router.put('/status-details/:details_id', checkToken, changeDetailsStatus);

export { router as DetailsRoutes };

import { Router } from 'express';
import {
  getCars,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/carController';

const router = Router();
const { checkToken } = require('../middleware/adminMiddleware');

router.get('/get-all-cars', checkToken, getCars);
router.post('/create-car', checkToken, createCar);
router.put('/update-car/:car_id', checkToken, updateCar);
router.delete('/delete-car/:car_id', checkToken, deleteCar);

export { router as CarRoutes };

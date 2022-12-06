import { Router } from 'express';
import {
  registerAdmin,
  loginAdmin,
  getAdminById,
} from '../controllers/adminController';

const router = Router();

router.post('/login-admin', loginAdmin);
router.post('/create-admin', registerAdmin);
router.get('/:admin_id', getAdminById);

export { router as AdminRoutes };

import { Router } from 'express';
import {
  registerAdmin,
  loginAdmin,
  getAdminById,
  getAllUsers,
} from '../controllers/adminController';

const router = Router();

router.get('/get-all-users', getAllUsers);
router.post('/login-admin', loginAdmin);
router.post('/create-admin', registerAdmin);
router.get('/:admin_id', getAdminById);
// router.get('/get-all-users', getAllUsers);
export { router as AdminRoutes };

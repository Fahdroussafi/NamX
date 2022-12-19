import { Router } from 'express';
import { registerAdmin, loginAdmin, getAllUsers, getAdminById } from '../controllers/adminController';

const router = Router();

router.post('/login-admin', loginAdmin);
router.post('/create-admin', registerAdmin);
router.get('/get-all-users', getAllUsers);
router.get('/:admin_id', getAdminById);

export { router as AdminRoutes };

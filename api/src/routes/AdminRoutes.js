import { Router } from 'express';
import { registerAdmin, loginAdmin, getAllUsers } from '../controllers/adminController';

const router = Router();

router.post('/login-admin', loginAdmin);
router.post('/create-admin', registerAdmin);
router.get('/get-all-users', getAllUsers);

export { router as AdminRoutes };

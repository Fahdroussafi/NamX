import { Router } from 'express';
import { registerAdmin, loginAdmin } from '../controllers/adminController';

const router = Router();

router.post('/login-admin', loginAdmin);
router.post('/create-admin', registerAdmin);

export { router as AdminRoutes };

import { Router } from 'express';
import { Login, Register } from '../controllers/authController';

const router = Router();

router.post('/login', Login);
router.post('/create-user', Register);

export { router as UsersRoutes };

import { Router } from 'express';
import { Login, Register, getUsers } from '../controllers/authController';

const router = Router();

router.post('/login', Login);
router.post('/create-user', Register);
// router.get('/users', getUsers);

export { router as UsersRoutes };

import { Router } from "express"
import { getCars , createCar } from "../controllers";
import { generateToken, isAuthenticated, upload, verifyToken } from "../middleware";



const router = Router();

router.get('/list' , getCars);
router.post('/create' , createCar);

export { router as CarRoutes }


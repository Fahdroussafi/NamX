import { Router } from 'express';

import {
    getImages,
    createImage,
    updateImage,
    deleteImage,
} from "../controllers/imageController";

const router = Router();
const { checkToken } = require('../middleware/adminMiddleware');

router.get("/get-images" , checkToken , getImages);
router.post("/create-image" , checkToken , createImage);
router.put("/update-image/:image_id" , checkToken , updateImage);
router.delete("/delete-image/:image_id" , checkToken , deleteImage);

export { router as ImageRoutes };

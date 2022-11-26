const express = require("express");
const router = express();

const {
    CreateImage,
    GetAllImages,
    DeleteImage,
    UpdateImage
} = require("../../controllers/admin/imageController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

<<<<<<< HEAD
router.post("/create-image",adminMiddleware, CreateImage);
router.get("/get-all-images", adminMiddleware,GetAllImages);
router.delete("/delete-image/:image_id",adminMiddleware, DeleteImage);
router.put("/update-image/:image_id",adminMiddleware, UpdateImage);
=======
router.post("/create-image", CreateImage);
router.get("/get-all-images", GetAllImages);
router.delete("/delete-image/:image_id", DeleteImage);
router.put("/update-image/:image_id", UpdateImage);
>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3
module.exports = router;
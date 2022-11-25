const express = require("express");
const router = express();

const {
    CreateImage,
    GetAllImages,
    DeleteImage,
    UpdateImage
} = require("../../controllers/admin/imageController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.post("/create-image",adminMiddleware, CreateImage);
router.get("/get-all-images", adminMiddleware,GetAllImages);
router.delete("/delete-image/:image_id",adminMiddleware, DeleteImage);
router.put("/update-image/:image_id",adminMiddleware, UpdateImage);
module.exports = router;
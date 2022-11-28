const express = require("express");
const router = express();

const {
    CreateImage,
    GetAllImages,
    DeleteImage,
    UpdateImage
} = require("../../controllers/admin/imageController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.post("/create-image", CreateImage);
router.get("/get-all-images", GetAllImages);
router.delete("/delete-image/:image_id", DeleteImage);
router.put("/update-image/:image_id", UpdateImage);
module.exports = router;
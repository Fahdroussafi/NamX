const express = require("express");
const router = express();

const {
    CreateImage,
    GetAllImages
} = require("../../controllers/admin/imageController");

router.post("/create-image", CreateImage);
router.get("/get-all-images", GetAllImages);

module.exports = router;
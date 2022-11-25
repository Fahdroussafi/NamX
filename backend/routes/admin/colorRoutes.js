const express = require("express");
const router = express();

const {
    CreateColor,
    GetAllColors,
    DeleteColor,
    UpdateColor
} = require("../../controllers/admin/colorController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.post("/create-color", adminMiddleware, CreateColor);
router.get("/get-all-colors", adminMiddleware , GetAllColors);
router.delete("/delete-color/:color_id", adminMiddleware,DeleteColor);
router.put("/update-color/:color_id",adminMiddleware, UpdateColor);

module.exports = router;
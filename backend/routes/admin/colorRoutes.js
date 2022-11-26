const express = require("express");
const router = express();

const {
    CreateColor,
    GetAllColors,
    DeleteColor,
    UpdateColor
} = require("../../controllers/admin/colorController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

<<<<<<< HEAD
router.post("/create-color", adminMiddleware, CreateColor);
router.get("/get-all-colors", adminMiddleware , GetAllColors);
router.delete("/delete-color/:color_id", adminMiddleware,DeleteColor);
router.put("/update-color/:color_id",adminMiddleware, UpdateColor);
=======
router.post("/create-color", CreateColor);
router.get("/get-all-colors", GetAllColors);
router.delete("/delete-color/:color_id", DeleteColor);
router.put("/update-color/:color_id", UpdateColor);
>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3

module.exports = router;
const express = require("express");
const router = express();

const {
    CreateColor,
    GetAllColors,
    DeleteColor,
    UpdateColor
} = require("../../controllers/admin/colorController");

router.post("/create-color", CreateColor);
router.get("/get-all-colors", GetAllColors);
router.delete("/delete-color/:color_id", DeleteColor);
router.put("/update-color/:color_id", UpdateColor);

module.exports = router;
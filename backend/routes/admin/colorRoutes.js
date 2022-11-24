const express = require("express");
const router = express();

const {
    CreateColor,
    GetAllColors
} = require("../../controllers/admin/colorController");

router.post("/create-color", CreateColor);
router.get("/get-all-colors", GetAllColors);

module.exports = router;
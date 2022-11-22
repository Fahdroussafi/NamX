const express = require("express");
const router = express();

const {
    CreateCar,
} = require("../../controllers/admin/adminController");

router.post("/create-car", CreateCar);


module.exports = router;

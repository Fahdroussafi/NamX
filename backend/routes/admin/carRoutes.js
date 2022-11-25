const express = require("express");
const router = express();

const {
    CreateCar,
    GetAllCars,
    DeleteCar,
    UpdateCar,
} = require("../../controllers/admin/carController");

router.post("/create-car/:type_id", CreateCar);


module.exports = router;

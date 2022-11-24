const express = require("express");
const router = express();

const {
    CreateCar,
    GetAllCars
} = require("../../controllers/admin/carController");

router.post("/create-car/:type_id", CreateCar);
router.get("/get-all-cars", GetAllCars);


module.exports = router;

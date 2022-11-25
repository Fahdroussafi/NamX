const express = require("express");
const router = express();

const {
    CreateCar,
    GetAllCars,
    DeleteCar,
    UpdateCar
} = require("../../controllers/admin/carController");

const adminMiddleware = require("../../middlewares/adminMiddleware");


router.post("/create-car/:type_id", adminMiddleware, CreateCar);
router.get("/get-all-cars", adminMiddleware , GetAllCars);
router.delete("/delete-car/:car_id" , adminMiddleware,DeleteCar);
router.put("/update-car/:car_id", adminMiddleware, UpdateCar);


module.exports = router;

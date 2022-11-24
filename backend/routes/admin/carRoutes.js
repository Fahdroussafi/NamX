const express = require("express");
const router = express();

const {
    CreateCar,
    GetAllCars,
    DeleteCar,
    UpdateCar,
} = require("../../controllers/admin/carController");

router.post("/create-car/:type_id", CreateCar);
router.get("/get-all-cars", GetAllCars);
router.delete("/delete-car/:car_id", DeleteCar);
router.put("/update-car/:car_id", UpdateCar);



module.exports = router;

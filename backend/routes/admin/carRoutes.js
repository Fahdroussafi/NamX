const express = require("express");
const router = express();

const {
    CreateCar,
    GetAllCars,
    DeleteCar,
<<<<<<< HEAD
    UpdateCar
} = require("../../controllers/admin/carController");

const adminMiddleware = require("../../middlewares/adminMiddleware");


router.post("/create-car/:type_id", adminMiddleware, CreateCar);
router.get("/get-all-cars", adminMiddleware , GetAllCars);
router.delete("/delete-car/:car_id" , adminMiddleware,DeleteCar);
router.put("/update-car/:car_id", adminMiddleware, UpdateCar);
=======
    UpdateCar,
} = require("../../controllers/admin/carController");

router.post("/create-car/:type_id", CreateCar);
router.get("/get-all-cars", GetAllCars);
router.delete("/delete-car/:car_id", DeleteCar);
router.put("/update-car/:car_id", UpdateCar);

>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3


module.exports = router;

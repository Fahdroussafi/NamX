const express = require("express");
const router = express();

const {
    CreateDetails,
    GetAllDetails,
    DeleteDetails,
<<<<<<< HEAD
=======

>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3
} = require("../../controllers/admin/detailsController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

<<<<<<< HEAD
router.post("/create-details",adminMiddleware, CreateDetails);
router.get("/get-all-details", adminMiddleware,GetAllDetails);
router.delete("/delete-details/:details_id", adminMiddleware,DeleteDetails);
=======
router.post("/create-details", CreateDetails);
router.get("/get-all-details", GetAllDetails);
router.delete("/delete-details/:details_id", DeleteDetails);


>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3

module.exports = router;
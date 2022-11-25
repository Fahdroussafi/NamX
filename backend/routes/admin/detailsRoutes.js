const express = require("express");
const router = express();

const {
    CreateDetails,
    GetAllDetails,
    DeleteDetails,
} = require("../../controllers/admin/detailsController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.post("/create-details",adminMiddleware, CreateDetails);
router.get("/get-all-details", adminMiddleware,GetAllDetails);
router.delete("/delete-details/:details_id", adminMiddleware,DeleteDetails);

module.exports = router;
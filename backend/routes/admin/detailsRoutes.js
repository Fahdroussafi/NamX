const express = require("express");
const router = express();

const {
    CreateDetails,
    GetAllDetails
} = require("../../controllers/admin/detailsController");

router.post("/create-details", CreateDetails);
router.get("/get-all-details", GetAllDetails);

module.exports = router;
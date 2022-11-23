const express = require("express");
const router = express();

const {
    CreateDetails,
} = require("../../controllers/admin/detailsController");

router.post("/create-details", CreateDetails);

module.exports = router;
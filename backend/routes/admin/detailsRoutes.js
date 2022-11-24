const express = require("express");
const router = express();

const {
    CreateDetails,
    GetAllDetails,
    DeleteDetails,
} = require("../../controllers/admin/detailsController");

router.post("/create-details", CreateDetails);
router.get("/get-all-details", GetAllDetails);
router.delete("/delete-details/:details_id", DeleteDetails);

module.exports = router;
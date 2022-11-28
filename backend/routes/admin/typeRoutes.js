const express = require("express");
const router = express();

const {
    CreateType,
    GetAllTypes,
} = require("../../controllers/admin/typeController");
const adminMiddleware = require("../../middlewares/adminMiddleware");

router.post("/create-type",adminMiddleware, CreateType);
router.get("/get-all-types", adminMiddleware,GetAllTypes);

module.exports = router;

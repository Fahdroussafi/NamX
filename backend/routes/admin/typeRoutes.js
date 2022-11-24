const express = require("express");
const router = express();

const {
    CreateType,
    GetAllTypes,
} = require("../../controllers/admin/typeController");

router.post("/create-type", CreateType);
router.get("/get-all-types", GetAllTypes);

module.exports = router;

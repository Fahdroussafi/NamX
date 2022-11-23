const express = require("express");
const router = express();

const {
    CreateType,
} = require("../../controllers/admin/typeController");

router.post("/create-type", CreateType);

module.exports = router;

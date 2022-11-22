const express = require("express");
const router = express();

const {
    CreateAdmin,
    LoginAdmin,
} = require("../../controllers/admin/adminController");

router.post("/create-admin", CreateAdmin);
router.post("/login-admin", LoginAdmin);

module.exports = router;

const express = require("express");
const app = express();
// require("dotenv").config();
// const cors = require("cors");
const port = process.env.PORT || 5000;
// require("../../Easy-Booking/server/config/dbConfig");
// const bodyParser = require("body-parser");

// app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());


// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

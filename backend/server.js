const express = require("express");
const app = express();
require("dotenv").config();
// const cors = require("cors");
const port = process.env.PORT || 5000;
require("../../brief-NamX/backend/config/dbConfig");
const bodyParser = require("body-parser");

// app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/authRoutes"));

// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

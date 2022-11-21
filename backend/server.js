const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("../../Easy-Booking/server/config/dbConfig");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/users", require("../../Easy-Booking/server/routes/usersRoutes"));
app.use("/api/buses", require("../../Easy-Booking/server/routes/busesRoutes"));
app.use("/api/auth", require("../../Easy-Booking/server/routes/authRoutes"));
app.use("/api/bookings", require("../../Easy-Booking/server/routes/bookingsRoutes"));
app.use("/api/cities", require("../../Easy-Booking/server/routes/citiesRoutes"));

// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

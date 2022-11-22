const mongoose = require("mongoose");
<<<<<<< HEAD
mongoose.connect(process.env.mongo_url); //donpmt env
=======
mongoose.connect(process.env.mongo_url);
>>>>>>> 60c4a495cb2e97f3ac73cc2c3c8778af3597911f
const db = mongoose.connection;

db.on("connected", () => {
    console.log("Mongo Db Connection Successful");
});
db.on("error", () => {
    console.log("Mongo Db Connection Failed");
});

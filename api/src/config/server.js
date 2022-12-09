import express from "express"
import mongoose from "mongoose";
export const app = express()

const { PORT, MONGO_USER, MONGO_PASS, MONGO_DBNAME } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.xde6xue.mongodb.net/${MONGO_DBNAME}`

export const startServer = () => mongoose
    .connect(MONGO_URI)
    .then(() => {
        app.listen(PORT || 5000);
        console.log(
            `🚀 Server ready at http://localhost:${PORT} 🚀`
        );
    })
    .catch((err) => {
        console.error(err);
    });

// mongoose strict mode
mongoose.set('strictQuery', false)
import express from "express"
import mongoose from "mongoose";
export const app = express()

const { PORT, MONGO_USER, MONGO_PASS, MONGO_DBNAME } = process.env
const MONGO_URI = `mongodb+srv://imane:imane@cluster0.ywwddks.mongodb.net/?retryWrites=true&w=majority`

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

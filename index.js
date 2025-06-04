import express from "express";
import { router } from "./routes/courses.routes.js";
import mongoose from "mongoose";

const app = express()
app.use(express.json())  // middleware for body request 
app.use("/api/courses", router)

const dbUrl = "mongodb+srv://omar:omar2002@mongo-cluster.gq3qtvk.mongodb.net/express_db?retryWrites=true&w=majority&appName=mongo-Cluster" 
mongoose.connect(dbUrl).then(() =>{
    console.log("mongo_db server started");
})

app.listen(4000, () => {
    console.log("listening on port 4000");
})
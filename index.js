import express from "express";
import { router } from "./routes/courses.routes.js";

const app = express()
app.use(express.json())  // middleware for body request 

app.use("/api/courses", router)

app.listen(4000, () => {
    console.log("listening on port 4000");
})
import mongoose from "mongoose";



const courseSchema = new mongoose.Schema({
    title : String,
    price : Number
});


export const Course = mongoose.model("Course", courseSchema);


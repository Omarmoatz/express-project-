import { validationResult } from "express-validator"
import { Course } from "../models/courses.model.js"

export const getAllCourses = async(req, res) => {
    const courses = await Course.find()
    res.json(courses)
}

export const getSingleCourses = async (req, res) => {
    try{
        const courseId = req.params.courseId
        // const course = courses.find((course) => course.id === courseId)
        const course = await Course.findById(courseId)
    
        if (!course) {
            res.status(404).json({ "error": "Course not found" })
        }
        return res.json(course);
    }catch(e){
        return res.status(400).json({"error":e.message})
    }
}

export const addCourse = async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const newCourse = new Course(req.body)
        await newCourse.save() 
        res.json(newCourse)
}

export const updateCourse = async (req, res) => {
    let course = await Course.findByIdAndUpdate(req.params.courseId, {$set:{...req.body}});
    // let course = courses.find((course) => course.id === +req.params.courseId)

    if (!course)
        return res.status(404).json({ error: "Course not found" })

    // course.title = req.body.title ? req.body.title : course.title
    // course.price = req.body.price ? req.body.price : course.price

    return res.json(course)
}

export const deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.courseId)
    // const index = courses.findIndex((course) => course.id === +req.params.courseId);

    // if (index === -1) {
    //     return res.status(404).json({ error: "Course not found" });
    // }

    // courses.splice(index, 1);
    return res.json({message :"deleted successfully"});
};
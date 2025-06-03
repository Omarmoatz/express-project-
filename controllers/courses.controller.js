import { validationResult } from "express-validator"
import { courses } from "../data/courses.js"

export const getAllCourses = (req, res) => {
    res.json(courses)
}

export const getSingleCourses = (req, res) => {
    const courseId = +req.params.courseId
    const course = courses.find((course) => course.id === courseId)

    if (!course) {
        res.status(404).json({ "error": "Course not found" })
    }
    res.json(course);
}

export const addCourse = (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        courses.push({ "id": courses.length + 1, ...req.body })
        res.json(courses)
}

export const updateCourse = (req, res) => {
    let course = courses.find((course) => course.id === +req.params.courseId)

    if (!course)
        return res.status(404).json({ "error": "Course not found" })

    course.title = req.body.title ? req.body.title : course.title
    course.price = req.body.price ? req.body.price : course.price

    return res.json(courses)
}

export const deleteCourse = (req, res) => {
    const index = courses.findIndex((course) => course.id === +req.params.courseId);

    if (index === -1) {
        return res.status(404).json({ error: "Course not found" });
    }

    courses.splice(index, 1); // ✅ modifies the array without reassigning
    return res.json(courses);
};
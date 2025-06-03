const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express()

app.use(express.json())  // middleware for body request 

const courses = [
    {
        "id": 1,
        "title": "js course",
        "price": 102
    },
    {
        "id": 2,
        "title": "ts course",
        "price": 1000
    },
]


app.get("/api/courses", (req, res) => {
    res.json(courses)
})


app.get("/api/courses/:courseId", (req, res) => {
    const courseId = +req.params.courseId
    const course = courses.find((course) => course.id === courseId)

    if (!course) {
        res.status(404).json({ "error": "Course not found" })
    }
    res.json(course);
})


app.post("/api/courses",
    body('title')
        .notEmpty()
        .withMessage("title is required")
        .isLength({ min: 4 })
        .withMessage("title must not be less than 4 chars"),
    body('price')
        .notEmpty()
        .withMessage("price is required ")
        .isNumeric()
        .withMessage("the price must be numbers"),
    (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        courses.push({ "id": courses.length + 1, ...req.body })
        res.json(courses)
    })










app.listen(4000, () => {
    console.log("listening on port 4000");
})
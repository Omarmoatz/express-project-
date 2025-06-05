import { validationResult } from "express-validator"
import { Course } from "../models/courses.model.js"
import { Responses } from "../utils/httpResponse.js"


export class CourseController {

    static async getAllCourses(req, res) {
        const limit = req.query['limit'] || 10
        const page = req.query['page'] || 1
        const skip = (page - 1) *2

        const courses = await Course.find({}, {"__v":false}).limit(limit).skip(skip)
        res.json(Responses.success({"count":courses.length, "courses":courses}))
    }

    static async getSingleCourses(req, res) {
        try {
            const courseId = req.params.courseId
            // const course = courses.find((course) => course.id === courseId)
            const course = await Course.findById(courseId)

            if (!course) {
                res.status(404).json(Responses.fail({ "Course": "Course not found" }))
            }
            return res.json(Responses.success(course));
        } catch (e) {
            return res.status(400).json(Responses.error(e.message))
        }
    }

    static async addCourse(req, res) {
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json(Responses.fail(errors.array()))
            }
    
            const newCourse = new Course(req.body)
            await newCourse.save()
            return res.json(Responses.success(newCourse))
            
        }catch(e){
            return res.json(Responses.error(e.message))
        }
    }

    static async updateCourse(req, res) {
        let course = await Course.findByIdAndUpdate(req.params.courseId, { $set: { ...req.body } });
        // let course = courses.find((course) => course.id === +req.params.courseId)

        if (!course)
            return res.status(404).json(Responses.fail({ error: "Course not found" }))

        // course.title = req.body.title ? req.body.title : course.title
        // course.price = req.body.price ? req.body.price : course.price

        return res.json(Responses.success(course))
    }

    static async deleteCourse(req, res) {
        await Course.findByIdAndDelete(req.params.courseId)
        // const index = courses.findIndex((course) => course.id === +req.params.courseId);

        // if (index === -1) {
        //     return res.status(404).json({ error: "Course not found" });
        // }

        // courses.splice(index, 1);
        return res.json(Responses.success(null));
    };

}

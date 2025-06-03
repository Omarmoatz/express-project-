import { Router } from "express";
import { addCourse, deleteCourse, getAllCourses, getSingleCourses, updateCourse } from "../controllers/courses.controller.js";
import { addCourseValidators } from "../validators/courses.js";

export const router = Router()

router.route("")
        .get( getAllCourses)
        .post( addCourseValidators, addCourse)

router.route("/:courseId")
        .get(getSingleCourses)
        .patch(updateCourse)
        .delete(deleteCourse)


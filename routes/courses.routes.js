import { Router } from "express";
import { CourseController } from "../controllers/courses.controller.js";
import { addCourseValidators } from "../validators/courses.js";

export const router = Router()

router.route("")
        .get( CourseController.getAllCourses)
        .post( addCourseValidators, CourseController.addCourse)

router.route("/:courseId")
        .get(CourseController.getSingleCourses)
        .patch(CourseController.updateCourse)
        .delete(CourseController.deleteCourse)


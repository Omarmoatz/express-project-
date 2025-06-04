import { body } from "express-validator"

export const addCourseValidators = [
    body('title')
        .notEmpty()
        .withMessage("title is required")
        .isLength({ min: 3 })
        .withMessage("title must not be less than 3 chars"),
    body('price')
        .notEmpty()
        .withMessage("price is required ")
        .isNumeric()
        .withMessage("the price must be numbers")
]
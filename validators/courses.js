import { body } from "express-validator"

export const addCourseValidators = [
    body('title')
        .notEmpty()
        .withMessage("title is required")
        .isLength({ min: 4 })
        .withMessage("title must not be less than 4 chars"),
    body('price')
        .notEmpty()
        .withMessage("price is required ")
        .isNumeric()
        .withMessage("the price must be numbers")
]
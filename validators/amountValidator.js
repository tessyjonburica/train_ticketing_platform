const { body } = require("express-validator")
const checkValidationResult = require("./checkValidationResult")

const amountValidator = [
    body('amount').notEmpty().withMessage('amount is required').isAlpha().withMessage('amount must be alphabetic').isLength({max: 255}).withMessage('amount cannot be more than 255 characters'),
    checkValidationResult
]
module.exports = amountValidator
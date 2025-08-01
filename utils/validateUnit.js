const { body, validationResult } = require("express-validator");

const validateUnit = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name must be a non-empty string"),
  body("baseHP")
    .isInt()
    .notEmpty()
    .withMessage("Type must be a non-empty integer"),
  body("cost")
    .isObject()
    .notEmpty()
    .withMessage("Castle tech must be a non-empty object"),
  body("type")
    .isString()
    .notEmpty()
    .withMessage("Imperial tech must be a non-empty string"),
  body("baseAttack")
    .isInt()
    .notEmpty()
    .withMessage("Unique unit must be a non-empty integer"),
  body("baseRange")
    .isInt()
    .notEmpty()
    .withMessage("Team bonus must be a non-empty integer"),
  body("moveSpeed")
    .isFloat()
    .notEmpty()
    .withMessage("Civ bonus must be a non-empty float"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUnit;

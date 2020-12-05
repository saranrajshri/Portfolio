const Joi = require("@hapi/joi");

// User Validation
const sendMailAuth = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  description: Joi.string().min(3).required(),
});

module.exports = {
  sendMailAuth,
};

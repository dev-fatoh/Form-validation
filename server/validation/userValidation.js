const yup = require("yup");

const userSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  company: yup.string(),
  meassage: yup.string()
});

module.exports = userSchema;

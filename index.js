const Ajv = require('ajv');
const ajv = new Ajv();

const validateData = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
    return false;
  }
  return true;
};

module.exports = {
  validateData
};

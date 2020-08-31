// validating functions for user input on Signin & Signup

const isEmpty = (str) => {
  if (str.trim() === "") return true;
  else return false;
};

exports.validateLoginInput = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = "must not be empty";
  if (isEmpty(data.password)) errors.password = "must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

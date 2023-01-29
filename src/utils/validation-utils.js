import { getError } from "./api-utils";
import { convertToObjectAccessingString } from "./object-utils";
import validator from "validator";

const getValidName = (name) => {
  if (name) {
    name = convertToObjectAccessingString(name);
    if (name.split(".").length > 1) {
      let newName = name.split(".");
      newName = newName.join(".fields.");
      return newName;
    }
  }
  return name;
};

export const isRequiredField = (validationSchema, name) => {
  try {
    name = getValidName(name);
    return !!validationSchema
      .describe()
      .fields[name].tests.find((test) => test.name === "required");
    // return !!getIn(validationSchema.describe().fields, name).tests.find(
    //   (test) => test.name === "required"
    // );
  } catch (err) {
    return false;
  }
};

// https://github.com/validatorjs/validator.js/blob/master/src/index.js -- other available util functions
export function isValidField({ value = null, type = "", isRequired = false }) {
	if (value !== null && value !== undefined) {
		// convert value to string (recommended by the 'validator' library)
		value = value + "";
		type = type || "";
		if (type) {
			if (type === "email") {
				return validator.isEmail(value);
			}
			if (type === "string") {
        // https://github.com/validatorjs/validator.js/issues/305#issuecomment-1070851733
				return validator.isAlphanumeric(
          value, 
         ['en-US'], // default locale en-US 
         { ignore: ' ' }
        );
			}
			if (type === "number") {
				return validator.isNumeric(value);
			}
			return false;
		}
		return false;
	}
	return !isRequired;
}

export const buildCSVValidationError = (err, headersObject = {}) => {
  // throw an error to avoid success block from getting triggered in the fileupload popup component
  // include isCustom: true, if you are displaying a custom error
  // throw an error with a string as data --> the string will be inserted in a text file and will be downloadable for the user
  // throw an error with array of strings as data --> the array will be displayed as errors in component
  // if the data of the error thrown is neither a string nor an object, it will be ignored
  if (err && err.type) {
    if (err.type === "duplicate") {
    return {
        isCustom: true,
        type: "Duplication found in file",
        data: err.data?.duplicationDetails
        .map(
            (el) =>
            `The field ${headersObject[el.key]} has duplicate in row ${
                el.index + 2
            }.`
        ),
    };
    }
    if (err.type === "required") {
    return {
        isCustom: true,
        type: "Required fields missing in file",
        data: err.data
        .map(
            (el) =>
            `The field ${headersObject[el.key]} in row ${
                el.index + 2
            } is required.`
        ),
    };
    }
    if (err.type === "validation") {
    return {
        isCustom: true,
        type: "Validation error occured",
        data: err.data
        .map(
            (el) =>
            `The field ${headersObject[el.key]} in row ${
                el.index + 2
            } is not valid.`
        ),
    };
    }
} else return { isCustom: true, data: [getError().message] };
};

export const processCSVValidationError = (err = null) => {
  if (err) {
    // this "err" should be returned from the uploadPromise function (when it caught an error)
    // if the isCustom prop is set to true, then the error is a custom made error
    if (err.isCustom) {
      const error = {
        type: '',
        errors: [],
        log: '',
        isCustom: err.isCustom
      };
      // set the error type, if its available
      if (err.type) error.type = err.type;
      // if the "data" in the error object is an array then set the array to errors state. so that we can display these errors below
      // else if the "data" in the error object is a string, then set the value to the log state. so that we can download that as a text file. for a better user experience
      if (Array.isArray(err.data)){
        error.errors = err.data.map((el) =>
          typeof el !== "string" ? JSON.stringify(el) : el
        );
        error.log = error.errors?.join('\n');
      }
      if(!error.type && !error.log && error.errors.length === 0) {
        return null;
      }
      return error;
    }
    return err;
  }
  return err;
};
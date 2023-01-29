// all schemas for forms in this app goes here

import { yup } from "src/utils";

// auth
export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email"),
  password: yup
    .string()
    .password("Please enter a valid password")
    .required("Please enter Password"),
});

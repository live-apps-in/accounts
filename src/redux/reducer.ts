import { combineReducers } from "@reduxjs/toolkit";
import {
  authReducer,
  userReducer,
  // themeReducer
} from "./slices";

export const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // theme: themeReducer,
});

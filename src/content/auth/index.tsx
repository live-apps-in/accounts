import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSetup } from "src/data";

export const AuthPageContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(authSetup.signupPage);
  }, []);

  return null;
};

export * from "./signup";
export * from "./login";
export * from "./o-auth";

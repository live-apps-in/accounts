import { mediaQuery } from "src/theme";
import { styled } from "src/utils";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { authConfig } from "src/config";

const StyledHomePageWrapper = styled("div")`
  height: 100%;
  ${mediaQuery.up(1092)} {
    display: grid;
    grid-template-columns: 40% 60%;
  }
`;
export const HomePageContent = () => {
  // const navigate = useNavigate();

  // when home page is not a public page
  // useEffect(() => {
  // if(isAuthenticated && data?.role && rbacConfig.roles.includes(data.role)) {
  //   navigate(rbacConfig.homePage[data.role])
  // }
  // navigate(rbacConfig)
  // }, [])

  return <StyledHomePageWrapper>Home Page</StyledHomePageWrapper>;
};

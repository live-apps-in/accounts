import { mediaQuery } from "src/theme";
import styled from "styled-components";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { rbacSetup } from "src/data";

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
  //   if(isAuthenticated && data?.role && rbacSetup.roles.includes(data.role)) {
  //     navigate(rbacSetup.homePage[data.role])
  //   }
  // }, [])

  return <StyledHomePageWrapper>Home Page</StyledHomePageWrapper>;
};

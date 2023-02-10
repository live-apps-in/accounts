import { mediaQuery } from "src/theme";
import { styled } from "src/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { rbacConfig } from "src/config";
import { useAuth } from "src/hooks";

const StyledHomePageWrapper = styled("div")`
  height: 100%;
  ${mediaQuery.up(1092)} {
    display: grid;
    grid-template-columns: 40% 60%;
  }
`;
export const HomePageContent = () => {
  const navigate = useNavigate();
  const { isAuthenticated, data } = useAuth();

  // when home page is not a public page
  useEffect(() => {
    if (isAuthenticated && data?.role && rbacConfig.roles.includes(data.role)) {
      navigate(rbacConfig.homePage[data.role]);
    } else navigate(rbacConfig.homePage.auth);
  }, []);

  return <StyledHomePageWrapper>Home Page</StyledHomePageWrapper>;
};

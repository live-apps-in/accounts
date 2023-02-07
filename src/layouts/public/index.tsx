import { useAuth } from "src/hooks";
import { Header } from "./header";
import { styled } from "src/utils";

const MainContentWrapper = styled("div")``;

const BackgroundDivision = styled("div")`
  background: #33d4fb;
  background: linear-gradient(14deg, #33d4fb, #fbccff 28%, #fff 63%);
  width: 100vw;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  z-index: -1;
`;

export const PublicLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const actions = isAuthenticated && <div>Button</div>;

  return (
    <>
      <Header actions={actions} />
      <MainContentWrapper>{children}</MainContentWrapper>
      <BackgroundDivision />
    </>
  );
};

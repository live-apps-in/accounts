import { useAuth } from "src/hooks";
import { Header } from "./header";
import { styled } from "src/utils";

const MainContentWrapper = styled("div")``;

export const PublicLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const actions = isAuthenticated && <div>Button</div>;

  return (
    <>
      <Header actions={actions} />
      <MainContentWrapper>{children}</MainContentWrapper>
    </>
  );
};

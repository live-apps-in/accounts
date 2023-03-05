import { PersonAdd24Regular } from "@fluentui/react-icons";
import { useLocation } from "react-router-dom";
import { DefaultAvatar } from "src/assets";
import { CustomText } from "src/components";
import { authConfig } from "src/config";
import { ACCOUNTS_SESSION_DETAILS } from "src/model";
import { styled } from "src/utils";

const StyledSessionCard = styled("a")`
  padding: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    background: lightgrey;
  }
`;

export const SessionCard: React.FC<
  ACCOUNTS_SESSION_DETAILS & {
    isAddAccount?: boolean;
    toggleSessions?: Function;
  }
> = (props) => {
  const { email, image, isAddAccount, toggleSessions = () => {} } = props;
  const { search } = useLocation();

  const generatedHref = isAddAccount
    ? undefined
    : `${authConfig.liveAppsTwoFactorAuthenticationPage.replace(
        ":email",
        email
      )}${search}`;

  return (
    <StyledSessionCard
      onClick={isAddAccount ? () => toggleSessions(false) : undefined}
      href={generatedHref}
    >
      <div>
        {isAddAccount ? (
          <PersonAdd24Regular />
        ) : (
          <img src={image || DefaultAvatar} alt={email} />
        )}
      </div>
      <CustomText
        as="h6"
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {isAddAccount ? "Add Account" : email}
      </CustomText>
    </StyledSessionCard>
  );
};

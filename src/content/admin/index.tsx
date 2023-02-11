import { CustomAvatar, CustomText, FlexBox } from "src/components";
import { useAuth } from "src/hooks";
import { styled } from "src/utils";
import { PersonalInfo } from "./personal-info";

const StyledHomePageWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  margin: auto;
`;

export const AdminPageContent = () => {
  const { data } = useAuth();
  const image = data?.image;
  const name = data?.name;

  return (
    <StyledHomePageWrapper>
      <CustomAvatar src={image} alt={name} />
      <CustomText as="h2" style={{ fontWeight: 500, textAlign: "center" }}>
        Welcome, {name}
      </CustomText>
      <CustomText as="p" style={{ fontWeight: 300, textAlign: "center" }}>
        Manage your info, privacy, and security to make Live Apps work better
        for you.
      </CustomText>
      <PersonalInfo />
    </StyledHomePageWrapper>
  );
};

export * from "./sub-route";

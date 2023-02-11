import { Divider } from "@fluentui/react-components";
import { CustomCard, CustomText, JustifyBetween } from "src/components";
import { useAuth } from "src/hooks";
import { styled } from "src/utils";

const StyledPersonalInfoWrapper = styled(CustomCard)`
  width: 100%;
  margin-top: 20px;
`;

const StyledInfoWrapper = styled(JustifyBetween)`
  flex-wrap: wrap;
  margin-top: 10px;
  h5,
  h6 {
    font-weight: 300;
  }
  h3 {
    font-weight: 500;
  }
`;

export const PersonalInfo: React.FC = () => {
  const { data } = useAuth();
  const { name, email } = data || {};

  return (
    <StyledPersonalInfoWrapper
      header={
        <>
          <CustomText as="h3" style={{ fontWeight: 300 }}>
            Personal Info
          </CustomText>
          <Divider />
        </>
      }
    >
      <StyledInfoWrapper>
        <CustomText as="h5">Name</CustomText>
        <CustomText as="h3">{name}</CustomText>
      </StyledInfoWrapper>
      <StyledInfoWrapper>
        <CustomText as="h5">Email</CustomText>
        <CustomText as="h6">{email}</CustomText>
      </StyledInfoWrapper>
    </StyledPersonalInfoWrapper>
  );
};

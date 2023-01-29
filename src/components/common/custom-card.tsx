import {
  Card,
  CardHeader,
  CardHeaderProps,
  CardProps,
} from "@fluentui/react-components/unstable";
import styled from "styled-components";
import { customizedTheme as theme } from "src/theme";
import { CardSpinner } from "../app-specific";

export interface CUSTOM_CARD_PROPS extends CardProps {
  header?: CardHeaderProps["header"];
  loading?: boolean;
}

const StyledCardWrapper = styled(Card)(theme.components.Card);

// more customizations will be done in future
export const CustomCard: React.FC<CUSTOM_CARD_PROPS> = ({
  header,
  children,
  loading,
  ...rest
}) => {
  return (
    <StyledCardWrapper {...rest}>
      {header && <CardHeader header={header} />}
      {loading ? <CardSpinner withContainer={false} /> : children}
    </StyledCardWrapper>
  );
};

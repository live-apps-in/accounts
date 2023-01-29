import styled from "styled-components";
import { CustomFormFieldMessage } from "src/components";
import { CustomFormFieldLabel } from "../../custom-form-field-label";

export interface ADDON {
  component?: React.ReactNode;
  position?: "up" | "down";
}

export interface INPUT_CONTAINER_PROPS
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: React.ReactNode | string;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  addon?: ADDON;
}

const StyledInputContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const InputContainer: React.FC<INPUT_CONTAINER_PROPS> = (props) => {
  const { error, label, required, htmlFor, addon = {}, ...rest } = props;

  const { component, position = "down" } = addon;

  return (
    <StyledInputContainerWrapper {...rest}>
      {!!label && (
        <CustomFormFieldLabel label={label} required={required} htmlFor={htmlFor} />
      )}
      {addon && position === "up" && component}
      {props.children}
      {!!error && (
        <CustomFormFieldMessage type="error">{error}</CustomFormFieldMessage>
      )}
      {addon && position === "down" && component}
    </StyledInputContainerWrapper>
  );
};

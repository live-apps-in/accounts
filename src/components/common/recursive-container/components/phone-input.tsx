import PhoneNumberInput from "react-phone-number-input";
// import { PHONE_INPUT_PROPS } from "src/components";
import { filterNumbers } from "src/utils";

import "react-phone-number-input/style.css";
import { Input } from "@fluentui/react-components";
import { styled } from "src/utils";
import { customizedTheme as theme } from "src/theme";
import { projectConfig } from "src/config";

const StyledInput = styled(Input)(() => ({
  ...theme.components.Input,
}));

// TODO: remove the country dropdown

export const PhoneInputComponent = (
  props
  // : PHONE_INPUT_PROPS
) => {
  const {
    onChange,
    value,
    // readOnly,
    ...rest
  } = props;
  let alteredValue = `${value || ""}`;
  if (alteredValue) {
    alteredValue = alteredValue.toString();
  }
  if (alteredValue && !alteredValue.startsWith("+"))
    alteredValue = `+${alteredValue}`;
  if (!alteredValue) alteredValue = undefined;

  let inputProps: any = {
    disabled: false,
    ...rest.inputProps,
  };
  if (rest.required) {
    inputProps = {
      ...inputProps,
      title: "Phone number is required",
    };
  }

  const changeHandler = (phone: any) => {
    if (onChange) onChange(filterNumbers(phone));
  };

  return (
    <PhoneNumberInput
      focusInputOnCountrySelection
      countryCallingCodeEditable={false}
      disabled={rest.disabled || inputProps.disabled}
      // ref={ref}
      country={projectConfig.defaultPhonenumberCountry}
      // countrySelectComponent={readOnly ? <></> : undefined}
      defaultCountry={projectConfig.defaultPhonenumberCountry}
      {...rest}
      inputComponent={StyledInput}
      value={alteredValue}
      onChange={changeHandler}
    />
  );
};

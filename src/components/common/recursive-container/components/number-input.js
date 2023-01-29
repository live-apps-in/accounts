import { Input } from "@fluentui/react-components";
import NumberFormat from "react-number-format";
import { customizedTheme as theme } from "src/theme";
import styled from "styled-components";

const StyledInput = styled(Input)(() => ({
  ...theme.components.Input,
}));

export const CustomNumberInput = (props) => {
  const {
    onChange,
    // inputProps,
    ...other
  } = props;
  // console.log(other.value);
  return (
    <NumberFormat
      //   getInputRef={ref}
      onValueChange={onChange}
      thousandSeparator
      isNumericString
      width={"100%"}
      // prefix="$"
      customInput={StyledInput}
      {...other}
      saveAs={undefined}
      containerProps={undefined}
    />
  );
};

// import { capitalize } from "../../../../utils";
import React from "react";
import { Input } from "@fluentui/react-components";
import { CalendarLtr24Regular } from "@fluentui/react-icons";
import styled from "styled-components";
import { customizedTheme as theme } from "src/theme";

const StyledInput = styled(Input)(() => ({
  ...theme.components.Input,
}));

export const DateInput = React.forwardRef(function DateInput(props, ref) {
  return (
    <StyledInput
      placeholder="dd/mm/yyyy"
      {...props}
      style={{ width: "100%", ...props.style }}
      ref={ref}
      contentAfter={<CalendarLtr24Regular />}
    />
  );
});

import { useState } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { ColorPicker } from "material-ui-color";
// import {
//   TextField,
//   InputAdornment,
//   IconButton,
//   InputLabel,
//   FormHelperText,
//   FormLabel,
//   Box,
//   Slider,
// } from "@mui/material";
import { Input, Slider, Textarea } from "@fluentui/react-components";
import { FluentSelect } from "./fluent-select";
import { FluentSelectMultiple } from "./fluent-select-multiple";
import {
  accessValueByDotNotation,
  getValidDate,
  isRequiredField,
  uniqId,
} from "src/utils";
import { PhoneInputComponent } from "./phone-input";
import { CustomNumberInput } from "./number-input";
import { FileInput } from "./file-input";
// import { RadioInput } from "./radio-input";
// import { RadioMultiple } from "./radio-multiple-input";
// import { CheckboxInput } from "./checkbox-input";
// import { CheckboxMultiple } from "./checkbox-multiple-input";
import { DateInput } from "./date-input";
import DatePicker from "react-datepicker";
// import { DateTimeInput } from "./date-time-input";
// import { TimeInput } from "./time-input";
// import { MaskedText } from "./masked-text";
// import { DateRangeInput } from ".";
// import { MultipleDatePicker } from "./multiple-date-picker";
import { InputContainer } from "src/components";
import { Eye24Regular, EyeOff24Filled } from "@fluentui/react-icons";
import { customizedTheme as theme } from "src/theme";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

const StyledInput = styled(Input)(() => ({
  ...theme.components.Input,
}));

const StyledTextareaInput = styled(Textarea)(() => ({
  ...theme.components.TextareaInput,
}));

// const StyledDatePicker = styled(DatePicker)`
//   .react-datepicker__navigation {
//     opacity: 1
//   }
// `;

export const Field = (props) => {
  const { validationSchema, formik, type, name, onChange, addon, ...rest } =
    props;
  const [passwordOpen, setPasswordOpen] = useState(false);
  const isRequired =
    validationSchema &&
    (isRequiredField(validationSchema, name) || rest.isRequired);
  const errorValue =
    formik.errors && accessValueByDotNotation(formik.errors, name || "");
  const error =
    formik.errors &&
    (typeof errorValue === "object" ? "Invalid Value" : errorValue);
  let value = accessValueByDotNotation(formik.values, name || "");
  // if (type === "date") value = value && new Date(value);
  const touched = !!accessValueByDotNotation(formik.touched, name || "");
  const id = uniqId();

  const passwordIconProps = {
    onClick: () => setPasswordOpen((prev) => !prev),
    style: { useSelect: "none" },
  };

  switch (type) {
    case "text":
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          htmlFor={id}
          addon={addon}
        >
          <StyledInput
            {...rest}
            id={rest.id || id}
            value={value}
            label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
            name={name}
            type="text"
            onChange={(e) => {
              if (onChange) onChange(e);
              formik.handleChange(e);
            }}
          />
        </InputContainer>
      );
    case "password":
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          htmlFor={id}
          addon={addon}
        >
          <StyledInput
            {...rest}
            id={rest.id || id}
            value={value}
            label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
            contentAfter={
              passwordOpen ? (
                <EyeOff24Filled {...passwordIconProps} />
              ) : (
                <Eye24Regular {...passwordIconProps} />
              )
            }
            name={name}
            type={passwordOpen ? "text" : "password"}
            onChange={(e) => {
              if (onChange) onChange(e);
              formik.handleChange(e);
            }}
          />
        </InputContainer>
      );
    case "textarea":
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          htmlFor={id}
          addon={addon}
        >
          <StyledTextareaInput
            {...rest}
            id={rest.id || id}
            value={value}
            label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
            name={name}
            onChange={(e) => {
              if (onChange) onChange(e);
              formik.handleChange(e);
            }}
          />
        </InputContainer>
      );
    // case "masked-text":
    //   return (
    //     <TextField
    //       fullWidth
    //       {...rest}
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       value={value}
    //       onChange={(event) => {
    //         formik.setFieldValue(name, event.target.value);
    //         if (onChange) onChange(event.target.value);
    //       }}
    //       name={name}
    //       containerProps={undefined} // to remove the "Invalid DOM property" warning in console
    //       InputProps={{
    //         [`${addonPosition}Adornment`]: addon && (
    //           <InputAdornment position={addonPosition}>
    //             {addon.component}
    //           </InputAdornment>
    //         ),
    //         ...rest.InputProps,
    //         inputComponent: MaskedText,
    //       }}
    //       inputProps={rest.containerProps}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //     />
    //   );
    case "number":
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          addon={addon}
        >
          <CustomNumberInput
            {...rest}
            label={rest.label}
            name={name}
            value={value}
            onChange={(values) => {
              const formikValue =
                values[rest.saveAs || "floatValue"] === 0
                  ? 0
                  : values[rest.saveAs || "floatValue"] || "";
              formik.setFieldValue(name, formikValue);
              if (onChange) onChange(values);
            }}
          />
        </InputContainer>
      );
    case "phone":
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          addon={addon}
        >
          <PhoneInputComponent
            {...rest}
            label={rest.label}
            name={name}
            value={value}
            onChange={(phoneNumber) => {
              // let phone: any = phoneNumber;
              // phone = filterNumbers(phone);
              if (onChange) onChange(phoneNumber);
              formik.setFieldValue(name, phoneNumber);
            }}
          />
        </InputContainer>
      );
    case "select":
      return (
        <FluentSelect
          {...rest}
          onChange={onChange}
          label={rest.label}
          required={isRequired}
          name={name}
          value={value}
          formik={formik}
          options={rest.options}
          error={error && touched ? error || rest.error : rest.error}
          addon={addon}
        />
      );
    case "select-multiple":
      return (
        <FluentSelectMultiple
          {...rest}
          addon={addon}
          onChange={onChange}
          label={rest.label}
          required={isRequired}
          name={name}
          value={value}
          formik={formik}
          options={rest.options}
          error={error && touched ? error || rest.error : rest.error}
        />
      );
    case "file":
      return (
        <InputContainer 
          {...rest.containerProps} 
          label={rest.label} 
          required={isRequired} 
          error={error && touched ? error || rest.error : rest.error}
        >
          <FileInput
            id={id}
            {...rest}
            name={name}
            onChange={(file) => {
              if (onChange) onChange(file);
              formik.setFieldValue(name, file);
            }}
            value={value}
          />
        </InputContainer>
      );
    // case "checkbox":
    //   return (
    //     <CheckboxInput
    //       {...rest}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       value={value}
    //       name={name}
    //       onChange={(event) => {
    //         if (onChange) onChange(event);
    //         formik.setFieldValue(name, event.target.checked);
    //       }}
    //       // defaultChecked={!!value}
    //       checked={!!value}
    //     />
    //   );
    // case "checkbox-multiple":
    //   return (
    //     <CheckboxMultiple
    //       value={value}
    //       name={name}
    //       {...rest}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       onChange={(event) => {
    //         if (onChange) onChange(event);
    //         formik.setFieldValue(name, event.target.value);
    //       }}
    //     />
    //   );
    // case "radio":
    //   return (
    //     <RadioInput
    //       {...rest}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       name={name}
    //       checked={!!value}
    //       value={!!value}
    //       onClick={(event) => {
    //         if (onChange) onChange(event);
    //         formik.setFieldValue(name, event.target.checked);
    //       }}
    //     />
    //   );
    // case "radio-multiple":
    //   return (
    //     <RadioMultiple
    //       {...rest}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       name={name}
    //       value={value}
    //       onChange={(event) => {
    //         if (onChange) onChange(event);
    //         formik.setFieldValue(name, event.target.value);
    //       }}
    //     />
    //   );

    // https://reactdatepicker.com/#example-custom-input
    case "date":
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          addon={addon}
        >
          <DatePicker
            dateFormat="dd/MM/yyyy"
            popperClassName="z-index-3"
            showYearDropdown
            showMonthDropdown
            {...rest}
            selected={value && getValidDate(new Date(value))}
            onChange={(date) => {
              if (onChange) onChange(date);
              formik.setFieldValue(name, date);
            }}
            customInput={
              <DateInput placeholder={rest.placeholder} {...rest.inputProps} />
            }
          />
        </InputContainer>
      );
    // case "date-time":
    //   return (
    //     <DateTimeInput
    //       {...rest}
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       name={name}
    //       value={value}
    //       onChange={(date) => {
    //         if (onChange) onChange(date);
    //         formik.setFieldValue(name, date);
    //       }}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //     />
    //   );
    // case "date-range":
    //   return (
    //     <DateRangeInput
    //       {...rest}
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       name={name}
    //       value={value}
    //       onChange={(date) => {
    //         if (onChange) onChange(date);
    //         formik.setFieldValue(name, date);
    //       }}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //     />
    //   );
    // case "multiple-date":
    //   return (
    //     <MultipleDatePicker
    //       {...rest}
    //       isRequired={isRequired}
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       name={name}
    //       value={value}
    //       onChange={(dates) => {
    //         if (onChange) onChange(dates);
    //         formik.setFieldValue(name, dates);
    //       }}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //     />
    //   );
    // case "time":
    //   return (
    //     <TimeInput
    //       {...rest}
    //       label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
    //       name={name}
    //       value={value}
    //       onChange={(date) => {
    //         if (onChange) onChange(date);
    //         formik.setFieldValue(name, date);
    //       }}
    //       error={error && touched}
    //       helperText={
    //         error && touched ? error || rest.helperText : rest.helperText
    //       }
    //     />
    //   );
    // case "color":
    //   return (
    //     <Box {...rest.containerProps}>
    //       <InputLabel
    //         sx={{ mb: 1 }}
    //         id={rest.id || id}
    //         error={error && touched}
    //       >
    //         {rest.label && (isRequired ? `${rest.label} *` : rest.label)}{" "}
    //       </InputLabel>
    //       <ColorPicker
    //         {...rest}
    //         value={value || ""}
    //         onChange={(value) => {
    //           value = `#${value.hex}`;
    //           if (onChange) onChange(value);
    //           formik.setFieldValue(name, value);
    //         }}
    //       />
    //       <FormHelperText error={error && touched}>
    //         {error && touched ? error || rest.helperText : rest.helperText}
    //       </FormHelperText>
    //     </Box>
    //   );
    case "slider":
      return (
        <InputContainer 
          {...rest.containerProps}
          style={{ width: "90%", padding: "0 11px", ...rest.containerProps?.style }}
          label={rest.label} 
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
        >
          <Slider
            {...rest}
            // sx={{ ml: 2, ...rest.sx }}
            name={name}
            defaultValue={value}
            value={value}
            onChange={({ target: { value } }) => {
              if (onChange) onChange(value);
              formik.setFieldValue(name, value);
            }}
          />
        </InputContainer>
      );
    // // case "array":
    // //   return children.length > 0 ? (
    // //     <RecursiveContainer
    // //       formContainer={rest.formContainer}
    // //       className={rest.className}
    // //       config={children || []}
    // //       formik={formik}
    // //       validationSchema={validationSchema}
    // //     />
    // //   ) : null;
    case "component":
      return (
        <InputContainer label={rest.label} required={isRequired} error={rest.showError && error && touched ? error || rest.error : rest.error}>
          {rest.component}
        </InputContainer>
      );
    default:
      return (
        <InputContainer
          {...rest.containerProps}
          label={rest.label}
          required={isRequired}
          error={error && touched ? error || rest.error : rest.error}
          addon={addon}
        >
          <StyledInput
            {...rest}
            value={value}
            label={rest.label && (isRequired ? `${rest.label} *` : rest.label)}
            name={name}
            type="text"
            onChange={(e) => {
              if (onChange) onChange(e);
              formik.handleChange(e);
            }}
          />
        </InputContainer>
      );
  }
};

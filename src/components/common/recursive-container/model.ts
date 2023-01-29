import type {
  SelectProps,
  DropdownProps,
} from "@fluentui/react-components/unstable";
import type { InputProps, SliderProps, TextareaProps } from "@fluentui/react-components";
import type { FeatureProps } from "react-phone-number-input";
import { ReactDatePickerProps } from "react-datepicker";
import { Overwrite } from "src/model";
import { ADDON, INPUT_CONTAINER_PROPS } from "./components";
import { NumberFormatProps } from "react-number-format";

// form-elements / recursive-container

// phone input props

export interface PHONE_INPUT_PROPS
  extends Omit<FeatureProps<InputProps>, "value" | "onChange"> {
  containerProps?: INPUT_CONTAINER_PROPS;
  value?: string | number | null;
  pattern?: string | null;
  countryCode?: number;
  onChange?: (
    e: number | string
    // ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => any;
}

// select input props

export interface SELECT_OPTION {
  label?: string;
  value?: any;
  [key: string]: any;
}

export interface SELECT_INPUT_PROPS
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  containerProps?: INPUT_CONTAINER_PROPS;
  value?: string | { [key: string]: any } | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  labelAccessor?: string;
  valueAccessor?: string;
  isString?: boolean;
  valueIsString?: boolean;
  optionIsString?: boolean;
  retriveOtherKeys?: boolean;
  error?: any;
  options: SELECT_OPTION[] | string[];
  formik?: any;
}

export interface SELECT_MULTIPLE_INPUT_PROPS
  extends Omit<
    DropdownProps,
    | "selectedOptions"
    | "defaultSelectedOptions"
    | "onChange"
    | "options"
    | "value"
  > {
  containerProps?: INPUT_CONTAINER_PROPS;
  value?: { [key: string]: any }[] | string[] | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  labelAccessor?: string;
  valueAccessor?: string;
  isString?: boolean;
  valueIsString?: boolean;
  optionIsString?: boolean;
  retriveOtherKeys?: boolean;
  error?: any;
  options: SELECT_OPTION[] | string[];
  formik?: any;
  openOnSelect?: boolean;
}

// file input

export interface FILE_INPUT_PROPS {
  onChange?: (e: File | null) => any;
  value?: File | null;
  supportedFormats?: Array<string>;
  downloadName?: string;
  isDownloadable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  convertToBase64?: boolean;
  name?: string;
  containerProps?: INPUT_CONTAINER_PROPS;
  returnCompleteFileDetails?: boolean;
}

// // slider props
export interface SLIDER_INPUT_PROPS extends SliderProps {
  containerProps?: INPUT_CONTAINER_PROPS;
}

// // checkbox input
// export interface CHECKBOX_INPUT_PROPS extends CheckboxProps {
//   containerProps?: Omit<FormControlLabelProps, "control" | "label">;
// }
// // checkbox-multiple input
// export interface CHECKBOX_MULTIPLE_INPUT_PROPS {
//   containerProps?: FormControlProps;
//   checkboxInputsContainerProps?: FormGroupProps;
//   orientation?: "row" | "column";
//   name?: string;
//   children: Omit<CHECKBOX_INPUT_FIELD_PROPS, "name">[];
//   value?: object | Array<string> | Array<number> | null;
//   label?: any;
//   onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
//   asArray?: boolean;
//   className?: string;
//   showSelectedOnly?: boolean;
// }
// // radio input
// export interface RADIO_INPUT_PROPS extends Omit<RadioProps, "name"> {
//   containerProps?: FormControlLabelProps;
//   name?: string;
// }
// // radio-multiple input
// export interface RADIO_MULTIPLE_INPUT_PROPS {
//   containerProps?: FormControlProps;
//   radioInputsContainerProps?: RadioGroupProps;
//   orientation?: "row" | "column";
//   name?: string;
//   children: Omit<RADIO_INPUT_FIELD_PROPS, "name">[];
//   value?: object | string | number | null;
//   label?: any;
//   onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
//   asObject?: boolean;
//   className?: string;
// }

// date input
interface DATE_INPUT_PROPS extends Omit<ReactDatePickerProps, "onChange"> {
  containerProps?: INPUT_CONTAINER_PROPS;
  inputProps?: InputProps;
  placeholder?: InputProps["placeholder"];
  onChange?: ReactDatePickerProps["onChange"];
}
// // date-time input
// interface DATE_TIME_INPUT_PROPS
//   extends Omit<DateTimePickerProps, "renderInput" | "onChange" | "value"> {
//   value?: unknown;
//   onChange?(date: unknown, keyboardInputValue?: string | undefined): void;
//   renderInput?:
//     | ((
//         props: TextFieldProps
//       ) => ReactElement<any, string | JSXElementConstructor<any>>)
//     | { props: TextFieldProps };
//   className?: string;
// }
// // date-range-input
// interface DATE_RANGE_INPUT_PROPS
//   extends Omit<DateTimePickerProps, "onChange" | "value" | "renderInput"> {
//   value?: unknown;
//   renderInput?: DateTimePickerProps["renderInput"];
//   onChange?(date: unknown, keyboardInputValue?: string | undefined): void;
//   className?: string;
// }
// // multiple-date-input
// interface MULTIPLE_DATE_INPUT_PROPS extends Omit<DayPickerProps, "value"> {
//   value?: Array<Date> | null | undefined;
//   className?: string;
// }
// // time input
// interface TIME_INPUT_PROPS
//   extends Omit<TimePickerProps, "renderInput" | "onChange" | "value"> {
//   value?: unknown;
//   onChange?(date: unknown, keyboardInputValue?: string | undefined): void;
//   renderInput?:
//     | ((
//         props: TextFieldProps
//       ) => ReactElement<any, string | JSXElementConstructor<any>>)
//     | { props: TextFieldProps };
//   className?: string;
// }
// // component input props
interface COMPONENT_INPUT_PROPS {
  component: JSX.Element | string | null;
  containerProps?: INPUT_CONTAINER_PROPS;
  showError?: boolean;
}
// number input props
type NUMBER_INPUT_PROPS = Omit<
  NumberFormatProps<unknown>,
  "value" | "onChange"
> & {
  saveAs?: "floatValue" | "formattedValue" | "value";
  inputProps?: InputProps;
};
// // masked-text input props
// type MASKED_TEXT_PROPS = TextFieldProps & {
//   containerProps?: MaskInput.Props;
// };

// Recursive component

interface CONFIG_BASE {
  name?: string;
  label?: string | null;
}

// field
// interface FIELD_TYPE {
//   type?:
//     | "text"
//     | "password"
//     | "select"
//     | "email"
//     | "color"
//     | "number"
//     | "phone"
//     | "file"
//     | "array"
//     | "date"
//     | "checkbox"
//     | "radio"
//     | "radio-multiple"
//     | "image"
//     | "component"
//     | null;
// }

// type property for each field type component
interface INPUT_FIELD_TYPE {
  type?: "text" | "password" | "email" | "color" | "";
}
interface PHONE_FIELD_TYPE {
  type?: "phone";
}
interface SELECT_FIELD_TYPE {
  type?: "select";
}
interface SELECT_MULTIPLE_FIELD_TYPE {
  type?: "select-multiple";
}
interface TEXTAREA_FIELD_TYPE {
  type?: "textarea";
}
interface FILE_INPUT_FIELD_TYPE {
  type?: "file";
}
// interface CHECKBOX_INPUT_FIELD_TYPE {
//   type?: "checkbox";
// }
// interface CHECKBOX_MULTIPLE_INPUT_FIELD_TYPE {
//   type?: "checkbox-multiple";
// }
// interface RADIO_INPUT_FIELD_TYPE {
//   type?: "radio";
// }
// interface RADIO_MULTIPLE_INPUT_FIELD_TYPE {
//   type?: "radio-multiple";
// }
interface DATE_INPUT_FIELD_TYPE {
  type?: "date";
}
// interface DATE_TIME_INPUT_FIELD_TYPE {
//   type?: "date-time";
// }
// interface DATE_RANGE_INPUT_FIELD_TYPE {
//   type?: "date-range";
// }
// interface MULTIPLE_DATE_INPUT_FIELD_TYPE {
//   type?: "multiple-date";
// }
// interface TIME_INPUT_FIELD_TYPE {
//   type?: "time";
// }
interface COMPONENT_INPUT_FIELD_TYPE {
  type?: "component";
}
interface NUMBER_INPUT_FIELD_TYPE {
  type?: "number";
}
// interface MASKED_TEXT_FIELD_TYPE {
//   type?: "masked-text";
// }
interface SLIDER_INPUT_FIELD_TYPE {
  type?: "slider";
}

// text field
type INPUT_FIELD_PROPS = Overwrite<
  InputProps & CONFIG_BASE,
  INPUT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};
type TEXTAREA_FIELD_PROPS = Overwrite<
  TextareaProps & CONFIG_BASE,
  TEXTAREA_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};
// phone field
type PHONE_FIELD_PROPS = Overwrite<
  PHONE_INPUT_PROPS & CONFIG_BASE,
  PHONE_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};

// select field
type SELECT_FIELD_PROPS = Overwrite<
  SELECT_INPUT_PROPS & CONFIG_BASE,
  SELECT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};
// select field
type SELECT_MULTIPLE_FIELD_PROPS = Overwrite<
  SELECT_MULTIPLE_INPUT_PROPS & CONFIG_BASE,
  SELECT_MULTIPLE_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};

// file field
type FILE_INPUT_FIELD_PROPS = Overwrite<
  FILE_INPUT_PROPS & CONFIG_BASE,
  FILE_INPUT_FIELD_TYPE
>;
// // checkbox field
// type CHECKBOX_INPUT_FIELD_PROPS = Overwrite<
//   CHECKBOX_INPUT_PROPS & CONFIG_BASE,
//   CHECKBOX_INPUT_FIELD_TYPE
// >;
// // checkbox-multiple field
// type CHECKBOX_MULTIPLE_INPUT_FIELD_PROPS = Overwrite<
//   CHECKBOX_MULTIPLE_INPUT_PROPS & CONFIG_BASE,
//   CHECKBOX_MULTIPLE_INPUT_FIELD_TYPE
// >;
// // radio field
// type RADIO_INPUT_FIELD_PROPS = Overwrite<
//   RADIO_INPUT_PROPS & CONFIG_BASE,
//   RADIO_INPUT_FIELD_TYPE
// >;
// // radio-multiple field
// type RADIO_MULTIPLE_INPUT_FIELD_PROPS = Overwrite<
//   RADIO_MULTIPLE_INPUT_PROPS & CONFIG_BASE,
//   RADIO_MULTIPLE_INPUT_FIELD_TYPE
// >;
// date field
type DATE_INPUT_FIELD_PROPS = Overwrite<
  DATE_INPUT_PROPS & CONFIG_BASE,
  DATE_INPUT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};
// // date-time field
// type DATE_TIME_INPUT_FIELD_PROPS = Overwrite<
//   DATE_TIME_INPUT_PROPS & CONFIG_BASE,
//   DATE_TIME_INPUT_FIELD_TYPE
// >;
// // date-range field
// type DATE_RANGE_INPUT_FIELD_PROPS = Overwrite<
//   DATE_RANGE_INPUT_PROPS & CONFIG_BASE,
//   DATE_RANGE_INPUT_FIELD_TYPE
// >;
// // multiple-date-input field
// type MULTIPLE_DATE_INPUT_FIELD_PROPS = Overwrite<
//   MULTIPLE_DATE_INPUT_PROPS & CONFIG_BASE,
//   MULTIPLE_DATE_INPUT_FIELD_TYPE
// >;
// // time field
// type TIME_INPUT_FIELD_PROPS = Overwrite<
//   TIME_INPUT_PROPS & CONFIG_BASE,
//   TIME_INPUT_FIELD_TYPE
// >;
// // component type
type COMPONENT_FIELD_PROPS = Overwrite<
  COMPONENT_INPUT_PROPS & CONFIG_BASE,
  COMPONENT_INPUT_FIELD_TYPE
>;
// // slider type
type SLIDER_FIELD_PROPS = Overwrite<
  SLIDER_INPUT_PROPS & CONFIG_BASE,
  SLIDER_INPUT_FIELD_TYPE
>;
// number field
type NUMBER_FIELD_PROPS = Overwrite<
  NUMBER_INPUT_PROPS & CONFIG_BASE,
  NUMBER_INPUT_FIELD_TYPE
> & {
  // other manually defined properties
  addon?: ADDON;
};
// // masked-text field
// type MASKED_TEXT_FIELD_PROPS = Overwrite<
//   MASKED_TEXT_PROPS & CONFIG_BASE,
//   MASKED_TEXT_FIELD_TYPE
// > & {
//   // other manually defined properties
//   addon?: null | {
//     position?: "end" | "start" | null;
//     component: null | ReactElement;
//   };
// };

// field props
export type FIELD_PROPS = (
  | INPUT_FIELD_PROPS
  | TEXTAREA_FIELD_PROPS
  | SELECT_FIELD_PROPS
  | SELECT_MULTIPLE_FIELD_PROPS
  | PHONE_FIELD_PROPS
  | DATE_INPUT_FIELD_PROPS
  | NUMBER_FIELD_PROPS
  | FILE_INPUT_FIELD_PROPS
  | SLIDER_FIELD_PROPS
  | COMPONENT_FIELD_PROPS
) & {
  // | SLIDER_FIELD_PROPS // | MASKED_TEXT_FIELD_PROPS // | COMPONENT_FIELD_PROPS // | TIME_INPUT_FIELD_PROPS // | MULTIPLE_DATE_INPUT_FIELD_PROPS // | DATE_RANGE_INPUT_FIELD_PROPS // | DATE_TIME_INPUT_FIELD_PROPS // | RADIO_MULTIPLE_INPUT_FIELD_PROPS // | RADIO_INPUT_FIELD_PROPS // | CHECKBOX_MULTIPLE_INPUT_FIELD_PROPS // | CHECKBOX_INPUT_FIELD_PROPS // | FILE_INPUT_FIELD_PROPS
  // other manually defined properties
  validationSchema?: any;
  formik?: any;
  isRequired?: boolean | null;
  container?: React.FC<{ children?: React.ReactNode }>;
};

export type CONFIG_TYPE = FIELD_PROPS[];

export interface RECURSIVE_CONTAINER_PROPS {
  config: CONFIG_TYPE;
  formik: any;
  validationSchema?: any;
  formContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  formContainer?: null | React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
    //  & { form: ReactElement<any, any> }
  >;
}

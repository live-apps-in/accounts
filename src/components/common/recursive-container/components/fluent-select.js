import {
  uniqId,
  accessValueByDotNotation,
  convertDropDownObject,
  ignoreEmptyObject,
} from "src/utils";
import { Select } from "@fluentui/react-components/unstable";
import { InputContainer } from "./input-container";
import { useUniqueKey } from "src/hooks";
import styled from "styled-components";
import { customizedTheme as theme } from "src/theme";

const StyledSelect = styled(Select)(() => ({
  ...theme.components.Select,
}));

export const FluentSelect = ({
  formik = undefined,
  options = [],
  labelAccessor = "label",
  valueAccessor = "value",
  isString = false,
  valueIsString = false,
  optionIsString = false,
  retriveOtherKeys = false,
  name = "",
  value,
  error = "",
  required,
  containerProps = {},
  addon,
  readOnly = false,
  ...rest
}) => {
  const keys = useUniqueKey(options);
  const id = uniqId();
  // little configuration
  if (isString) {
    valueIsString = valueIsString === undefined || valueIsString === null;
    optionIsString = optionIsString === undefined || optionIsString === null;
  }
  options = options.map((el) => ignoreEmptyObject(el)).filter((el) => el);

  // ---------------------- //

  let selectedOption = ignoreEmptyObject(
    formik ? accessValueByDotNotation(formik.values, name) : value
  );

  selectedOption =
    convertDropDownObject({
      value: selectedOption,
      valueAccessor,
      labelAccessor,
      isString: isString || valueIsString,
      retriveOtherKeys,
    }) || null;

  options = (options || []).map((option) =>
    convertDropDownObject({
      value: option,
      isString: isString || optionIsString,
      valueAccessor,
      labelAccessor,
      retriveOtherKeys,
    })
  );

  const onChange = (event, option) => {
    option = options.find((el) => el.value === option?.value);
    let value = convertDropDownObject({
      value: option,
      valueAccessor,
      labelAccessor,
      isString: isString || valueIsString,
      isReverse: true,
      retriveOtherKeys,
    });
    let newEvent = {
      ...event,
      target: {
        ...event.target,
        value: valueIsString || isString ? option?.value : option,
        chosenOption: option,
      },
    };
    if (formik) formik.setFieldValue(name, value);
    if (rest.onChange) rest.onChange(newEvent);
  };

  const getValue = () => {
    if (options) {
      return selectedOption
        ? options.find((option) => option.value === selectedOption.value)?.value
        : null;
    } else {
      return null;
    }
  };
  const getLabel = () => {
    if (options) {
      return selectedOption
        ? options.find((option) => option.value === selectedOption.value)?.label
        : null;
    } else {
      return null;
    }
  };
  let selectedValue = getValue();
  let selectedLabel = getLabel();

  return (
    <InputContainer
      {...containerProps}
      label={rest.label}
      htmlFor={rest.id || id}
      required={required}
      error={error}
      addon={addon}
    >
      <StyledSelect
        {...rest}
        icon={rest.contentAfter || rest.contentBefore}
        id={rest.id || id}
        name={name}
        value={selectedValue || ""}
        onChange={onChange}
      >
        {readOnly ?
          <option value={selectedValue}>{selectedLabel}</option>
        : <>
          <option selected={!selectedValue} value="">
            {rest.placeholder || "Choose an option"}
          </option>
          {options.map((el, index) => (
            <option key={keys[index]} value={el.value}>
              {el.label}
            </option>
          ))}
        </>}
      </StyledSelect>
    </InputContainer>
  );
};

// yup validation examples
// yup
//   .array()
//   .min(3, "Pick at least 3 tags")
//   .nullable()
//   .required("This is required")
//   .of(
//     yup.object().shape({
//       label: yup.string().required(),
//       value: yup.string().required(),
//     })
//   )

// yup
//   .object()
//   .nullable()
//   .required("This field is required")
//   .shape({
//     label: yup.string().required("Required"),
//     value: yup.string().required("Required"),
//   })

// for more info
// https://stackoverflow.com/questions/54938382/how-do-the-yup-validation-for-react-select

import {
  uniqId,
  accessValueByDotNotation,
  convertDropDownObject,
  ignoreEmptyObject,
} from "src/utils";
import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { InputContainer } from "./input-container";
import { useUniqueKey } from "src/hooks";
import styled from "styled-components";
import { customizedTheme as theme } from "src/theme";

const StyledSelectMultiple = styled(Dropdown)(() => ({
  ...theme.components.Select,
}));

export const FluentSelectMultiple = ({
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
  // openOnSelect = true,
  addon,
  ...rest
}) => {
  // const [open, setOpen] = useState(false);

  const keys = useUniqueKey(options);
  const id = uniqId();
  // little configuration
  if (isString) {
    valueIsString = valueIsString === undefined || valueIsString === null;
    optionIsString = optionIsString === undefined || optionIsString === null;
  }
  options = options.map((el) => ignoreEmptyObject(el)).filter((el) => el);

  // ---------------------- //

  let selectedOptions = formik
    ? accessValueByDotNotation(formik.values, name)
    : value;

  selectedOptions = selectedOptions
    .map(
      (option) =>
        convertDropDownObject({
          value: option,
          valueAccessor,
          labelAccessor,
          isString: isString || valueIsString,
          retriveOtherKeys,
        }) || null
    )
    .filter((el) => el);

  options = (options || []).map((option) =>
    convertDropDownObject({
      value: option,
      isString: isString || optionIsString,
      valueAccessor,
      labelAccessor,
      retriveOtherKeys,
    })
  );

  const onChange = (event, selectedData) => {
    // if (openOnSelect) setOpen(true);
    let newSelectedOptions =
      selectedData?.selectedOptions?.map((newSelectedOption) =>
        options.find((givenOption) => givenOption.value === newSelectedOption)
      ) || [];
    let value = newSelectedOptions.map((el) =>
      convertDropDownObject({
        value: el,
        valueAccessor,
        labelAccessor,
        isString: isString || valueIsString,
        isReverse: true,
        retriveOtherKeys,
      })
    );
    let newEvent = {
      ...event,
      target: {
        ...event.target,
        value,
      },
    };
    if (formik) formik.setFieldValue(name, value);
    if (rest.onChange) rest.onChange(newEvent);
  };

  const getValues = () => {
    if (options) {
      return selectedOptions
        ? selectedOptions.map(
            (selectedOption) =>
              options.find((option) => option.value === selectedOption.value)
                ?.value
          )
        : [];
    } else {
      return [];
    }
  };

  const getLabels = () => {
    if (options) {
      return selectedOptions
        ? selectedOptions.map(
            (selectedOption) =>
              options.find((option) => option.value === selectedOption.value)
                ?.label
          )
        : [];
    } else {
      return [];
    }
  };

  let selectedValues = getValues();
  let selectedLabels = getLabels();

  return (
    <InputContainer
      {...containerProps}
      label={rest.label}
      htmlFor={rest.id || id}
      required={required}
      error={error}
      addon={addon}
    >
      <StyledSelectMultiple
        {...rest}
        // onOpenChange={(...params) => {
        //   if (rest.onOpenChange) rest.onOpenChange(...params);
        //   setOpen((prev) => !prev);
        // }}
        // open={open}
        multiselect
        id={rest.id || id}
        name={name}
        value={selectedLabels?.join(", ") || rest.placeholder}
        selectedOptions={selectedValues || ""}
        onSelect={onChange}
      >
        {options.map((el, index) => (
          <Option
            // onClick={() => setOpen(true)}
            key={keys[index]}
            value={el.value}
          >
            {el.label}
          </Option>
        ))}
      </StyledSelectMultiple>
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

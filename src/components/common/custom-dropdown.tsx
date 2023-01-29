import {
  Dropdown,
  DropdownProps,
  Option,
  OptionProps,
} from "@fluentui/react-components/unstable";
import { useUniqueKey } from "src/hooks";
import { CustomText } from "./custom-text";
import { customizedTheme as theme } from "src/theme";
import styled from "styled-components";
import { capitalize } from "src/utils";

export interface DROPDOWN_PROPS
  extends Omit<DropdownProps, "onSelect" | "onChange" | "appearance"> {
  label?: string;
  options: (OptionProps & { label: string })[];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  appearance?: "secondary" | "primary" | "outline" | "subtle" | "transparent";
  variant?: DropdownProps["appearance"];
  isNav?: boolean;
}

const getButtonStyle = (buttonType) =>
  theme.components[`${capitalize(buttonType)}Button`];

const StyledDropdown = styled(Dropdown)((props) => {
  const buttonStyle = getButtonStyle(props.buttonType);
  return {
    padding: 0,
    width: buttonStyle.width,
    display: 'flex',
    alignItems: 'center',
    "::after": {
      display: "none",
    },
    "> button": {
      ...props.style,
      ...(!!props.buttonType && buttonStyle),
      padding: "10px 25px",
      fontWeight: "bold",
      width: "100%",
      margin: 0,
      marginRight: 0,
      ...(props.isNav && {
        fontSize: '17px',
        padding: "10px 20px"
      })
    },
  };
});

export const CustomDropdown: React.FC<DROPDOWN_PROPS> = ({
  label,
  placeholder,
  options,
  onChange,
  variant,
  appearance='primary',
  ...rest
}) => {
  const [id] = useUniqueKey(1);
  const optionsKeys = useUniqueKey(options);

  const handleChange = (event, selectedData) => {
    if (onChange) {
      onChange({
        ...event,
        target: {
          ...event.target,
          value: !selectedData
            ? null
            : rest.multiselect
            ? selectedData?.selectedOptions
            : selectedData?.optionValue,
        },
      });
    }
  };

  const getValueFrom = (providedOptions) => {
    return providedOptions
      ?.map((el) => {
        const foundOption = options.find(
          (option) => option.label === el || option.value === el
        );
        if (foundOption === undefined) return null;
        return foundOption?.label;
      })
      .filter((el) => el !== null);
  };

  return (
    <div className="___14ojjqj f13qh94s f1uwxql5 f1m2n5bn f16mnhsx fbi42co f17dkswv">
      {label && (
        <CustomText as="label" id={id}>
          {label}
        </CustomText>
      )}
      <StyledDropdown
        {...rest}
        buttonType={appearance}
        appearance={variant}
        selectedOptions={getValueFrom(rest.selectedOptions)}
        defaultSelectedOptions={getValueFrom(rest.defaultSelectedOptions)}
        aria-labelledby={id}
        onSelect={handleChange as any}
        placeholder={placeholder || label || "Choose an option"}
      >
        {options
          ? options.map((el, index) => (
              <Option key={optionsKeys[index]} value={el.value}>
                {el.label}
              </Option>
            ))
          : rest.children}
      </StyledDropdown>
    </div>
  );
};

// usage
{
  /* <CustomDropdown
variant="filled-darker"
appearance="outline"
selectedOptions={[removeSlashAtLast(updatedPathname)]}
options={navigationLinks.adminLayout.map((el) => ({
  value: el.path,
  label: el.name,
}))}
onChange={({ target: { value } }) => navigate(getValidRouteName(value))}
/> */
}

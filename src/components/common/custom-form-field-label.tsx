import { CustomText, CUSTOM_TEXT_PROPS } from "./custom-text";

interface FORM_FIELD_LABEL {
    required?: boolean;
    htmlFor?: any;
    label?: any;
}
  
export type CUSTOM_FORM_FIELD_LABEL = FORM_FIELD_LABEL & CUSTOM_TEXT_PROPS;

export const CustomFormFieldLabel: React.FC<CUSTOM_FORM_FIELD_LABEL> = ({ required, label, ...rest }) => {
    return (
        <CustomText {...rest} as="label">
            {label}
            {/* temporary solution for required not working in Label component of fluentui */}
            {/* TODO: fix the required field bug */}
            {required && (
            <CustomText
                style={{ display: "inline-block", margin: 0 }}
                color="primary"
            >
                *
            </CustomText>
            )}
        </CustomText>
    );
};
import { CustomText, CUSTOM_TEXT_PROPS } from "src/components";

// in future we can include some bin images to display the empty message
export const EmptyMessage: React.FC<CUSTOM_TEXT_PROPS> = (props) => {
  return (
    <CustomText
      as={"h3" as any}
      {...props}
      style={{
        width: "100%",
        padding: "20px 0",
        marginLeft: 0,
        marginRight: 0,
        ...props.style,
      }}
    >
      {props.children}
    </CustomText>
  );
};

import { styled } from "src/utils";

const StyledXCenterWrapper = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  ...props.style,
}));

export const XCenter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <StyledXCenterWrapper {...props}>{props.children}</StyledXCenterWrapper>
  );
};

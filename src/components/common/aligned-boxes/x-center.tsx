import styled from "styled-components";

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

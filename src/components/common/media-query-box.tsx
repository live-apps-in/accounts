import { BREAKPOINT, mediaQuery, STYLES } from "src/theme";
import styled from "styled-components";

export interface MEDIA_QUERY_BOX_PROPS
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  up?: {
    breakpoint: BREAKPOINT | number;
    style?: STYLES;
  };
  down?: {
    breakpoint: BREAKPOINT | number;
    style?: STYLES;
  };
}

const StyledMediaQueryBoxWrapper = styled("div")((props) => ({
  ...(props.up && { [mediaQuery.up(props.up)]: props.upStyle }),
  ...(props.down && { [mediaQuery.down(props.down)]: props.downStyle }),
}));

export const MediaQueryBox: React.FC<MEDIA_QUERY_BOX_PROPS> = ({
  up,
  down,
  ...rest
}) => {
  return (
    <StyledMediaQueryBoxWrapper
      up={up?.breakpoint}
      down={down?.breakpoint}
      upStyle={up?.style}
      downStyle={down?.style}
      {...rest}
    >
      {rest.children}
    </StyledMediaQueryBoxWrapper>
  );
};

import { useEffect, useState } from "react";
import { styled } from "src/utils";

const StyledCustomText = styled("span")`
  -webkit-animation-name: anim-text-flow-keys;
  animation-name: anim-text-flow-keys;
  -webkit-animation-duration: 50s;
  animation-duration: 50s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  @-webkit-keyframes anim-text-flow-keys {
    0% {
      color: #bcd65c;
    }
    5% {
      color: #ab5cd6;
    }
    10% {
      color: #935cd6;
    }
    15% {
      color: #785cd6;
    }
    20% {
      color: #5cd697;
    }
    25% {
      color: #815cd6;
    }
    30% {
      color: #d65ca5;
    }
    35% {
      color: #ba5cd6;
    }
    40% {
      color: #5cd681;
    }
    45% {
      color: #5cd695;
    }
    50% {
      color: #d6a15c;
    }
    55% {
      color: #99d65c;
    }
    60% {
      color: #5cd662;
    }
    65% {
      color: #5cd691;
    }
    70% {
      color: #8bd65c;
    }
    75% {
      color: #d65c72;
    }
    80% {
      color: #5c8dd6;
    }
    85% {
      color: #d65ca1;
    }
    90% {
      color: #d65c95;
    }
    95% {
      color: #d6685c;
    }
    100% {
      color: #5c66d6;
    }
  }
  @keyframes anim-text-flow-keys {
    0% {
      color: #bcd65c;
    }
    5% {
      color: #ab5cd6;
    }
    10% {
      color: #935cd6;
    }
    15% {
      color: #785cd6;
    }
    20% {
      color: #5cd697;
    }
    25% {
      color: #815cd6;
    }
    30% {
      color: #d65ca5;
    }
    35% {
      color: #ba5cd6;
    }
    40% {
      color: #5cd681;
    }
    45% {
      color: #5cd695;
    }
    50% {
      color: #d6a15c;
    }
    55% {
      color: #99d65c;
    }
    60% {
      color: #5cd662;
    }
    65% {
      color: #5cd691;
    }
    70% {
      color: #8bd65c;
    }
    75% {
      color: #d65c72;
    }
    80% {
      color: #5c8dd6;
    }
    85% {
      color: #d65ca1;
    }
    90% {
      color: #d65c95;
    }
    95% {
      color: #d6685c;
    }
    100% {
      color: #5c66d6;
    }
  }
  :nth-of-type(1) {
    -webkit-animation-delay: -19.8s;
    animation-delay: -19.8s;
  }
  :nth-of-type(2) {
    -webkit-animation-delay: -19.6s;
    animation-delay: -19.6s;
  }
  :nth-of-type(3) {
    -webkit-animation-delay: -19.4s;
    animation-delay: -19.4s;
  }
  :nth-of-type(4) {
    -webkit-animation-delay: -19.2s;
    animation-delay: -19.2s;
  }
  :nth-of-type(5) {
    -webkit-animation-delay: -19s;
    animation-delay: -19s;
  }
  :nth-of-type(6) {
    -webkit-animation-delay: -18.8s;
    animation-delay: -18.8s;
  }
  :nth-of-type(7) {
    -webkit-animation-delay: -18.6s;
    animation-delay: -18.6s;
  }
  :nth-of-type(8) {
    -webkit-animation-delay: -18.4s;
    animation-delay: -18.4s;
  }
  :nth-of-type(9) {
    -webkit-animation-delay: -18.2s;
    animation-delay: -18.2s;
  }
  :nth-of-type(10) {
    -webkit-animation-delay: -18s;
    animation-delay: -18s;
  }
  :nth-of-type(11) {
    -webkit-animation-delay: -17.8s;
    animation-delay: -17.8s;
  }
  :nth-of-type(12) {
    -webkit-animation-delay: -17.6s;
    animation-delay: -17.6s;
  }
  :nth-of-type(13) {
    -webkit-animation-delay: -17.4s;
    animation-delay: -17.4s;
  }
  :nth-of-type(14) {
    -webkit-animation-delay: -17.2s;
    animation-delay: -17.2s;
  }
  :nth-of-type(15) {
    -webkit-animation-delay: -17s;
    animation-delay: -17s;
  }
  :nth-of-type(16) {
    -webkit-animation-delay: -16.8s;
    animation-delay: -16.8s;
  }
  :nth-of-type(17) {
    -webkit-animation-delay: -16.6s;
    animation-delay: -16.6s;
  }
  :nth-of-type(18) {
    -webkit-animation-delay: -16.4s;
    animation-delay: -16.4s;
  }
  :nth-of-type(19) {
    -webkit-animation-delay: -16.2s;
    animation-delay: -16.2s;
  }
  :nth-of-type(20) {
    -webkit-animation-delay: -16s;
    animation-delay: -16s;
  }
  :nth-of-type(21) {
    -webkit-animation-delay: -15.8s;
    animation-delay: -15.8s;
  }
  :nth-of-type(22) {
    -webkit-animation-delay: -15.6s;
    animation-delay: -15.6s;
  }
  :nth-of-type(23) {
    -webkit-animation-delay: -15.4s;
    animation-delay: -15.4s;
  }
  :nth-of-type(24) {
    -webkit-animation-delay: -15.2s;
    animation-delay: -15.2s;
  }
  :nth-of-type(25) {
    -webkit-animation-delay: -15s;
    animation-delay: -15s;
  }
  :nth-of-type(26) {
    -webkit-animation-delay: -14.8s;
    animation-delay: -14.8s;
  }
  :nth-of-type(27) {
    -webkit-animation-delay: -14.6s;
    animation-delay: -14.6s;
  }
  :nth-of-type(28) {
    -webkit-animation-delay: -14.4s;
    animation-delay: -14.4s;
  }
  :nth-of-type(29) {
    -webkit-animation-delay: -14.2s;
    animation-delay: -14.2s;
  }
  :nth-of-type(30) {
    -webkit-animation-delay: -14s;
    animation-delay: -14s;
  }
  :nth-of-type(31) {
    -webkit-animation-delay: -13.8s;
    animation-delay: -13.8s;
  }
  :nth-of-type(32) {
    -webkit-animation-delay: -13.6s;
    animation-delay: -13.6s;
  }
  :nth-of-type(33) {
    -webkit-animation-delay: -13.4s;
    animation-delay: -13.4s;
  }
  :nth-of-type(34) {
    -webkit-animation-delay: -13.2s;
    animation-delay: -13.2s;
  }
  :nth-of-type(35) {
    -webkit-animation-delay: -13s;
    animation-delay: -13s;
  }
  :nth-of-type(36) {
    -webkit-animation-delay: -12.8s;
    animation-delay: -12.8s;
  }
  :nth-of-type(37) {
    -webkit-animation-delay: -12.6s;
    animation-delay: -12.6s;
  }
  :nth-of-type(38) {
    -webkit-animation-delay: -12.4s;
    animation-delay: -12.4s;
  }
  :nth-of-type(39) {
    -webkit-animation-delay: -12.2s;
    animation-delay: -12.2s;
  }
  :nth-of-type(40) {
    -webkit-animation-delay: -12s;
    animation-delay: -12s;
  }
  :nth-of-type(41) {
    -webkit-animation-delay: -11.8s;
    animation-delay: -11.8s;
  }
  :nth-of-type(42) {
    -webkit-animation-delay: -11.6s;
    animation-delay: -11.6s;
  }
  :nth-of-type(43) {
    -webkit-animation-delay: -11.4s;
    animation-delay: -11.4s;
  }
  :nth-of-type(44) {
    -webkit-animation-delay: -11.2s;
    animation-delay: -11.2s;
  }
  :nth-of-type(45) {
    -webkit-animation-delay: -11s;
    animation-delay: -11s;
  }
  :nth-of-type(46) {
    -webkit-animation-delay: -10.8s;
    animation-delay: -10.8s;
  }
  :nth-of-type(47) {
    -webkit-animation-delay: -10.6s;
    animation-delay: -10.6s;
  }
  :nth-of-type(48) {
    -webkit-animation-delay: -10.4s;
    animation-delay: -10.4s;
  }
  :nth-of-type(49) {
    -webkit-animation-delay: -10.2s;
    animation-delay: -10.2s;
  }
  :nth-of-type(50) {
    -webkit-animation-delay: -10s;
    animation-delay: -10s;
  }
  :nth-of-type(51) {
    -webkit-animation-delay: -9.8s;
    animation-delay: -9.8s;
  }
  :nth-of-type(52) {
    -webkit-animation-delay: -9.6s;
    animation-delay: -9.6s;
  }
  :nth-of-type(53) {
    -webkit-animation-delay: -9.4s;
    animation-delay: -9.4s;
  }
  :nth-of-type(54) {
    -webkit-animation-delay: -9.2s;
    animation-delay: -9.2s;
  }
  :nth-of-type(55) {
    -webkit-animation-delay: -9s;
    animation-delay: -9s;
  }
  :nth-of-type(56) {
    -webkit-animation-delay: -8.8s;
    animation-delay: -8.8s;
  }
  :nth-of-type(57) {
    -webkit-animation-delay: -8.6s;
    animation-delay: -8.6s;
  }
  :nth-of-type(58) {
    -webkit-animation-delay: -8.4s;
    animation-delay: -8.4s;
  }
  :nth-of-type(59) {
    -webkit-animation-delay: -8.2s;
    animation-delay: -8.2s;
  }
  :nth-of-type(60) {
    -webkit-animation-delay: -8s;
    animation-delay: -8s;
  }
  :nth-of-type(61) {
    -webkit-animation-delay: -7.8s;
    animation-delay: -7.8s;
  }
  :nth-of-type(62) {
    -webkit-animation-delay: -7.6s;
    animation-delay: -7.6s;
  }
  :nth-of-type(63) {
    -webkit-animation-delay: -7.4s;
    animation-delay: -7.4s;
  }
  :nth-of-type(64) {
    -webkit-animation-delay: -7.2s;
    animation-delay: -7.2s;
  }
  :nth-of-type(65) {
    -webkit-animation-delay: -7s;
    animation-delay: -7s;
  }
  :nth-of-type(66) {
    -webkit-animation-delay: -6.8s;
    animation-delay: -6.8s;
  }
  :nth-of-type(67) {
    -webkit-animation-delay: -6.6s;
    animation-delay: -6.6s;
  }
  :nth-of-type(68) {
    -webkit-animation-delay: -6.4s;
    animation-delay: -6.4s;
  }
  :nth-of-type(69) {
    -webkit-animation-delay: -6.2s;
    animation-delay: -6.2s;
  }
  :nth-of-type(70) {
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }
  :nth-of-type(71) {
    -webkit-animation-delay: -5.8s;
    animation-delay: -5.8s;
  }
  :nth-of-type(72) {
    -webkit-animation-delay: -5.6s;
    animation-delay: -5.6s;
  }
  :nth-of-type(73) {
    -webkit-animation-delay: -5.4s;
    animation-delay: -5.4s;
  }
  :nth-of-type(74) {
    -webkit-animation-delay: -5.2s;
    animation-delay: -5.2s;
  }
  :nth-of-type(75) {
    -webkit-animation-delay: -5s;
    animation-delay: -5s;
  }
  :nth-of-type(76) {
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  :nth-of-type(77) {
    -webkit-animation-delay: -4.6s;
    animation-delay: -4.6s;
  }
  :nth-of-type(78) {
    -webkit-animation-delay: -4.4s;
    animation-delay: -4.4s;
  }
  :nth-of-type(79) {
    -webkit-animation-delay: -4.2s;
    animation-delay: -4.2s;
  }
  :nth-of-type(80) {
    -webkit-animation-delay: -4s;
    animation-delay: -4s;
  }
  :nth-of-type(81) {
    -webkit-animation-delay: -3.8s;
    animation-delay: -3.8s;
  }
  :nth-of-type(82) {
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  :nth-of-type(83) {
    -webkit-animation-delay: -3.4s;
    animation-delay: -3.4s;
  }
  :nth-of-type(84) {
    -webkit-animation-delay: -3.2s;
    animation-delay: -3.2s;
  }
  :nth-of-type(85) {
    -webkit-animation-delay: -3s;
    animation-delay: -3s;
  }
  :nth-of-type(86) {
    -webkit-animation-delay: -2.8s;
    animation-delay: -2.8s;
  }
  :nth-of-type(87) {
    -webkit-animation-delay: -2.6s;
    animation-delay: -2.6s;
  }
  :nth-of-type(88) {
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  :nth-of-type(89) {
    -webkit-animation-delay: -2.2s;
    animation-delay: -2.2s;
  }
  :nth-of-type(90) {
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
  }
  :nth-of-type(91) {
    -webkit-animation-delay: -1.8s;
    animation-delay: -1.8s;
  }
  :nth-of-type(92) {
    -webkit-animation-delay: -1.6s;
    animation-delay: -1.6s;
  }
  :nth-of-type(93) {
    -webkit-animation-delay: -1.4s;
    animation-delay: -1.4s;
  }
  :nth-of-type(94) {
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  :nth-of-type(95) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  :nth-of-type(96) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  :nth-of-type(97) {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  :nth-of-type(98) {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  :nth-of-type(99) {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  :nth-of-type(100) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
`;

export const AnimatedText: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = (props) => {
  const [spanChildren, setSpanChildren] = useState(props.children);

  useEffect(() => {
    const children = props.children;
    if (typeof children === "string") {
      setSpanChildren(
        children.split("").map((el, index) => <span key={index}>{el}</span>)
      );
    }
  }, []);

  return <StyledCustomText {...props}>{spanChildren}</StyledCustomText>;
};

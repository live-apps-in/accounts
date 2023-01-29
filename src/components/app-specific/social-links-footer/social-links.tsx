import { useUniqueKey } from "src/hooks";
import {
  FacebookOutlineIcon,
  InstagramOutlineIcon,
  LinkedinOutlineIcon,
  TwitterOutlineIcon,
} from "src/theme";
import { CustomButton, CUSTOM_BUTTON_PROPS, FlexRow } from "../../common";

export const SocialLinks = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const keys = useUniqueKey(4);

  const socialIconsProps: any = { shape: "circular", style: { padding: 10 } };
  const socialIcons: CUSTOM_BUTTON_PROPS[] = [
    {
      ...socialIconsProps,
      icon: <FacebookOutlineIcon />,
      href: {
        to: "https://www.facebook.com/dikshit.dikshit.503/",
        options: { target: "_blank" },
      },
      socialName: "facebook",
    },
    {
      ...socialIconsProps,
      icon: <TwitterOutlineIcon />,
      href: {
        to: "https://twitter.com/dikshit___n/",
        options: { target: "_blank" },
      },
      socialName: "twitter",
    },
    {
      ...socialIconsProps,
      icon: <LinkedinOutlineIcon />,
      href: {
        to: "https://www.linkedin.com/in/dikshitkumar-n-b66177199/",
        options: { target: "_blank" },
      },
      socialName: "linkedin",
    },
    {
      ...socialIconsProps,
      icon: <InstagramOutlineIcon />,
      href: {
        to: "https://www.instagram.com/dikshit___n/",
        options: { target: "_blank" },
      },
      socialName: "instagram",
    },
  ];

  return (
    <FlexRow {...props} style={{ gap: "10px", ...props.style }}>
      {socialIcons.map((el, index) => (
        <CustomButton key={keys[index]} {...socialIconsProps} {...el} />
      ))}
    </FlexRow>
  );
};

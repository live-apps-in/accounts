import { Link, LinkProps } from "react-router-dom";

export const CustomLink: React.FC<LinkProps> = (props) => {
  let link: any = props.to;
  if (typeof link === "object" && link.pathname) link = link.pathname;

  let isExternalLink = link && link.startsWith("http");

  return isExternalLink ? (
    <a href={link} {...props} />
  ) : (
    <Link {...props}>{props.children}</Link>
  );
};

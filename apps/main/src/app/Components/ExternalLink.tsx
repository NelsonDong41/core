import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon: React.ReactNode;
  className?: string;
};

const ExternalLink = ({
  children,
  icon,
  href,
  className,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={"flex items-center gap-1 ".concat(className || "")}
    >
      {icon}
      {children}
    </a>
  );
};

export default ExternalLink;

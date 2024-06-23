import classnames from "classnames";
import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  href?: string;
  isActive?: boolean;
};

export const HeaderItem = ({
  children,
  href = "#",
  isActive = false,
}: HeaderProps) => {
  return (
    <a
      href={href}
      className={classnames(
        "rounded-xl p-2 font-body text-text-secondary transition-colors hover:text-text-primary focus:outline focus:outline-2 focus:outline-text-primary",
        {
          "font-medium": isActive,
        },
      )}
    >
      {children}
    </a>
  );
};

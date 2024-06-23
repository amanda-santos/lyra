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
        "text-text-secondary font-body hover:text-text-primary transition-colors focus:outline focus:outline-text-primary focus:outline-2 rounded-xl p-2",
        {
          "font-medium": isActive,
        }
      )}
    >
      {children}
    </a>
  );
};

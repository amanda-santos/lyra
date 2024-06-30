import classnames from "classnames";
import { ComponentProps } from "react";

type NavbarItemProps = ComponentProps<"a"> & {
  isActive?: boolean;
};

export const NavbarItem = ({
  children,
  href = "#",
  isActive = false,
  ...props
}: NavbarItemProps) => {
  return (
    <a
      href={href}
      className={classnames(
        "rounded-xl p-2 font-body text-sm text-text-secondary transition-colors hover:text-text-primary focus:outline focus:outline-2 focus:outline-text-primary",
        {
          "font-medium": isActive,
        },
      )}
      {...props}
    >
      {children}
    </a>
  );
};

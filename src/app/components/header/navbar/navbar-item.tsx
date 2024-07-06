import { cn } from "@/app/utils/cn";
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
    <li
      className={cn(
        "rounded-xl p-2 font-body text-sm text-text-secondary transition-colors hover:cursor-pointer hover:text-text-primary focus:outline focus:outline-2 focus:outline-text-primary",
        {
          "font-medium": isActive,
        },
      )}
    >
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

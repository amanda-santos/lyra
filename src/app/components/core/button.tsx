import classNames from "classnames";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        `flex items-center gap-2 rounded-lg px-4 py-4 font-body text-sm font-medium text-text-primary transition-colors focus:outline-offset-4 focus:outline-text-primary md:px-6 md:text-base ${className}`,
        {
          "bg-primary-color-500 hover:bg-primary-color-400":
            variant === "primary",
          "bg-surface-secondary hover:bg-surface-tertiary":
            variant === "secondary",
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

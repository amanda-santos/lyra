import { cn } from "@/app/utils/cn";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "icon";
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `flex items-center gap-2 rounded-lg bg-surface-secondary font-body text-sm font-medium text-text-primary transition-colors hover:bg-surface-tertiary focus:outline-offset-4 focus:outline-text-primary md:text-base ${className}`,
        {
          "bg-primary-color-500 hover:bg-primary-color-400":
            variant === "primary",
          "px-4 py-4 md:px-6": variant !== "icon",
          "p-3": variant === "icon",
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

import type { CSSProperties } from "react";
import type { ButtonProps } from "./button.type";
import { buttonAligns, buttonSizes, buttonVariants } from "./button.style";

const Button = ({
  children,
  size = "m",
  variant = "primary",
  color = "primary",
  align = "stretch",
  icon,
  iconPosition = "left",
  fullWidth = false,
  disabled = false,
  loading = false,
  style,
  ...rest
}: ButtonProps) => {
  const styles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "opacity 0.2s, background 0.2s, color 0.2s",
    whiteSpace: "nowrap",
    ...buttonSizes[size],
    ...buttonVariants[variant],
    ...buttonAligns[align],
    ...(variant === "primary" && color !== "primary"
      ? { background: `var(--${color})` }
      : {}),
    ...(fullWidth ? { width: "100%" } : {}),
    ...(style ?? {}),
  };

  const iconNode = loading ? "…" : icon;

  return (
    <button
      className="button"
      style={styles}
      disabled={disabled || loading}
      {...rest}
    >
      {icon && iconPosition === "left" && <span>{iconNode}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{iconNode}</span>}
    </button>
  );
};

export default Button;
import type { ButtonProps } from "./button.type";
import styles from "./button.module.css";

const sizeClasses = {
  xs: styles.sizeXs,
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXl,
};

const variantClasses = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
  icon: styles.variantIcon,
};

const alignClasses = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
};

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
  const className = [
    styles.button,
    sizeClasses[size],
    variantClasses[variant],
    alignClasses[align],
    disabled ? styles.disabled : "",
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  const customBackground =
    variant === "primary" && color !== "primary"
      ? { background: `var(--color-${color})` }
      : null;

  const iconNode = loading ? "…" : icon;

  return (
    <button
      className={className}
      style={{ ...(customBackground ?? {}), ...(style ?? {}) }}
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
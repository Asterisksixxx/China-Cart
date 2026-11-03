import styles from "./input.module.css";
import type { InputProps } from "./input.type";

const alignClasses = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const radiusClasses = {
  s: styles.radiusS,
  m: styles.radiusM,
  l: styles.radiusL,
};

const borderClasses = {
  s: styles.borderS,
  m: styles.borderM,
  l: styles.borderL,
};

const colorClasses = {
  primary: styles.colorPrimary,
  neutral: styles.colorNeutral,
  background: styles.colorBackground,
  foreground: styles.colorForeground,
  danger: styles.colorDanger,
  warning: styles.colorWarning,
  success: styles.colorSuccess,
  contrast: styles.colorContrast,
  matter: styles.colorMatter,
};

const Input = ({
  align = "center",
  borderRadius = "s",
  color = "background",
  isDisabled = false,
  borderWidth = "s",
  placeholder = "",
}: InputProps) => {
  const className = [
    styles.input,
    radiusClasses[borderRadius],
    borderClasses[borderWidth],
    alignClasses[align],
    colorClasses[color],
    isDisabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <input className={className} placeholder={placeholder}></input>
    </>
  );
};
export default Input;

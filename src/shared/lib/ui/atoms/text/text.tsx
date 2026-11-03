import styles from "./text.module.css";
import type { TextProps } from "./text.type";

const sizeClasses = {
  xs: styles.sizeXs,
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXl,
};

const weightClasses = {
  regular: styles.weightRegular,
  semibold: styles.weightSemibold,
  bold: styles.weightBold,
};

const alignClasses = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
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

const Text = ({
  children,
  style,
  align = "start",
  size = "m",
  color = "foreground",
  weight = "regular",
}: TextProps) => {
  const className = [
    sizeClasses[size],
    weightClasses[weight],
    alignClasses[align],
    colorClasses[color],
  ].join(" ");

  return (
    <>
      <span className={className} style={style}>
        {children}
      </span>
    </>
  );
};
export default Text;
import ICONS from "@/shared/assets/icons";
import type { IconProps } from "./icon.type";
import styles from "./icon.module.css";

const Icon = ({
  name = "bag",
  color = "var(--color-foreground)",
  size = "m",
}: IconProps) => {
  const SVG = ICONS[name];
  const sizes = {
    xs: 10,
    s: 1,
    m: 24,
    l: 32,
    xl: 40,
  };

  return (
    <span className={styles.wrapper} style={{ color }}>
      <SVG size={sizes[size]}></SVG>
    </span>
  );
};
export default Icon;
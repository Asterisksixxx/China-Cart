import styles from "./image.module.css";
import type { ImageProps } from "./image.type";

const sizeClasses = {
  xs: styles.sizeXs,
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXl,
};

const alignClasses = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const Image = ({
  align = "center",
  size = "m",
  alt = "",
  source = "",
}: ImageProps) => {
  const className = [sizeClasses[size], alignClasses[align]].join(" ");

  return (
    <>
      <img src={source} className={className} alt={alt}></img>
    </>
  );
};
export default Image;
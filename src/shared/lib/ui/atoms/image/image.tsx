import { ImageAligns, ImageSizes } from "./image.style";
import type { ImageProps } from "./image.type";

const Image = ({
  align = "center",
  size = "m",
  alt = "",
  source = "",
}: ImageProps) => {
  const styles = {
    ...ImageAligns[align],
    ...ImageSizes[size],
  };
  return (
    <>
      <img src={source} style={styles} alt={alt}></img>
    </>
  );
};
export default Image;

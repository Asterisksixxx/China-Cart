import type { CSSProperties } from "react";
import type { ImageAlign, ImageSize } from "./image.type";

const ImageSizes: Record<ImageSize, CSSProperties> = {
  xs: {
    aspectRatio: "auto",
    width: "30px",
  },
  s: {
    aspectRatio: "auto",
    width: "45px",
  },
  m: {
    aspectRatio: "auto",
    width: "90px",
  },
  l: {
    aspectRatio: "auto",
    width: "200px",
  },
  xl: {
    aspectRatio: "auto",
    width: "500px",
  },
};

const ImageAligns: Record<ImageAlign, CSSProperties> = {
  start: { alignSelf: "flex-start" },
  center: { alignSelf: "center" },
  end: { alignSelf: "flex-end" },
};

export { ImageSizes, ImageAligns };

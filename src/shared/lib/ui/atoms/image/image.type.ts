type ImageSize = "xl" | "l" | "m" | "s" | "xs";

type ImageAlign = "start" | "center" | "end";

type ImageProps = {
  source?: string;
  size?: ImageSize;
  align?: ImageAlign;
  alt?: string;
};
export type { ImageProps, ImageAlign, ImageSize };

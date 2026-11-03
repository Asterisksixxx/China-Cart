import type { CSSProperties, ReactNode } from "react";
import type { ColorVariant } from "../../../types/theme";

type TextSize = "xl" | "l" | "m" | "s" | "xs";

type TextWeight = "regular" | "semibold" | "bold";

type TextAlign = "start" | "center" | "end";

type TextProps = {
  style?: CSSProperties;
  children?: ReactNode;
  size?: TextSize;
  color?: ColorVariant;
  weight?: TextWeight;
  align?: TextAlign;
};

export type { TextProps, TextSize, TextWeight, TextAlign };

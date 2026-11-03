import type { ColorVariant } from "../../../types/theme";

type InputAlign = "start" | "center" | "end";

type InputBorderRadius = "s" | "m" | "l";

type InputBorderWidth = "s" | "m" | "l";

type InputProps = {
  color?: ColorVariant;
  isDisabled?: boolean;
  align?: InputAlign;
  borderRadius?: InputBorderRadius;
  borderWidth?: InputBorderWidth;
  placeholder?: string;
};
export type { InputProps, InputAlign, InputBorderRadius, InputBorderWidth };

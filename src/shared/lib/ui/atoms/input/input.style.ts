import type { CSSProperties } from "react";
import type {
  InputAlign,
  InputBorderRadius,
  InputBorderWidth,
} from "./input.type";

const InputAligns: Record<InputAlign, CSSProperties> = {
  start: { alignSelf: "flex-start" },
  center: { alignSelf: "center" },
  end: { alignSelf: "flex-end" },
};

const InputBorderRadiuses: Record<InputBorderRadius, CSSProperties> = {
  s: {
    borderRadius: 8,
  },
  m: {
    borderRadius: 16,
  },
  l: {
    borderRadius: 32,
  },
};

const InputBorderWidths: Record<InputBorderWidth, CSSProperties> = {
  s: {
    borderWidth: 1,
  },
  m: {
    borderWidth: 2,
  },
  l: {
    borderWidth: 3,
  },
};
export { InputAligns, InputBorderRadiuses, InputBorderWidths };

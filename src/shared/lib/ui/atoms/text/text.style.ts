import type { CSSProperties } from "react";
import type { TextAlign, TextSize, TextWeight } from "./text.type";

const textSizes: Record<TextSize, CSSProperties> = {
  xs: {
    fontSize: "8px",
  },
  s: {
    fontSize: "12px",
  },
  m: {
    fontSize: "16px",
  },
  l: {
    fontSize: "20px",
  },
  xl: {
    fontSize: "24px",
  },
};

const textWeights: Record<TextWeight, CSSProperties> = {
  regular: {
    fontWeight: 400,
  },
  semibold: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
};

const textAligns: Record<TextAlign, CSSProperties> = {
  start: { textAlign: "start" },
  center: { textAlign: "center" },
  end: { textAlign: "end" },
};

export { textSizes, textWeights, textAligns };

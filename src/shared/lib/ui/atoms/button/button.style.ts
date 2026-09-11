import type { CSSProperties } from "react";
import type { ButtonAlign, ButtonSize, ButtonVariant } from "./button.type";

const buttonSizes: Record<ButtonSize, CSSProperties> = {
  xs: {
    padding: "4px 10px",
    fontSize: "10px",
    borderRadius: "4px",
    gap: "4px",
  },
  s: {
    padding: "6px 14px",
    fontSize: "12px",
    borderRadius: "6px",
    gap: "6px",
  },
  m: {
    padding: "8px 18px",
    fontSize: "14px",
    borderRadius: "8px",
    gap: "8px",
  },
  l: {
    padding: "10px 22px",
    fontSize: "16px",
    borderRadius: "10px",
    gap: "10px",
  },
  xl: {
    padding: "14px 28px",
    fontSize: "18px",
    borderRadius: "12px",
    gap: "12px",
  },
};

const buttonVariants: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "var(--primary)",
    color: "var(--contrast)",
    border: "1px solid transparent",
  },
  secondary: {
    background: "var(--matter)",
    color: "var(--foreground)",
    border: "1px solid var(--border)",
  },
  icon: {
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid transparent",
    padding: "6px",
  },
};

const buttonAligns: Record<ButtonAlign, CSSProperties> = {
  start: { alignSelf: "flex-start" },
  center: { alignSelf: "center" },
  end: { alignSelf: "flex-end" },
  stretch: { alignSelf: "stretch" },
};

export { buttonSizes, buttonVariants, buttonAligns };
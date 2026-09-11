import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ColorVariant } from "../../../hooks";

type ButtonSize = "xs" | "s" | "m" | "l" | "xl";

type ButtonVariant = "primary" | "secondary" | "icon";

type ButtonAlign = "start" | "center" | "end" | "stretch";

type ButtonProps = {
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ColorVariant;
  align?: ButtonAlign;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export type { ButtonProps, ButtonSize, ButtonVariant, ButtonAlign };

type IconsPull =
  | "bag"
  | "grip"
  | "link"
  | "moon"
  | "refresh"
  | "search"
  | "sun"
  | "trash";

type IconSize = "xs" | "s" | "m" | "l" | "xl";

type IconProps = {
  name: IconsPull;
  size?: IconSize;
  color?: string;
};
export type { IconProps, IconsPull, IconSize };

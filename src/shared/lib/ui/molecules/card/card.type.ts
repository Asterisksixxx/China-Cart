import type { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  itemName?: string;
  itemDescription?: string;
  itemCost?: string;
  itemImage?: string;
  itemReference?: string;
};

export type { CardProps };

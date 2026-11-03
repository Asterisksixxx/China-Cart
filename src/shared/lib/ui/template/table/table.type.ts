import type { ReactNode } from "react";

type TableVariant = "all" | "forOrder";

type TableProps = {
  title: string;
  description: string;
  counter: number;
  footer: ReactNode;
};
export type { TableProps, TableVariant };

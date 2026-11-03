type ValuteSymbolProps = "USD" | "RUB" | "BYN";

type PreorderProps = {
  title: string;
  value: number;
  valute: ValuteSymbolProps;
  count: number;
};
export type { PreorderProps, ValuteSymbolProps };

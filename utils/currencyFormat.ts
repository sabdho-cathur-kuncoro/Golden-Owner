export const currencyFormat = (money: number = 0) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    currencyDisplay: "symbol",
  }).format(money);
};

export const compactCurrency = (value: number): string => {
  const compact = (num: number, decimals: number): string => {
    const factor = Math.pow(10, decimals);
    const truncated = Math.trunc(num * factor) / factor;
    return parseFloat(truncated.toFixed(decimals)).toString();
  };

  if (value >= 1_000_000_000) return `Rp ${compact(value / 1_000_000_000, 2)} M`;
  if (value >= 1_000_000) return `Rp ${compact(value / 1_000_000, 2)} JT`;
  if (value >= 1_000) return `Rp ${compact(value / 1_000, 0)} RB`;
  return `Rp ${value.toLocaleString("id-ID")}`;
};

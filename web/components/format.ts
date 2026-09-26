export const usd = new Intl.NumberFormat("es-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
export const pct = (n: number) => `${Math.round(n)}%`;

export function formatLongNumbers(num: number): string {
  if (num < 1000) return num.toString(); // less than 1k
  if (num < 1_000_000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k"; // thousand
  if (num < 1_000_000_000) return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M"; // million
  if (num < 1_000_000_000_000) return (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + "B"; // billion
  if (num < 1_000_000_000_000_000) return (num / 1_000_000_000_000).toFixed(num % 1_000_000_000_000 === 0 ? 0 : 1) + "T"; // trillion
  return (num / 1_000_000_000_000_000).toFixed(num % 1_000_000_000_000_000 === 0 ? 0 : 1) + "Q"; // quadrillion+
}
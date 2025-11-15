export function splitArrayIntoTwo<T>(arr: T[]): [T[], T[]] {
  const half = Math.ceil(arr.length / 2); 
  const first = arr.slice(0, half);
  const second = arr.slice(half);
  return [first, second];
}
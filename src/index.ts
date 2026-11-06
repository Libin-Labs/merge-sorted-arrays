export function mergeSorted<T>(
  left: readonly T[],
  right: readonly T[],
  compare: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
): T[] {
  if (!Array.isArray(left) || !Array.isArray(right) || typeof compare !== 'function')
    throw new TypeError('Expected arrays and comparator');
  const out: T[] = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i]!, right[j]!) <= 0) out.push(left[i++]!);
    else out.push(right[j++]!);
  }
  return out.concat(left.slice(i), right.slice(j));
}

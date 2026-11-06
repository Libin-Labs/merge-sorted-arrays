import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('merges interleaved arrays', () => {
  assert.deepEqual(api.mergeSorted([1, 3, 5], [2, 4]), [1, 2, 3, 4, 5]);
});
test('handles empty left input', () => {
  assert.deepEqual(api.mergeSorted([], [1, 2]), [1, 2]);
});
test('handles empty right input', () => {
  assert.deepEqual(api.mergeSorted([1, 2], []), [1, 2]);
});
test('takes left equal values first', () => {
  const result = api.mergeSorted([{ v: 1, id: 'L' }], [{ v: 1, id: 'R' }], (a, b) => a.v - b.v);
  assert.deepEqual(
    result.map((x) => x.id),
    ['L', 'R'],
  );
});
test('supports descending comparator', () => {
  assert.deepEqual(
    api.mergeSorted([5, 3], [4, 2], (a, b) => b - a),
    [5, 4, 3, 2],
  );
});
test('does not mutate inputs', () => {
  const a = [1, 3],
    b = [2];
  api.mergeSorted(a, b);
  assert.deepEqual(a, [1, 3]);
  assert.deepEqual(b, [2]);
});

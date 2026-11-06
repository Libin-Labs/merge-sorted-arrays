import * as api from '@lp-labs/merge-sorted-arrays';
import { mergeSorted } from '@lp-labs/merge-sorted-arrays';
console.log(mergeSorted([1, 3, 5], [2, 4]));
// @ts-expect-error invalid argument must be rejected by declarations
api.mergeSorted([1], [2], 'compare');

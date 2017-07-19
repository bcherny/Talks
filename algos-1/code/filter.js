/// solution

function filter(array) {
  // ...
}

/// tests

import { test } from 'ava'

test(t => t.deepEqual(
  filter([1, 2, 3, 4], function(n) { return n > 0 }),
  [1, 2, 3, 4]
))
test(t => t.deepEqual(
  filter([1, 2, 3, 4], function(n) { return n < 3 }),
  [1, 2]
))

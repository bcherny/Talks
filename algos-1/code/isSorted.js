/// solution

function isSorted(array) {
  // ...
}

/// tests

import { test } from 'ava'

test(t => t.is(isSorted([]), true))
test(t => t.is(isSorted([-9, -5, 0, 3, 9]), true))
test(t => t.is(isSorted([3, 9, -3, 10]), false))

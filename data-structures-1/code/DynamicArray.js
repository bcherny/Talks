/// code

function array(initialSize) {
  return {
    sizeAvailable: initialSize,
    sizeUsed: 0,
    data: new Array(initialSize)
  }
}

function get(array, index) {
  return array.data[index]
}

function set(array, index, value) {
  while (index > array.sizeAvailable) {
    resize(array)
  }
  array.data[index] = value
}

function push(array, value) {
  if (array.sizeUsed === array.sizeAvailable) {
    resize(array)
  }
  array.data[array.sizeUsed++] = value
}

function resize(array) {
  array.sizeAvailable *= 2

  // keep a reference to the old data.
  // (it will be garbage collected once this resize() function returns.)
  let data = array.data

  // re-initialize data to a blank array
  array.data = new Array(array.sizeAvailable)

  // copy data from the old array to the new, larger one
  for (let i = 0; i < data.length; i++) {
    array.data[i] = data[i]
  }
}

function toString(array) {
  return '(' + array.data.filter(_ => _ !== undefined).join(', ') + ')'
}

/// tests

import test from 'ava'

let a = array(3)
push(a, 1)
push(a, 2)
push(a, 3)

test('array', t => t.is(toString(a), '(1, 2, 3)'))
test('get', t => t.is(get(a, 1), 2))
test('set', t => {
  set(a, 1, 4)
  t.is(toString(a), '(1, 4, 3)')
})
test('push', t => {
  t.is(a.sizeAvailable, 3)
  t.is(a.sizeUsed, 3)
  push(a, 5)
  t.is(a.sizeAvailable, 6)
  t.is(a.sizeUsed, 4)
  t.is(toString(a), '(1, 4, 3, 5)')
})

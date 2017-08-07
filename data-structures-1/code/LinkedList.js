/// code

function cons(value, next) {
  return {
    value: value,
    next: next
  }
}

function toArray(list) {
  switch (list.next) {
    case null: return [list.value]
    default: return [list.value].concat(toArray(list.next))
  }
}

function toString(list) {
  return '(' + toArray(list).join(', ') + ')'
}

function head(list) {
  return list
}

function last(list) {
  while (list.next !== null) {
    list = list.next
  }
  return list
}

function get(list, index) {
  while (list.next !== null && index > 0) {
    list = list.next
    index--
  }
  if (index === 0) {
    return list
  }
}

/** note: this mutates list! */
function set(list, index, value) {
  get(list, index).value = value
}

/** note: this mutates list! */
function push(list, value) {
  last(list).next = cons(value, null)
}

function forEach(list, fn) {
  while (list !== null) {
    fn(list.value)
    list = list.next
  }
}

function unshift(list, value) {
  return cons(value, list)
}

function indexOf(list, value, index = 0) {
  if (list.value === value) {
    return index
  }
  if (list.next === null) {
    return -1
  }
  return indexOf(list.next, value, index + 1)
}

/** note: this mutates list! */
function concat(list1, list2) {
  last(list1).next = list2
}

function find(list, value) {
  if (list.value === value) {
    return list
  }
  if (list.next === null) {
    return undefined
  }
  return find(list.next, value)
}

function parent(list, item) {
  switch (list.next) {
    case null: return undefined
    case item: return list
    default: return parent(list.next, item)
  }
}

/** note: this mutates list! */
function remove(list, value) {

  let item = find(list, value)
  if (item === null) {
    return list
  }

  let prev = parent(list, item)

  // case 1
  if (prev === undefined) {
    return item.next
  }

  // case 2 & 3
  prev.next = item.next
  return list
}

/// tests

import test from 'ava'

let a = cons(17, cons(9, cons(36, cons(-3, null))))
let b = cons(30, null)
let c = cons(20, b)

test('cons', t => t.is(toString(a), '(17, 9, 36, -3)'))
test('head', t => t.is(head(a).value, 17))
test('last', t => t.is(last(a).value, -3))
test('get', t => {
  t.is(get(a, 2).value, 36)
  t.is(get(a, 10), undefined)
})
test('set', t => {
  set(a, 2, 35)
  t.is(get(a, 2).value, 35)
  set(a, 2, 36)
  t.is(get(a, 2).value, 36)
})
test('push', t => {
  push(a, 10)
  t.is(toString(a), '(17, 9, 36, -3, 10)')
})
test('unshift', t =>
  t.is(toString(unshift(a, 8)), '(8, 17, 9, 36, -3, 10)')
)
test('forEach', t => {
  let string = ''
  forEach(a, v => { string += v + ',' })
  t.is(string, '17,9,36,-3,10,')
})
test('indexOf', t => t.is(indexOf(a, 36), 2))
test('concat', t => {
  concat(a, c)
  t.is(toString(a), '(17, 9, 36, -3, 10, 20, 30)')
})
test('find', t => t.is(find(a, 20), c))
test('parent', t => t.is(parent(a, b), c))

let d = cons(1, cons(2, cons(3, cons(4, null))))
let e = remove(d, 1)
test('remove (case 1)', t => t.is(toString(e), '(2, 3, 4)'))
test('remove (case 2)', t => {
  remove(e, 3)
  t.is(toString(e), '(2, 4)')
})
test('remove (case 3)', t => {
  t.is(toString(remove(e, 4)), '(2)')
})

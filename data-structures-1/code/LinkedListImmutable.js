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

function set(list, index, value) {
  let newList = copyWhile(list, function(item, i) {
    return i < index
  })

  // Design note: We only copy as much as necessary, rather than
  // copy the whole list. This means copying up to the (index - 1)st
  // item.
  //
  // Eg. if the list is A -> B -> C -> D and we set C to E, then
  // we (1) copy A -> B, (2) push E to the result, and (3) concat
  // the rest of the list. This means we reused D between the input
  // list and the returned list. The earlier in the list the removed
  // item is, the more we can reuse (so we don't have to spend time
  // & space copying it).
  return concat(
    push(newList, value),
    get(list, index + 1)
  )
}

function copyWhile(list, fn, index = 0) {
  if (fn(list, index) === false) {
    return null
  }
  if (list.next === null) {
    return cons(list.value, null)
  }
  return cons(list.value, copyWhile(list.next, fn, index + 1))
}

function copy(list) {
  return copyWhile(list, function() {
    return true
  })
}

function push(list, value) {
  let newList = copy(list)
  last(newList).next = cons(value, null)
  return newList
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

function concat(list1, list2) {
  let newList = copy(list1)
  last(newList).next = list2
  return newList
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

  // Design note: We only copy as much as necessary for Case 2,
  // rather than copy the whole list.
  //
  // Eg. if the list is A -> B -> C -> D and we remove C, then
  // we only copy A -> B, and then point B's next to D. That
  // means we reused D between the input list and the returned
  // list. The earlier in the list the removed item is, the more we
  // can reuse (so we don't have to spend time & space copying it).
  let newList = copyWhile(list, function(i) {
    return i !== item
  })

  // case 3
  if (item.next === null) {
    return newList
  }

  // case 2
  newList.next = item.next
  return newList
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
  t.is(toString(set(a, 2, 35)), '(17, 9, 35, -3)')
  t.not(a, set(a, 2, 35))
})
test('push', t => {
  t.is(toString(push(a, 10)), '(17, 9, 36, -3, 10)')
  t.not(a, push(a, 10))
})
test('unshift', t => {
  t.is(toString(unshift(a, 8)), '(8, 17, 9, 36, -3)')
  t.not(a, unshift(a, 8))
})
test('forEach', t => {
  let string = ''
  forEach(a, v => { string += v + ',' })
  t.is(string, '17,9,36,-3,')
})
test('indexOf', t => t.is(indexOf(a, 36), 2))
test('concat', t => {
  t.is(toString(concat(a, c)), '(17, 9, 36, -3, 20, 30)')
  t.not(a, concat(a, c))
})
test('find', t => t.is(find(c, 30), b))
test('parent', t => t.is(parent(c, b), c))
test('remove (case 1)', t => {
  t.is(toString(remove(a, 17)), '(9, 36, -3)')
  t.not(a, remove(a, 17))
})
test('remove (case 2)', t => {
  t.is(toString(remove(a, 9)), '(17, 36, -3)')
  t.not(a, remove(a, 9))
})
test('remove (case 3)', t => {
  t.is(toString(remove(a, -3)), '(17, 9, 36)')
  t.not(a, remove(a, -3))
})

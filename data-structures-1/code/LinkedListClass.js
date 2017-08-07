/// code

class Cons {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
  toArray() {
    switch (this.next) {
      case null: return [this.value]
      default: return [this.value].concat(this.next.toArray())
    }
  }
  toString() {
    return '(' + this.toArray().join(', ') + ')'
  }
  head() {
    return this
  }
  last() {
    if (this.next === null) {
      return this
    }
    return this.next.last()
  }
  /** note: this mutates list! */
  push(value) {
    this.last().next = new Cons(value, null)
  }

  forEach(fn) {
    fn(this.value)
    if (this.next !== null) {
      this.next.forEach(fn)
    }
  }

  unshift(value) {
    return new Cons(value, this)
  }

  indexOf(value, index = 0) {
    if (this.value === value) {
      return index
    }
    if (this.next === null) {
      return -1
    }
    return this.next.indexOf(value, index + 1)
  }

  /** note: this mutates list! */
  concat(list) {
    this.last().next = list
  }

  find(value) {
    if (this.value === value) {
      return this
    }
    if (this.next === null) {
      return undefined
    }
    return this.next.find(value)
  }

  parent(item) {
    switch (this.next) {
      case null: return undefined
      case item: return this
      default: return this.next.parent(item)
    }
  }

  /** note: this mutates list! */
  remove(value) {

    let item = this.find(value)
    if (item === null) {
      return this
    }

    let prev = this.parent(item)

    // case 1
    if (prev === undefined) {
      return item.next
    }

    // case 2 & 3
    prev.next = item.next
    return this
  }
}

/// tests

import test from 'ava'

let a = new Cons(17, new Cons(9, new Cons(36, new Cons(-3, null))))
let b = new Cons(30, null)
let c = new Cons(20, b)

test('Cons', t => t.is(a.toString(), '(17, 9, 36, -3)'))
test('head', t => t.is(a.head().value, 17))
test('last', t => t.is(a.last().value, -3))
test('push', t => {
  a.push(10)
  t.is(a.toString(), '(17, 9, 36, -3, 10)')
})
test('unshift', t =>
  t.is(a.unshift(8).toString(), '(8, 17, 9, 36, -3, 10)')
)
test('forEach', t => {
  let string = ''
  a.forEach(v => { string += v + ',' })
  t.is(string, '17,9,36,-3,10,')
})
test('indexOf', t => t.is(a.indexOf(36), 2))
test('concat', t => {
  a.concat(c)
  t.is(a.toString(), '(17, 9, 36, -3, 10, 20, 30)')
})
test('find', t => t.is(a.find(20), c))
test('parent', t => t.is(a.parent(b), c))

let d = new Cons(1, new Cons(2, new Cons(3, new Cons(4, null))))
let e = d.remove(1)
test('remove (case 1)', t => t.is(e.toString(), '(2, 3, 4)'))
test('remove (case 2)', t => {
  e.remove(3)
  t.is(e.toString(), '(2, 4)')
})
test('remove (case 3)', t => {
  t.is(e.remove(4).toString(), '(2)')
})

/// code

class DynamicArray {

  constructor(sizeInitial) {
    this.sizeAvailable = sizeInitial
    this.sizeUsed = 0
    this.data = new Array(this.sizeAvailable)
  }

  get(index) {
    return this.data[index]
  }

  /** note: this mutates the list! */
  set(index, value) {
    while (index > this.sizeAvailable) {
      this.resize()
    }
    this.data[index] = value
  }

  /** note: this mutates the list! */
  push(value) {
    if (this.sizeUsed === this.sizeAvailable) {
      this.resize()
    }
    this.data[this.sizeUsed++] = value
    return this // allow chaining
  }

  forEach(fn) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === undefined) {
        continue
      }
      fn(this.data[i])
    }
  }

  indexOf(value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === value) {
        return i
      }
    }
    return -1
  }

  /** note: this mutates the list! */
  remove(index) {
    for (let i = index; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.sizeUsed -= 1
  }

  /** note: this mutates the list! */
  unshift(value) {
    if (this.sizeUsed === this.sizeAvailable) {
      this.resize()
    }
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = value
    this.sizeUsed++
    return this // allow chaining
  }

  /** note: this mutates the list! */
  concat(list) {
    list.forEach(item => this.push(item))
  }

  resize() {
    this.sizeAvailable *= 2

    // keep a reference to the old data.
    // (it will be garbage collected once this resize() function returns.)
    let data = this.data

    // re-initialize data to a blank array
    this.data = new Array(this.sizeAvailable)

    // copy data from the old array to the new, larger one
    for (let i = 0; i < data.length; i++) {
      this.data[i] = data[i]
    }
  }

  toString() {
    return '(' + this.data.filter(_ => _ !== undefined).join(', ') + ')'
  }
}

/// tests

import test from 'ava'

let a = new DynamicArray(3)
a.push(1).push(2).push(3)

test('DynamicArray', t => t.is(a.toString(), '(1, 2, 3)'))
test('get', t => t.is(a.get(1), 2))
test('set', t => {
  a.set(1, 4)
  t.is(a.toString(), '(1, 4, 3)')
})
test('push', t => {
  t.is(a.sizeAvailable, 3)
  t.is(a.sizeUsed, 3)
  a.push(5)
  t.is(a.sizeAvailable, 6)
  t.is(a.sizeUsed, 4)
  t.is(a.toString(), '(1, 4, 3, 5)')
})
test('forEach', t => {
  let string = ''
  a.forEach(_ => { string += _ + ',' })
  t.is(string, '1,4,3,5,')
})
test('indexOf', t => t.is(a.indexOf(3), 2))
test('remove', t => {
  t.is(a.sizeUsed, 4)
  a.remove(1)
  t.is(a.toString(), '(1, 3, 5)')
  t.is(a.sizeUsed, 3)
})
test('unshift', t => {
  a.unshift(10)
  t.is(a.toString(), '(10, 1, 3, 5)')
})
test('concat', t => {
  let b = new DynamicArray(3)
  b.push(20).push(30).push(40)
  a.concat(b)
  t.is(a.toString(), '(10, 1, 3, 5, 20, 30, 40)')
})

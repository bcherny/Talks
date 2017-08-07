/// code

class DynamicArray {
  constructor(initialSize) {
    this.sizeAvailable = initialSize
    this.sizeUsed = 0
    this.data = new Array(this.sizeAvailable)
  }
  get(index) {
    return this.data[index]
  }
  set(index, value) {
    while (index > this.sizeAvailable) {
      this.resize()
    }
    this.data[index] = value
  }
  push(value) {
    if (this.sizeUsed === this.sizeAvailable) {
      this.resize()
    }
    this.data[this.sizeUsed++] = value
    return this // allow chaining
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
